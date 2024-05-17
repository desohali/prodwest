import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { Layout as AuthLayout } from '../../src/layouts/auth/layout';
import { signIn, fetchUserAttributes, resendSignUpCode, confirmSignUp, updatePassword, resetPassword, confirmSignIn, updateUserAttributes, confirmResetPassword } from 'aws-amplify/auth';
import Swal from 'sweetalert2';
import { setUser } from '../../src/features/userSlice';
import { useDispatch } from 'react-redux';
import React from 'react';
import { LoadingButton } from '@mui/lab';
import { generateClient } from 'aws-amplify/api';
import { getBuyer } from '@/src/graphql/queries';

const client = generateClient();
var isAuth = false;

const stepSwal = async (email: string): Promise<any> => {
  return await Swal.fire({
    title: "We Emailed You",
    text: `Your code is on the way. To log in, enter the code we emailed to ${email ? email : "***@***"}. It may take a minute to arrive.`,
    inputLabel: 'Confirmation Code',
    input: 'text',
    inputValue: '',
    inputAttributes: {
      /* maxlength: 6, */
      /* autofocus: true, */
      autocapitalize: "off",
      id: "inputCodeCognito",
      placeholder: "Enter you code"
    },
    allowOutsideClick: false,
    confirmButtonText: 'Confirm',
    showCancelButton: false,
    focusConfirm: true,
    footer: '<button id="miBotonAdicional" class="btn-resendSignUpCode">Resend Code</button>',
    didOpen: () => {
      const input: any = Swal.getPopup()?.querySelector('#inputCodeCognito');
      input.setAttribute('autofocus', 'true');
      input.focus();

      const miBotonAdicional: any = document.getElementById('miBotonAdicional');
      miBotonAdicional.addEventListener('click', async () => {
        await resendSignUpCode({ username: email });
        /* Swal.fire({
          position: "top-end",
          icon: "success",
          title: "We Emailed You",
          text: `Your code is on the way. To log in, enter the code we emailed to ${email ? email : "***@***"}. It may take a minute to arrive.`,
          showConfirmButton: false,
          timer: 2000
        }); */
      });
    },
    inputValidator: (value) => {
      if (!value || !/^[0-9]{6}$/.test(value.trim())) {
        return 'Please enter a valid 6-digit verification code.';
      }
    },
  });
};


const Page = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const [method, setMethod] = React.useState('email');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        const { nextStep } = await signIn({
          username: values?.email,
          password: values?.password
        });
        console.log('nextStep', nextStep)

        if (nextStep.signInStep == "CONFIRM_SIGN_UP") {
          const { isConfirmed, value: code } = await stepSwal(values?.email);
          if (isConfirmed) {
            const { isSignUpComplete, nextStep: nextStepConfirm } = await confirmSignUp({
              username: values?.email,
              confirmationCode: code
            });

            if (nextStepConfirm?.signUpStep == "DONE") {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Signed in successfully",
                showConfirmButton: false,
                timer: 2000
              });

              if (!isAuth) {
                await formik.submitForm();
              }
            } else {
              Swal.fire('Invalid verification code provided, please try again.', '', 'error');
            }
          }
        } else if (nextStep.signInStep == "DONE") {
          const userAttributes = await fetchUserAttributes();

          const buyer = await client.graphql({
            query: getBuyer,
            variables: { id: userAttributes?.sub || "" }
          });

          dispatch(setUser({ ...userAttributes, buyer: buyer.data.getBuyer }));
          if (["vestid123"].includes(userAttributes?.family_name ?? "")) {
            router.push('/auth/changePassword');
          } else {
            router.push('/');
          }

        } else if (nextStep.signInStep == "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED") {
          localStorage.setItem("authTemp", JSON.stringify(values));
          router.push("/auth/admin");

        } else if (nextStep.signInStep == "RESET_PASSWORD") {
          const { nextStep } = await resetPassword({ username: values?.email });
          switch (nextStep.resetPasswordStep) {
            case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
              const codeDeliveryDetails = nextStep.codeDeliveryDetails;
              console.log(
                `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
              );
              // Collect the confirmation code from the user and pass to confirmResetPassword.

              const { isConfirmed, value: code } = await stepSwal(values?.email);
              if (isConfirmed) {
                await confirmResetPassword({
                  username: values?.email,
                  confirmationCode: code,
                  newPassword: "vestid123new"
                });
                router.push('/');
              }

              break;
            case 'DONE':
              router.push('/');
              break;
          }

        }

        else {
          Swal.fire('If an invalid account, please try again.', '', 'error');
        }
      } catch (err: any) {
        console.log('err', err);
        Swal.fire({
          title: "Error",
          text: err.toString(),
          icon: "error",
          confirmButtonText: 'Accept',
        });
        /* helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false); */
      }
    }
  });

  const handleMethodChange = React.useCallback(
    (event: any, value: any) => {
      setMethod(value);
    },
    []
  );


  return (
    <>
      <Head>
        <title>
          Login | Vest ID
        </title>
      </Head>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Login
              </Typography>
              {/* <Typography
                color="text.secondary"
                variant="body2"
              >
                Don&apos;t have an account?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography> */}
            </Stack>
            <Tabs
              onChange={handleMethodChange}
              sx={{ mb: 3 }}
              value={method}
            >
              <Tab
                label="Email"
                value="email"
              />
              {/* <Tab
                label="Phone Number"
                value="phoneNumber"
              /> */}
            </Tabs>
            {method === 'email' && (
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Stack>
                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )}
                <LoadingButton
                  loading={formik.isSubmitting}
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </LoadingButton>
              </form>
            )}
            {method === 'phoneNumber' && (
              <div>
                <Typography
                  sx={{ mb: 1 }}
                  variant="h6"
                >
                  Not available in the demo
                </Typography>
                <Typography color="text.secondary">
                  To prevent unnecessary costs we disabled this feature in the demo.
                </Typography>
              </div>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page: any) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;

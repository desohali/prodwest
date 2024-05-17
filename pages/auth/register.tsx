import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { Layout as AuthLayout } from '../../src/layouts/auth/layout';
import { signUp, confirmSignUp, resendSignUpCode } from 'aws-amplify/auth';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
/* import * as API from 'aws-amplify/api'; */

const stepSwal = async (email: string): Promise<any> => {
  return await Swal.fire({
    title: "We Emailed You",
    text: "Your code is on the way. To log in, enter the code we emailed to ***@***. It may take a minute to arrive.",
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
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      name: Yup
        .string()
        .max(255)
        .required('Name is required'),
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
        const { isSignUpComplete, userId, nextStep } = await signUp({
          username: values?.email,
          password: values?.password,
          options: {
            userAttributes: {
              name: values?.name
            },
            // optional
            // autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
          }
        });

        if (nextStep?.signUpStep == "CONFIRM_SIGN_UP") {
          const { isConfirmed, value: code } = await stepSwal(values?.email);
          if (isConfirmed) {
            const { isSignUpComplete, nextStep } = await confirmSignUp({
              username: values?.email,
              confirmationCode: code
            });

            if (nextStep?.signUpStep == "DONE") {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              });

              Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
              });

              setTimeout(() => {
                router.push('/auth/login');
              }, 1000);
            } else {
              Swal.fire('Invalid verification code provided, please try again.', '', 'error')
            }
          }
        } else {

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

  return null;

  return (
    <>
      <Head>
        <title>
          Register | Vest ID
        </title>
      </Head>
      <Box
        sx={{
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
                Register
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Already have an account?
                &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/login"
                  underline="hover"
                  variant="subtitle2"
                >
                  Log in
                </Link>
              </Typography>
            </Stack>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  label="Name"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
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
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
            </form>
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

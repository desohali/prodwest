import { AccountSettings, Authenticator, Heading, Text, WithAuthenticatorProps, useAuthenticator, useTheme, withAuthenticator } from '@aws-amplify/ui-react'
import { useRouter } from 'next/navigation';
import '@aws-amplify/ui-react/styles.css';
import React from 'react';

import Loading from '../../src/components/loading';
import { updateUserAttributes } from 'aws-amplify/auth';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/src/features/userSlice';
import { Avatar, Card, CardContent, CardHeader, Grid } from '@mui/material';

const ChangePassword = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector((state: any) => state.user);

  const handleSuccess = async () => {
    await updateUserAttributes({
      userAttributes: {
        family_name: "",
      }
    });

    dispatch(setUser({ ...user, family_name: "" }));

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Password is successfully changed",
      showConfirmButton: false,
      timer: 2000
    });

    setTimeout(() => {
      router.push("/");
    }, 2000);

  }


  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={4} />
      <Grid item xs={12} md={4} lg={4}>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                {user?.name.charAt(0).toUpperCase()}
              </Avatar>
            }
            title={user?.name}
            subheader="For the security of your account, we recommend that you update your password, thank you."
          />
          <CardContent>
            <AccountSettings.ChangePassword onSuccess={handleSuccess} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} lg={4} />
    </Grid>
  );
}

export default ChangePassword;

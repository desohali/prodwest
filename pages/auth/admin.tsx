import { AccountSettings, Authenticator, Heading, Text, WithAuthenticatorProps, useAuthenticator, useTheme, withAuthenticator } from '@aws-amplify/ui-react'
import { useRouter } from 'next/navigation';
import '@aws-amplify/ui-react/styles.css';
import React from 'react';

import Loading from '../../src/components/loading';

const Admin = () => {

  const router = useRouter();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (user) {
      localStorage.removeItem("authTemp");
      router.push("/");
    }
  }, [user]);

  React.useEffect(() => {
    let authTemp: any = localStorage.getItem("authTemp");
    if (authTemp) {
      authTemp = JSON.parse(authTemp);
    }
    setTimeout(() => {
      if (authTemp?.email && authTemp?.password) {
        const username = document.querySelector('[name="username"]') as HTMLInputElement;
        const password = document.querySelector('[name="password"]') as HTMLInputElement;

        username.value = authTemp?.email;
        password.value = authTemp?.password;

        const submitButton: any = document.querySelector('button[type="submit"]');

        // Simular un clic en el botón submit
        submitButton.click();
        setLoading(false);
      }
    }, 1500);
  }, []);


  return (
    <div style={{ display: loading ? "none" : "" }}>
      <Authenticator variation="modal" hideSignUp={true} >
        {({ user }: any) => {
          setUser(user);
          return <Loading />;
        }}
      </Authenticator>
    </div>
  );
}

export default Admin;

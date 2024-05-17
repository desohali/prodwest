import * as React from 'react';
import '@/styles/globals.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../src/app/store';
import { createTheme } from '../src/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import 'simplebar-react/dist/simplebar.min.css';
import { useRouter } from 'next/navigation';
import { useRouter as useNextRouter } from 'next/router';
import { setUser, setIsLoading, setIsAuthenticated } from '../src/features/userSlice';
import { fetchUserAttributes, signOut } from 'aws-amplify/auth';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { createEmotionCache } from '../src/utils/create-emotion-cache';
import { useNProgress } from '../src/hooks/use-nprogress';
import Loading from '@/src/components/loading';
import { getBuyer } from '@/src/graphql/queries';
// config amplify
import { Amplify } from 'aws-amplify';
import config from '../src/amplifyconfiguration.json';
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

Amplify.configure(config);
const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => <Loading />;

const AppOld = (props: any) => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state: any) => state.user);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useNProgress();

  const router = useRouter();
  const theme = createTheme();
  const nextRouter = useNextRouter();
  const getLayout = Component.getLayout ?? ((page: any) => page);

  React.useEffect(() => {
    if (!user) {
      dispatch(setIsLoading(true));
      (async () => {
        try {
          // set user
          const userAttributes = await fetchUserAttributes();
          const buyer = await client.graphql({
            query: getBuyer,
            variables: { id: userAttributes?.sub || "" }
          });
          dispatch(setIsLoading(false));
          dispatch(setUser({ ...userAttributes, buyer: buyer.data.getBuyer }));
          dispatch(setIsAuthenticated(true));

        } catch (error) {
          dispatch(setUser(null));
          dispatch(setIsAuthenticated(false));
          dispatch(setIsLoading(false));
          if (!user && nextRouter.pathname != "/auth/admin") {
            router.push("/auth/login");
          }
        }
      })();
    }
  }, [user]);


  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Vest ID
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {isLoading ? <SplashScreen /> : getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default function App(props: any) {
  return (
    <Provider store={store}>
      <AppOld {...props} />
    </Provider>
  )
}

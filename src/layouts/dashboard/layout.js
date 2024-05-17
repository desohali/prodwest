import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';
import { withAuthGuard } from 'src/hocs/with-auth-guard';
import { SideNav } from './side-nav';
import { TopNav } from './top-nav';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated, setIsLoading, setUser } from 'src/features/userSlice';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { Backdrop, CircularProgress } from '@mui/material';
import Loading from '@/src/components/loading';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

export const Layout = withAuthGuard((props) => {
  const { children } = props;
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isLoading, isAuthenticated } = useSelector((state) => state.user);
  const [isLoadingLocal, setisLoadingLocal] = useState(false);

  /* useEffect(() => {
    if (!user) {
      dispatch(setIsLoading(true));
      (async () => {
        try {
          const userAttributes = await fetchUserAttributes();
          dispatch(setIsLoading(false));
          dispatch(setUser(userAttributes));
          dispatch(setIsAuthenticated(true));

        } catch (error) {
          dispatch(setUser(null));
          dispatch(setIsAuthenticated(false));
          dispatch(setIsLoading(false));
          if (!user) {
            router.push("/auth/login");
          }
        } finally {
          setisLoadingLocal(false);
        }
      })();
    } else {
      setisLoadingLocal(false);
    }
  }, [dispatch]); */

  const handlePathnameChange = useCallback(
    () => {
      if (openNav) {
        setOpenNav(false);
      }
    },
    [openNav]
  );

  useEffect(
    () => {
      handlePathnameChange();
    },
    [pathname]
  );

  if (isLoadingLocal) return <Loading />

  return (
    <>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SideNav
        onClose={() => setOpenNav(false)}
        open={openNav}
      />
      <LayoutRoot>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
});

import * as React from 'react';
import Head from 'next/head';
import { Box, Button, ButtonGroup, Chip, Container, Grid, Stack, SvgIcon, Tab, Typography } from '@mui/material';
import { Layout as DashboardLayout } from '../src/layouts/dashboard/layout';
import { CompaniesAdminTable } from '../src/sections/companiesAdmin/companies-admin-table';
import { CompaniesAdminSkeleton } from '../src/sections/companiesAdmin/companies-admin-skeleton';
import { generateClient } from 'aws-amplify/api';
import { useDispatch, useSelector } from 'react-redux';
import { listOrders as listOrdersQuery } from '@/src/graphql/queries';
import { items } from '../src/layouts/dashboard/config';
import { useRouter } from 'next/router';
import { setListOrders } from '@/src/features/ordersSlice';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';

const client = generateClient();

const Page = () => {
  const dispatch = useDispatch();
  // global state
  const { user } = useSelector((state: any) => state.user);
  const { listOrders } = useSelector((state: any) => state.orders);

  // local state
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loading, setLoading] = React.useState<boolean>(true);

  const handlePageChange = React.useCallback(
    (event: any, value: any) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = React.useCallback(
    (event: any) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  React.useEffect(() => {
    if (user) {
      client.graphql({
        query: listOrdersQuery,
        variables: { filter: { buyer_id: { eq: user.sub } } }
      }).then((response) => {
        setLoading(false);
        dispatch(setListOrders(response?.data?.listOrders?.items));
      });
    }
  }, [user]);

  const router = useRouter();
  const itemPath: any = items.find((i: any) => i.path == router.pathname);

  const [value, setValue] = React.useState('1');
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>
          Orders | Vest ID
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1} style={{ width: "100%" }}>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        {React.cloneElement(itemPath?.icon, { fontSize: 'large' })}
                      </Grid>
                      <Grid item>
                        <Typography variant="h4">{itemPath?.title}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                      <Button
                        startIcon={(
                          <SvgIcon fontSize="small">
                            <AddIcon />
                          </SvgIcon>
                        )}
                        variant="contained"
                      >
                        Add
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>

              </Stack>
            </Stack>

            {loading
              ? (
                <Box sx={{ width: '100%' }}>
                  <CompaniesAdminSkeleton />
                </Box>
              ) : (
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab style={{ padding: "0.5rem" }} label={
                        <Typography variant="subtitle1" gutterBottom>
                          All Orders <Chip label="1" />
                        </Typography>
                      } value="1" />
                      <Tab style={{ padding: "0.5rem" }} label={
                        <Typography variant="subtitle1" gutterBottom>
                          Completed <Chip label="0" />
                        </Typography>
                      } value="2" />
                      <Tab style={{ padding: "0.5rem" }} label={
                        <Typography variant="subtitle1" gutterBottom>
                          Pending <Chip label="1" />
                        </Typography>
                      } value="3" />
                      <Tab style={{ padding: "0.5rem" }} label={
                        <Typography variant="subtitle1" gutterBottom>
                          Canceled <Chip label="0" />
                        </Typography>
                      } value="4" />
                      <Tab style={{ padding: "0.5rem" }} label={
                        <Typography variant="subtitle1" gutterBottom>
                          Rejected <Chip label="0" />
                        </Typography>
                      } value="5" />
                    </TabList>
                  </Box>
                  <TabPanel style={{ padding: "0px", margin: "0px" }} value="1">
                    <CompaniesAdminTable
                      count={listOrders.length}
                      items={listOrders}
                      onPageChange={handlePageChange}
                      onRowsPerPageChange={handleRowsPerPageChange}
                      page={page}
                      rowsPerPage={rowsPerPage}
                    />
                  </TabPanel>
                  <TabPanel value="2">Item Completed</TabPanel>
                  <TabPanel value="3">Item Pending</TabPanel>
                  <TabPanel value="4">Item Canceled</TabPanel>
                  <TabPanel value="5">Item Rejected</TabPanel>
                </TabContext>
              )
            }
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;

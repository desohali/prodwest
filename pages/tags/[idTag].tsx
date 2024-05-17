import { useRouter } from 'next/router';
import { Layout as DashboardLayout } from '../../src/layouts/dashboard/layout';
import { Box, Button, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Rating, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { generateClient } from 'aws-amplify/api';

import { useDispatch, useSelector } from 'react-redux';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

import Image from 'next/image';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';


import imageDefault from '../../public/assets/logoTienda.jpeg';
const client = generateClient();

function capitalizeFirstLetterOfEachWord(str: string) {
  return str.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
};

const Page = () => {

  const router = useRouter();
  const { idTag } = router.query;

  const dispatch = useDispatch();
  const { productDetails } = useSelector((state: any) => state.orders);




  return (
    <>
      <Head>
        <title>
          Tag Details | Vest ID
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl" >
          <Stack style={{ width: "100%" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4} lg={5}>
                <Image
                  src={productDetails?.image || imageDefault}
                  style={{ borderRadius: "0.5rem" }}
                  layout='responsive'
                  width={600}
                  height={600}
                  alt='' />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={7}>
                <Typography variant="h5" gutterBottom style={{
                  color: "#660066"
                }}>
                  {capitalizeFirstLetterOfEachWord(productDetails?.name ?? "")}
                </Typography>
                <Divider sx={{ my: 3 }}></Divider>

                <Typography variant="h6" gutterBottom >
                  {capitalizeFirstLetterOfEachWord(productDetails?.description ?? "")}
                </Typography>
                <Typography variant="h5" gutterBottom style={{
                  color: "#660066"
                }}>
                  ${capitalizeFirstLetterOfEachWord(productDetails?.price.toString() ?? "")}
                </Typography>




                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={6}>
                    <Button
                      onClick={() => {
                        /* router.push("/"); */
                      }}
                      startIcon={<AddShoppingCartIcon />}
                      variant="contained"
                      sx={{ my: 3 }}
                      fullWidth>
                      Add to Cart
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Button
                      onClick={() => {
                        router.push("/");
                      }}
                      startIcon={<ReplyAllIcon />}
                      variant="contained"
                      sx={{ my: 3 }}
                      fullWidth>
                      Exit
                    </Button>
                  </Grid>
                </Grid>



                {/* <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="subtitle1" gutterBottom >
                      Main Specifications
                    </Typography>
                    <Box style={{
                      width: "100%",
                      borderRadius: ".5rem",
                      backgroundColor: "rgba(0,0,0,0.025)"
                    }}>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <StarBorderPurple500Icon />
                          </ListItemIcon>
                          <ListItemText
                            primary={`Batch : ${productDetails?.Batch ?? ''}`}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <StarBorderPurple500Icon />
                          </ListItemIcon>
                          <ListItemText
                            primary={`Manufacturing : ${productDetails?.Manufacturing ?? ''}`}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <StarBorderPurple500Icon />
                          </ListItemIcon>
                          <ListItemText
                            primary={`ExpireDate : ${productDetails?.ExpireDate ?? ''}`}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <StarBorderPurple500Icon />
                          </ListItemIcon>
                          <ListItemText
                            primary={`ManufacturerClub : ${productDetails?.ManufacturerClub ?? ''}`}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <StarBorderPurple500Icon />
                          </ListItemIcon>
                          <ListItemText
                            primary={`Serial : ${productDetails?.Serial ?? ''}`}
                          />
                        </ListItem>

                      </List>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="subtitle1" gutterBottom >
                      Rating
                    </Typography>
                    <Box style={{
                      width: "100%",
                    }}>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue: any) => {
                          setValue(newValue);
                        }}
                      />
                      <Button
                        onClick={() => {
                          router.push("/");
                        }}
                        startIcon={<ReplyAllIcon />}
                        variant="contained"
                        sx={{ my: 3 }}
                        fullWidth>
                        Exit
                      </Button>
                    </Box>
                  </Grid>
                </Grid> */}

              </Grid>
            </Grid>

          </Stack>
        </Container>
      </Box>
    </>
  )
}

Page.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
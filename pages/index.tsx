import * as React from 'react';
import Head from 'next/head';
import { Box, Button, ButtonGroup, Card, CardActions, Grid as GridOriginal, CardContent, CardMedia, Container, Unstable_Grid2 as Grid, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText, ListSubheader } from '@mui/material';
import { Layout as DashboardLayout } from '../src/layouts/dashboard/layout';

import TuneIcon from '@mui/icons-material/Tune';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

/* import { createClient } from 'pexels';
const clientPexels = createClient('U1vA1rIimpObFsUuUeTwKcl9o24CZpV41MsTev2oi68yKZjkPnwWwnRc'); */

import { v4 as uuidv4 } from 'uuid';
import { Stack } from '@mui/system';
import { CompaniesSearch } from '@/src/sections/catalog/companies-search';
import { ShoppingCart } from '@/src/components/shopping-cart';
import { setCountBlockPage, setListProducts, setListProductsCart, setOpenShoppingCart } from '@/src/features/catalogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { generateClient } from 'aws-amplify/api';
import { listCarts, listProducts as listProductsQuery } from '@/src/graphql/queries';
import { createCart } from '@/src/graphql/mutations';
import { setProductDetails } from '@/src/features/ordersSlice';

const client = generateClient();

const Page = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  const { listProducts, listProductsCart, pagePagination } = useSelector((state: any) => state.catalog);

console.log('user', user)

  // filters
  const [filters, setFilters] = React.useState<any[]>([]);
  React.useEffect(() => {
    client.graphql({
      query: listProductsQuery,
      variables: {}
    }).then((response) => {
      const { items = [] } = response?.data?.listProducts;
      dispatch(setCountBlockPage(Math.ceil(items.length / 10)));
      dispatch(setListProducts(items));

      const itemsMap: string[] = items.map(({ qtype }: any) => qtype);
      const setItems: any[] = Array.from(new Set(itemsMap)).map((filter) => {
        return { value: filter, checked: true }
      });

      setFilters(setItems);

    });
  }, [/* pagePagination */]);

  const handleToggle = ({ value, checked }: any) => () => {
    if (["All Products"].includes(value)) {
      setFilters((oldFilters) => oldFilters.map((f) => ({ ...f, checked: !checked })));
    } else {
      const filtersMap = filters.map((f) => {
        return f.value == value ? { value, checked: !checked } : f;
      });
      setFilters(filtersMap);
    }
  };



  // list cart verify
  const listCard = async () => {
    const response = await client.graphql({
      query: listCarts,
      variables: { filter: { buyer_id: { eq: user?.sub } } }
    });

    return response?.data?.listCarts;
  };

  // register cart
  const registerCart = async () => {
    const response = await client.graphql({
      query: createCart,
      variables: {
        input: {
          id: uuidv4(),
          buyer_id: user?.sub,
          qtype: "Cart",
        }
      }
    });

    return response.data.createCart;
  };

  return (
    <>
      <Head>
        <title>
          Overview | Vest ID
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
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1} style={{ width: "100%" }}>
              <GridOriginal container alignItems="center" justifyContent="space-between">
                <GridOriginal item>
                  <GridOriginal container alignItems="center" spacing={1}>
                    <GridOriginal item>
                      <BookmarkBorderIcon fontSize="large" />
                    </GridOriginal>
                    <GridOriginal item>
                      <Typography variant="h4">Catalog</Typography>
                    </GridOriginal>
                  </GridOriginal>
                </GridOriginal>

              </GridOriginal>

            </Stack>

          </Stack>
          <div style={{ width: "100%", margin: "1rem 0rem" }}>
            <ShoppingCart />
            <CompaniesSearch />
          </div>
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >

              <Card style={{ width: "100%" }}>
                <CardContent>
                  <List sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                  }} subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px', // Espacio entre el icono y el texto
                      }}
                    >
                      <TuneIcon sx={{ fontSize: 20 }} />
                      Filters Products
                    </ListSubheader>
                  }>
                    <ListItem
                      key="All Products"
                      disablePadding
                    >
                      <ListItemButton role={undefined} onClick={handleToggle({ value: "All Products", checked: filters.every(({ checked }) => checked) })} dense>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={filters.every(({ checked }) => checked)}
                            indeterminate={filters.some(({ checked }) => !checked)}
                            disableRipple
                          />
                        </ListItemIcon>
                        <ListItemText primary="All Products" />
                      </ListItemButton>
                    </ListItem>
                    {filters.map(({ value, checked }, i) => {
                      return (
                        <ListItem
                          key={value}
                          disablePadding
                        >
                          <ListItemButton role={undefined} onClick={handleToggle({ value, checked })} dense>
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked={checked}
                                disableRipple
                              />
                            </ListItemIcon>
                            <ListItemText primary={value} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </CardContent>
              </Card>

            </Grid>
            {listProducts.map((item: any) => (
              <Grid
                xs={12}
                sm={6}
                lg={3}
              >
                <Card onClick={(e) => {
                  e.stopPropagation();
                  console.log('true', true)
                }} className="cardCustom" sx={{ width: '100%' }}>

                  <div style={{ width: "100%", maxHeight: '175px', overflow: 'hidden' }}>
                    <CardMedia
                      className="cardMedia"
                      component="img"
                      alt="green iguana"
                      height="175"
                      image={item?.image || './assets/logoTienda.jpeg'}
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.description}
                    </Typography>
                    <Typography variant="subtitle2" color="text.primary" style={{ color: "#6366F1" }}>
                      ${item?.price?.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <Divider variant="middle" />
                  <CardActions style={{ width: "100%", textAlign: "center", margin: "auto", display: "flex" }}>

                    <ButtonGroup fullWidth variant="text">
                      <Button size="small" onClick={() => {
                        dispatch(setProductDetails(item));
                        router.push(`/tags/${item?.id}`);
                      }}>
                        View Product
                      </Button>
                      <Button size="small" onClick={function addToCart() {
                        const findProduct = listProductsCart.find((p: any) => (p.id == item.id));
                        if (findProduct) {
                          const clonefindProduct = { ...findProduct, quantity: (findProduct.quantity + 1) };
                          const filterProducts = listProductsCart.filter((p: any) => (p.id != item.id));
                          dispatch(setListProductsCart([...filterProducts, clonefindProduct]));
                        } else {
                          dispatch(setListProductsCart([...listProductsCart, { ...item, quantity: 1 }]));
                        }

                        dispatch(setOpenShoppingCart(true));
                      }}>
                        Add to Cart
                      </Button>
                    </ButtonGroup>
                  </CardActions>

                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>
      </Box>
    </>
  )
};

Page.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;

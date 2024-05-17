import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { setListAddress, setListProductsCart, setOpenShoppingCart } from '../features/catalogSlice';
import CommentIcon from '@mui/icons-material/Comment';
import { Grid, Input, InputAdornment, ListItem, OutlinedInput, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import MinimizeIcon from '@mui/icons-material/Minimize';
import RemoveIcon from '@mui/icons-material/Remove';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { listAddresses as listAddressesQuery } from '../graphql/queries';
import { generateClient } from 'aws-amplify/api';
import { createOrder } from '../graphql/mutations';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const client = generateClient();

export const schemaCart = Yup.object({
  Address: Yup
    .string()
    .max(255)
    .required('Adrress is required'),
});


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ShoppingCart = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { openShoppingCart, listProductsCart, listAddress } = useSelector((state) => state.catalog);


  const subTotal = listProductsCart.reduce((a, cv) => {
    return (a + (cv.price * cv.quantity));
  }, 0);
  const itemsTotal = listProductsCart.reduce((a, cv) => {
    return (a + cv.quantity);
  }, 0);

  const handleClose = () => {
    dispatch(setOpenShoppingCart(false));
  };


  React.useEffect(() => {
    if (user) {
      client.graphql({
        query: listAddressesQuery,
        variables: { filter: { business_id: { eq: user?.buyer?.business_id } } }
      }).then((response) => {
        dispatch(setListAddress(response.data.listAddresses.items || []));
      });
    }
  }, [user]);


  // formik
  const formik = useFormik({
    initialValues: {
      Address: '',
    },
    validationSchema: schemaCart,
    onSubmit: async ({ Logo, ...values }, helpers) => {

    }
  })

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={openShoppingCart}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Shopping Cart
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Done
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={0} sx={{ padding: "1rem 0.5rem", background: "#f2f2f2", height: "100%" }}>
          <Grid item xs={12} sm={12} lg={1} />
          <Grid item xs={12} sm={12} lg={10}>
            <Typography variant="h5" gutterBottom>
              Shopping Cart ({itemsTotal})
            </Typography>

            <Divider variant="middle" />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={8}>

                <List style={{ /* maxHeight: "calc(100vh - 150px)", overflow: "auto", */ padding: "2px", boxSizing: "border-box", }}>
                  {(listProductsCart || []).map((item) => (
                    <ListItem alignItems="flex-start" style={{
                      background: "white",
                      borderRadius: ".5rem",
                      marginBottom: ".75rem",
                      padding: "1rem",
                      boxSizing: "border-box",
                      boxShadow: "1px 1px 3px #bfbfbf"
                    }}>
                      <img src={item?.image || '../assets/logoTienda.jpeg'} alt="Remy Sharp" style={{ width: '100px', /* height: '100px' */ }} />
                      <ListItemText
                        secondary={
                          <Grid container spacing={0} sx={{ padding: "0rem 0.5rem" }}>
                            <Grid item xs={12} sm={6} lg={5}>
                              <Typography variant="subtitle2" color="text.primary">
                                {item?.name}
                              </Typography>
                              <Typography variant="subtitle2" color="text.primary" style={{ color: "#6366F1" }}>
                                ${item?.price}
                              </Typography>

                            </Grid>
                            <Grid item xs={12} sm={6} lg={5} >
                              <div style={{
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                              }}>
                                <OutlinedInput
                                  disabled
                                  value={item?.quantity}
                                  size="small"
                                  style={{ width: "160px" }}
                                  type="number"
                                  id="input-with-icon-adornment"
                                  startAdornment={
                                    <InputAdornment position="start">
                                      <IconButton onClick={() => {
                                        const findProduct = listProductsCart.find((p) => (p.id == item.id));
                                        if (findProduct) {
                                          const clonefindProduct = { ...findProduct, quantity: (findProduct.quantity - 1) };
                                          const filterProducts = listProductsCart.filter((p) => (p.id != item.id));
                                          dispatch(setListProductsCart([...filterProducts, clonefindProduct]));
                                        }
                                      }}><RemoveIcon /></IconButton>

                                    </InputAdornment>
                                  }
                                  endAdornment={
                                    <InputAdornment position="start">
                                      <IconButton onClick={() => {
                                        const findProduct = listProductsCart.find((p) => (p.id == item.id));
                                        if (findProduct) {
                                          const clonefindProduct = { ...findProduct, quantity: (findProduct.quantity + 1) };
                                          const filterProducts = listProductsCart.filter((p) => (p.id != item.id));
                                          dispatch(setListProductsCart([...filterProducts, clonefindProduct]));
                                        } else {
                                          dispatch(setListProductsCart([...listProductsCart, { ...item, quantity: 1 }]));
                                        }
                                      }}><AddIcon /></IconButton>

                                    </InputAdornment>
                                  }
                                />
                              </div>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={2}>
                              <div style={{
                                display: "flex",
                                alignItems: "center",
                                height: "100%"
                              }}>
                                <Typography variant="subtitle2" color="text.primary" style={{ color: "#6366F1" }}>
                                  ${(item?.price * item?.quantity).toFixed(2)}
                                </Typography>
                              </div>
                            </Grid>

                          </Grid>

                        }
                      />
                    </ListItem>
                  ))}

                </List>
              </Grid>
              <Grid item xs={12} sm={12} lg={4}>
                {/* <Typography variant="h5" gutterBottom>
                  Shopping Cart
                </Typography>

                <Divider variant="middle" /> */}
                <div style={{
                  width: "100%",
                  height: "calc(100vh - 150px)",
                  background: "white",
                  borderRadius: ".5rem",
                  /* margin: "1rem 0px", */
                  position: "relative",


                  boxSizing: "border-box",
                  boxShadow: "1px 1px 3px #bfbfbf"
                }}>

                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} lg={12}>
                      <div style={{ width: "100%", padding: "1rem" }}>
                        <Typography variant="h5" gutterBottom align='center'>
                          Order Summary
                        </Typography>
                        <Typography variant="p" gutterBottom align='left' sx={{ fontWeight: "bold", paddingBottom: "0.5rem", display: "inline-block" }}>
                          Shipping
                        </Typography>

                        <TextField
                          fullWidth
                          label="Select Shipping Address"
                          name="Address"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          required
                          select
                          SelectProps={{ native: true }}
                          value={formik.values.Address}
                        >
                          <option
                            key={"---"}
                            value={""}
                          >

                          </option>
                          {listAddress.map((option) => (
                            <option
                              key={option.id}
                              value={option.id}
                            >
                              {`${option.street} ${option.postal_code}, ${option.city} ${option.state} ${option.country}`}
                            </option>
                          ))}
                        </TextField>

                      </div>

                      <div style={{
                        width: "100%",
                        position: "absolute",
                        bottom: "0px",
                        padding: "2rem 1rem"
                      }}>
                        <Grid container >
                          <Grid item xs={9} sm={9} lg={9}>
                            <Typography variant="p" gutterBottom align='left' sx={{ fontWeight: "bold" }}>
                              Sub Total
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sm={3} lg={3}>
                            <Typography variant="p" style={{ color: "#6366F1", fontWeight: "bold" }}>
                              ${subTotal.toFixed(2)}
                            </Typography>
                          </Grid>
                          <Grid item xs={9} sm={9} lg={9}>
                            <Typography variant="p" gutterBottom align='left' sx={{ fontWeight: "bold" }}>
                              Shipping Cost
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sm={3} lg={3}>
                            <Typography variant="p" style={{ color: "#6366F1", fontWeight: "bold" }}>
                              ${0?.toFixed(2)}
                            </Typography>
                          </Grid>

                          <Grid item xs={12} sm={12} lg={12}>
                            <Divider style={{ borderColor: "black", margin: "1rem 0rem" }} />
                          </Grid>

                          <Grid item xs={9} sm={9} lg={9}>
                            <Typography variant="p" gutterBottom align='left' sx={{ fontWeight: "bold" }}>
                              Total
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sm={3} lg={3}>
                            <Typography variant="p" style={{ color: "#6366F1", fontWeight: "bold" }}>
                              ${subTotal.toFixed(2)}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={12} lg={12}>
                            <Button fullWidth

                              onClick={async () => {
                                try {

                                  // register order
                                  const response = await client.graphql({
                                    query: createOrder,
                                    variables: {
                                      input: {
                                        id: uuidv4(),
                                        business_id: user?.buyer?.business_id,//formik.values.Address
                                        // business: user?.buyer?.business,
                                        buyer_id: user?.sub,
                                        // buyer: user.buyer,
                                        order_status: "PENDING",
                                        paid_status: "PENDING",
                                        packed_items: "0",
                                        subtotal: subTotal.toString(),
                                        tax: "0",
                                        shipping: "0",
                                        discount: "0",
                                        qtype: "Order",
                                        // created_at: new Date().toISOString(),
                                        // updated_at: new Date().toISOString(),
                                        // __typename: "",
                                      }
                                    }
                                  });

                                  console.log('response', response);
                                  Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Successfully Registered Operation",
                                    showConfirmButton: false,
                                    timer: 2000
                                  });

                                  dispatch(setOpenShoppingCart(false));
                                  dispatch(setListProductsCart([]));
                                  router.push("/orders");

                                } catch (error) {
                                  console.log('error', error);
                                }

                              }}
                              variant="contained" style={{ marginTop: "1rem" }}>Complete Order</Button>
                          </Grid>

                        </Grid>

                      </div>
                    </Grid>
                  </Grid>

                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={1} />
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}


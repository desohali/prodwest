import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: "",
    // shopping cart
    listOrders: [],
    productDetails: undefined,
    clubsAdminSelected: []
};

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        // orders
        setListOrders: (state, action) => {
            state.listOrders = action.payload;
        },
        setProductDetails: (state, action) => {
            state.productDetails = action.payload;
        },
        setClubsAdminSelected: (state, action) => {
            state.clubsAdminSelected = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setSearch,
    setListOrders,
    setProductDetails,
    setClubsAdminSelected
} = ordersSlice.actions;

export default ordersSlice.reducer;
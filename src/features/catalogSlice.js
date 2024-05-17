import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: "",
    // shopping cart
    openShoppingCart: false,
    listProducts: [],
    listProductsCart: [],
    pagePagination: 1,
    countBlockPage: 1,
    listAddress: []
};

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        // shopping cart
        setOpenShoppingCart: (state, action) => {
            state.openShoppingCart = action.payload;
        },
        setListProducts: (state, action) => {
            state.listProducts = action.payload;
        },
        setListProductsCart: (state, action) => {
            state.listProductsCart = action.payload;
        },
        setPagePagination: (state, action) => {
            state.pagePagination = action.payload;
        },
        setCountBlockPage: (state, action) => {
            state.countBlockPage = action.payload;
        },
        setListAddress: (state, action) => {
            state.listAddress = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setSearch,
    setOpenShoppingCart,
    setListProductsCart,
    setPagePagination,
    setCountBlockPage,
    setListProducts,
    setListAddress
} = catalogSlice.actions;

export default catalogSlice.reducer;
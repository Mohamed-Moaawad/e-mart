import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";
import postsSlice from "./postsSlice";
import authSlice from "./authSlice";


export const store = configureStore({
    reducer:{
        products: productsSlice,
        cart: cartSlice,
        favorite: favoriteSlice,
        posts: postsSlice,
        auth: authSlice,

    }
})


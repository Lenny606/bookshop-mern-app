import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice.js'
import {booksApi} from "./features/cart/booksApi.js";

export default configureStore({
    reducer: {
        cart: cartReducer,
        [booksApi.reducerPath]: booksApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(booksApi.middleware)
    }
})
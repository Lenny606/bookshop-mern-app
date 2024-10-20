import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}
//actions
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            if (!existingItem) {
                state.cartItems.push(action.payload)
                //TODO toast
                console.log("item added to cart")
            } else {
                //TODO toast
                console.log("item exists")
            }
        }
    }
})

//export actions
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;

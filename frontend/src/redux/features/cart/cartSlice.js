import {createSlice} from "@reduxjs/toolkit";
import Swal from "sweetalert2";

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
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Item added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'Item does exist',
                    showCancelButton: true,
                    confirmButtonText: "OK",
                    confirmButtonColor: "#f1c40f",
                })
            }
        }
    }
})

//export actions
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;

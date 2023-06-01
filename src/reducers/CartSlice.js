import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (product) => product.id !== action.payload.id
            );
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

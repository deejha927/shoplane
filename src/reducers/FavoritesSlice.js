import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    favoriteProducts: JSON.parse(localStorage.getItem('favorites')) || [],
};
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favoriteProducts.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favoriteProducts));
        },
        removeFavorite: (state, action) => {
            state.favoriteProducts = state.favoriteProducts.filter(
                (product) => product.id !== action.payload.id
            );
            localStorage.setItem('favorites', JSON.stringify(state.favoriteProducts));
        },
    },
});
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;


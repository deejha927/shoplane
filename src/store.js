import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './reducers/FavoritesSlice';
import cartReducer from './reducers/CartSlice';
const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        cart: cartReducer,
    },
});
export default store;
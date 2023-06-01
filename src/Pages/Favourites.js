import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../reducers/FavoritesSlice';
function Favourites() {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favoriteProducts);
    return (
        <div className="container">
            <div className="row">
                {favorites.map(product => (
                    <div key={product.id} className="col-sm-4">
                        <p>{product.title}</p>
                        <button onClick={() => dispatch(removeFavorite(product))}>
                            remove from favourite
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favourites;
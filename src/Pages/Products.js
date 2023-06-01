import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addFavorite, removeFavorite } from "../reducers/FavoritesSlice";
import { addToCart, removeFromCart } from "../reducers/CartSlice";
function Products() {
    const dispatch = useDispatch();
    const [products, setProducts] = React.useState([]);
    const favorites = useSelector(state => state.favorites.favoriteProducts);
    const cart = useSelector(state => state.cart.cart);
    useEffect(() => {
        const fetchData = () => {
            axios.get("https://fakestoreapi.com/products")
                .then(response => {
                    setProducts(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        };
        fetchData();
    }, []);
    const isFavorite = (productId) => {
        return favorites.some(product => product.id === productId);
    };
    const isAddedToCart = (productId) => {
        return cart.some(product => product.id === productId);
    };
    const addOrRemoveFavorite = (product) => {
        if (isFavorite(product.id)) {
            dispatch(removeFavorite(product));
        } else {
            dispatch(addFavorite(product));
        }
    };

    const addOrRemoveCart = (product) => {
        if (isAddedToCart(product.id)) {
            dispatch(removeFromCart(product));
        } else {
            dispatch(addToCart(product));
        }

    };
    return (

        <div className="container">
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-sm-4">
                        <p>{product.title}</p>
                        <p>Is Favorite: {isFavorite(product.id).toString()}</p>
                        <p>Added to Cart: {isAddedToCart(product.id).toString()}</p>
                        <button onClick={() => addOrRemoveFavorite(product)}>
                            {isFavorite(product.id) ? "remove from favorites" : "add to favorites"}
                        </button>
                        <button onClick={() => addOrRemoveCart(product)}>
                            {isAddedToCart(product.id) ? "remove from cart" : "add to cart"}
                        </button>
                    </div>
                ))}
            </div>
        </div>


    );
};

export default Products;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../reducers/CartSlice';
function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    return (
        <div className="container">
            <div className="row">
                {cart.map(product => (
                    <div key={product.id} className="col-sm-4">
                        <p>{product.title}</p>
                        <button onClick={() => dispatch(removeFromCart(product))}>
                            remove from cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
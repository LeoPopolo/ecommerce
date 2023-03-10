import React from 'react';
import CartContext from './CartContext';

const StateCartContext = ({ children }) => {

    const [cart, setCart] = React.useState([]);

    const addToCart = (item) => {
        let tmp_cart = cart;
        tmp_cart.push(item);

        setCart(tmp_cart);
    }

    return (
        <CartContext.Provider
            value={{cart, addToCart}}
        >
            { children }
        </CartContext.Provider>
    )
}

export default StateCartContext
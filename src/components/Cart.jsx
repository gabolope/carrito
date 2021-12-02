import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
    
    const cart = useContext(CartContext);
    console.log(cart)

    return(
        <>
        <h1>Soy el Cart</h1>
        </>
    )
}

export default Cart
import { useEffect, createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]); 
    const [showCartIcon, setShowCartIcon] = useState(false);
    const [cartLength, setCartLength] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    //funcion de GABO
    const onAdd = (product, count) => {
        const productInCart = cart.find((i) => i.id === product.id);

        if(!productInCart){
            const productToAdd = {...product, quantity: count}
            setCart([...cart, productToAdd])
        }
        else {
            productInCart.quantity = productInCart.quantity + count;
            setCart([...cart])
        }
    }

    //Setea el largo del carrito y precio final
    useEffect(() => {
        if(cart.length > 0){
            const quantities = cart.map((i) => i.quantity)
            const prices = cart.map((i) => i.quantity * i.price)
            setCartLength(quantities.reduce((a, b) => a + b))
            setTotalPrice(prices.reduce((a, b) => a + b))
            setShowCartIcon(true)     
        }
        else {
            setCartLength(0)
            setTotalPrice(0)
            setShowCartIcon(false)
        }
    }, [cart])
    
    //Oculta el contador
    const deleteCounter = () =>{
        setShowCartIcon(true)
    }

    //Vacía el carrito:
    const emptyCart = () => { 
        setCart([])
        setCartLength(0)
    }

    //Elimina un producto del carrito:

    const deleteProductInCart = (name) => {
        const index = cart.findIndex((i) => i.name === name)
        cart.splice(index, 1)
        if (cart.length > 0) {
            setCart([...cart])
        }
        else {
            setCart([])
        }
    }

    return (
        <CartContext.Provider value={{cart, onAdd, showCartIcon, deleteCounter, emptyCart, cartLength, totalPrice, deleteProductInCart}}>
            {children}
        </CartContext.Provider>
    )
}




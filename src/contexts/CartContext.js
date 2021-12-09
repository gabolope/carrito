import { useEffect, createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]); //Establece el carrito como un array vacío
    const [showCartIcon, setshowCartIcon] = useState(false) //Oculta y muestra los botones de compra
    const [isCartEmpty, setIsCartEmpty] = useState(false) //Oculta y muestra el mensaje de "carrito vacío" en cart
    const [cartLength, setCartLength] = useState (0) //Determina el largo de todos los productos en el carrito

    //Agrega al carrito
    const onAdd = (product, count) => {
        setIsCartEmpty(false)
        
        const productInCart = cart.find((i) => i.id === product.id);

        if(!productInCart){
            const productToAdd = {...product, quantity: count}
            setCart([...cart, productToAdd])
        }
        else{productInCart.quantity = productInCart.quantity  + count}
    }
    
    useEffect(() => {
        if(cart.length > 0){
            const quantities = cart.map((i) => i.quantity)
            setCartLength(quantities.reduce((a, b) => a + b))
            setshowCartIcon(true)     
        }
    },[onAdd])
    
    //Oculta el contador
    const deleteCounter = () =>{
        setshowCartIcon(true)
    }

    //Vacía el carrito:
    const emptyCart = () => { 
        setCart([])
        setCartLength(0)
        setIsCartEmpty(true)
    }

    return (
        <CartContext.Provider value={{cart, onAdd, showCartIcon, deleteCounter, emptyCart, isCartEmpty, cartLength}}>
            {children}
        </CartContext.Provider>
    )
}




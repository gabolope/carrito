import { useEffect, createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]); //Establece el carrito como un array vacío
    const [showCartIcon, setshowCartIcon] = useState(false) //Oculta y muestra los botones de compra
    const [isCartEmpty, setIsCartEmpty] = useState(false) //Oculta y muestra el mensaje de "carrito vacío" en cart
    const [cartLength, setCartLength] = useState(0) //Determina el largo de todos los productos en el carrito
    const [totalPrice, setTotalPrice] = useState(0) //Precio total de todo el carrito

    //Agrega al carrito
    const onAdd = (product, count) => {
        setIsCartEmpty(false)
        
        const productInCart = cart.find((i) => i.id === product.id);

        if(!productInCart){
            const productToAdd = {...product, quantity: count}
            setCart([...cart, productToAdd])
        }
        else {
            productInCart.quantity = productInCart.quantity + count;
        }
    }

    //Setea el largo del carrito
    //TODO: *fix* no se ejecuta cuando se agrega un objeto que ya se encuentra en el array (no detecta cambios de cantidades). Sólo se ejecuta cuando se agrega un nuevo objeto
    useEffect(() => {
        if(cart.length > 0){
            const quantities = cart.map((i) => i.quantity)
            console.log(quantities)
            const prices = cart.map((i) => i.quantity * i.price)
            setCartLength(quantities.reduce((a, b) => a + b))
            setTotalPrice(prices.reduce((a, b) => a + b))
            setshowCartIcon(true)     
        }
        else {
            setshowCartIcon(false)
        }
    }, [cart]) 

    

    
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
        <CartContext.Provider value={{cart, onAdd, showCartIcon, deleteCounter, emptyCart, isCartEmpty, cartLength, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}




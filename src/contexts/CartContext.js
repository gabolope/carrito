import { useEffect, createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const [counter, setCounter] = useState(0); 

    const [showItemCount, setShowItemCount] = useState(true) //Oculta y muestra los botones de compra
    
    const item = "primera: tinka segunda: nikolino"

    const onAdd = (product, count) => {

        /* const message1 = `Se agregó ${count} producto al carrito.`;
        const message2 = `Se agregaron ${count} productos al carrito.`;
        (count === 1) ? console.log(message1) : console.log(message2); */


        setShowItemCount(false); //oculta los botones del contador 
        
        const productToAdd = {...product, quantity: count}
        setCart([...cart, item])
/* 
        console.log("count es una variable de tipo: ", typeof(count))
        console.log("El valor de count es: ", count)
        
        console.log("soy el item: ", item)
        setCart([...cart, item])

        console.log("Counter luego de ejecutar onAdd:", counter) 
        console.log("Cart luego de ejecutar onAdd:", cart)  */
    }

    /* useEffect( (counter) => {
        console.log("Counter en el useEffect: ", counter)  
        setCart([{"quantity": "counter", "product": "id de prueba"}]) 
    },[counter]) */

    const deleteCounter = () =>{
        setShowItemCount(true)
    }

    return (
        <CartContext.Provider value={{cart, counter, onAdd, showItemCount, deleteCounter}}>
            {children}
        </CartContext.Provider>
    )
}




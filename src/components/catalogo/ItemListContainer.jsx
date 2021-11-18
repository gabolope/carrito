import { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import getProducts from '../../services/handmadePromise';
import ItemList from './ItemList';

const ItemListContainer = ( {greeting} ) => {
   const [products, setProducts] = useState([]) //Crea la variable productos, asignándole un array vacío. Luego, cuando la promesa se cumple este array se llena con el array de data.

    useEffect(() => {
        getProducts
        .then(response => {setProducts(response)})
        .catch(error => alert("Ocurrió un error."))
    }, []) //Ejecuta lo que está en el then cuando hay algún cambio.

    const onAdd = (count) => {
        const message1 = `Se agregó ${count} producto al carrito.`;
        const message2 = `Se agregaron ${count} productos al carrito.`;
        (count === 1) ? alert(message1) : alert(message2);
    } //función que paso por props al hijo ItemCount
    
    return (
        <>
            <div className="heroImage">
                <h4>Este es el saludo para el cliente:</h4>
                <h3>{greeting}</h3>
            </div>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer
import ItemCount from './ItemCount'

const ItemListContainer = ( {greeting} ) => {
    
    
    return (
        <>
            <h3>Este es el saludo para el cliente:</h3>
            <h4>{greeting}</h4>
            <ItemCount stock={5} initial={1}/>
        </>
    )
}

export default ItemListContainer
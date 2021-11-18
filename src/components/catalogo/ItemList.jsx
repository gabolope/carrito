import Item from './Item'

const ItemList = ({products}) => {
    return (
        <div>
            {products.map(product => {
                return(
                    <Item 
                    key={product.id}
                    name={product.name}  
                    description={product.description}
                    category={product.category}
                    preparation={product.preparation}
                    image={product.image}
                    />
                )
            })}
        </div>
    )
}

export default ItemList
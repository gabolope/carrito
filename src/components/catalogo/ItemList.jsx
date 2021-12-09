import Item from './Item';
import Stack from '@mui/material/Stack';

const ItemList = ({products}) => {
    return (
        <>
            <div>
                <Stack direction="row" spacing={3} sx={{marginTop: 2}}>
                    {products.map(product => {
                        return(
                            <Item 
                            product={product}
                            key={product.id}
                            id={product.id}
                            name={product.name}  
                            description={product.description}
                            category={product.category}
                            preparation={product.preparation}
                            image={product.image}
                            price={product.price}
                            />
                            )
                        })}
                </Stack>
            </div>
        </>
    )
}

export default ItemList
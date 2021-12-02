import { Typography, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {
   return (
        <>
        <Card sx={{ maxWidth: 900, margin: "auto"}}>
            <h2 className="itemDetailTittle">Detalles del Producto</h2>
            <h3 className="itemDetailName">{product.name}</h3>
            <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
            />
            <h4>{product.category}</h4>
            <h3>$ {product.price}</h3>
            <h5>Stock disponible: {product.stock}</h5>
            <Typography 
                variant="body1" 
                color="text.primary"
                aling="justify"
            >
                {product.description}
            </Typography>
            <hr />
            <Typography 
                variant="body2" 
                color="text.secondary"
                align="center"
            >
                Preparación: {product.preparation}
            </Typography>              
            <ItemCount stock={product.stock} initial={1} id={product.id}/>       
        </Card>
        </>
    )
}

export default ItemDetail
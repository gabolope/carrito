import Card from '@mui/material/Card';
import { Typography, CardMedia } from '@mui/material';

const ItemDetail = ({product}) => {
    if(!product){
        return null
    }

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
                {product.preparation}
            </Typography>
        </Card>
        </>
    )
}

export default ItemDetail
/* import { useContext } from 'react'; */
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
/* import { CartContext } from '../../contexts/CartContext'; */


const Item = ({id, name, price, category, image, product}) => {
    /* const {onAdd} = useContext(CartContext) */
    return (
        <Card sx={{ 
            maxWidth: 345
                }}>
            <Link to={`/item/${id}`}>
                <CardHeader
                    title={name}
                    subheader={category}
                />
                <CardMedia
                    component="img"
                    height="325"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography variant="h6" color="text.primary">
                    Precio: $ {price}
                    </Typography>
                </CardContent>
            </Link>
                <CardActions disableSpacing>
                    <IconButton onClick={() => console.log("arreglar esto")} aria-label="Agregar al carrito">
                        <AddShoppingCartIcon />
                    </IconButton>
            </CardActions>
        </Card>
    )
};

export default Item
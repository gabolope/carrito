import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Item = ({id, name, description, category, image}) => {
    return (
        <Link to={`/item/${id}`}>
            <Card sx={{ 
                maxWidth: 345
                }}>
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
                    <Typography variant="body2" color="text.secondary">
                    {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Agregar al carrito">
                        <AddShoppingCartIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Link>
    )
};

export default Item
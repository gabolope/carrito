import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Item = ({name, description, category, image}) => {
    return (
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
    )
};

export default Item
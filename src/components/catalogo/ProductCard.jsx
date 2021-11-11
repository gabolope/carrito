import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);

const ProductCard = ({tipe}) => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 300, marginTop: 3}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Proveniente de:
                </Typography>
                <Typography variant="h5" component="div">
                    {tipe}
                </Typography>            
            </CardContent>
            <CardActions>
                <Button size="small">Comprar</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard
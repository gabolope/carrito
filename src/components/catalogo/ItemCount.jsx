import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CartContext } from '../../contexts/CartContext'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const ItemCount = ({ product, initial }) => {
    
    const [count, setCount] = useState(initial); //Este hook establece el valor inicial del contador y la función que cambiará el valor del contador

    const { onAdd, showCartIcon, cartLength} = useContext(CartContext); //Este hook toma los elementos del Context

    const addItem = () => { 
        if (count < product.stock){
            setCount(count + 1)
        } //Suma uno al contador
    }
    const removeItem = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    } //Resta uno al contador

    return (
        <>
        <Stack direction="row" spacing={1} justifyContent="center" sx={{marginTop: ".5rem"}}>
            <div className="itemCount"> 
                <IconButton aria-label="Remove" onClick={removeItem}>
                    <RemoveIcon />
                </IconButton>
                <Chip 
                    label={count} 
                    color="primary" 
                    variant="outlined"
                />
                <IconButton aria-label="Add" onClick={addItem}>
                    <AddIcon />
                </IconButton>
                <Button 
                    variant="contained" 
                    endIcon={<AddShoppingCartIcon/>}
                    onClick={() => onAdd(product, count)}
                >
                    Agregar al carrito
                </Button>               
            </div>
            {showCartIcon ? <div className="counter" color="error">
                    <Link to="/Cart">
                            <Button 
                                variant="contained" 
                                endIcon={
                                <StyledBadge badgeContent={cartLength} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>}
                            >
                                Ver carrito
                            </Button>   
                    </Link>
            </div> :
            <div></div>            
            }
        </Stack>

        </>
    )
}

export default ItemCount
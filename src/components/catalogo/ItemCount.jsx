import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [count, setCount] = useState(initial); //Este hook establece el valor inicial del contador y la función que cambiará el valor del contador

    const addItem = () => { 
        if (count < stock){
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
                    onClick={() => onAdd(count)}
                >
                    Agregar al carrito
                </Button>               
            </div>
        </>
    )
}

export default ItemCount
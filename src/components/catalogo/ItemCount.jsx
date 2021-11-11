import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCount = ({ stock, initial }) => {
    
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

    const onAdd = () => {
        const message1 = `Se agregó ${count} producto al carrito.`;
        const message2 = `Se agregaron ${count} productos al carrito.`;
        (count === 1) ? alert(message1) : alert(message2);
    }

    return (
        <>
            <div> 
                <IconButton aria-label="Remove">
                    <RemoveIcon onClick={removeItem}/>
                </IconButton>
                <span id="itemCount">{count}</span>
                <IconButton aria-label="Add">
                    <AddIcon onClick={addItem}/>
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
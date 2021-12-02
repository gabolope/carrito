import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { CartContext } from '../../contexts/CartContext'


const ItemCount = ({ stock, initial, id }) => {
    
    const [count, setCount] = useState(initial); //Este hook establece el valor inicial del contador y la función que cambiará el valor del contador

    const {cart, setCart} = useContext(CartContext);

    const [counter, setCounter] = useState(0);

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

    const [showItemCount, setShowItemCount] = useState(true)

    //función que muestra cuántos productos se agregaron, hace desaparecer el contador y actualiza el cart
    const onAdd = (count) => {
        const message1 = `Se agregó ${count} producto al carrito.`;
        const message2 = `Se agregaron ${count} productos al carrito.`;
        (count === 1) ? console.log(message1) : console.log(message2);
        setShowItemCount(false);
        setCounter(count);
        setCart([...cart, {cantidad: counter, data: id}]); 

        
    }
    
    //función que hace aparecer el contador
    const deleteCounter = () =>{
        setShowItemCount(true)
    }

    return (
        <>
            {showItemCount ? 
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
            : 
            <div className="counter">
                <Stack direction="row" spacing={1}>
                    <Chip label={count} variant="outlined" />
                    <Button 
                        variant="contained" 
                        endIcon={<DeleteIcon/>}
                        onClick={deleteCounter}
                    >
                        Eliminar compra
                    </Button>
                    <Link to="/Cart">
                        <Button 
                            variant="contained" 
                            endIcon={<ShoppingCartIcon/>}
                        >
                            Ver carrito
                        </Button>   
                    </Link>
                </Stack>
                <h1>Número de productos en el carrito: {cart}</h1>
            </div>
            };
            <h1>Counter: {counter}</h1>

        </>
    )
}

export default ItemCount
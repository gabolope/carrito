import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <IconButton color="inherit" aria-label="Shopping Cart">
            <ShoppingCartIcon />
        </IconButton>
    )
}

export default CartWidget
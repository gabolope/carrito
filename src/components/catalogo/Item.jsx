import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
/* import { CartContext } from '../../contexts/CartContext'; */
import './Item.css'


const Item = ({id, name, price, category, image, product}) => {
    /* const {onAdd} = useContext(CartContext) */
    return (
        <>
            <Box>
                <Paper elevation={4} sx={{
                    backgroundColor: "white",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                }}> 
                    <Link to={`/item/${id}`}>
                        <div className="itemContainer">
                            <div className="detailsContainer">
                                <h2 className="itemName">{name}</h2>
                                <Divider variant="middle" />
                                <h4 className="itemCategory">{category}</h4>
                                <div className="rowAlign">
                                    <h5 className="itemPrice">Precio: ${price} </h5>
                                    <CardActions disableSpacing>
                                        <IconButton onClick={() => console.log("arreglar esto")} aria-label="Agregar al carrito">
                                            <AddShoppingCartIcon />
                                        </IconButton>
                                    </CardActions>
                                </div>
                            </div>
                            <div>
                                <img className="itemImage" src={image} alt={name} />
                            </div>
                        </div>
                    </Link>
                </Paper>
            </Box>
        </>
    )
};

export default Item
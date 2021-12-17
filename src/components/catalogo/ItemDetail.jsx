import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import ItemCount from './ItemCount';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Divider from '@mui/material/Divider';
import './ItemDetail.css'

const ItemDetail = ({ product }) => {
   return (
    <>
        <div>
            <Link to="/">
                <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />} sx={{
                    marginTop: "1rem",
                    marginLeft: "1rem" 
                }}>
                    Volver a Productos
                </Button>
            </Link>
        </div>
        <Paper elevation={3} sx={{margin:"1rem"}}>
            <h2 className="itemNameDetail">{product.name}</h2>
            <Divider variant="middle" />
            <div className="detailContainer">
                <img src={product.image} alt={product.name} className="itemImageDetail"/>
                <div>
                    <h4 className="itemCategoryDetail">{product.category}</h4>
                    <div className="itemDescriptionDetail">{product.description}</div>
                    <div className="itemStockDetail">Cantidad disponible: {product.stock} unidades.</div>
                    <h5 className="itemPriceDetail">Precio: ${product.price} </h5>
                    <Divider variant="middle" className="divider"/>
                    <ItemCount product={product} initial={1}/>       
                </div>
            </div>
        </Paper>
        </>
    )
}

export default ItemDetail
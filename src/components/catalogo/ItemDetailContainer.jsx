import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import getProducts from '../../services/handmadePromise';

const ItemDetailContainer = () => {    
    const [item, setItem] = useState({})
    
    const { id } = useParams();

    useEffect(() => {
        getProducts.then((res) => {
            setItem(res.find((prod) => prod.id === parseInt(id)))
        })
        ;
    },[id])


    return(
        <>
            <ItemDetail product={item}/>
        </>
    )
}

export default ItemDetailContainer

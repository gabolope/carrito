import { useState, useEffect } from 'react';
/* import getProducts from '../../services/handmadePromise'; */
import ItemList from './ItemList';
import axios from 'axios';
import Loader from '../Loader'

const ItemListContainer = ( {greeting} ) => {
   const [products, setProducts] = useState([]) //Crea la variable productos, asignándole un array vacío. Luego, cuando la promesa se cumple este array se llena con el array de data.
   
   
    /*ACÁ TRAJE LOS DATOS DESDE UN ARRAY QUE SE ENCUENTRA EN EL ARCHIVO "handmadePromise.js", EN EL CUAL DEFINO UNA PROMESA */
    /* useEffect(() => {
        getProducts
        .then(response => {setProducts(response)})
        .catch(error => alert("Ocurrió un error.")) //este error no es necesario ya que nunca va a fallar en este caso
    }, []) //Ejecuta lo que está en el then cuando hay algún cambio. 
    
    esto lo reemplazo más abajo utilizando Axios para tomar los datos desde un JSON.
    */




    //3 DISTINTAS FORMAS DE OBTENER DATOS DE UN JSON:

    /*                                                              //UTILIZANDO FETCH
    const getProductsFetch = () => {
        fetch("../JSON/DataList.json")
        .then((response) => response.json())                        //esto es para poder acceder a la información del json
        .then((data) => setProducts(data))
    } 
    
    useEffect(() => {
        setTimeout(() => getProductsFetch(), 2000);
    },[]) 
    */
   

    /*                                                              // UTILIZANDO ASYNC AWAIT
    const getProductsAA = async() => {                              //esto determina que será una función asincrónica
        const getData = await fetch ("../JSON/DataList.json");      //esto hace que se defina la constante getData, pero que espere a que se resuelva el fetch
        const data = await getData.json();                          //esto hace que se espere a que se defina getData para aplicarle el método json, sino se escribe el await se devuelve una promesa vacía
        setProducts(data)
    };

    useEffect(() => {
        setTimeout(() => getProductsAA(), 2000)
    }, []) */
   

    /*                                                              //UTILIZANDO AXIOS  => la opción más moderna y fácil  */
    const getProductAxios = async() => {
        const getAxios = await axios.get("../JSON/DataList.json");  //se invoca a axios y se designa el verbo que se quiere utilizar, en este caso un get para acceder al json
        const responseAxios = getAxios.data;                        //axios facilita el acceso a los datos, no se necesita utilizar el método json()
        setProducts(responseAxios);
        setLoading(false)
    }
    
    useEffect(() => {
        setTimeout(() => getProductAxios(), 2000)
    }, []) 

    const [loading, setLoading] = useState(true)

    if(loading){
        return (
        <>
        <Loader/>
        </>
        )
    }

    return (
        <>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer
import axios from "axios"
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"

const productoEjemplo = {
    "id":4,
    "name":"Perú",
    "description":"Auténtico café de Perú. Granos 100% arábigos de las variedades: typica, bourbon y caturra, libre de defectos. Cosechados en la zona de Cajamarca, entre abril y agosto, a 1200 m s.n.m con un proceso de secado en cama solar. Este café permite obtener una bebida de cuerpo balanceado, acidez media en boca con sabor dulce y chocolate. Presenta un aroma a frutas cítricas con notas de caña, mandarina y miel. La marca país Perú avala que este café del Perú es especial ya que tiene características inusuales, singulares y autóctonas que reflejan los encantos cautivadores de este país.",
    "preparation":"Para preparar un buen café espresso, utilizar la medida justa de café para cada pocillo (6 a 7 gr).",
    "category":"Café en Grano Tostado",
    "image":"https://www.cabrales.com/wp-content/uploads/2020/11/cabrales-peru-1000-gr.jpg"
};

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    
    useEffect(() => {
        setTimeout((setProduct(productoEjemplo)), 2000)
        console.log(product)
    }, []) 

    return(
        <>
            <ItemDetail product={product}/>
        </>
    )
}

export default ItemDetailContainer

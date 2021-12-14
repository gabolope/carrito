import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  query,
  where,
  getFirestore,
} from "../../../node_modules/firebase/firestore";
import ItemList from "./ItemList";
import Loader from "../Loader";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* const filterTostado = () => {
    const tostado = products.filter(
      (i) => i.category === "Café en Grano Tostado"
    );
    setProducts(tostado);
    };
  
  const filterEspecialidad = () => {
    const especialidad = products.filter(
      (i) => i.category === "Café de Especialidad"
    );
    setProducts(especialidad);
  }; */

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const itemsColllectionRef = collection(db, "items");
    const q = query(itemsColllectionRef);

    getDocs(q).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      {/* <button onClick={filterTostado}>Café en Grano Tostado</button>
      <button onClick={filterEspecialidad}>Café de Especialidad</button> */}
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;

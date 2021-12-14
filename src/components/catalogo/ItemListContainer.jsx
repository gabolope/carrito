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
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollectionRef = collection(db, "items");

    if (filter !== "") {
      const firestoreFilter = where("category", "==", filter);
      const q = query(itemsCollectionRef, firestoreFilter);

      getDocs(q).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      })
    }
    else {
      const q = query(itemsCollectionRef);
      
      getDocs(q).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false)
      })
    }
  }, [filter])


  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }


  return (
    <>
      <FormControl fullWidth sx={{ m: 1 }}>
        <NativeSelect
          onChange={handleChange}
          defaultValue={"Todos los productos"}
          inputProps={{
            name: 'filter',
            id: 'uncontrolled-native',
          }}
        >
          <option value={"Todos los productos"}>Todos los productos</option>
          <option value={"Café en Grano Tostado"}>Café en Grano Tostado</option>
          <option value={"Café de Especialidad"}>Café de Especialidad</option>
        </NativeSelect>
      </FormControl>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;

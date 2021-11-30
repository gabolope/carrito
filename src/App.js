import { ThemeProvider } from './contexts/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/catalogo/ItemListContainer';
import ItemDetailContainer from './components/catalogo/ItemDetailContainer';
import About from './components/About';
import NoPage from './components/NoPage'

const categories = [
  {
    "id":1,
    "name":"Inicio",
    "path":"/"
  },
  {
    "id":2,
    "name":"Productos",
    "path":"/ItemListContainer"
  },
  {
    "id":3,
    "name":"Sobre Nosotros",
    "path":"/About"
  }  
]

function App() {
  return (
      <>
 
        <ThemeProvider>
            <NavBar pageName="Coffee Queen" categories={categories}/>
            <Routes>
              <Route path="/" element={<Home greeting="Bienvenidos a Coffee Queen"/>}/>
              <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="*" element={<NoPage/>}/>
            </Routes>
        </ThemeProvider> 

      
      </>
    
  );
}

export default App;

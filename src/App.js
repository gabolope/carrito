import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/catalogo/ItemListContainer';
import { ThemeProvider } from './contexts/ThemeContext';


function App() {
  return (
      <>
      <ThemeProvider>
        <div className="App">
            <NavBar pageName="Coffee Queen"/>
            <ItemListContainer greeting="Hola Cliente!" />
        </div> 
      </ThemeProvider> 
      </>
    
  );
}

export default App;

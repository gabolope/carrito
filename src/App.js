import './App.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/private-theming';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/catalogo/ItemListContainer';

const coffeeQueen = createTheme({
  palette: {
    primary: {
      main: "#2c061f",
    },
    secondary: {
      main: "#d89216",
    },
  }
}); //TODO: arreglar esto, no me toma los temas no sé porqué


function App() {
  return (
    <ThemeProvider theme={coffeeQueen}>
      <div className="App">
          <NavBar pageName="Coffee Queen"/>
          <ItemListContainer greeting="Hola Cliente!" />
      </div> 
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/private-theming';
import Catalogo from './components/catalogo/Catalogo';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/catalogo/ItemListContainer';


const theme = createTheme({
  palette: {
    primary: {
      main: "#2c061f",
    },
    secondary: {
      main: "#d89216",
    }
  }
}); //TODO: esto no está funcionando, no me toma el tema.

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <NavBar pageName="Coffee Queen"/>
          <ItemListContainer greeting="Hola Cliente!" />
          <Catalogo/>
      </div> 
    </ThemeProvider>
  );
}

export default App;

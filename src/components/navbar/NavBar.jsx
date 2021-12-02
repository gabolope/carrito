import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget';
import Button from '@mui/material/Button';

const NavBar = ({pageName, categories}) => {
  return (
    <Box 
      sx={{ 
        flexGrow: 1
      }}>
      <AppBar position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                flexGrow: 1 
                }}>
                {pageName}
            </Typography>
          </Link>
          {categories.map(category => {
            return(
              <Link key={category.id} to={`${category.path}`}>
                <Button variant="text" color="inherit" >{category.name}</Button>
              </Link>
            )
          })}
          <Link to="/Cart">
            <CartWidget/>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar
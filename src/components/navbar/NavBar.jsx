/* import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <h1>Coffee Queen</h1>
      <CartWidget />
    </div>
  );
}

export default NavBar */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget/CartWidget'

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Coffee Queen
          </Typography>
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

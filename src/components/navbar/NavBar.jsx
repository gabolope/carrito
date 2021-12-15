import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import './NavBar.css'

const NavBar = ({pageName}) => {
  return (
    <div className='navbar'>
      <Link to="/" className="pageName">
        {pageName}
      </Link>
      <Link to="/Cart">
        <CartWidget/>
      </Link>
    </div>
  );
}

export default NavBar
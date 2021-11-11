import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import  IconButton  from '@mui/material/IconButton/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 240;

const iOS =
typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

function LeftMenu({open, onOpen, onClose}) {

    const theme = useTheme();
    
    const categoriesExample = [
        {
            id: 1,
            name: 'Inicio'
        },
        {
            id: 2,
            name: 'Productos'
        },
        {
            id:3,
            name: 'Sobre nosotros'
        },
        {
            id: 4,
            name: 'Contacto'
        },
    ]; 

    return (
        <SwipeableDrawer
            color= "primary"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    bgcolor: "#2c061f",
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    background: "secondary",
                    color: '#fff'
                },
            }}
            anchor="left"
            open={open}
            onOpen={onOpen}
            onClose={onClose}
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
        >
            <DrawerHeader>
                <IconButton onClick={onClose} sx={{color: '#fff'}}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider sx={{borderColor: 'rgba(255,255,255,0.2)'}}/>
            <List >
                {categoriesExample.map(({name}) => (
                    <ListItem button>
                        <ListItemText primary={name}/>
                    </ListItem>
                ))}
            </List>
        </SwipeableDrawer>
    );
}

export default LeftMenu;
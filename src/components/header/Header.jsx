import React from 'react'
import { useState } from 'react';
import {AppBar,Toolbar,styled,Box,IconButton,Drawer, List, } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom';
const StyledHeader = styled(AppBar)`
    background: black;
    height: 55px;
    
`
const Component = styled(Link)`
  margin-left: 60px; 
  text-decoration: none;
  color: #FFFFFF;
`;

const CustomButtonWrapper = styled(Box)`
      margin-left: 10%
      
`

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));



const Header= () => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  }

  const handleOpen = () => {
      setOpen(true);
  }

  const list = () => (
    <Box style={{ width: 380 }} onClick={handleClose}>
        <List>
            <listItem button>
                <CustomButtons />
            </listItem>
        </List>
    </Box>
);

  return (
    <StyledHeader>
         <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
        <Component to='/'>
        <FontAwesomeIcon icon={faCartShopping} />ShopEasy

        </Component>
        <Search/>

        <CustomButtonWrapper>
        <CustomButtons/>
        </CustomButtonWrapper>

        </Toolbar>
    </StyledHeader>
  )
}
export default Header;

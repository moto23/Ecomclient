import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { Box, Button, Typography, styled, Badge } from '@mui/material';
import Profile from './Profile';
import LoginDialog from '../Login/LoginDialog';

import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
    marginRight: '30px !important',
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: 15,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      color: '#2874f0',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 10,
    },
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    textAlign: 'center',
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: 'flex',
  textDecoration: 'none',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

const LoginButton = styled(Button)`
  color: black;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 3px;
  box-shadow: none;
  font-weight: 700;
  height: 32px;
  white-space: nowrap; /* Added to prevent line break */
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Hello! Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 5, width: 200 }}>Sell & Earn</Typography>
      {/* <Typography style={{ marginTop: 5 }}>More</Typography> */}
      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <FontAwesomeIcon icon={faTruckFast} />
        </Badge>
        Cart
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;

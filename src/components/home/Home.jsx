import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Product from './Product';
import ProductCase from './ProductsCase';
import { Box,styled } from '@mui/material'; // Remove 'styled' import from here
// import { getProducts } from '../../redux/actions/productActions';

import { useDispatch, useSelector } from 'react-redux';
// import { navData } from '../../constants/data';

const Component = styled(Box)`
    padding: 20px 10px;
    background: #F2F2F2;
`;
const Home = () => {
  // const { products } = useSelector((state) => state.getProducts);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  return (
    <>
      <Navbar  />
      
      <Component>

      <Box padding={1} background="#B6B6B4"> 
      <Banner />
      </Box>
      <div className="home_row">
        <Product />
        <ProductCase />        
      </div>
      
      </Component>
      
    </>
  );
};

export default Home;

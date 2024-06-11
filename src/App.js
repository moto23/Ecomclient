import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import Header from './components/header/Header';
import Home from './components/home/Home';
import GamesD from './components/DetailsLink/GamesD';
import Navbar from './components/home/Navbar';
import DealsD from './components/DetailsLink/DealsD';
import Shoptv from './components/ShowTime/tvpages/Shoptv';
import GymD from './components/DetailsLink/GymD';
import Books from './components/DetailsLink/Books';
import Product_1 from './components/ProductDetails/Gaming Acc/Product_1';
import Product_2 from './components/ProductDetails/Gaming Acc/Product_2';
import Book1 from './components/ProductDetails/Boooks/Book1';
import Book2 from './components/ProductDetails/Boooks/Book2';
import Phony from './components/home/BannerCon/Phony';
import Cart from './components/cart/Cart';
import Shoes from './components/home/BannerCon/Shoes';
import Equi from './components/ProductDetails/Fitness/Equi';
import Equipment from './components/ProductDetails/Fitness/Equipment';

function App() {
  const location = useLocation();

  const shouldRenderHeader = !location.pathname.includes('/movie');

  return (
    <DataProvider>
      {shouldRenderHeader && <Header />}
      <Box style={{ marginTop: shouldRenderHeader ? 54 : 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/page1/:1" element={<Phony />} />
          <Route path="/page2/:2" element={<Shoes />} />

          <Route path="/games" element={<GamesD />} />
          <Route path="/deal" element={<DealsD />} />
          <Route path="/movie" element={<Shoptv />} />
          <Route path="/book" element={<Books />} />
          <Route path="/gym" element={<GymD />} />
          <Route path="/mouse" element={<Product_1 />} />
          <Route path="/pad" element={<Product_2 />} />
          <Route path="/pom" element={<Book1 />} />
          <Route path="/bye" element={<Book2 />} />

          <Route path="/dum" element={<Equi />} />
          <Route path="/tm" element={<Equipment />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Box>
    </DataProvider>
  );
}

export default App;

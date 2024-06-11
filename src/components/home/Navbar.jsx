import React, { useState } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { navData } from '../../constants/data';

export const MenuItems = [
  {
    title: 'Mens Fashion',
    path: '/mensfashion',
    cName: 'dropdown-link'
  },
  {
    title: 'Womens Fashion',
    path: '/womensfashion',
    cName: 'dropdown-link'
  },
  {
    title: 'Childrens Fashion',
    path: '/childrensfashion',
    cName: 'dropdown-link'
  },
  {
    title: 'Traditional Clothing',
    path: '/traditionalclothing',
    cName: 'dropdown-link'
  }
];

const Component = styled(Box)`
  display: flex;
  margin: 60px 0px 0 0px;
  justify-content: flex;
  background-color: #36454f;
  color: #fff;
`;

const Container = styled(Box)`
  padding: 5px 81px;
  text-align: center;
  position: relative;
  cursor: pointer;
  
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  color: ${(props) => (props.isBlackTitle ? '#000' : '#fff')};
  text-color: black;
`;

const Image = styled('img')`
  width: 43px;
  margin-bottom: 5px;
`;

const ArrowIcon = styled('span')`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
`;

const SubcategoriesContainer = styled('div')`
  position: absolute;
  top: 100%;
  right: 0;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  background-color: #fff;
  color: black;
  border: 1px solid #ccc;
  padding: 5px;
`;

const Navbar = () => {
  const [isSubcategoriesVisible, setSubcategoriesVisible] = useState(false);

  const handleMouseEnter = () => {
    setSubcategoriesVisible(true);
  };

  const handleMouseLeave = () => {
    setSubcategoriesVisible(false);
  };

  const renderSubcategoriesContainer = (isVisible) => (
    <SubcategoriesContainer isVisible={isVisible}>
      {MenuItems.map((item, subIndex) => (
        <div key={subIndex}>{item.title}</div>
      ))}
    </SubcategoriesContainer>
  );

  return (
    <Component>
      {navData.map((data, index) => (
        <Container
          key={index}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={data.url} alt={data.text} />
          <Text isBlackTitle={data.title === 'Mens Fashion'}>{data.text}</Text>
          {data.text.includes('Fashion') && (
            <ArrowIcon>▼</ArrowIcon>
          )}
          {isSubcategoriesVisible && data.text.includes('Fashion') && (
            renderSubcategoriesContainer(isSubcategoriesVisible)
          )}

          
        </Container>
      ))}
    </Component>
  );
};

export default Navbar;

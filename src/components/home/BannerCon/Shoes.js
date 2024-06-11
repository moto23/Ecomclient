import React from 'react'
import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 60%;
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

export const FeaturesList = styled.ul`
  list-style-type: disc;
  margin: 10px 0;
  padding-left: 20px;
`;

export const Feature = styled.li`
  font-size: 16px;
  color: #555;
`;

export const BuyButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  background-color: #ff6600;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e65000;
  }
`;

export const AdditionalImages = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const AdditionalImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

function Shoes() {
  const product = {
    title: 'Nike Flash Shoes',
    description:
      'Experience ultimate speed with Nike Flash shoes. These high-performance running shoes feature advanced technology to help you reach your fastest pace yet.',
    features: [
      'Lightweight design for increased speed and agility.',
      'Responsive cushioning for a comfortable run.',
      'Breathable fabric to keep your feet cool and dry.',
      'Durable rubber outsole for excellent traction.',
    ],
    imageSrc: 'https://m.media-amazon.com/images/I/71+JSg40JqL._SY695_.jpg',
    additionalImages: [
      'https://m.media-amazon.com/images/I/81s7TkVJnlL._SY695_.jpg',
      'https://m.media-amazon.com/images/I/81xMCP2i9tL._SY695_.jpg',
      'https://m.media-amazon.com/images/I/81PmabBcROL._SY695_.jpg',
    ],
  };

  const handleBuyButtonClick = () => {
    // Add logic for buy button click
    console.log('Buy button clicked!');
  };
  return (
    <PageContainer>
    <ProductContainer>
      <ProductImage src={product.imageSrc} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <FeaturesList>
          {product.features.map((feature, index) => (
            <Feature key={index}>{feature}</Feature>
          ))}
        </FeaturesList>
        <BuyButton onClick={handleBuyButtonClick}>Buy Now</BuyButton>
      </ProductInfo>
    </ProductContainer>
    <AdditionalImages>
      {product.additionalImages.map((image, index) => (
        <AdditionalImage key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </AdditionalImages>
  </PageContainer>
  )
}

export default Shoes
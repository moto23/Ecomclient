import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams
// StyledComponent.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Banner = styled.div`
  background-color: #ff6600;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Timer = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
`;


const DealsD = () => {
  // Get the parameter from the route
  const { id } = useParams();

  const products = [
    {
      title: 'boAt Airdopes 170 TWS Earbuds',
      description: '50H Playtime, Quad Mics ENx™ Tech, Low Latency Mode, 13mm Drivers, ASAP™ Charge, IPX4, IWP™, Touch Controls & BT v5.3(Classic Black)',
      imageSrc: 'https://m.media-amazon.com/images/I/51YOeZehIKL._SX679_.jpg',
    },
    {
      title: 'KTRIKSHA Cotton Blend Fabric',
      description: 'Embroidery Work Kurtis for Womens This Kurtis Suitable for Leggings and Pants Daily use This Product.',
      imageSrc: 'https://m.media-amazon.com/images/I/71v5iFdLF7L._SY879_.jpg',
    },
    // Add more products as needed
  ];

  const dealEndTime = new Date().getTime() + 86400000; // Set end time to 24 hours from now

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = dealEndTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageContainer>
      <Banner>Deal of the Day</Banner>
      <Timer>
        Time remaining: {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
      </Timer>
      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductContainer key={index}>
            <ProductImage src={product.imageSrc} alt={product.title} />
            <ProductInfo>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductInfo>
          </ProductContainer>
        ))}
      </ProductsWrapper>
    </PageContainer>
  );
};

export default DealsD;

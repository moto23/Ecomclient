import React from 'react'

// components/Header.js
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export const Section = styled.section`
  padding: 230px;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const SubHeading = styled.h2`
  color: #000;
  text-align: center;
  margin: 20px 0;
`;

export const Paragraph = styled.p`
  color: #555;
  font-size: 1.1em;
  text-align: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;

  &:hover {
    background-color: #333;
  }
`;

export const ProductFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const FeatureItem = styled.li`
  margin-bottom: 10px;
`;

export const FeatureIcon = styled.span`
  margin-right: 10px;
  font-size: 1.2em;
`;

export const ProductVideo = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;


const Phony = () => {
  return (
    <div>
    <Header>
      <h1>iPhone 14 Pro</h1>
      <p>The ultimate iPhone.</p>
      <Button>Buy Now</Button>
    </Header>

    <Section>
      <Image
        src="https://images.ctfassets.net/i2qsnovxhn7q/YJERDEB3lkFG0tNGHTePU/cf060c42650a8c3666e53370722f44f1/jb-au-20220908-apple-iphone-14-pro-LEARN-MORE-carousel_HEADER_DESKTOP_HR.jpg?fm=jpg"
        alt="iPhone 14 Pro"
      />
      <SubHeading>Discover the Incredible Features</SubHeading>
      <Paragraph>Experience cutting-edge technology and design like never before.</Paragraph>
      <Button>Learn More</Button>
    </Section>

    <Section>
      <SubHeading>Key Features</SubHeading>
      <ProductFeatures>
        <FeatureItem>
          <FeatureIcon>📸</FeatureIcon> Stunning Camera System
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>⚡</FeatureIcon> Lightning Fast Performance
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon>🔋</FeatureIcon> Long-lasting Battery Life
        </FeatureItem>
        {/* Add more features */}
      </ProductFeatures>
    </Section>

    <Section>
      <SubHeading>Watch the Video</SubHeading>
      <ProductVideo>
        <iframe
          title="iPhone 14 Pro Video"
          src="https://www.youtube.com/embed/VIDEO_ID"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ProductVideo>
    </Section>
  </div>
  );
};

export default Phony;

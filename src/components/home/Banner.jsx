import React from 'react';
import Carousel from 'react-multi-carousel';
import { bannerData } from '../../constants/data';
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 280,
  [theme.breakpoints.down('sm')]: {
    objectFit: 'cover',
    height: 180,
  },
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <div>
    
      <Carousel
        responsive={responsive}
        swiprable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        className="h-[50%]"
      >

       {bannerData.map((data) => (
  <Link to={`/page1/${1}`} key={1}>
    <Image src={data.url} alt="banner" />
  </Link>
))}

{bannerData.map((data) => (
  <Link to={`/page2/${2}`} key={2}>
    <Image src={data.url} alt="banner" />
  </Link>
))}

{bannerData.map((data) => (
  <Link to={`/page3/${3}`} key={3}>
    <Image src={data.url} alt="banner" />
  </Link>
))}




      </Carousel>
      <div className="h-[50%] bg-gradient-to-b from-stone-900" />
    </div>
  );
};

export default Banner;

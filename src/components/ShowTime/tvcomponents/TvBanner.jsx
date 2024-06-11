import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './tv.css'; // Correct import statement for a CSS file named "tv.css"

function TvBanner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?s=star wars&apikey=4357bad5') // Example API request for "star wars" movies
      .then(response => response.json())
      .then(data => {
        if (data.Search) {
          setMovies(data.Search);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick}>
        Prev
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick}>
        Next
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings} className="fullscreen-slider">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="banner-container">
          <img src={movie.Poster} alt={movie.Title} className="banner-image" />
          <div className="banner-content">
            <h1 className="banner-title">{movie.Title}</h1>
            <p className="banner-description">{movie.Plot}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default TvBanner;

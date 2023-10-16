import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { data } from '../../data/index'; // Import the data object from the other file

const TrendingPlaces = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="TrendingPlaces">
        <div className="container">
          <div className="Title">
            <h2>Trending Places</h2>
          </div>

          <div className="TrendingPlacesSlider">
            <div className="owl-carousel owl-theme" id="TPSlider">
              <Carousel
                responsive={responsive}
                infinite={true}
                itemClass="carousel-item-padding-60-px"
                arrows={false}
              >
                {data.trendingPlaces.map((place, index) => (
                  <div className="carouselItem" key={index}>
                    <div className="item">
                      <div className="SliderBox">
                        <div className="SliderBoxImg">
                          <img src={place.image} alt="" />
                        </div>
                        <div className="SliderBoxContent">
                          <h3>{place.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPlaces;

import React from 'react';
import './Style/homepage.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {data} from '../../data/index'

const TopDestination = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
        <div className="TopDestination">
            <div className="container">
                <div className="Title">
                    <h2>Top Destinations</h2>
                </div>

                <div className="TopDestinationSlider">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        itemClass="carousel-item-padding-60-px"
                        arrows={false}
                    >
                        {data.topDestination.map((destination, index) => (
                            <div key={index} className="carouselItem">
                                <div className="item">
                                    <div className="SliderBox">
                                        <div className="SliderBoxImg">
                                            <img src={destination.imgSrc} alt="" />
                                        </div>
                                        <div className="SliderBoxContent">
                                            <h3>{destination.title}</h3>
                                            <p>{destination.trips} Trips</p>
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
    );
}

export default TopDestination;

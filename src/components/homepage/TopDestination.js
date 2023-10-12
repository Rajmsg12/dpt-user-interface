import React from 'react';
import '../../Style/header.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
                        <Carousel   responsive={responsive} infinite={true}
                        itemClass="carousel-item-padding-60-px" arrows={false}
                        >
                        
                            <div className="carouselItem">
                                <div className="item">
                                    <div className="SliderBox">
                                        <div className="SliderBoxImg">
                                            <img src="images/homepage/tdimg1.jpg" alt="" />
                                        </div>
                                        <div className="SliderBoxContent">
                                            <h3>Dubai Private City</h3>
                                            <p>9 Trips</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carouselItem">
                                <div className="item">
                                    <div className="SliderBox">
                                        <div className="SliderBoxImg">
                                            <img src="images/homepage/tdimg2.jpg" alt="" />
                                        </div>
                                        <div className="SliderBoxContent">
                                            <h3>Burj Al Arab</h3>
                                            <p>9 Trips</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carouselItem">
                                <div className="item">
                                    <div className="SliderBox">
                                        <div className="SliderBoxImg">
                                            <img src="images/homepage/tdimg3.jpg" alt="" />
                                        </div>
                                        <div className="SliderBoxContent">
                                            <h3>Dubai Air Travel</h3>
                                            <p>9 Trips</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carouselItem">
                                <div className="item">
                                    <div className="SliderBox">
                                        <div className="SliderBoxImg">
                                            <img src="images/homepage/tdimg4.jpg" alt="" />
                                        </div>
                                        <div className="SliderBoxContent">
                                            <h3>Abu Dhabi Combo</h3>
                                            <p>9 Trips</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopDestination;

import React from 'react'
import 'swiper/css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TrendingPlaces = () => {
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
    
            <div class="TrendingPlaces">
                <div class="container">
                    <div class="Title">
                        <h2>Trending Places</h2>
                    </div>

                    <div class="TrendingPlacesSlider">
                        <div class="owl-carousel owl-theme" id="TPSlider">
                        <Carousel   responsive={responsive} infinite={true}
                        itemClass="carousel-item-padding-60-px" arrows={false}
                        >
                                <div className="carouselItem">
                                    <div class="item">
                                        <div class="SliderBox">
                                            <div class="SliderBoxImg">
                                                <img src="images/homepage/tdimg1.jpg" alt=""/>
                                            </div>
                                            <div class="SliderBoxContent">
                                                <h3>Dubai Private City</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carouselItem">
                                    <div class="item">
                                        <div class="SliderBox">
                                            <div class="SliderBoxImg">
                                                <img src="images/homepage/tdimg2.jpg" alt=""/>
                                            </div>
                                            <div class="SliderBoxContent">
                                                <h3>Burj Al Arab</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carouselItem">
                                    <div class="item">
                                        <div class="SliderBox">
                                            <div class="SliderBoxImg">
                                                <img src="images/homepage/tdimg3.jpg" alt=""/>
                                            </div>
                                            <div class="SliderBoxContent">
                                                <h3>Dubai Air Travel</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carouselItem">
                                    <div class="item">
                                        <div class="SliderBox">
                                            <div class="SliderBoxImg">
                                                <img src="images/homepage/tdimg4.jpg" alt=""/>
                                            </div>
                                            <div class="SliderBoxContent">
                                                <h3>Abu Dabi Combo</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default TrendingPlaces

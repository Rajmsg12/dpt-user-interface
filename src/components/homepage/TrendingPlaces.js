import React from 'react'
import '../../Style/header.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TrendingPlaces = () => {
    return (
        <div>
    
            <div class="TrendingPlaces">
                <div class="container">
                    <div class="Title">
                        <h2>Trending Places</h2>
                    </div>

                    <div class="TrendingPlacesSlider">
                        <div class="owl-carousel owl-theme" id="TPSlider">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={4}
                                loop={true}  // Enable infinite loop
                                loopAdditionalSlides={10}  // Add additional slides for looping
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                className="mySwiper"
                            >
                                <SwiperSlide>
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
                                </SwiperSlide>
                                <SwiperSlide>
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
                                </SwiperSlide>
                                <SwiperSlide>
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
                                </SwiperSlide>
                                <SwiperSlide>
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
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default TrendingPlaces

import React from 'react'
import '../../Style/header.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PopularTour = () => {
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

            <div class="PopularTours">
                <div class="container">
                    <div class="Title">
                        <h2>Popular Tours</h2>
                    </div>



                    <div class="PopularToursSlider">
                        <div class="owl-carousel owl-theme" id="PopularToursSlider">
                        <Carousel   responsive={responsive} infinite={true}
                        itemClass="carousel-item-padding-60-px" arrows={false}
                        >
                                <div className="carouselItem">
                                    <div class="item">
                                        <div class="TabBox">
                                            <div class="img">
                                                <img src="images/homepage/ptimg1.jpg" alt="" />
                                                <div class="discountrow">
                                                    <div class="discount">
                                                        <span>-10%</span>
                                                    </div>
                                                    <div class="wishlistIcon">
                                                    </div>
                                                </div>


                                                <div class="imgBottomRow">
                                                    <div class="lhstext">
                                                        <span>#3</span>
                                                        <span>Top Dubai Creek Dhow Experience</span>
                                                    </div>
                                                    <div class="rhsimg">
                                                        <div>

                                                            <img src="images/homepage/choise3.png" alt="" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                            <div class="TabBoxBody">
                                                <h4>Dubai Creek Dhow Dinner Cruise</h4>
                                                <p>Enjoy smooth sailing along the creek as night falls with spectacular glittering views.</p>
                                                <div class="ReviewRow">
                                                    <span class="location">Dubai, United Arab Emirates</span>
                                                </div>
                                            </div>
                                            <div class="TabBoxFooter">
                                                <div class="aedLHS">
                                                    <span>Starting from</span>
                                                    <div class="aedtext">AED <strong>275</strong> Per Person </div>
                                                </div>
                                                <div class="aedRHS">
                                                    2 Hours
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carouselItem">
                                    <div class="item">
                                        <div class="TabBox">
                                            <div class="img">
                                                <img src="images/homepage/ptimg2.jpg" alt="" />
                                                <div class="discountrow">
                                                    <div class="discount">

                                                    </div>
                                                    <div class="wishlistIcon">
                                                    </div>
                                                </div>


                                                <div class="imgBottomRow">

                                                    <div class="rhsimg">
                                                        <div>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                            <div class="TabBoxBody">
                                                <h4>Tandem Skydive</h4>
                                                <p>A tandem skydive is the quickest and easiest way to experience. </p>
                                                <div class="ReviewRow">
                                                    <span class="location">Dubai, United Arab Emirates</span>
                                                </div>
                                            </div>
                                            <div class="TabBoxFooter">
                                                <div class="aedLHS">
                                                    <span>Starting from</span>
                                                    <div class="aedtext">AED <strong>2,199</strong> Per Person </div>
                                                </div>
                                                <div class="aedRHS">
                                                    4 Hours
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carouselItem">
                                    <div class="item">
                                        <div class="TabBox">
                                            <div class="img">
                                                <img src="images/homepage/ptimg3.jpg" alt="" />
                                                <div class="discountrow">
                                                    <div class="discount">
                                                        <span>-10%</span>
                                                    </div>
                                                    <div class="wishlistIcon">
                                                    </div>
                                                </div>


                                                <div class="imgBottomRow">
                                                    <div class="lhstext">
                                                        <span>#5</span>
                                                        <span>Top Dubai Creek Dhow Experience</span>
                                                    </div>
                                                    <div class="rhsimg">
                                                        <div>

                                                            <img src="images/homepage/choise1.png" alt="" />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                            <div class="TabBoxBody">
                                                <h4>6 Hours Dubai Private City Tour</h4>
                                                <p>Our six hour trip is especially designed for any tourist or visitor on a short stay.</p>
                                                <div class="ReviewRow">
                                                    <span class="location">Dubai, United Arab Emirates</span>
                                                </div>
                                            </div>
                                            <div class="TabBoxFooter">
                                                <div class="aedLHS">
                                                    <span>Starting from</span>
                                                    <div class="aedtext">AED <strong>1,020</strong> Per Person </div>
                                                </div>
                                                <div class="aedRHS">
                                                    6 Hours
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carouselItem">
                                    <div class="item">
                                        <div class="TabBox">
                                            <div class="img">
                                                <img src="images/homepage/ptimg4.jpg" alt="" />
                                                <div class="discountrow">
                                                    <div class="discount">
                                                        <span>-15%</span>
                                                    </div>
                                                    <div class="wishlistIcon">
                                                    </div>
                                                </div>


                                                <div class="imgBottomRow">
                                                    <div class="lhstext">

                                                    </div>
                                                    <div class="rhsimg">
                                                        <div>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                            <div class="TabBoxBody">
                                                <h4>3 Hours Morning Desert Safari </h4>
                                                <p>The Morning Safari is organized daily throughout the week.</p>
                                                <div class="ReviewRow">
                                                    <span class="location">Dubai, United Arab Emirates</span>
                                                </div>
                                            </div>
                                            <div class="TabBoxFooter">
                                                <div class="aedLHS">
                                                    <span>Starting from</span>
                                                    <div class="aedtext">AED <strong>875</strong> upto 4 people </div>
                                                </div>
                                                <div class="aedRHS">
                                                    3 Hours
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default PopularTour

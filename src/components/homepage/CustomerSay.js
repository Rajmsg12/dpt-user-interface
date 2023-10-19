import React from 'react'
import { Link } from 'react-router-dom'
import './Style/homepage.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomerSay = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>

            <div className="customersays">
                <div className="container">
                    <div className="Title">
                        <h2>What our customer says!</h2>
                    </div>
                    <div className="customersaysrow">
                        <div className="customersaylhs">
                            <div className="customersayText">
                                <div className="topimg">
                                    <img src="images/homepage/Tripadvisorlogo.png" alt="" />
                                </div>
                                <h4>Dubai Private Tour</h4>
                                <div className="rating">
                                    <span className="Recentrating">
                                        Recent Traveler Rating
                                    </span>
                                    <div className="reviewtwxt">
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                        <span>2,444 Revies</span>
                                    </div>
                                </div>

                                <div className="Ranking">
                                    <span>
                                        Tripadvisor Ranking
                                    </span>
                                    <h5>#112 of 2070 Outdoor activities in dubai</h5>
                                </div>
                                <div className="Recent">
                                    <span>Recent Travelers Reviews</span>
                                    <p>“Happy with their timely response and I got cheaper tickets from any other site.”</p>
                                    <p>“Best Service And Support Guidance Fast Booking.”</p>
                                </div>
                                <div className="link">
                                    <Link to="#">Read reviews </Link>
                                    <Link to="#">Write a review</Link>
                                </div>
                            </div>
                        </div>

                        <div className="customersayrhs">
                            <div className="customersaySlider">
                                <div className="owl-carousel owl-theme" id="testiSlider">
                                    <Carousel responsive={responsive} infinite={true} arrows={false}
                                        itemclassName="carousel-item-padding-60-px"
                                    >
                                        <div>
                                            <div className="item">
                                                <div className="SliderBox">
                                                    <div className="text">
                                                        <p>What a wonderful afternoon it would have been had we fully completed the tour. (My elderly
                                                            father became a little overwhelmed with the heat in particular, and so we made the decision to
                                                            cut the experience short). We cannot fault our guide Zeeba, and our driver Suhas. They were
                                                            quick thinking and accommodated our needs. Zeeba was very informative during the tour, and she
                                                            was especially kind when she physically assisted my father. Suhas drove closer where possible,
                                                            to minimise my father having to walk on sometimes uneven ground in the heat, when it became
                                                            clear that my father was struggling. My mother and I are very appreciative of their support. A
                                                            big thank you to Zeeba and Suhas.</p>
                                                    </div>
                                                    <div className="ratingstar">
                                                        <div className="starimg">
                                                            <img src="images/homepage/ratingstar.png" alt="" />
                                                        </div>
                                                        <h4>Roshnee Chudoory</h4>
                                                        <span>United Kingdom</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="item">
                                                <div className="SliderBox">
                                                    <div className="text">
                                                        <p>What a wonderful afternoon it would have been had we fully completed the tour. (My elderly
                                                            father became a little overwhelmed with the heat in particular, and so we made the decision to
                                                            cut the experience short). We cannot fault our guide Zeeba, and our driver Suhas. They were
                                                            quick thinking and accommodated our needs. Zeeba was very informative during the tour, and she
                                                            was especially kind when she physically assisted my father. Suhas drove closer where possible,
                                                            to minimise my father having to walk on sometimes uneven ground in the heat, when it became
                                                            clear that my father was struggling. My mother and I are very appreciative of their support. A
                                                            big thank you to Zeeba and Suhas.</p>
                                                    </div>
                                                    <div className="ratingstar">
                                                        <div className="starimg">
                                                            <img src="images/homepage/ratingstar.png" alt="" />
                                                        </div>
                                                        <h4>Roshnee Chudoory</h4>
                                                        <span>United Kingdom</span>
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
            </div>
        </div>
    )
}

export default CustomerSay

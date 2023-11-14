import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Style/header.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomerSay = () => {
    const [testimonials, setTestimonials] = useState([]);

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://127.0.0.1:9900/testimonial/list');
                const data = await response.json();
                setTestimonials(data.data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

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
                                    <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697702089/Tripadvisorlogo_cc6y9z.png"} alt="" />
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
                                    <Carousel responsive={responsive} infinite={true} arrows={false} itemclassName="carousel-item-padding-60-px">
                                        {testimonials.map((testimonial) => (
                                            <div key={testimonial.id}>
                                                <div className="item">
                                                    <div className="SliderBox">
                                                        <div className="text">
                                                            <p>{JSON.parse(testimonial.description).blocks[0].text}</p>
                                                        </div>
                                                        <div className="ratingstar">
                                                            <div className="starimg">
                                                                <img src="images/homepage/ratingstar.png" alt="" />
                                                            </div>
                                                            <h4>{testimonial.name}</h4>
                                                            <span>{testimonial.country}</span>
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
            </div>
        </div>
    );
};

export default CustomerSay;

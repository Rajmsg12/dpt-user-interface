import React, { useState, useEffect } from 'react'
import '../../Style/header.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { data } from '../../data/index'
import { Link } from 'react-router-dom'

const PopularTour = () => {
    const [popular, setPopular] = useState([]);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:9900/populartours/list');
                const result = await response.json();
                if (result.status === 'success') {
                    setPopular(result.data);
                } else {
                    console.error('Error fetching popular tours:', result.message);
                }
            } catch (error) {
                console.error('Error fetching popular tours:', error);
            }
        };
    
        fetchData();
    }, []);
    

    return (
        <div>
            <div className="PopularTours">
                <div className="container">
                    <div className="Title">
                        <h2>Popular Tours</h2>
                    </div>
                    <div className="PopularToursSlider">
                        <Carousel responsive={responsive} infinite={true} itemclassName="carousel-item-padding-60-px" arrows={false}>
                            {popular.map((tour) => (
                                <div className="carouselItem" key={tour.id}>
                                    <div className="item">
                                        <Link to={`/plan/${tour.slug}`} className="TabBox">
                                            <div className="img">
                                                <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1698211165/product3_nc0kot.jpg"} alt="" />
                                                {tour.discount && (
                                                    <div className="discountrow">
                                                        <div className="discount">
                                                            <span>{`${tour.discount}%`}</span>
                                                        </div>
                                                        <div className="wishlistIcon"></div>
                                                    </div>
                                                )}
                                                <div className="imgBottomRow">
                                                    <div className="lhs-text">
                                                        {tour.imgBottomRow && (
                                                            <span>{tour.imgBottomRow.lhsText}</span>
                                                        )}
                                                        <div className="lhstext">
                                                            <span>{tour.hastag}</span>
                                                            <span>{tour.hastagHeading}</span>
                                                        </div>
                                                    </div>
                                                    <div className="rhsimg">
                                                        {tour.imgBottomRow && (
                                                            <div>
                                                                <img src={tour.imgBottomRow.rhsimg} alt="" />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="TabBoxBody">
                                                <h4>{tour.tour_name}</h4>
                                                <p>{tour.intro}</p>
                                                <div className="ReviewRow">
                                                {tour.destination_info && tour.destination_info.length > 0 && (
                                                    <span className="location">{tour.destination_info[0].name}</span>
                                                  )}
                                                </div>
                                            </div>
                                            <div className="TabBoxFooter">
                                                <div className="aedLHS">
                                                    <span>Starting from</span>
                                                    <div className="aedtext">AED <strong>{tour.tour_price_aed}</strong> Per {tour.person} Person</div>
                                                </div>
                                                <div className="aedRHS">
                                                    {tour.tour_duration}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularTour

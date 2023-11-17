import React, { useState, useEffect } from 'react'
import '../../Style/header.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { connect } from 'react-redux';
import { data } from '../../data/index'
import { Link } from 'react-router-dom'

const PopularTour = ({ selectedCurrency }) => {
    const [popular, setPopular] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState(null);
    const [userDiscount, setUserDiscount] = useState(null);

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


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch('http://127.0.0.1:9900/welcome', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setUserType(data.data.user_type); // Set user type from login API
                    setUserDiscount(data.data.discount); // Set user discount from login API
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        }
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
                                                <img src={`http://127.0.0.1:8800/data/uploads/${tour.image}`} alt="" />
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
                                                    {isLoggedIn ? (
                                                        <div className="aedtext">
                                                            {selectedCurrency === "AED" ? (
                                                                <span>AED</span>
                                                            ) : (
                                                                <span>USD</span>
                                                            )}
                                                            <strong>{getUserPrice(tour)}</strong> Per {tour.person} Person
                                                        </div>
                                                    ) : (
                                                        <div className="aedtext">
                                                            {selectedCurrency === "AED" ? (
                                                                <span>AED</span>
                                                            ) : (
                                                                <span>USD</span>
                                                            )}
                                                            <strong>{getUserPrice(tour)}</strong> Per {tour.person} Person
                                                        </div>
                                                    )}
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
    function getUserPrice(tour) {
        let price = 0;
    
        if (userType === 2) {
            // Agent user type
            price =
                selectedCurrency === "AED"
                    ? tour.tour_price_aed - (tour.tour_price_aed * userDiscount) / 100
                    : tour.tour_price_usd - (tour.tour_price_usd * userDiscount) / 100;
        } else if (userType === 3) {
            // Normal user type
            price = selectedCurrency === "AED" ? tour.tour_price_aed : tour.tour_price_usd;
        } else {
            // Default case (handle other user types if needed)
            price = selectedCurrency === "AED" ? tour.tour_price_aed :  tour.tour_price_usd;
        }
    
        // Remove decimal part
        return Math.floor(price);
    }

}
const mapStateToProps = (state) => ({
    selectedCurrency: state.currency.selectedCurrency,
    // ... (other state mappings)
});

export default connect(mapStateToProps)(PopularTour);

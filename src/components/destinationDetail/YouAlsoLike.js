import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Style/TourPage.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { data } from '../../data/index'
import config from '../../config';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const YouAlsoLike = ({selectedCurrency}) => {
    const [tourData, setTourData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState(null);
    const [userDiscount, setUserDiscount] = useState(null);
    const navigate = useNavigate()
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
                const response = await fetch(`${config.baseUrl}/tour-list`);
                const data = await response.json();
                setTourData(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch(`${config.baseUrl}/welcome`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setUserType(data.data.user_type); // Set user type from login API
                    setUserDiscount(data.data.discount);

                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        }
    }, []);
    const [clickedTourId, setClickedTourId] = useState(null);
    const addToWishlist = async (tourId) => {
      console.log('Adding to wishlist:', tourId); // Check if function is triggered
  
      try {
          const token = localStorage.getItem("token");
          if (token) {
              const requestBody = {
                  tour_id: tourId // Setting tour.id as tour_id in the request body
              };
  
              const response = await fetch(`${config.baseUrl}/wishlist/add`, {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify(requestBody),
              });
  
              if (response.ok) {
                  // Wishlist addition successful
                  console.log('Tour added to wishlist!');
                  setClickedTourId(tourId); // Update clickedTourId for changing icon appearance
                  navigate("/wishlist");
              } else {
                  // Handle errors if the addition fails
                  console.error('Failed to add tour to wishlist');
              }
          } else {
              console.error('User not logged in.'); // Log if the user is not logged in
              // You might want to handle this scenario by redirecting the user to the login page or showing a message
          }
      } catch (error) {
          console.error('Error adding tour to wishlist:', error);
      }
  };


    return (
        <>
            <div className="PopularTours">
                <div className="container">
                    <div className="Title">
                        <h2>you may also like</h2>
                    </div>
                    <div className="PopularToursSlider">
                        <Carousel responsive={responsive} infinite={true} itemclassName="carousel-item-padding-60-px" arrows={false}>
                        {tourData.map((tour, index) => (
                            <div className="carouselItem" key={tour.id}>
                            <div className="item">
                                <Link to={`/plan/${tour.slug}`} className="TabBox">
                                    <div className="img">
                                        <img src={`${config.imageUrl}/${tour.image}`} alt="" />
                                        {tour.discount && (
                                            <div className="discountrow">
                                                <div className="discount">
                                                    <span>{`${tour.discount}%`}</span>
                                                </div>
                                                <div className="wishlistIcon" onClick={() => addToWishlist(tour.id)}></div>
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

                                                {tour.sticker_info[0].id === '1' && (
                                                    <img
                                                        src="https://res.cloudinary.com/dqslvlm0d/image/upload/v1698211949/choise2_hxevxq.png"
                                                        alt=""
                                                    />
                                                )}
                                                {tour.sticker_info[0].id === '2' && (
                                                    <img
                                                        src="https://res.cloudinary.com/dqslvlm0d/image/upload/v1698211948/choise1_yir4hd.png"
                                                        alt=""
                                                    />
                                                )}
                                                {tour.sticker_info[0].id === '3' && (
                                                    <img
                                                        src="https://res.cloudinary.com/dqslvlm0d/image/upload/v1698211949/choise3_u3nlou.png"
                                                        alt=""
                                                    />
                                                )}
                                                {tour.sticker_info.length > 1 && (
                                                    <img
                                                        src={tour.sticker_info[1].id}
                                                        alt=""
                                                    />
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
        </>
        
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
            price = selectedCurrency === "AED" ? tour.tour_price_aed : tour.tour_price_usd;
        }

        // Remove decimal part
        return Math.floor(price);
    }

}
const mapStateToProps = (state) => ({
    selectedCurrency: state.currency.selectedCurrency,
    // ... (other state mappings)
});

export default connect(mapStateToProps)(YouAlsoLike);


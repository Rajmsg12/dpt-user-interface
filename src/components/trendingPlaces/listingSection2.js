import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/TourListing.css';
import LeftSideFilter from './LeftSideFilter';
import { useParams } from 'react-router-dom';
import config from '../../config';
import { connect } from 'react-redux';


const ListingSection = ({ selectedCurrency }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 5000]);
  const [selectedDurationFilter, setSelectedDurationFilter] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState(null);
  const [activeTab, setActiveTab] = useState("pills-grid");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [userDiscount, setUserDiscount] = useState(null);
  const [clickedTourId, setClickedTourId] = useState(null);
  const navigate = useNavigate()
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


  const itemsPerPage = 9;
  
  const handleToggleSidebarMenu = () => {
    setIsSidebarMenuOpen((prevIsSidebarMenuOpen) => !prevIsSidebarMenuOpen);
  };

  const handleCloseSidebar = () => {
    console.log('Closing sidebar');
    setIsSidebarMenuOpen(false);
  };



  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;



  const handleDurationFilterChange = (duration) => {
    setSelectedDurationFilter(duration);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePriceFilter = (newPriceRange) => {
    setSelectedPriceRange(newPriceRange);
  };

  const handleRatingFilterChange = (rating) => {
    setSelectedRatingFilter((prevRating) => {
      // If the same rating is clicked again, unselect it
      if (prevRating === rating) {
        return null;
      }
      // Otherwise, select the new rating
      return rating;
    });
  };

  const categoryList = data.CategoryList || [];

  // Filter items based on the selected price range
  const url = window.location.href;
  const spliturl = url.split("/");
  const slug = spliturl[4];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.baseUrl}/emirates/${slug}`);
        const result = await response.json();
        if (result.status === 'success' && result.length > 0) {
          setApiData(result.data[0]);
        } else {
          console.error('Failed to fetch data from the API');
        }
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
          setUserDiscount(data.data.discount); // Set user discount from login API
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const { title } = useParams();
  const formattedTitle = title
    .split('-') // Split by hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' ');

  const filteredData = data.filter((tour) => {
    const tourPrice = parseInt(tour.tour_info.replace(',', ''));
    
    const tourRating = parseInt(tour.rating);

    if (
      selectedDurationFilter &&
      selectedDurationFilter.includes(tour.duration)
    ) {
      return (
        tourPrice >= selectedPriceRange[0] &&
        tourPrice <= selectedPriceRange[1] &&
        tourRating >= selectedRatingFilter
      );
    } else if (!selectedDurationFilter) {
      return (
        tourPrice >= selectedPriceRange[0] &&
        tourPrice <= selectedPriceRange[1] &&
        tourRating >= selectedRatingFilter
      );
    }
    return false; 
  });

  if (!apiData) {
    return <p>Loading...</p>;
  }
  const itemsToShow = apiData.tour_info;
  console.log(itemsToShow)

  return (
    <div>
    <div className="listingPage">
      <div className="container">
        <div className="listingPageWrapper">
          <LeftSideFilter
            handlePriceFilter={handlePriceFilter}
            priceRange={selectedPriceRange}
            handleRatingFilterChange={handleRatingFilterChange}
            selectedRatingFilter={selectedRatingFilter}
            handleDurationFilterChange={handleDurationFilterChange}
          />

          <div className="listingRhs">
            <div className="listingGridTab">
              <div className="listingToplayer">
                <div className="productactive">50 activities found</div>
                <div>
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <div className="filterDiv"></div>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-grid-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-grid"
                        type="button"
                        role="tab"
                        aria-controls="pills-grid"
                        aria-selected="false"
                      >
                        Grid <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1698211736/grid_emrbiy.png"} alt="" />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-listing-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-listing"
                        type="button"
                        role="tab"
                        aria-controls="pills-listing"
                        aria-selected="true"
                      >
                        <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1698211812/list_k2k6ct.png"} alt="" />
                        Listing
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContentlisting">
                <div className="tab-pane fade" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
                  <div className="listingRow GridRowWrapper">
                    {filteredData.length > 0 ? (
                      itemsToShow.map((tour) => (
                        <Link to={`${tour.title.toLowerCase().replace(/\s+/g, '-')}`} className="TabBox" key={`grid-${tour.id}`}>
                          <div className="img">
                          <img src={`${config.imageUrl}/${tour.tour_image}`} alt="" />
                            <div className="discountrow">
                              <div className="discount">
                                <span>{tour.tour_discount}</span>
                              </div>
                              <div className="wishlistIcon"></div>
                            </div>
                            <div className="imgBottomRow">
                              <div className="lhstext">
                                <span>{tour.tour_hastag}</span>
                              </div>
                              <div className="rhsimg">
                                <div>
                                  <img src={tour.logo1} alt="" />
                                  <img src={tour.logo2} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="TabBoxBody">
                            <h4>{tour.Tour_name}</h4>
                            <p>{tour.tour_intro}</p>
                            <div className="ReviewRow">
                              <span className="location">{tour.location}</span>
                            </div>
                          </div>
                          <div className="TabBoxFooter">
                            <div className="aedLHS">
                              <span>Starting from</span>
                              <div className="aedtext">
                                AED <strong>{tour.tour_tour_price_aed}</strong> up to {tour.person} people
                              </div>
                            </div>
                            <div className="aedRHS">{tour.duration}</div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p>No items within the selected price range.</p>
                    )}
                  </div>
                </div>
                <div className="tab-pane fade show active" id="pills-listing" role="tabpanel" aria-labelledby="pills-listing-tab">
                  <div className="listingRow">
                    {itemsToShow.map((tour) => (
                      <Link to={`${tour.Tour_name.toLowerCase().replace(/\s+/g, '-')}`} className="listingBox" key={`listing-${tour.id}`}>
                        <div className="listingBoxImg">
                        <img src={`${config.imageUrl}/${tour.tour_image}`} alt="" />
                          <div className="discountrow">
                            <div className="discount">
                              <span>{tour.tour_discount}</span>
                            </div>
                            <div className="wishlistIcon"></div>
                          </div>
                          <div className="imgBottomRow">
                            <div className="lhstext">
                              <span>{tour.tour_hastag}</span>
                            </div>
                            <div className="rhsimg">
                              <div>
                                <img src={tour.logo1} alt="" />
                                <img src={tour.logo2} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listingBoxContent">
                          <div className="listingBoxTop">
                            <h4>{tour.Tour_name}</h4>
                            <div className="ReviewsDivrow">
                              <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697704991/ratingstar_p0ani1.png"} alt="" />
                              <span>{tour.rating} | 500 Reviews</span>
                            </div>
                            <div className="descrition">
                              <p>{tour.tour_intro}</p>
                            </div>
                          </div>
                          <div className="listingBoxFooter">
                            <div className="listboxlhs">
                              <span>Free Cancellation</span>
                              <span>6 Days</span>
                            </div>
                            <div className="listboxrhs">
                              <div className="startingFromTag">Starting from</div>
                              <div className="price">
                                AED <strong>{tour.tour_tour_price_aed}</strong> Per {tour.person} Person
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="paginationSec">
                <nav aria-label="...">
                  <ul className="pagination">
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>

                      <Link
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                        to="#"
                      >
                        Previous
                      </Link>
                    </li>
                    {[...Array(totalPages)].map((_, page) => (
                      <li
                        key={page}
                        className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}
                      >
                        <Link
                          className="page-link"
                          onClick={() => handlePageChange(page + 1)}
                          to="#"
                        >
                          {page + 1}
                        </Link>
                      </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>

                      <Link
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                        to="#"
                      >
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  function getUserPrice(tour) {
    let price = 0;

    if (userType === 2) {
      // Agent user type
      price =
        selectedCurrency === "AED"
          ? tour.tour_tour_price_aed - (tour.tour_tour_price_aed * userDiscount) / 100
          : tour.tour_tour_price_usd - (tour.tour_tour_price_usd * userDiscount) / 100;
    } else if (userType === 3) {
      // Normal user type
      price = selectedCurrency === "AED" ? tour.tour_tour_price_aed : tour.tour_tour_price_usd;
    } else {
      // Default case (handle other user types if needed)
      price = selectedCurrency === "AED" ? tour.tour_tour_price_aed : tour.tour_tour_price_usd;
    }

    // Remove decimal part
    return Math.floor(price);
  }

}
const mapStateToProps = (state) => ({
  selectedCurrency: state.currency.selectedCurrency,
  // ... (other state mappings)
});

export default connect(mapStateToProps)(ListingSection);

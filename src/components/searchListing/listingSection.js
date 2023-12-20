import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Styles/TourListing.css';
import LeftSideFilter from './LeftSideFilter';
import config from '../../config';
import { useNavigate } from 'react-router-dom';


const ListingSection = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 5000]);
  const [selectedDurationFilter, setSelectedDurationFilter] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState(null);
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);

  const navigate = useNavigate()
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
  const splitUrl = url.split("/");
  const slug = splitUrl[4];
  
  // Split the slug into words using hyphen as the separator
  const words = slug.split('-');
  
  // Capitalize the first letter of each word and join them with a space
  const convertedText = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  

  // ... (previous code)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchQuery = `${convertedText}`;
        const response = await fetch(`${config.baseUrl}/search`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ search: searchQuery }),
        });
        const result = await response.json();
        if (result.status === 'success' && result.length > 0) {
          setApiData(result.data);

        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);




  const filteredData = data.filter((tour) => {
    const tourPrice = parseInt(tour.tour_info.replace(',', ''));
    console.log(tourPrice)
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
    return false; // Exclude items that don't match the duration filter
  });
  // const itemsToShow = filteredData.slice(startIndex, endIndex);
  console.log(filteredData)

  const itemsToShow = apiData;

  if (!apiData) {
    return <p>No Data Found</p>;
  }
  
  
  return (
    <div>
    <div className={`body ${isSidebarMenuOpen ? 'sidebarMenuOpen' : ''} listingPage`}>
        <div className="container">
          <div className="listingPageWrapper">
          <LeftSideFilter
          handlePriceFilter={handlePriceFilter}
          priceRange={selectedPriceRange}
          handleRatingFilterChange={handleRatingFilterChange}
          selectedRatingFilter={selectedRatingFilter}
          handleDurationFilterChange={handleDurationFilterChange}
          handleCloseSidebar={handleCloseSidebar}
        />

        <div className="listingRhs">
        <div className="listingGridTab">
          <div className="listingToplayer">
            <div className="productactive">{apiData.length} activities found</div>

            <div>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <div className="filterDiv" onClick={handleToggleSidebarMenu}></div>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
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
                    className="nav-link "
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
            <div className="tab-pane fade  show active" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
              <div className="listingRow GridRowWrapper">
                {itemsToShow.map((tour) => (
                  <Link to={`${tour.slug}`} className="TabBox" key={`grid-${tour.slug}`}>

                    <div className="img">
                      <img src={`${config.imageUrl}/${tour.image}`} alt="" />
                      <div className="discountrow">
                        <div className="discount">
                          <span>{tour.discount} %</span>
                        </div>
                        <div className="wishlistIcon" onClick={() => addToWishlist(tour.id)}></div>
                      </div>
                      <div className="imgBottomRow">
                        <div className="lhstext">
                          <span>{tour.hastag}</span>
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
                        <span className="location">{tour.destination_info[0].name}</span>
                      </div>
                    </div>
                    <div className="TabBoxFooter">
                      <div className="aedLHS">
                        <span>Starting from</span>
                        <div className="aedtext">
                          AED <strong>{tour.tour_price_aed}</strong> up to {tour.person} people
                        </div>
                      </div>
                      <div className="aedRHS">{tour.tour_duration}</div>
                    </div>
                  </Link>
                ))
                }
              </div>
            </div>
            <div className="tab-pane fade" id="pills-listing" role="tabpanel" aria-labelledby="pills-listing-tab">
              <div className="listingRow">
                {itemsToShow.map((tour) => (
                  <Link to={`${tour.tour_slug}`} className="listingBox" key={`listing-${tour.tour_slug}`}>
                    <div className="listingBoxImg">
                      <img src={`${config.imageUrl}/${tour.image}`} alt="" />
                      <div className="discountrow">
                        <div className="discount">
                          <span>{tour.discount} %</span>
                        </div>
                        <div className="wishlistIcon"></div>
                      </div>
                      <div className="imgBottomRow">
                        <div className="lhstext">
                          <span>{tour.hastag}</span>
                        </div>
                        <div className="rhsimg">
                          <div>
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
                    </div>
                    <div className="listingBoxContent">
                      <div className="listingBoxTop">
                        <h4>{tour.tour_name}</h4>
                        <div className="ReviewsDivrow">
                          <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697704991/ratingstar_p0ani1.png"} alt="" />
                          <span>5 | 500 Reviews</span>
                        </div>
                        <div className="descrition">
                          <p>{tour.intro}</p>
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
                            AED <strong>{tour.tour_price_aed}</strong> {tour.no_of_pax}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
       {/*}   <div className="paginationSec">
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
          </div>*/}
        </div>
      </div>
    </div>
  </div>
  <div className="menuOverlay"></div>
</div>
</div>
);
};

export default ListingSection;

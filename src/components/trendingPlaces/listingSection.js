import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Styles/TourListing.css';
import LeftSideFilter from './LeftSideFilter';


const ListingSection = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 5000]);
  const [selectedDurationFilter, setSelectedDurationFilter] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState(null);

  const itemsPerPage = 9;


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
  console.log(slug)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:9900/destination/${slug}`);
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

  if (!apiData) {
    return <p>Loading...</p>;
  }

  const itemsToShow = apiData.tour_info;
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
                <div className="productactive">{filteredData.length} activities found</div>

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
                   {
                      itemsToShow.map((tour) => (
                          <Link to={`${tour.tour_slug}`} className="TabBox" key={`grid-${tour.tour_slug}`}>
                            <div className="img">
                              <img src={`http://127.0.0.1:8800/data/uploads/${tour.tour_image}`} alt="" />
                              <div className="discountrow">
                                <div className="discount">
                                  <span>{tour.tour_discount} %</span>
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
                              <div className="aedRHS">{tour.tour_tour_duration}</div>
                            </div>
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                  <div className="tab-pane fade show active" id="pills-listing" role="tabpanel" aria-labelledby="pills-listing-tab">
                    <div className="listingRow">
                      {itemsToShow.map((tour) => (
                        <Link to={`${tour.tour_slug}`} className="listingBox" key={`listing-${tour.tour_slug}`}>
                          <div className="listingBoxImg">
                            <img src={`http://127.0.0.1:8800/data/uploads/${tour.tour_image}`} alt="" />
                            <div className="discountrow">
                              <div className="discount">
                                <span>{tour.tour_discount} %</span>
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
                                <span>5 | 500 Reviews</span>
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
};

export default ListingSection;

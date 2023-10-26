import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/TourListing.css';
import { data } from '../../data/TourListing';
import LeftSideFilter from './LeftSideFilter';

const itemsPerPage = 9;
const ListingSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPrice, setSelectedPrice] = useState(5000); // Initial price value as a number
  const totalItems = data.TourListing.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePriceFilter = (newPrice) => {
    setSelectedPrice(newPrice);
  };

  // Filter items based on the selected price range
  const filteredData = data.TourListing.filter(
    (tour) => parseInt(tour.price.replace(',', '')) <= selectedPrice
  );

  const itemsToShow = filteredData.slice(startIndex, endIndex);
  return (
    <div>
      <div className="listingPage">
        <div className="container">
          <div className="listingPageWrapper">
          <LeftSideFilter handlePriceFilter={handlePriceFilter} priceRange={selectedPrice} />
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
                        <div className="TabBox" key={`grid-${tour.id}`}>
                          <div className="img">
                            <img src={process.env.PUBLIC_URL+tour.imageSrc} alt="" />
                            <div className="discountrow">
                              <div className="discount">
                                <span>{tour.discount}</span>
                              </div>
                              <div className="wishlistIcon"></div>
                            </div>
                            <div className="imgBottomRow">
                              <div className="lhstext">
                                <span>{tour.hastag}</span>
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
                            <h4>{tour.title}</h4>
                            <p>{tour.description}</p>
                            <div className="ReviewRow">
                              <span className="location">{tour.location}</span>
                            </div>
                          </div>
                          <div className="TabBoxFooter">
                            <div className="aedLHS">
                              <span>Starting from</span>
                              <div className="aedtext">
                                AED <strong>{tour.price}</strong> up to {tour.person} people
                              </div>
                            </div>
                            <div className="aedRHS">{tour.duration}</div>
                          </div>
                        </div>
                        ))
                        ) : (
                          <p>No items within the selected price range.</p>
                        )}
                    </div>
                  </div>
                  <div className="tab-pane fade show active" id="pills-listing" role="tabpanel" aria-labelledby="pills-listing-tab">
                    <div className="listingRow">
                      {itemsToShow.map((tour) => (
                        <div className="listingBox" key={`listing-${tour.id}`}>
                          <div className="listingBoxImg">
                            <img src={tour.imageSrc} alt="" />
                            <div className="discountrow">
                              <div className="discount">
                                <span>{tour.discount}</span>
                              </div>
                              <div className="wishlistIcon"></div>
                            </div>
                            <div className="imgBottomRow">
                              <div className="lhstext">
                                <span>{tour.hastag}</span>
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
                              <h4>{tour.title}</h4>
                              <div className="ReviewsDivrow">
                                <img src="images/homepage/ratingstar.png" alt="" />
                                <span>4.5 | 500 Reviews</span>
                              </div>
                              <div className="descrition">
                                <p>{tour.description}</p>
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
                                  AED <strong>{tour.price}</strong> Per {tour.person} Person
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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

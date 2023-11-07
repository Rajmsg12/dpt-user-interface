import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'rc-slider'; // Import the Slider component
import 'rc-slider/assets/index.css';
import { data } from '../../data/TourListing'

const LeftSideFilter = ({ handlePriceFilter,handleDurationFilterChange , priceRange, handleRatingFilterChange, selectedRatingFilter }) => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  }
  const handleDurationCheckboxChange = (event, selectedDurations) => {
    if (event.target.checked) {
      // If the checkbox is checked, set the selected durations
      handleDurationFilterChange(selectedDurations);
    } else {
      // If the checkbox is unchecked, remove the selected durations
      handleDurationFilterChange(null);
    }
  };
  return (
    <>
      <div id="sidebarFilter" className="listingLhs">
        <div className="listingTopSec">
          <div className="travellingSec">
            <div className="travellingSecTitle">When are you travelling?</div>
            <div className="closeIcon"></div>
          </div>
          <div className="sidebarCategories">
            <div className="sidebarCategoriesSec">
              <div className="sidebarlabel">
                <h3>Categories</h3>
              </div>
              <ul>
                {showAllCategories
                  ? data.CategoryList.map((item, index) => (
                    <li key={index}>
                      <Link to={`/plan/${item.category.toLowerCase().replace(/\s+/g, '-')}`}>{item.category}</Link>
                    </li>
                  ))
                  : data.CategoryList.slice(0, 8).map((item, index) => (
                    <li key={index}>
                      <Link to={`/plan/${item.category.toLowerCase().replace(/\s+/g, '-')}`}>{item.category}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="ViewMoreCta">
              <button
                onClick={toggleCategories}
                style={{
                  border: "none",
                  background: "none",
                  textDecoration: "underline",
                  cursor: "pointer", // Add a pointer cursor for better UX
                }}
              >
                {showAllCategories ? "View Less" : "View More"}
              </button>

            </div>
          </div>
        {/*  <div className="Timeofday">
            <div className="sidebarlabel">
              <h3>Time of day</h3>
            </div>
            <div className="checkBoxDiv">
              <div>
                <label className="CheckboxIn">
                  <div className="checkboxField">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                  <div className="checkboxText">
                    <div className="Checkboxlabel">Morning Starts</div>
                    <div className="CheckboxSublabel">before 12pm</div>
                  </div>
                </label>
              </div>
              <div>
                <label className="CheckboxIn">
                  <div className="checkboxField">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                  <div className="checkboxText">
                    <div className="Checkboxlabel">Afternoon Starts</div>
                    <div className="CheckboxSublabel">after 12pm Evening</div>
                  </div>
                </label>
              </div>
              <div>
                <label className="CheckboxIn">
                  <div className="checkboxField">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                  <div className="checkboxText">
                    <div className="Checkboxlabel">Night Starts</div>
                    <div className="CheckboxSublabel">after 5pm</div>
                  </div>
                </label>
              </div>
            </div>
              </div>*/}
              <div className="DurationDiv">
              <div className="sidebarlabel">
                <h3>Duration</h3>
              </div>
              <div className="checkBoxDiv">
                {/* Checkbox for 1 Hour */}
                <div>
                  <label className="CheckboxIn">
                    <div className="checkboxField">
                      <input
                        type="checkbox"
                        value="1 Hour"
                        onChange={(event) =>
                          handleDurationCheckboxChange(event, ["1 Hour"])
                        }
                      />
                      <span className="checkmark"></span>
                    </div>
                    <div className="checkboxText">
                      <div className="CheckboxSublabel">1 Hour</div>
                    </div>
                  </label>
                </div>
                {/* Checkbox for 1 to 4 hours */}
                <div>
                  <label className="CheckboxIn">
                    <div className="checkboxField">
                      <input
                        type="checkbox"
                        value="1 to 4 hours"
                        onChange={(event) =>
                          handleDurationCheckboxChange(event, ["2 Hours", "3 Hours", "4 Hours"])
                        }
                      />
                      <span className="checkmark"></span>
                    </div>
                    <div className="checkboxText">
                      <div className="CheckboxSublabel">1 to 4 hours</div>
                    </div>
                  </label>
                </div>
                {/* Checkbox for 4 hours to 1 day */}
                <div>
                  <label className="CheckboxIn">
                    <div className="checkboxField">
                      <input
                        type="checkbox"
                        value="4 hours to 1 day"
                        onChange={(event) =>
                          handleDurationCheckboxChange(event, ["4 Hours", "5 Hours", "6 Hours", "7 Hours", "8 Hours", "9 Hours", "10 Hours", "11 Hours", "12 Hours", "13 Hours", "14 Hours", "15 Hours", "16 Hours", "17 Hours", "18 Hours", "19 Hours", "20 Hours", "21 Hours", "22 Hours", "23 Hours", "24 Hours", "1 Day"])
                      }
                      />
                      <span className="checkmark"></span>
                    </div>
                    <div className="checkboxText">
                      <div className="CheckboxSublabel">4 hours to 1 day</div>
                    </div>
                  </label>
                </div>
                {/* Checkbox for 1 to 3 days */}
                <div>
                  <label className="CheckboxIn">
                    <div className="checkboxField">
                      <input
                        type="checkbox"
                        value="1 to 3 days"
                        onChange={(event) =>
                          handleDurationCheckboxChange(event, ["1 Day", "2 Days", "3 Days"])
                        }
                      />
                      <span className="checkmark"></span>
                    </div>
                    <div className="checkboxText">
                      <div className="CheckboxSublabel">1 to 3 days</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          <div className="RangeSlider">
            <div className="sidebarlabel">
              <h3>Price</h3>
            </div>
            <div className="RangeSliderIn">
              <div className="rangeSliderTopLayer">
                <div className="leftSideFilter">
                  <div className="priceRangeSlider">
                    <Slider
                      min={0}
                      max={5000}
                      step={1}
                      range // Enable the range mode
                      value={priceRange}
                      onChange={(value) => handlePriceFilter(value)}
                    />
                    <div className="priceRangeLabel">
                      Price Range: AED {priceRange[0].toLocaleString('en-US')} - {priceRange[1].toLocaleString('en-US')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="RatingDiv">
            <div className="sidebarlabel">
              <h3>Rating</h3>
            </div>
            <div className="RadioBox">
              <div>
                <label className="RadioBoxIn">
                  <div className="radioboxField">
                    <input
                      type="radio"
                      name="ratingFilter"
                      onClick={() => handleRatingFilterChange(2)}
                      checked={selectedRatingFilter === 2}
                    />
                    <span className="checkmark" />
                  </div>
                  <div className="radioboxText">
                    <div className="radioboxSublabel">
                      <span className="imageStarRating">
                        <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1698738115/ratingstar_nisesy.png"} alt="" />
                      </span>
                      <div className="ratingSubtext">2+</div>
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <label className="RadioBoxIn">
                  <div className="radioboxField">
                    <input
                      type="radio"
                      name="ratingFilter"
                      onClick={() => handleRatingFilterChange(3)}
                      checked={selectedRatingFilter === 3}
                    />
                    <span className="checkmark" />
                  </div>
                  <div className="radioboxText">
                    <div className="radioboxSublabel">
                      <span className="imageStarRating">
                        <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1698738115/ratingstar_nisesy.png"} alt="" />
                      </span>
                      <div className="ratingSubtext">3+</div>
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <label className="RadioBoxIn">
                  <div className="radioboxField">
                    <input
                      type="radio"
                      name="ratingFilter"
                      onClick={() => handleRatingFilterChange(4)}
                      checked={selectedRatingFilter === 4}
                    />
                    <span className="checkmark" />
                  </div>
                  <div className="radioboxText">
                    <div className="radioboxSublabel">
                      <span className="imageStarRating">
                        <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1698738115/ratingstar_nisesy.png"} alt="" />
                      </span>
                      <div className="ratingSubtext">4+</div>
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <label className="RadioBoxIn">
                  <div className="radioboxField">
                    <input
                      type="radio"
                      name="ratingFilter"
                      onClick={() => handleRatingFilterChange(5)}
                      checked={selectedRatingFilter === 5}
                    />
                    <span className="checkmark" />
                  </div>
                  <div className="radioboxText">
                    <div className="radioboxSublabel">
                      <span className="imageStarRating">
                        <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1698738115/ratingstar_nisesy.png"} alt="" />
                      </span>
                      <div className="ratingSubtext">5</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        {/*  <div className="SpecialsDiv">
            <div className="sidebarlabel">
              <h3>Specials</h3>
            </div>
            <div className="checkBoxDiv">
              <div>
                <label className="CheckboxIn">
                  <div className="checkboxField">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                  <div className="checkboxText">
                    <div className="CheckboxSublabel">Deals & Discounts</div>
                  </div>
                </label>
              </div>
              <div>
                <label className="CheckboxIn">
                  <div className="checkboxField">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                  <div className="checkboxText">
                    <div className="CheckboxSublabel">Free Cancellation</div>
                  </div>
                </label>
              </div>
              <div>
                <label className="CheckboxIn">
                  <div className="checkboxField">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                  <div className="checkboxText">
                    <div className="CheckboxSublabel">Likely to Sell Out Skip</div>
                  </div>
                </label>
              </div>
              <div>
                <label className="CheckboxIn">
                  <div className="checkboxField">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                  <div className="checkboxText">
                    <div className="CheckboxSublabel">The-Line</div>
                  </div>
                </label>
              </div>
            </div>
              </div>*/}
        </div>
        <div className="DubaiPrivateTourDiv">
          <div className="customersayText">
            <div className="topimg">
              <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697702089/Tripadvisorlogo_cc6y9z.png"} alt="" />
            </div>
            <h4>Dubai Private Tour</h4>
            <div className="rating">
              <span className="Recentrating"> Recent Traveler Rating </span>
              <div className="reviewtwxt">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <span>2,444 Reviews</span>
              </div>
            </div>
            <div className="Ranking">
              <span> Tripadvisor Ranking </span>
              <h5>#112 of 2070 Outdoor activities in Dubai</h5>
            </div>
            <div className="Recent">
              <span>Recent Travelers Reviews</span>
              <p>“Happy with their timely response and I got cheaper tickets from any other site.”</p>
              <p>“Best Service And Support Guidance Fast Booking.”</p>
            </div>
            <div className="link">
              <Link to="#">Read reviews</Link>
              <Link to="#">Write a review</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftSideFilter
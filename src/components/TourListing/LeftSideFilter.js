import React from 'react'
import {Link} from 'react-router-dom'

const LeftSideFilter = () => {
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
          <ul className="minUl">
            <li>
              <Link to="#">Luxury Tours</Link>
            </li>
            <li>
              <Link to="#">Budget City Tour</Link>
            </li>
            <li>
              <Link to="#">Dinner Cruise</Link>
            </li>
            <li>
              <Link to="#">Skydive Dubai</Link>
            </li>
            <li>
              <Link to="#">Luxury Yacht Charter</Link>
            </li>
            <li>
              <Link to="#">Budget City Tour</Link>
            </li>
            <li>
              <Link to="#">Budget Airport Layover Tour</Link>
            </li>
            <li>
              <Link to="#">Burj Khalifa Reservations</Link>
            </li>
            <li>
              <Link to="#">Desert Safari</Link>
            </li>
            <li>
              <Link to="#">Helicopter Tour</Link>
            </li>
            <li>
              <Link to="#">Hotel Bookings</Link>
            </li>
          </ul>
        </div>
        <div className="ViewMoreCta">
          <Link to="#">View More</Link>
        </div>
      </div>
      <div className="Timeofday">
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
      </div>
      <div className="DurationDiv">
        <div className="sidebarlabel">
          <h3>Duration</h3>
        </div>
        <div className="checkBoxDiv">
          <div>
            <label className="CheckboxIn">
              <div className="checkboxField">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </div>
              <div className="checkboxText">
                <div className="CheckboxSublabel">Up to 1 hour</div>
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
                <div className="CheckboxSublabel">1 to 4 hours</div>
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
                <div className="CheckboxSublabel">4 hours to 1 day</div>
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
            <span>0 AED</span>
            <span>+ 5000 AED</span>
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
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </div>
              <div className="radioboxText">
                <div className="radioboxSublabel">
                  <span className="imageStarRating">
                    <img src="images/homepage/ratingstar.png" alt="" />
                  </span>
                  <div className="ratingSubtext"></div>
                </div>
              </div>
            </label>
          </div>
          <div>
            <label className="RadioBoxIn">
              <div className="radioboxField">
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </div>
              <div className="radioboxText">
                <div className="radioboxSublabel">
                  <span className="imageStarRating">
                    <img src="images/homepage/ratingstar.png" alt=""
                    /></span>
                  <div className="ratingSubtext">& up</div>
                </div>
              </div>
            </label>
          </div>
          <div>
            <label className="RadioBoxIn">
              <div className="radioboxField">
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </div>
              <div className="radioboxText">
                <div className="radioboxSublabel">
                  <span className="imageStarRating">
                    <img src="images/homepage/ratingstar.png" alt=""
                    /></span>
                  <div className="ratingSubtext">& up</div>
                </div>
              </div>
            </label>
          </div>
          <div>
            <label className="RadioBoxIn">
              <div className="radioboxField">
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </div>
              <div className="radioboxText">
                <div className="radioboxSublabel">
                  <span className="imageStarRating">
                    <img src="images/homepage/ratingstar.png" alt=""
                    /></span>
                  <div className="ratingSubtext">& up</div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="SpecialsDiv">
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
      </div>
    </div>
    <div className="DubaiPrivateTourDiv">
      <div className="customersayText">
        <div className="topimg">
          <img src="images/homepage/Tripadvisorlogo.png" alt="" />
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

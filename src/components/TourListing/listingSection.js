import React from 'react'
import {Link} from 'react-router-dom'
import './Styles/TourListing.css'
const listingSection = () => {
  return (
    <div>
    <div className="listingPage">
    <div className="container">
      <div className="listingPageWrapper">
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


          <div className="listingRhs">
              
            <div className="listingGridTab">

            <div className="listingToplayer">  
               <div className="productactive">50 activities found</div>
               <div>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <div className="filterDiv"></div>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-grid-tab" data-bs-toggle="pill" data-bs-target="#pills-grid" type="button" role="tab" aria-controls="pills-grid" aria-selected="false">Grid <img src="images/homepage/grid.png" alt=""/></button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-listing-tab" data-bs-toggle="pill" data-bs-target="#pills-listing" type="button" role="tab" aria-controls="pills-listing" aria-selected="true"><img src="images/homepage/list.png" alt=""/>Listing</button>
                  </li>
                </ul>
              </div>
            </div>  
                  <div className="tab-content" id="pills-tabContentlisting">
                      <div className="tab-pane fade" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
                        <div className="listingRow GridRowWrapper">
                           

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product1.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-10%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                                <div className="rhsimg">
                                  <div>
                                    <img src="images/homepage/choise1.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>Dubai Airport Private Transfer</h4>
                              <p>We promise, to give you a warm welcome and make you feel comfortable and safe. </p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                             <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>215</strong> upto 3 people </div>
                              </div>
                              <div className="aedRHS"> 1 Hour </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product2.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-20%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                               {/*<div className="lhstext"><span>#1</span><span>Top Dubai Desert Experience</span></div> -->*/} 
                                <div className="rhsimg">
                                  <div>
                                    <img src="images/homepage/choise1.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>6 Hours Dubai Private City Tour</h4>
                              <p>Our six hour trip is especially designed for any tourist or visitor on a short stay.</p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                            
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>1,020</strong> Per Person </div>
                              </div>
                              <div className="aedRHS"> 6 Hours </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product3.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-10%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                                <div className="lhstext">
                                  <span>#1</span>
                                  <span>Top Dubai Desert Experience</span>
                                </div>
                                <div className="rhsimg">
                                  <div>
                                    <img src="images/homepage/choise2.png" alt=""/>
                                    <img src="images/homepage/choise1.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>3 Hours Morning Desert Safari </h4>
                              <p>The Morning Safari is organized daily throughout the week. </p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                         
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>875</strong> upto 4 people </div>
                              </div>
                              <div className="aedRHS"> 3 Hours </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product5.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                 
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                               {/*<div className="lhstext"><span>#1</span><span>Top Dubai Desert Experience</span></div> -->*/}
                                <div className="rhsimg">
                                  <div>
                                  
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>Tandem Skydive</h4>
                              <p>A tandem skydive is the quickest and easiest way to experience.</p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>2,199</strong> Per Person </div>
                              </div>
                              <div className="aedRHS"> 4 Hours </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product6.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-15%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                                <div className="lhstext">
                                  <span>#1</span>
                                  <span>Top Dubai seaplane tour Experience</span>
                                </div>
                                <div className="rhsimg">
                                  <div>
                                  <img src="images/homepage/choise2.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>Seaplane Tour</h4>
                              <p>Take your pick from two convenient take-off locations, Jebel Ali or Dubai Creek.</p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                        
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>500</strong> Per Person </div>
                              </div>
                              <div className="aedRHS"> 4 Hours </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product7.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-25%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                                <div className="lhstext">
                      
                                </div>
                                <div className="rhsimg">
                                  <div>
                                
                                    <img src="images/homepage/choise3.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>Luxury Yacht Charter</h4>
                              <p>We at Dubai Private tour provide Luxury Yachts charter services in Dubai Marina.</p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                           
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>250</strong> upto 5 people </div>
                              </div>
                              <div className="aedRHS"> 6 Days </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product1.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-10%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                                <div className="rhsimg">
                                  <div>
                                    <img src="images/homepage/choise1.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>Dubai Airport Private Transfer</h4>
                              <p>We promise, to give you a warm welcome and make you feel comfortable and safe. </p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                        
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>215</strong> upto 3 people </div>
                              </div>
                              <div className="aedRHS"> 1 Hour </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product2.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-20%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                            {/*  <div className="lhstext"><span>#1</span><span>Top Dubai Desert Experience</span></div> -->*/}
                                <div className="rhsimg">
                                  <div>
                                    <img src="images/homepage/choise1.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>6 Hours Dubai Private City Tour</h4>
                              <p>Our six hour trip is especially designed for any tourist or visitor on a short stay.</p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                         
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>1,020</strong> Per Person </div>
                              </div>
                              <div className="aedRHS"> 6 Hours </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product3.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-10%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                                <div className="lhstext">
                                  <span>#1</span>
                                  <span>Top Dubai Desert Experience</span>
                                </div>
                                <div className="rhsimg">
                                  <div>
                                    <img src="images/homepage/choise2.png" alt=""/>
                                    <img src="images/homepage/choise1.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>3 Hours Morning Desert Safari </h4>
                              <p>The Morning Safari is organized daily throughout the week. </p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                         
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>875</strong> upto 4 people </div>
                              </div>
                              <div className="aedRHS"> 3 Hours </div>
                            </div>
                          </div>


                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product1.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-10%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                                <div className="rhsimg">
                                  <div>
                                    <img src="images/homepage/choise1.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>Dubai Airport Private Transfer</h4>
                              <p>We promise, to give you a warm welcome and make you feel comfortable and safe. </p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                         
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>215</strong> upto 3 people </div>
                              </div>
                              <div className="aedRHS"> 1 Hour </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product2.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-20%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                              {/*  <div className="lhstext"><span>#1</span><span>Top Dubai Desert Experience</span></div> -->*/}
                                <div className="rhsimg">
                                  <div>
                                    <img src="images/homepage/choise1.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>6 Hours Dubai Private City Tour</h4>
                              <p>Our six hour trip is especially designed for any tourist or visitor on a short stay.</p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                        
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>1,020</strong> Per Person </div>
                              </div>
                              <div className="aedRHS"> 6 Hours </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product3.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-10%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                                <div className="lhstext">
                                  <span>#1</span>
                                  <span>Top Dubai Desert Experience</span>
                                </div>
                                <div className="rhsimg">
                                  <div>
                                    <img src="images/homepage/choise2.png" alt=""/>
                                    <img src="images/homepage/choise1.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>3 Hours Morning Desert Safari </h4>
                              <p>The Morning Safari is organized daily throughout the week. </p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                         
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>875</strong> upto 4 people </div>
                              </div>
                              <div className="aedRHS"> 3 Hours </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product5.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                              
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                               
                                <div className="rhsimg">
                                  <div>
                                  
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>Tandem Skydive</h4>
                              <p>A tandem skydive is the quickest and easiest way to experience.</p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                          
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>2,199</strong> Per Person </div>
                              </div>
                              <div className="aedRHS"> 4 Hours </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product6.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-15%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                                <div className="lhstext">
                                  <span>#1</span>
                                  <span>Top Dubai seaplane tour Experience</span>
                                </div>
                                <div className="rhsimg">
                                  <div>
                                 
                                    <img src="images/homepage/choise2.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>Seaplane Tour</h4>
                              <p>Take your pick from two convenient take-off locations, Jebel Ali or Dubai Creek.</p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                            
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>500</strong> Per Person </div>
                              </div>
                              <div className="aedRHS"> 4 Hours </div>
                            </div>
                          </div>

                          <div className="TabBox">
                            <div className="img">
                              <img src="images/homepage/product7.jpg" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-25%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>
                              <div className="imgBottomRow">
                                <div className="lhstext">
                                  {/*  <span>#1</span><span>Top Dubai Desert Experience</span> -->*/}
                                </div>
                                <div className="rhsimg">
                                  <div>
                                
                                    <img src="images/homepage/choise3.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="TabBoxBody">
                              <h4>Luxury Yacht Charter</h4>
                              <p>We at Dubai Private tour provide Luxury Yachts charter services in Dubai Marina.</p>
                              <div className="ReviewRow">
                                <span className="location">Dubai, United Arab Emirates</span>
                              </div>
                            </div>
                         
                            <div className="TabBoxFooter">
                              <div className="aedLHS">
                                <span>Starting from</span>
                                <div className="aedtext">AED <strong>250</strong> upto 5 people </div>
                              </div>
                              <div className="aedRHS"> 6 Days </div>
                            </div>
                          </div>

                      </div>
                      </div>
                      <div className="tab-pane fade show active" id="pills-listing" role="tabpanel" aria-labelledby="pills-listing-tab">
                          <div className="listingRow">
                              <div className="listingBox">
                                  <div className="listingBoxImg">
                                      <img src="images/homepage/listproduct1.png" alt=""/>
                                    <div className="discountrow">
                                      <div className="discount">
                                        <span>-10%</span>
                                      </div>
                                      <div className="wishlistIcon"></div>
                                    </div>

                                    <div className="imgBottomRow">
                                      <div className="lhstext">
                                        <span>#1</span>
                                        <span>Top Dubai
                                          Burj khalifa tour
                                          Experience</span>
                                      </div>
                                      <div className="rhsimg">
                                        <div>
                                          {/*  <img src="images/choise2.png" alt=""> -->*/}
                                          <img src="images/homepage/choise2.png" alt=""/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="listingBoxContent">
                                    <div className="listingBoxTop">
                                        <h4>Full Day Dubai City Tour with Burj Khalifa Ticket 'At the Top Request'</h4>
                                        <div className="ReviewsDivrow">
                                          <img src="images/homepage/ratingstar.png" alt=""/>
                                          <span>4.5 | 500 Reviews</span>
                                         </div>
                                          <div className="descrition">
                                            <p>Discover all of Dubai’s top sights with a private tour guide during this full-day city tour. Go back in time and learn about the humble beginnings of the desert city in Old Dubai, including a boat ride aboard an “abra.” Then, see modern sights including Dubai Marina, Burj Al Arab, and tickets.</p></div>
                                        
                                    </div>
                                    <div className="listingBoxFooter">
                                      <div className="listboxlhs">
                                        <span>Free Cancellation</span>
                                        <span>6 Days</span>
                                      </div>
                                      <div className="listboxrhs">
                                        <div className="startingFromTag">Starting from</div>
                                        <div className="price">
                                          AED <strong>2,500</strong> Per Person 
                                        </div>
                                      </div>
                                    </div>
                                     
                                  </div>
                              </div>
                              <div className="listingBox">
                                <div className="listingBoxImg">
                                    <img src="images/homepage/listproduct2.png" alt=""/>
                                  <div className="discountrow">
                                    <div className="discount">
                                  
                                    </div>
                                    <div className="wishlistIcon"></div>
                                  </div>

                                  <div className="imgBottomRow">
                                    <div className="lhstext">
                                        {/* <span>#1</span>
                                        <span>Top Dubai
                                          Burj khalifa tour
                                          Experience</span> */}
                                    </div>
                                    <div className="rhsimg">
                                      <div>
                                        {/*  <img src="images/choise2.png" alt=""> -->
                                        <!-- <img src="images/choise2.png" alt=""> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="listingBoxContent">
                                  <div className="listingBoxTop">
                                      <h4>Dubai Red Dune Desert Safari: Camel Ride, Sandboarding & BBQ Options</h4>
                                      <div className="ReviewsDivrow">
                                        <img src="images/homepage/ratingstar.png" alt=""/>
                                        <span>4.5 | 500 Reviews</span>
                                       </div>
                                        <div className="descrition">
                                          <p>Discover all of Dubai’s top sights with a private tour guide during this full-day city tour. Go back in time and learn about the humble beginnings of the desert city in Old Dubai, including a boat ride aboard an “abra.” Then, see modern sights including Dubai Marina, Burj Al Arab, and tickets.</p></div>
                                      
                                  </div>
                                  <div className="listingBoxFooter">
                                    <div className="listboxlhs">
                                      <span>Free Cancellation</span>
                                      <span>6 Days</span>
                                    </div>
                                    <div className="listboxrhs">
                                      <div className="startingFromTag">Starting from</div>
                                      <div className="price">
                                        AED <strong>3,500</strong> Per Person 
                                      </div>
                                    </div>
                                  </div>
                                   
                                </div>
                            </div>
                            <div className="listingBox">
                              <div className="listingBoxImg">
                                  <img src="images/homepage/listproduct3.png" alt=""/>
                                <div className="discountrow">
                                  <div className="discount">
                                    {/*  <span>-10%</span>*/}
                                  </div>
                                  <div className="wishlistIcon"></div>
                                </div>

                                <div className="imgBottomRow">
                                  <div className="lhstext">
                                     {/*  <span>#1</span>
                                      <span>Top Dubai
                                        Burj khalifa tour
                                        Experience</span>*/}
                                  </div>
                                  <div className="rhsimg">
                                    <div>
                                      <img src="images/homepage/choise3.png" alt=""/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="listingBoxContent">
                                <div className="listingBoxTop">
                                    <h4>Dubai Private Arrival Airport Transfer to Any Hotels in UAE</h4>
                                    <div className="ReviewsDivrow">
                                      <img src="images/homepage/ratingstar.png" alt=""/>
                                      <span>4.5 | 500 Reviews</span>
                                     </div>
                                      <div className="descrition">
                                        <p>Discover all of Dubai’s top sights with a private tour guide during this full-day city tour. Go back in time and learn about the humble beginnings of the desert city in Old Dubai, including a boat ride aboard an “abra.” Then, see modern sights including Dubai Marina, Burj Al Arab, and tickets.</p></div>
                                    
                                </div>
                                <div className="listingBoxFooter">
                                  <div className="listboxlhs">
                                    <span>Free Cancellation</span>
                                    <span>6 Days</span>
                                  </div>
                                  <div className="listboxrhs">
                                    <div className="startingFromTag">Starting from</div>
                                    <div className="price">
                                      AED <strong>1,500</strong> Per Person 
                                    </div>
                                  </div>
                                </div>
                                 
                              </div>
                          </div>
                          <div className="listingBox">
                            <div className="listingBoxImg">
                                <img src="images/homepage/listproduct1.png" alt=""/>
                              <div className="discountrow">
                                <div className="discount">
                                  <span>-10%</span>
                                </div>
                                <div className="wishlistIcon"></div>
                              </div>

                              <div className="imgBottomRow">
                                <div className="lhstext">
                                  <span>#1</span>
                                  <span>Top Dubai
                                    Burj khalifa tour
                                    Experience</span>
                                </div>
                                <div className="rhsimg">
                                  <div>
                                    
                                    <img src="images/homepage/choise2.png" alt=""/>
                                    <img src="images/homepage/choise1.png" alt=""/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="listingBoxContent">
                              <div className="listingBoxTop">
                                  <h4>Full Day Dubai City Tour with Burj Khalifa Ticket 'At the Top Request'</h4>
                                  <div className="ReviewsDivrow">
                                    <img src="images/homepage/ratingstar.png" alt=""/>
                                    <span>4.5 | 500 Reviews</span>
                                   </div>
                                    <div className="descrition">
                                      <p>Discover all of Dubai’s top sights with a private tour guide during this full-day city tour. Go back in time and learn about the humble beginnings of the desert city in Old Dubai, including a boat ride aboard an “abra.” Then, see modern sights including Dubai Marina, Burj Al Arab, and tickets.</p></div>
                                  
                              </div>
                              <div className="listingBoxFooter">
                                <div className="listboxlhs">
                                  <span>Free Cancellation</span>
                                  <span>6 Days</span>
                                </div>
                                <div className="listboxrhs">
                                  <div className="startingFromTag">Starting from</div>
                                  <div className="price">
                                    AED <strong>2,500</strong> Per Person 
                                  </div>
                                </div>
                              </div>
                               
                            </div>
                        </div>
                        <div className="listingBox">
                          <div className="listingBoxImg">
                              <img src="images/homepage/listproduct2.png" alt=""/>
                            <div className="discountrow">
                              <div className="discount">
                               
                              </div>
                              <div className="wishlistIcon"></div>
                            </div>

                            <div className="imgBottomRow">
                              <div className="lhstext">
                                  {/*<span>#1</span>
                                  <span>Top Dubai
                                    Burj khalifa tour
                                    Experience</span> */}
                              </div>
                              <div className="rhsimg">
                                <div>
                                  {/*  <img src="images/choise2.png" alt=""> -->
                                  <!-- <img src="images/choise2.png" alt=""> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="listingBoxContent">
                            <div className="listingBoxTop">
                                <h4>Dubai Red Dune Desert Safari: Camel Ride, Sandboarding & BBQ Options</h4>
                                <div className="ReviewsDivrow">
                                  <img src="images/homepage/ratingstar.png" alt=""/>
                                  <span>4.5 | 500 Reviews</span>
                                 </div>
                                  <div className="descrition">
                                    <p>Discover all of Dubai’s top sights with a private tour guide during this full-day city tour. Go back in time and learn about the humble beginnings of the desert city in Old Dubai, including a boat ride aboard an “abra.” Then, see modern sights including Dubai Marina, Burj Al Arab, and tickets.</p></div>
                                
                            </div>
                            <div className="listingBoxFooter">
                              <div className="listboxlhs">
                                <span>Free Cancellation</span>
                                <span>6 Days</span>
                              </div>
                              <div className="listboxrhs">
                                <div className="startingFromTag">Starting from</div>
                                <div className="price">
                                  AED <strong>3,500</strong> Per Person 
                                </div>
                              </div>
                            </div>
                             
                          </div>
                      </div>
                      <div className="listingBox">
                        <div className="listingBoxImg">
                            <img src="images/homepage/listproduct3.png" alt=""/>
                          <div className="discountrow">
                            <div className="discount">
                             
                            </div>
                            <div className="wishlistIcon"></div>
                          </div>

                          <div className="imgBottomRow">
                            <div className="lhstext">
                                {/*  <span>#1</span>
                                <span>Top Dubai
                                  Burj khalifa tour
                                  Experience</span> */}
                            </div>
                            <div className="rhsimg">
                              <div>
                                <img src="images/choise3.png" alt=""/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="listingBoxContent">
                          <div className="listingBoxTop">
                              <h4>Dubai Private Arrival Airport Transfer to Any Hotels in UAE</h4>
                              <div className="ReviewsDivrow">
                                <img src="images/homepage/ratingstar.png" alt=""/>
                                <span>4.5 | 500 Reviews</span>
                               </div>
                                <div className="descrition">
                                  <p>Discover all of Dubai’s top sights with a private tour guide during this full-day city tour. Go back in time and learn about the humble beginnings of the desert city in Old Dubai, including a boat ride aboard an “abra.” Then, see modern sights including Dubai Marina, Burj Al Arab, and tickets.</p></div>
                              
                          </div>
                          <div className="listingBoxFooter">
                            <div className="listboxlhs">
                              <span>Free Cancellation</span>
                              <span>6 Days</span>
                            </div>
                            <div className="listboxrhs">
                              <div className="startingFromTag">Starting from</div>
                              <div className="price">
                                AED <strong>1,500</strong> Per Person 
                              </div>
                            </div>
                          </div>
                           
                        </div>
                    </div>
                          </div>
                      </div>
                  </div>



                  <div className="pagitnationSec">
                  <nav aria-label="...">
                    <ul className="pagination">
                      {/*  <li className="disabled">
                        <a className="arrow Previous" href="#">Previous</a>
                      </li>*/}
                      <li><Link className="linkurl active" href="#">1</Link></li>
                      <li><Link className="linkurl" href="#">2</Link></li>
                      <li><Link className="linkurl" href="#">3</Link></li>
                      <li><Link className="linkurl" href="#">4</Link></li>
                      <li><Link className="linkurl" href="#">....</Link></li>
                      <li><Link className="arrow Next" href="#">Next</Link></li>
                    </ul>
                  </nav>
                </div>
                </div>
          </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default listingSection

import React from 'react';
import { Link } from 'react-router-dom';
import './Style/DetailPage.css'
function ContentSection() {
    return (
      <div className="ContentSection">
        <div className="container">
          <div className="ContentSectionWrapper">
            <div className="ContentLHS">
              <div className="GetinTouch">
                <div className="GetinTouchWrapper">
                  <div className="time">5 Hours</div>
                  <div className="location">Dubai, United Arab Emirates</div>
                  <div className="review">
                    <img src="images/homepage/ratingstar.png" alt="" />4.5 | 500 Reviews
                  </div>
                  <div className="SocialIcon">
                    <div className="shareTag">Share with your friends</div>
                    <ul>
                      <li>
                        <Link to="#" className="fb"></Link>
                      </li>
                      <li>
                        <Link to="#" className="mail"></Link>
                      </li>
                      <li>
                        <Link to="#" className="tw"></Link>
                      </li>
                      <li>
                        <Link to="#" className="gp"></Link>
                      </li>
                      <li>
                        <Link to="#" className="lin"></Link>
                      </li>
                      <li>
                        <Link to="#" className="wp"></Link>
                      </li>
                    </ul>
                  </div>
                  {/* SocialIcon */}
                </div>
                {/* GetinTouchWrapper */}
              </div>
              {/* GetinTouch */}
              <div className="DetailPageBanner">
                <div className="owl-carousel owl-theme" id="Detailpageslider">
                  <div className="item">
                    <div className="DetailpageSlideBox">
                      <div className="imageBox">
                        <img src="images/homepage/detailpagebanner.jpg" alt="" />
                      </div>
                      {/* imageBox */}
                      <div className="BannerContent">
                        <div className="bannerContentTop">
                          <div className="caption">
                            <span> #1</span>
                            <span>Top Dubai</span>
                            <span>Burj khalifa tour</span>
                            <span> Experience</span>
                          </div>
                          <div className="logoimg">
                            <img src="images/homepage/choise2.png" alt="" />
                          </div>
                        </div>
                        {/* bannerContentTop */}
                        <div className="BannerTitle">
                          <h2>Abu Dhabi Amazing Family Private Tour</h2>
                        </div>
                      </div>
                      {/* BannerContent */}
                      <div className="wishlistTag">
                        <span>Wishlist</span>
                      </div>
                    </div>
                    {/* DetailpageSlideBox */}
                  </div>
                  {/* item */}
            
                  {/* item */}
                </div>
                {/* Detailpageslider */}
              </div>
              {/* DetailPageBanner */}
              <div className="DetailTab">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-detail-tab" data-bs-toggle="pill" data-bs-target="#pills-detail" type="button" role="tab" aria-controls="pills-detail" aria-selected="true">
                      <img src="images/homepage/info.png" alt="" />Details
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-bookthistour-tab" data-bs-toggle="pill" data-bs-target="#pills-bookthistour" type="button" role="tab" aria-controls="pills-bookthistour" aria-selected="false">
                      <img src="images/homepage/add-to-basket.png" alt="" />Book This Tour
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-askquestions-tab" data-bs-toggle="pill" data-bs-target="#pills-askquestions" type="button" role="tab" aria-controls="pills-askquestions" aria-selected="false">
                      <img src="images/homepage/question.png" alt="" />Ask Questions
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-detail" role="tabpanel" aria-labelledby="pills-detail-tab">
                    <div className="OverviewSection">
                      <h3>Overview</h3>
                      <p>Head into the desert outside Dubai for an evening of dining and entertainment. First, climb aboard your own quad bike for an adrenaline-fueled adventure through the golden sands. Then, head to a Bedouin-style camp to participate in other activities such as sandboarding or camel riding as you enjoy traditional Arab music and dancing. A full buffet dinner is served in addition to tea, coffee, and other refreshments.</p>
                      <ul>
                        <li>Spend an evening at a Bedouin desert camp</li>
                        <li>Dune bashing, quad biking, and other activities included</li>
                        <li>Feast on a buffet dinner with non-alcoholic beverages</li>
                        <li>Hotel pickup and drop-off included</li>
                      </ul>
                    </div>
                    <div className="SecondPartTab">
                      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="pills-included-tab" data-bs-toggle="pill" data-bs-target="#pills-included" type="button" role="tab" aria-controls="pills-included" aria-selected="true">What's Included?</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pills-exclusive-tab" data-bs-toggle="pill" data-bs-target="#pills-exclusive" type="button" role="tab" aria-controls="pills-exclusive" aria-selected="false">What’s exclusive?</button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent3">
                        <div className="tab-pane fade show active" id="pills-included" role="tabpanel" aria-labelledby="pills-included-tab">
                          <div className="datainnerUl">
                            <div className="UlWrapper">
                              <div>Pickup & drop hotel Dubai Cruise terminal & hotel apartments.</div>
                              <div>Alcohol drinks. However simply paying USD 35 unlimited alcoholic drinks for one hour.</div>
                              <div>ATV quad ride for each children one bike below 14 years, however specified area.</div>
                            </div>
                            <div className="UlWrapper">
                              <div>Souvenir photos (available to purchase)</div>
                              <div>Pickup & drop hotel Dubai Cruise terminal & hotel apartments.</div>
                            </div>
                          </div>
                          {/* datainnerUl */}
                        </div>
                        <div className="tab-pane fade" id="pills-exclusive" role="tabpanel" aria-labelledby="pills-exclusive-tab">
                          <div className="datainnerUl">
                            <div className="UlWrapper">
                              <div>Pickup & drop hotel Dubai Cruise terminal & hotel apartments.</div>
                              <div>Alcohol drinks. However simply paying USD 35 unlimited alcoholic drinks for one hour.</div>
                              <div>ATV quad ride for each children one bike below 14 years, however specified area.</div>
                            </div>
                            <div className="UlWrapper">
                              <div>Souvenir photos (available to purchase)</div>
                              <div>Pickup & drop hotel Dubai Cruise terminal & hotel apartments.</div>
                            </div>
                          </div>
                          {/* datainnerUl */}
                        </div>
                      </div>
                    </div>
                    {/* SecondPartTab */}
                  </div>
                  {/* tab panel */}
                  <div className="tab-pane fade" id="pills-bookthistour" role="tabpanel" aria-labelledby="pills-bookthistour-tab">
                    <div className="OverviewSection">
                      <h3>Book This Tour</h3>
                      <p>Head into the desert outside Dubai for an evening of dining and entertainment. First, climb aboard your own quad bike for an adrenaline-fueled adventure through the golden sands. Then, head to a Bedouin-style camp to participate in other activities such as sandboarding or camel riding as you enjoy traditional Arab music and dancing. A full buffet dinner is served in addition to tea, coffee, and other refreshments.</p>
                    </div>
                  </div>
                  {/* tab panel */}
                  <div className="tab-pane fade" id="pills-askquestions" role="tabpanel" aria-labelledby="pills-askquestions-tab">
                    <div className="OverviewSection">
                      <h3>Ask Questions</h3>
                      <p>Head into the desert outside Dubai for an evening of dining and entertainment. First, climb aboard your own quad bike for an adrenaline-fueled adventure through the golden sands. Then, head to a Bedouin-style camp to participate in other activities such as sandboarding or camel riding as you enjoy traditional Arab music and dancing. A full buffet dinner is served in addition to tea, coffee, and other refreshments.</p>
                    </div>
                  </div>
                  {/* tab panel */}
                </div>
              </div>
              {/* DetailTab */}
              <div className="Whattoexpect">
                <div className="titlewithhd">
                  <h3>What to expect</h3>
                </div>
                <ul>
                  <li>For a full refund, you must cancel at least 24 hours before the experience’s start time.</li>
                  <li>ATV quad ride for each children one bike below 14 years, however specified area..</li>
                  <li>The mosque and palace observe a very strict dress code. Women must wear long loose clothing, ensuring their arms and legs are fully covered with headcover all the time. For the mosque visit, the company provides a long, local abaya with the scarf (long black dress-attire) for women if needed, must be returned back.</li>
                  <li>If you cancel less than 24 hours before the experience’s start time, the amount you paid will not be refunded.</li>
                  <li>Opening time of mosque: 9 AM to 8 PM (everyday) & 5 PM - 8 PM (Fridays).</li>
                </ul>
              </div>
              {/* Whattoexpect */}
              <div className="Itinerary">
                <h3>Itinerary</h3>
                <div className="ItineraryIn">
                  <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills LhsItineraryDiv" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <button className="nav-link active" id="v-pills-1tinerary1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1tinerary1" type="button" role="tab" aria-controls="v-pills-1tinerary1" aria-selected="true">
                        <div className="parentWrapper">
                          <div className="imgWrapper">
                            <img src="images/homepage/itinerary1.jpg" alt="" />
                          </div>
                          {/* imgWrapper */}
                          <div className="Text">
                            <div className="title">Burj Al Arab | Dubai's Most Iconic Hotel</div>
                            <p>Welcome to Burj Al Arab, Dubai's most iconic hotel and a global icon of Arabian luxury.</p>
                          </div>
                          {/* Text */}
                        </div>
                        {/* parentWrapper */}
                      </button>
                      <button className="nav-link" id="v-pills-1tinerary2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1tinerary2" type="button" role="tab" aria-controls="v-pills-1tinerary2" aria-selected="false">
                        <div className="parentWrapper">
                          <div className="imgWrapper">
                            <img src="images/homepage/itinerary2.jpg" alt="" />
                          </div>
                          {/* imgWrapper */}
                          <div className="Text">
                            <div className="title">10 Amazing Inside Burj Al Arab Secrets</div>
                            <p>60 minutes open desert ATV Quad biking and another 30 minutes high dunes roller ride.</p>
                          </div>
                          {/* Text */}
                        </div>
                        {/* parentWrapper */}
                      </button>
                      <button className="nav-link" id="v-pills-1tinerary3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1tinerary3" type="button" role="tab" aria-controls="v-pills-1tinerary3" aria-selected="false">
                        <div className="parentWrapper">
                          <div className="imgWrapper">
                            <img src="images/homepage/itinerary3.jpg" alt="" />
                          </div>
                          {/* imgWrapper */}
                          <div className="Text">
                            <div className="title"> Burj Al Arab Tour opening five-star hotel</div>
                            <p>Welcome to Burj Al Arab, Dubai's most iconic hotel and a global icon of Arabian luxury.</p>
                          </div>
                          {/* Text */}
                        </div>
                        {/* parentWrapper */}
                      </button>
                      <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                        <div className="parentWrapper">
                          <div className="imgWrapper">
                            <img src="images/homepage/itinerary4.jpg" alt="" />
                          </div>
                          {/* imgWrapper */}
                          <div className="Text">
                            <div className="title"> Inside Burj Al Arab, Dubai - Hotel Interior Design</div>
                            <p>60 minutes open desert ATV Quad biking and another 30 minutes high dunes roller ride.</p>
                          </div>
                          {/* Text */}
                        </div>
                        {/* parentWrapper */}
                      </button>
                    </div>
                    <div className="tab-content RhsItineraryDiv" id="v-pills-tabContent">
                      <div className="tab-pane fade show active" id="v-pills-1tinerary1" role="tabpanel" aria-labelledby="v-pills-1tinerary1-tab">
                        <div className="TabImg1">
                          <img src="images/homepage/TabImg.jpg" alt="" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="v-pills-1tinerary2" role="tabpanel" aria-labelledby="v-pills-1tinerary2-tab">
                        <div className="TabImg1">
                          <img src="images/homepage/TabImg.jpg" alt="" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="v-pills-1tinerary3" role="tabpanel" aria-labelledby="v-pills-1tinerary3-tab">
                        <div className="TabImg1">
                          <img src="images/homepage/TabImg.jpg" alt="" />
                        </div>
                      </div>
                      <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <div className="TabImg1">
                          <img src="images/homepage/TabImg.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ItineraryIn */}
              </div>
              {/* Itinerary */}
              <div className="CancellationPolicy">
                <div className="titlewithhd">
                  <h3>Cancellation Policy</h3>
                </div>
                <p>You can cancel up to 24 hours in advance of the experience for a full refund</p>
                <div className="datainnerUl">
                  <div className="UlWrapper">
                    <div>For a full refund, you must cancel at least 24 hours before the experience’s start time.</div>
                    <div>If you cancel less than 24 hours before the experience’s start time, the amount you paid will not be refunded.</div>
                    <div>Cut-off times are based on the experience’s local time.</div>
                  </div>
                  {/* UlWrapper */}
                  <div className="UlWrapper">
                    <div>Cut-off times are based on the experience’s local time.</div>
                    <div>Any changes made less than 24 hours before the experience’s start time will not be accepted.</div>
                  </div>
                  {/* UlWrapper */}
                </div>
                {/* datainnerUl */}
              </div>
              {/* Cancellation Policy */}
              <div className="usefultoknow">
                <div className="titlewithhd">
                  <h3>That’s useful to know</h3>
                </div>
                <ul>
                  <li>Tour duration is fixed for all tours/activities, but it may vary depending on the city traffic.</li>
                  <li>The mosque is closed to tourists on certain dates and is usually communicated by the authorities only a few days through prior notice.</li>
                  <li>Opening time of mosque: 9 AM to 8 PM (everyday) & 5 PM - 8 PM (Fridays).</li>
                  <li>The mosque and palace observe a very strict dress code. Women must wear long loose clothing, ensuring their arms and legs are fully covered with headcover all the time. For the mosque visit, the company provides a long, local abaya with the scarf (long black dress-attire) for women if needed, must be returned back.</li>
                  <li>The mosque is closed to tourists on certain dates and is usually communicated by the authorities only a few days through prior notice.</li>
                  <li>Opening time of mosque: 9 AM to 8 PM (everyday) & 5 PM - 8 PM (Fridays).</li>
                </ul>
              </div>
              {/* usefultoknow */}
              <div className="innerPageFaq">
                <div className="titlewithhd">
                  <h3>Frequently asked Questions</h3>
                </div>
                <div className="faqRow">
                  <h4>Q. What are the different modes of travel to reach Dubai?</h4>
                  <p>The mosque and palace observe a very strict dress code. Women must wear long loose clothing, ensuring their arms and legs are fully covered with headcover all the time. </p>
                </div>
                {/* faqRow */}
                <div className="faqRow">
                  <h4>Q. Do I need a visa to travel in Dubai?</h4>
                  <p>The mosque and palace observe a very strict dress code. Women must wear long loose clothing, ensuring their arms and legs are fully covered with headcover all the time. </p>
                </div>
                {/* faqRow */}
                <div className="faqRow">
                  <h4>Q. What are the different modes of travel to reach Dubai?</h4>
                  <p>The mosque and palace observe a very strict dress code. Women must wear long loose clothing, ensuring their arms and legs are fully covered with headcover all the time. </p>
                </div>
                {/* faqRow */}
                <div className="faqRow">
                  <h4>Q. Do I need a visa to travel in Dubai?</h4>
                  <p>The mosque and palace observe a very strict dress code. Women must wear long loose clothing, ensuring their arms and legs are fully covered with headcover all the time. </p>
                </div>
                {/* faqRow */}
              </div>
              {/* innerPageFaq */}
            </div>
            {/* ContentLHS */}
            <div className="ContentRHS">
            <div className="fromDiv">
              <h4>From</h4>
              <div className="aedrow">
                <span>AED 2,000</span>
                <span>USD 15,000</span>
              </div>
              <div className="Person">per person <strong>(2 Days)</strong></div>
              <div className="right">
                <Link to="#">View Offers</Link>
              </div>
              <Link to="#" className="cta">Book this Tour</Link>
              <p>
                Free cancellation Up to 24 hours in advance. <Link to="#">Read More</Link>
              </p>
            </div>
            {/* fromDiv */}
            <div className="Attractions">
              <div className="titleRow">
                <div className="icon">
                  <img src="images/homepage/locationicon.png" alt="" />
                </div>
                <div className="title">Attractions</div>
              </div>
              <ul>
                <li>4 Hours Dubai Private City Tour With Rolce Royce Ghost</li>
                <li>4 Hours Dubai Private City Tour With Audi R8</li>
                <li>4 Hours Dubai Private City Tour With Lambhorgini Aventador</li>
                <li>5 Hours Dubai Private City Tour With Audi R8</li>
                <li>8 Hours Dubai Private City Tour With Lambhorgini Aventador</li>
                <li>4 Hours Dubai Private City Tour With Audi R8</li>
              </ul>
            </div>
            {/* Attractions */}
            <div className="DubaiPrivateTour">
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
                {/* rating */}
                <div className="Ranking">
                  <span> Tripadvisor Ranking </span>
                  <h5>#112 of 2070 Outdoor activities in Dubai</h5>
                </div>
                {/* Ranking */}
                <div className="Recent">
                  <span>Recent Travelers Reviews</span>
                  <p>“Happy with their timely response and I got cheaper tickets from any other site.”</p>
                  <p>“Best Service And Support Guidance Fast Booking.”</p>
                </div>
                {/* Recent */}
                <div className="link">
                  <Link to="#">Read reviews </Link>
                  <Link to="#">Write a review</Link>
                </div>
              </div>
            </div>
            <div className="offerDiv">
              <div className="offer">10% OFF</div>
              <p>we offer the best tour packages for Dubai & Abu Dhabi at affordable prices.</p>
              <Link to="#" className="cta">Check Out</Link>
            </div>
            {/* offerDiv */}
            <div className="TouristDiv">
              <div className="img">
                <img src="images/homepage/plane.png" alt="" />
              </div>
              <span>Dubai</span>
              <span>Tourist Visa</span>
              <div className="TouristFooter">
                <Link to="#" className="cta">Apply Now</Link>
              </div>
            </div>
          </div>
            {/* ContentRHS */}
          </div>
          {/* ContentSectionWrapper */}
        </div>
        {/* container */}
      </div>
    );
    }
export default ContentSection;

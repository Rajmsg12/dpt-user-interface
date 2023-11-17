import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Style/TourPage.css";
import Carousel from "react-multi-carousel";
import Faq from "./Faq";
import "react-multi-carousel/lib/styles.css";
import CancellationPolicy from "./CancellationPolicy";
import UsefulToKnow from "./UsefulToKnow";
import Itinerary from "./Itinerary";
import WhatToExpect from "./WhatToExpect";
import DetailOverview from "./BannerTabs";
import GetInTouch from "./GetInTouch";
import { useParams } from "react-router-dom";
import { data } from "../../data/Category";
import { addToCart } from "../cart/CartActions";

function ContentSection() {
  const { title } = useParams();
  const [backendData, setBackendData] = useState(null);
  const dispatch = useDispatch();
  const url = window.location.href;
  const spliturl = url.split("/");
  const slug = spliturl[4];
  const ourData = data.CategoryList.filter((item) => item.slug === slug);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [userDiscount, setUserDiscount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:9900/${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error("Error fetching data from the backend:", error.message);
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


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const AddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const cart = useSelector((state) => state.cart);



  return (
    <div className="ContentSection">
      {backendData && backendData.data && backendData.data.map((tour) => (
        <div className="container" key={tour.id}>
          <div className="ContentSectionWrapper">
            <div className="ContentLHS">
              <GetInTouch />
              <div className="DetailPageBanner">
                <div className="owl-carousel owl-theme" id="Detailpageslider">
                  <Carousel responsive={responsive} infinite={true}>
                    <div className="item">
                      <div className="DetailpageSlideBox">
                        <div className="imageBox">
                          <img src={`http://127.0.0.1:8800/data/uploads/${tour.image}`} alt="" />
                        </div>
                        <div className="BannerContent">
                          <div className="bannerContentTop">
                            <div className="caption">
                              <span>{tour.hastag}</span>

                            </div>
                            <div className="logoimg">
                              <img
                                src={
                                  "https://res.cloudinary.com/dqslvlm0d/image/upload/v1697701524/choise2_yc6jt4.png"
                                }
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="BannerTitle">
                            <h2>{tour.tour_name}</h2>
                          </div>
                        </div>
                        <div className="wishlistTag">
                          <span>Wishlist</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="DetailpageSlideBox">
                        <div className="imageBox">
                          <img
                            src={`http://127.0.0.1:8800/data/uploads/${tour.image}`} alt="" />
                        </div>
                        <div className="BannerContent">
                          <div className="bannerContentTop">
                            <div className="caption">
                              <span>{tour.hastag}</span>

                            </div>
                            <div className="logoimg">
                              <img
                                src={
                                  "https://res.cloudinary.com/dqslvlm0d/image/upload/v1697701524/choise2_yc6jt4.png"
                                }
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="BannerTitle">
                            <h2>{tour.tour_name}</h2>
                          </div>
                        </div>
                        <div className="wishlistTag">
                          <span>Wishlist</span>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
              <DetailOverview />
              <WhatToExpect />
              <Itinerary />
              <CancellationPolicy />
              <UsefulToKnow />
              <Faq />
            </div>
            <div className="ContentRHS">
              <div className="fromDiv">
                <h4>From</h4>
                <div className="aedrow">
                  <span>
                    {isLoggedIn ? (
                      <div>AED {Math.floor(getUserPrice(tour))}</div>

                    ) : (
                      <div>AED {Math.floor(getUserPrice(tour))}</div>
                    )}
                  </span>
                  <span>
                    {isLoggedIn ? (
                      <div>USD {Math.floor(getUserPriceUsd(tour))}</div>

                    ) : (
                      <div>USD {Math.floor(getUserPriceUsd(tour))}</div>
                    )}
                  </span>
                </div>
                <div className="Person">
                  per {tour.person} person <strong>({tour.tour_duration})</strong>
                </div>
                <div className="right">
                  <Link to="#">View Offers</Link>
                </div>
                <button
                  className="cta"
                  onClick={() => AddToCart(tour)}
                >
                  Book this Tour
                </button>
                <p>
                  Free cancellation Up to 24 hours in advance.{" "}
                  <Link to="#">Read More</Link>
                </p>
              </div>
              <div className="Attractions">
                <div className="titleRow">
                  <div className="icon">
                    <img
                      src={
                        "https://res.cloudinary.com/dqslvlm0d/image/upload/v1697701972/locationicon_oyxdy0.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="title">Attractions</div>
                </div>
                <ul>
                  <li>
                    4 Hours Dubai Private City Tour With Rolce Royce Ghost
                  </li>
                  <li>4 Hours Dubai Private City Tour With Audi R8</li>
                  <li>
                    4 Hours Dubai Private City Tour With Lamborghini Aventador
                  </li>
                  <li>5 Hours Dubai Private City Tour With Audi R8</li>
                  <li>
                    8 Hours Dubai Private City Tour With Lamborghini Aventador
                  </li>
                  <li>4 Hours Dubai Private City Tour With Audi R8</li>
                </ul>
              </div>
              <div className="DubaiPrivateTour">
                <div
                  className="TA_selfserveprop"
                  id="TA_selfserveprop642"
                  style={{ width: "100%" }}
                >
                  <div id="CDSWIDSSP" className="widSSP widSSPnarrow" style={{ width: 240 }}>
                    <div className="widSSPData" style={{ border: "1px solid #589442" }}>
                      <div className="widSSPBranding">
                        <dl>
                          <dt>
                            <Link target="_blank" to="https://www.tripadvisor.com/">
                              <img
                                src="https://www.tripadvisor.com/img/cdsi/img2/branding/150_logo-11900-2.png"
                                alt="TripAdvisor"
                              />
                            </Link>
                          </dt>
                          <dt className="widSSPTagline">
                            Know better. Book better. Go better.
                          </dt>
                        </dl>
                      </div>
                      {/*/ cdsBranding*/}
                      <div className="widSSPComponent">
                        <div className="widSSPSummary">
                          <dl>
                            <Link
                              target="_blank"
                              to="https://www.tripadvisor.com/Attraction_Review-g295424-d2510773-Reviews-Dubai_Private_Tour-Dubai_Emirate_of_Dubai.html"
                              onclick="ta.cds.handleTALink(11900,this);return true;"
                              rel="nofollow"
                            >
                              <dt className="widSSPH18">Dubai Private Tour</dt>
                            </Link>
                          </dl>
                        </div>
                        {/*/ cdsSummary*/}{" "}
                      </div>
                      {/*/ cdsComponent*/}
                      <div className="widSSPComponent widSSPOptional">
                        <div className="widSSPTrvlRtng">
                          <dl>
                            <dt className="widSSPH11">TripAdvisor Traveler Rating</dt>
                            <dd>
                              <div className="widSSPOverall">
                                <img
                                  src="https://static.tacdn.com/img2/ratings/traveler/s5.0.gif"
                                  alt="5.0 of 5 bubbles"
                                  className="rsImg"
                                />
                                <div>
                                  Based on <b>1,420</b> traveler reviews
                                </div>
                              </div>
                              {/*/ overall */}{" "}
                            </dd>
                          </dl>
                        </div>
                      </div>
                      {/*/ cdsComponent */}
                      <div className="widSSPWrap widSSPOptional">
                        <div className="widSSPInformation">
                          <div className="widSSPWrap">
                            <div className="widSSPPopIdx widSSPSingle">
                              <b>TripAdvisor Ranking</b>
                              <span className="widSSPPopIdxData">
                                {" "}
                                <span className="widSSPPopIdxData widSSPPopIdxNumbers">
                                  {" "}
                                  <sup>#</sup>5 of 341{" "}
                                </span>{" "}
                                Outdoor Activities in Dubai{" "}
                              </span>
                            </div>
                            {/*/ popIdx*/}{" "}
                          </div>
                          {/*/ cdsWrap*/}{" "}
                        </div>
                        {/*/ cdsInformation*/}{" "}
                      </div>
                      {/*/ cdsWrap*/}
                      <div className="widSSPComponent widSSPOptional">
                        <dl className="widSSPReviews">
                          <dt className="widSSPH11">Most Recent Traveler Reviews</dt>
                          <dd className="widSSPOneReview">
                            <ul className="widSSPBullet">
                              <li>
                                <span className="widSSPDate">Dec 21, 2016:</span>{" "}
                                <span className="widSSPQuote">“Excellent your group”</span>
                              </li>
                              <li>
                                <span className="widSSPDate">Dec 20, 2016:</span>{" "}
                                <span className="widSSPQuote">
                                  “Quick way to explore Dubai if you...”
                                </span>
                              </li>
                            </ul>
                            {/*/ bullet*/}{" "}
                          </dd>
                          {/*/ hReview*/}
                        </dl>
                      </div>
                      <div className="widSSPAll">
                        <ul className="widSSPReadReview">
                          <li>
                            <a
                              href="https://www.tripadvisor.com/Attraction_Review-g295424-d2510773-Reviews-Dubai_Private_Tour-Dubai_Emirate_of_Dubai.html"
                              id="allreviews"
                              onclick="ta.cds.handleTALink(11900,this);window.open(this.href, 'newTAWindow', 'toolbar=1,resizable=1,menubar=1,location=1,status=1,scrollbars=1,width=800,height=600'); return false"
                              rel="nofollow"
                            >
                              Read reviews
                            </a>
                          </li>
                        </ul>
                        <ul className="widSSPWriteReview">
                          <li>
                            <a
                              href="https://www.tripadvisor.com/UserReview-g295424-d2510773-Dubai_Private_Tour-Dubai_Emirate_of_Dubai.html"
                              id="writereview"
                              onclick="ta.cds.handleTALink(11900,this);window.open(this.href, 'newTAWindow', 'toolbar=1,resizable=1,menubar=1,location=1,status=1,scrollbars=1,width=800,height=600'); return false"
                              rel="nofollow"
                            >
                              Write a review
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*/ cdsAll*/}
                      <div className="widSSPLegal">© 2016 TripAdvisor LLC</div>
                      {/*/ cdsLegal*/}{" "}
                    </div>
                    {/*/ cdsData*/}
                  </div>
                  {/*/ CDSPOP.cdsBx*/}
                </div>
              </div>
              <div className="offerDiv">
                <div className="offer">10% OFF</div>
                <p>
                  we offer the best tour packages for Dubai & Abu Dhabi at
                  affordable prices.
                </p>
                <Link to="#" className="cta">
                  Check Out
                </Link>
              </div>
              <div className="TouristDiv">
                <div className="img">
                  <img
                    src={
                      "https://res.cloudinary.com/dqslvlm0d/image/upload/v1697702277/plane_lsvzcu.png"
                    }
                    alt=""
                  />
                </div>
                <span>Dubai</span>
                <span>Tourist Visa</span>
                <div className="TouristFooter">
                  <Link to="#" className="cta">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  function getUserPrice(tour) {
    if (userType === 2) {
      // Agent user type
      return (tour.tour_price_aed - (tour.tour_price_aed * userDiscount / 100)).toFixed(2);
    } else if (userType === 3) {
      // Normal user type
      return tour.tour_price_aed;
    } else {
      // Default case (handle other user types if needed)
      return tour.tour_price_aed;
    }

    // ... (remaining code)
  }
  function getUserPriceUsd(tour) {
    if (userType === 2) {
      // Agent user type
      return (tour.tour_price_usd - (tour.tour_price_usd * userDiscount / 100)).toFixed(2);
    } else if (userType === 3) {
      // Normal user type
      return tour.tour_price_usd;
    } else {
      // Default case (handle other user types if needed)
      return tour.tour_price_usd;
    }
  }

}

export default ContentSection;

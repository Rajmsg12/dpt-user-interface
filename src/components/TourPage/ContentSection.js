import React from "react";
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
import Cart from "../cart/Cart";
import { addToCart } from "../cart/CartActions";

function ContentSection() {
  const { title } = useParams();
  const dispatch = useDispatch();
  const url = window.location.href;
  const spliturl = url.split("=");
  const id = Number(spliturl[1]);
  const ourData = data.CategoryList.filter((item) => item.id === id);

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
      {ourData.map((categoryList) => (
        <div className="container" key={categoryList.id}>
          <div className="ContentSectionWrapper">
            <div className="ContentLHS">
              <GetInTouch />
              <div className="DetailPageBanner">
                <div className="owl-carousel owl-theme" id="Detailpageslider">
                  <Carousel responsive={responsive} infinite={true}>
                    <div className="item">{/* Your code here */}</div>
                    <div className="item">{/* Your code here */}</div>
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
                    AED{" "}
                    {parseFloat(
                      categoryList.price.replace(/,/g, "")
                    ).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span>
                    USD{" "}
                    {typeof categoryList.price === "string"
                      ? (
                          parseFloat(categoryList.price.replace(/,/g, "")) *
                          0.27
                        ).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : "N/A"}
                  </span>
                </div>
                <div className="Person">
                  per {categoryList.person} person{" "}
                  <strong>({categoryList.duration})</strong>
                </div>
                <div className="right">
                  <Link to="#">View Offers</Link>
                </div>
                <button className="cta" onClick={() => AddToCart(categoryList)}>
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
                <div className="customersayText">
                  <div className="topimg">
                    <img
                      src={
                        "https://res.cloudinary.com/dqslvlm0d/image/upload/v1697702089/Tripadvisorlogo_cc6y9z.png"
                      }
                      alt=""
                    />
                  </div>
                  <h4>Dubai Private Tour</h4>
                  <div className="rating">
                    <span className="Recentrating">Recent Traveler Rating</span>
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
                    <span>Tripadvisor Ranking</span>
                    <h5>#112 of 2070 Outdoor activities in Dubai</h5>
                  </div>
                  <div className="Recent">
                    <span>Recent Travelers Reviews</span>
                    <p>
                      “Happy with their timely response and I got cheaper
                      tickets from any other site.”
                    </p>
                    <p>“Best Service And Support Guidance Fast Booking.”</p>
                  </div>
                  <div className="link">
                    <Link to="#">Read reviews</Link>
                    <Link to="#">Write a review</Link>
                  </div>
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
      {ourData.length > 0 && <Cart cart={cart} addToCart={AddToCart} />}
    </div>
  );
}
export default ContentSection;

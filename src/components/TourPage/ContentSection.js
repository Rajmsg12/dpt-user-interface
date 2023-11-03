import React from 'react';
import { Link } from 'react-router-dom';
import './Style/TourPage.css'
import Carousel from 'react-multi-carousel';
import Faq from './Faq'
import 'react-multi-carousel/lib/styles.css';
import CancellationPolicy from './CancellationPolicy';
import UsefulToKnow from './UsefulToKnow';
import Itinerary from './Itinerary';
import WhatToExpect from './WhatToExpect';
import DetailOverview from './BannerTabs';
import GetInTouch from './GetInTouch';
import { useParams } from 'react-router-dom';

function ContentSection() {
    const { title } = useParams();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="ContentSection">
      <div className="container">
        <div className="ContentSectionWrapper">
          <div className="ContentLHS">
            <GetInTouch/>
            {/* GetinTouch */}
            <div className="DetailPageBanner">
              <div className="owl-carousel owl-theme" id="Detailpageslider">
                <Carousel responsive={responsive} infinite={true}>
                  <div className="item">
                    <div className="DetailpageSlideBox">
                      <div className="imageBox">
                        <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697696847/detailpagebanner_r14h3e.jpg"} alt="" />
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
                            <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697701524/choise2_yc6jt4.png"} alt="" />
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
                  <div className="item">
                    <div className="DetailpageSlideBox">
                      <div className="imageBox">
                        <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697696847/detailpagebanner_r14h3e.jpg"} alt="" />
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
                            <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697701524/choise2_yc6jt4.png"} alt="" />
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
                </Carousel>
                {/* item */}

                {/* item */}
              </div>
              {/* Detailpageslider */}
            </div>
            {/* DetailPageBanner */}
            <DetailOverview/>
            {/* DetailTab */}
            <WhatToExpect/>
            {/* Whattoexpect */}
            <Itinerary/>
            {/* Itinerary */}
            <CancellationPolicy/>
            {/* Cancellation Policy */}
            <UsefulToKnow/>
            {/* usefultoknow */}
            <Faq/>
            {/* innerPageFaq */}
          </div>
          {/* ContentLHS */}
          <div className="ContentRHS">
            <div className="fromDiv">
              <h4>From</h4>
              <div className="aedrow">
                <span>AED 2,000</span>
                <span>USD 2000*0.27</span>
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
                  <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697701972/locationicon_oyxdy0.png"} alt="" />
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
                <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697702277/plane_lsvzcu.png"} alt="" />
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

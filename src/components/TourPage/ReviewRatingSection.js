import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for routing
import './Style/TourPage.css'

const ReviewRatingSection = () => {
  return (
    <div>
      <div className="ReviewRatingSection">
        <div className="container">
          <div className="ReviewRatingWrapper">
            <div className="ReviewsLhs">
              <div className="Title">Reviews</div>
              <div className="RatingPoint">
                <span>5.0 <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697704991/ratingstar_p0ani1.png"} alt="" /></span>
              </div>
              <div className="reviewText"> 4.5 | 500 Reviews </div>
            </div>
            {/* ReviewsLhs */}
            <div className="ReviewsRhs">
              <p>Total review count and overall rating based on Viator and Tripadvisor reviews</p>
              <div className="ProgressDiv">
                <div className="ProgressRow">
                  <span>5 Stars</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>25</span>
                </div>
                {/* ProgressRow */}
                <div className="ProgressRow">
                  <span>4 Stars</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>20</span>
                </div>
                {/* ProgressRow */}
                <div className="ProgressRow">
                  <span>3 Stars</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>13</span>
                </div>
                {/* ProgressRow */}
                <div className="ProgressRow">
                  <span>2 Stars</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "30%" }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>5</span>
                </div>
                {/* ProgressRow */}
                <div className="ProgressRow">
                  <span>1 Stars</span>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>2</span>
                </div>
                {/* ProgressRow */}
              </div>
              {/* ProgressDiv */}
            </div>
            {/* ReviewsRhs */}
          </div>
          {/* ReviewRatingWrapper */}
          <div className="ShowingReview">
            <p>Showing 1-2 of 2 reviews with 4 stars.</p>
            <div className="ShowingReviewWidget">
              <div className="ShowingReviewRow">
                <div className="starwithtext">
                  <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697704991/ratingstar_p0ani1.png"} alt="" /> Best Tour Experience Ever!
                </div>
                <span>John Doe</span>
                <p>Our tour was an unforgettable experience that I would highly recommend. Our organizer, Ms. Fatima, our tour guide Ms. Maricar, and our safari driver, Mr. Waheed, made it even more special. The journey was hassle-free and truly one for the books.</p>
              </div>
              {/* ShowingReviewRow */}
              <div className="ShowingReviewRow">
                <div className="starwithtext">
                  <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697704991/ratingstar_p0ani1.png"} alt="" /> Time out with family!
                </div>
                <span>Sofia Negiri</span>
                <p>Had an amazing time with my wife at the desert safari hosted by Dubai Private Tour. Our guide, Waheed, was an expert desert safari driver with 13 years of experience and explained every single detail of the tour to us during the entire trip. Thank you Waheed for making this trip a memorable one. Will definitely recommend anyone looking for an awesome and unforgettable desert safari experience in Dubai!</p>
              </div>
              {/* ShowingReviewRow */}
              <div className="ShowingReviewRow">
                <div className="starwithtext">
                  <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697704991/ratingstar_p0ani1.png"} alt="" /> Time out with family!
                </div>
                <span>Rahul Yadav</span>
                <p>Wow!!! What an experience of a life time!!! Ateeb my safari driver was simply amazing!!! He was extremely knowledgeable, entertaining and a great fun guy to be around. I highly recommend if anyone is in the Dubai area please do the safari and please ask for Ateeb!!! A life time of memories!!!</p>
              </div>
              {/* ShowingReviewRow */}
            </div>
            {/* ShowingReviewWidget */}
         {/*  <div className="center">
              <div className="cta">
                <Link to="#"><img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697705131/down-arrow_wuatf6.png"} alt="" /></Link>
              </div>
            </div>*/}  
          </div>
          {/* ShowingReview */}
        </div>
      </div>
    </div>
  );
}

export default ReviewRatingSection;

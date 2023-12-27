import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for routing
import './Style/TourPage.css'
import config from '../../config';

const ReviewRatingSection = () => {
  const [reviews, setReviews] = useState([]);  
  const [totalFourStarReviews, setTotalFourStarReviews] = useState(0);
  let totalFourStarRating = 0;

  useEffect(() => {
    // Function to fetch data with authorization header
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch(`${config.baseUrl}/tour/review/list/37`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          if (data.status === 'success') {
            setReviews(data.data);
          } else {
            console.error('Error fetching reviews');
          }
        } catch (error) {
          console.error('Error fetching reviews:', error);
        }
      } else {
        console.error('No token found in local storage');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (reviews.length > 0) {
      const fourStarReviews = reviews.filter(review => review.rating === 4);
      setTotalFourStarReviews(fourStarReviews.length);

      if (totalFourStarReviews > 0) {
        totalFourStarRating = fourStarReviews.reduce((acc, curr) => acc + curr.rating, 0) / totalFourStarReviews;
      }
    }
  }, [reviews, totalFourStarReviews]); 

  const generateStarRating = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);
  
    const stars = [];
  
    // Inline styles for the stars
    const starStyle = {
      color: '#F4E877', // Change this to your desired star color
      fontSize: '24px', // Change this to your desired star size
      display: 'inline-block', // Display stars horizontally
    };
  
    // Adding full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star" style={starStyle}>&#9733;</span>);
    }
  
    // Adding half star if needed
    if (halfStar) {
      stars.push(<span key="half" className="star" style={starStyle}>&#9733;&#189;</span>);
    }
  
    // Adding empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star" style={starStyle}>&#9734;</span>);
    }
  
    return stars;
  };
  


  return (
    <div>
      <div className="ReviewRatingSection">
        <div className="container">
          <div className="ReviewRatingWrapper">
            <div className="ReviewsLhs">
              <div className="Title">Reviews</div>
              <div className="RatingPoint">
                <span>5.0 </span>
              </div>
              
              <div className="reviewText"> 4.5 | {reviews.length} Reviews </div>
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
                    <div className="progress-bar" role="progressbar" style={{ width: `${(totalFourStarRating * 20)}%` }} aria-valuenow={totalFourStarRating * 20} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <span>{totalFourStarReviews}</span>
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
          <p>Showing total {reviews.length} reviews</p>
            <div className="ShowingReviewWidget">
              {reviews.map((review) => (
                <div key={review.id} className="ShowingReviewRow">
                  <div className="starRating">
                    {generateStarRating(review.rating)} {review.name}
                  </div> 
               
                  <p>{review.comments}</p>
                </div>
              ))}

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

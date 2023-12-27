<div className="ReviewRatingSection">
<div className="container">
  <div className="ReviewRatingWrapper">
    <div className="ShowingReview">
      {/* Display fetched reviews */}
      <div className="FetchedReviews">
        {reviews.map((review) => (
          <div key={review.id} className="ShowingReviewRow">
            <div className="starwithtext">
              <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697704991/ratingstar_p0ani1.png"} alt="" /> {review.comments}
            </div>
            <span>{review.name}</span>
            <p>{review.comments}</p>
          </div>
        ))}
      </div>
      {/* FetchedReviews */}
      {/* Rest of your existing JSX code */}
      {/* ShowingReviewWidget */}
      {/* Rest of your existing JSX code */}
    </div>
    {/* ShowingReview */}
  </div>
  {/* ReviewRatingWrapper */}
</div>
{/* container */}
</div>
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'rc-slider'; // Import the Slider component
import 'rc-slider/assets/index.css';
import { data } from '../../data/TourListing'

const LeftSideFilter = ({ handlePriceFilter, priceRange, handleRatingFilterChange, selectedRatingFilter, handleDurationFilterChange }) => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

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
   
  );
};

export default LeftSideFilter;

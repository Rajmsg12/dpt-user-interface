import React from 'react';
import { Link } from 'react-router-dom';
import './Style/DetailPage.css'

const TopSection = () => {
  return (
    <div>
      <div className="TopSection">
        <div className="container">
          <div className="TopSectionWrapper">
            <h1>Abu Dhabi Amazing Family Private Tour</h1>
            <div className="TopSectionRHS">
              <div className="telrow">
                <Link to="tel:+971559554333">+971 55 955 4333</Link>
                <Link to="tel:+97143961444">+971 4 3961 444</Link>
              </div>
              <div className="tel">
                <Link to="tel:+18006590187">+1 (800) 659 0187</Link>
                <div className="tollfree">
                  <span>Toll Free Number</span>
                  <span>USA</span>
                </div>
              </div>
            </div>
            {/* TopSectionRHS */}
          </div>
          {/* TopSectionWrapper */}
        </div>
        {/* container */}
      </div>
    </div>
  );
};

export default TopSection;

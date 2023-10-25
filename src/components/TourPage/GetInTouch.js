import React from 'react'
import {Link} from 'react-router-dom'

const GetInTouch = () => {
  return (
    <div>
    <div className="GetinTouch">
    <div className="GetinTouchWrapper">
      <div className="time">5 Hours</div>
      <div className="location">Dubai, United Arab Emirates</div>
      <div className="review">
        <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697704991/ratingstar_p0ani1.png"} alt="" />4.5 | 500 Reviews
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
    </div>
  )
}

export default GetInTouch

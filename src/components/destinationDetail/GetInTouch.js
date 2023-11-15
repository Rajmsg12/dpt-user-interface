import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
  const [destinationInfo, setDestinationInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:9900/dubai-rirport-private-transfer');
        const data = await response.json();

        if (data.status === 'success' && data.length > 0) {
          console.log(data.data[0].destination_info[0].name)
          setDestinationInfo(data.data[0].destination_info[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
    <div>
      <div className="GetinTouch">
        <div className="GetinTouchWrapper">
          <div className="time">5 Hours</div>
          <div className="location">{destinationInfo.name}</div>
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
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

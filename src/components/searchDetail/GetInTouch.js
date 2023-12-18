import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import { useParams } from 'react-router-dom';

const GetInTouch = () => {
  const [destinationInfo, setDestinationInfo] = useState();
  const [duration, setDuration] = useState();
  // const { slug } = useParams();
  // const formattedTitle = slug
  // .split('-') // Split by hyphens
  // .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
  // .join(' ');
  const url = window.location.href;
  const spliturl = url.split("/");
  const slug1 = spliturl[5];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.baseUrl}/${slug1}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setDestinationInfo(data.data[0].destination_info[0].name)
        setDuration(data.data[0].tour_duration)
        console.log(data.data[0].tour_duration)

      } catch (error) {
        console.error("Error fetching data from the backend:", error.message);
      }
    };

    fetchData();
  }, []);// Empty dependency array ensures that the effect runs only once on component mount


  const shareOnFacebook = () => {
    // Replace with the appropriate Facebook sharing URL
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  };

  const shareOnMail = () => {
    // Replace with the appropriate Mail sharing URL
    window.location.href = `mailto:?body=${encodeURIComponent(url)}`;
  };

  const shareOnTwitter = () => {
    // Replace with the appropriate Twitter sharing URL
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`);
  };
  const shareOnGooglePlus = () => {
    // Replace with the appropriate Google+ sharing URL (Google+ has been deprecated)
    window.open(`https://plus.google.com/share?url=${encodeURIComponent(url)}`);
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
  };

  const shareOnWhatsApp = () => {
    window.location.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
  };

  return (
    <div>
      <div className="GetinTouch">
        <div className="GetinTouchWrapper">
          <div className="time">{duration}</div>
          <div className="location">{destinationInfo}</div>
          <div className="review">
            <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697704991/ratingstar_p0ani1.png"} alt="" />4.5 | 500 Reviews
          </div>
          <div className="SocialIcon">
            <div className="shareTag">Share with your friends</div>
            <ul>
              <li>
                <Link to="#" className="fb" onClick={shareOnFacebook}></Link>
              </li>
              <li>
                <Link to="#" className="mail" onClick={shareOnMail}></Link>
              </li>
              <li>
                <Link to="#" className="tw" onClick={shareOnTwitter}></Link>
              </li>
              <li>
                <Link to="#" className="gp" onClick={shareOnGooglePlus}></Link>
              </li>
              <li>
                <Link to="#" className="lin" onClick={shareOnLinkedIn}></Link>
              </li>
              <li>
                <Link to="#" className="wp" onClick={shareOnWhatsApp}></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

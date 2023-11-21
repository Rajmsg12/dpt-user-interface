import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../config';

const Banner = () => {
  const { categoryName } = useParams();
  const [tour, setTour] = useState({});
  const url = window.location.href;
  const spliturl = url.split("/");
  const slug = spliturl[3];

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await fetch(`${config.baseUrl}/plan/${slug}`);
        const data = await response.json();

        if (data.status === 'success') {
          setTour(data.data[0]);
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchTourData();
  }, [slug]);
  const backgroundImageUrl = tour.tour_info && tour.tour_info.length > 0
  ? `url(http://127.0.0.1:8800/data/uploads/${tour.image})`
  : '';

  return (
    <div>
      <div
        className="InnerBanner"
        style={{ backgroundImage: backgroundImageUrl }} 
      >
        <div className="container">
          <h1>{categoryName.replace(/-/g, ' ')}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

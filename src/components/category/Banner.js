import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Banner = () => {
  const { categoryName } = useParams();
  const [tour, setTour] = useState({});

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:9900/plan/${categoryName}`);
        const data = await response.json();

        if (data.status === 'success') {
          setTour(data);
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchTourData();
  }, [categoryName]);

  return (
    <div>
      <div
        className="InnerBanner"
        style={{ backgroundImage: `url(http://127.0.0.1:8800/data/uploads/${tour.tour_image})` }}
      >
        <div className="container">
          <h1>{categoryName.replace(/-/g, ' ')}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

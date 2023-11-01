import React from 'react';
import { useParams } from 'react-router-dom';

const Banner = () => {
  const {categoryName} = useParams()
  return (
    <div>
    <div className="InnerBanner" style={{ backgroundImage: 'url(https://res.cloudinary.com/dqslvlm0d/image/upload/v1698737900/innerbanner_rnna6u.jpg)' }}>

        <div className="container">
          <h1>{categoryName.replace(/-/g, ' ')}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

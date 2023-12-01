import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router

const NotFound = () => {
  const navigate = useNavigate();

  // You can customize the content of the 404 page here
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default NotFound;

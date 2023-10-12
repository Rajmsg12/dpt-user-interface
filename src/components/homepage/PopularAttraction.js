import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const PopularAttraction = () => {
  return (
    <div>
      <div className="PopularAttractions"> {/* Use className instead of class for styling */}
        <div className="container">
          <div className="Title">
            <h2>Popular Attractions</h2>
          </div>
          <div className="tags">
            {/* Replace <a> with <Link> and set to="" as the "to" prop */}
            <Link to="">Burj Khalifa Tickets With Free Treat Voucher</Link>
            <Link to="">Dolphin Show Dubai Tickets</Link>
            <Link to="">Dubai Desert Safari with BBQ Dinner</Link>
            <Link to="">Skydive Dubai - Tandem Skydiving in Dubai</Link>
            <Link to="">Legoland theme park</Link>
            <Link to="">Witness the dazzling Global Village</Link>
            <Link to="">Lost Chambers Aquarium</Link>
            <Link to="">Burj Khalifa Tickets With Free Treat Voucher</Link>
            <Link to="">Dolphin Show Dubai Tickets</Link>
            <Link to="">Dubai Desert Safari with BBQ Dinner</Link>
            <Link to="">Skydive Dubai - Tandem Skydiving in Dubai</Link>
            <Link to="">Legoland theme park</Link>
            <Link to="">Witness the dazzling Global Village</Link>
            <Link to="">Lost Chambers Aquarium Burj Khalifa Tickets With Free Treat Voucher</Link>
            <Link to="">Dolphin Show Dubai Tickets</Link>
            <Link to="">Dubai Desert Safari with BBQ Dinner Skydive Dubai - Tandem Skydiving in Dubai</Link>
            <Link to="">Legoland theme park</Link>
            <Link to="">Witness the dazzling Global Village</Link>
            <Link to="">Lost Chambers Aquarium</Link>
          </div>
        </div>
      </div>
      {/* <!--Popular Attractions--> */}
    </div>
  );
};

export default PopularAttraction;

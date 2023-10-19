import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import '../TourPage/Style/TourPage.css'

const InnerHeader = () => {
  const search=()=>{
    
  }
  return (
    <div>
      <header className="innerpageHeader"> {/* Use className instead of class */}
        <div className="innerHeader"> {/* Use className instead of class */}
          <div className="container"> {/* Use className instead of class */}
            <div className="innerHeaderWrapper"> {/* Use className instead of class */}
              <div className="HeaderLHS"> {/* Use className instead of class */}
                <div className="Logo"> {/* Use className instead of class */}
                  <Link to="/">
                    <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697702175/innerlogo_u1xrls.png"} alt="" />
                  </Link>
                </div>
                <div className="HeaderSearch"> {/* Use className instead of class */}
                  <form className="form"> {/* Use className instead of class */}
                    <input type="text" value="" onChange={search} placeholder="Explore Dubai" />
                    <button type="submit" className="SearchIcon"></button>
                  </form>
                </div>
              </div>
              {/* HeaderLHS */}
              <div className="HeaderRHS"> {/* Use className instead of class */}
                <div className="Headerdropdownmenu"> {/* Use className instead of class */}
                  <div className="dropdown"> {/* Use className instead of class */}
                    <Link to="" className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> ENG </Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <Link to="" className="dropdown-item" href="#">Spanish</Link>
                      </li>
                      <li>
                        <Link to="" className="dropdown-item" href="#">French</Link>
                      </li>
                      <li>
                        <Link to="" className="dropdown-item" href="#">German</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown"> {/* Use className instead of class */}
                    <Link to="" className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> AED </Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <Link to="" className="dropdown-item" href="#">USD $</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Headerdropdownmenu */}
                <div className="addtocart"> {/* Use className instead of class */}
                  <Link to="" className="cart"></Link>
                  <Link to="" className="wishlist"></Link>
                  <Link to="" className="userIcon"></Link>
                </div>
                {/* addtocart */}
              </div>
              {/* HeaderRHS */}
            </div>
            {/* innerHeaderWrapper */}
          </div>
          {/* container */}
        </div>
        {/* innerHeader */}
      </header>
    </div>
  );
};

export default InnerHeader;

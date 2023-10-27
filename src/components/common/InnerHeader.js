import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import '../TourPage/Style/TourPage.css'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Person } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed.svg";
import { ReactComponent as House } from "bootstrap-icons/icons/house.svg";

const InnerHeader = () => {
  const search = () => {

  }
  const navigate = useNavigate()
  const [user_name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
          fetch('http://127.0.0.1:9900/welcome', {
              headers: {
                  Authorization: `Bearer ${token}`
              }

          })

              .then(response => response.json())

              .then(data => {

                  setUserName(data.data.user_name);
                  setEmail(data.data.email);
                  setIsLoggedIn(true);
              })

              .catch(error => {
                  console.error("Error fetching user data:", error);
              });
      }
  }, []);

  const handleLogout = () => {
      fetch('http://127.0.0.1:9900/logout', {
          method: 'POST',
      })
          .then(() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user_name');
              setIsLoggedIn(false);
          })
          .catch(error => {
              console.error('Logout failed', error);
          });
  };
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

                  <div class="dropdown userIcon">
                    <Link class="btn userIconTag dropdown-toggle" to="/" role="button" id="userIcon" data-bs-toggle="dropdown" aria-expanded="false"></Link>
                    <ul class="dropdown-menu" aria-labelledby="userIcon">
                    <li>
                    {isLoggedIn ? (
                        <div>
                            <Link to="/user-dashboard" className="dropdown-item">
                                <div >
                                    <Person className="text-danger" />
                                    <span className="userName" style={{ color: "black" }}>{user_name}</span>
                                </div>
                            </Link>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link to="/bookings" className="dropdown-item">
                                    <House className="text-danger" /> Bookings
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link className="dropdown-item" onClick={handleLogout}>
                                    <IconDoorClosedFill className="text-danger" /> Logout
                                </Link>
                            </li>
                        </div>

                    ) : (
                        <Link to="/login" className="dropdown-item">Login/SignUp</Link>
                    )}
                </li>

                    </ul>
                  </div>
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

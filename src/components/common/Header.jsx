import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../Style/header.css'
import { connect } from 'react-redux';
import { setUser, logout } from './HeaderAction'; 
import Search from "../Search";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as Person } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed.svg";
import { ReactComponent as House } from "bootstrap-icons/icons/house.svg";
import { ReactComponent as Shapes } from "bootstrap-icons/icons/heart.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconInfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = ({ user, isLoggedIn, setUser, logout }) => {
    const [first_name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [cartCount, setCartCount] = useState("");

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
              setUserName(data.data.first_name);
              setEmail(data.data.email);
              setUser(data.data); // Assuming data.data contains all user information
            })
            .catch(error => {
              console.error("Error fetching user data:", error);
            });
        }
      }, [setUser]);

    const handleLogout = () => {
        fetch('http://127.0.0.1:9900/logout', {
            method: 'POST',
        })
            .then(() => {
                localStorage.removeItem('token');
                setUser(null); // Clear user data in Redux store
                setUserName(''); // Clear local state
                setEmail('');
                setCartCount('');
                logout();
            })
            .catch(error => {
                console.error('Logout failed', error);
            });
    };

    return (

        <header className="HomePageHeader">
            <div className="HeaderWrapper">
                <div className="container">
                    <div className="HeaderLayer">
                        <div className="HeaderLhs"><div className="Logo"><Link to="/"><img src="images/homepage/logo.png" alt="logo" /></Link>
                            <div className="desktopNone">
                                <div className="HeaderRHS">
                                    <div className="Headerdropdownmenu">
                                        <div className="dropdown">
                                            <Link className="btn dropdown-toggle" to="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                ENG
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><Link className="dropdown-item" to="/">Spanish</Link></li>
                                                <li><Link className="dropdown-item" to="/">French</Link></li>
                                                <li><Link className="dropdown-item" to="/">German</Link></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <Link className="btn dropdown-toggle" to="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                AED
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><Link className="dropdown-item" to="/">USD $</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="addtocart">
                                        <div className="addtocart">
                                            <Link to="/cart">
                                                <img src="images/homepage/shopping-cart.png" alt="" />
                                                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                                            </Link>
                                            <Link to="/whishlist"><img src="images/homepage/like.png" alt="" /></Link>

                                        </div>




                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="cerculeIcon"
                                                data-toggle="dropdown"
                                                aria-expanded="false"
                                                aria-label="Profile"
                                                data-bs-toggle="dropdown"
                                            >
                                                <FontAwesomeIcon icon={faUser} className="text-light" />
                                            </button>
                                            <ul className="dropdown-menu">
                                            {isLoggedIn ? (
                                                <div>
                                                    <Link to="/user-dashboard" className="dropdown-item">
                                                        <div>
                                                            <Person className="text-danger" />
                                                            <span className="userName" style={{ color: "black" }}>{first_name}</span>
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
                                                        <button className="dropdown-item" onClick={handleLogout}>
                                                            <IconDoorClosedFill className="text-danger" /> Logout
                                                        </button>
                                                    </li>
                                                </div>
                                            ) : (
                                                <li>
                                                    <Link to="/login" className="dropdown-item">Login/SignUp</Link>
                                                </li>
                                            )}
                                        </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                            <div className="hlhsdiv">
                                <div className="mobileNone">
                                    <div className="tel">
                                        <Link to="tel:+1 (800) 659 0187">+1 (800) 659 0187</Link>
                                        <div className="tollfree"><span>Toll Free Number</span><span>USA</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="hlhsdiv">
                                <div className="desktopNone">
                                    <div className="tel">
                                        <Link to="tel:+1 (800) 659 0187">+1 (800) 659 0187</Link>
                                        <div className="tollfree"><span>Toll Free Number</span><span>USA</span></div>
                                    </div>
                                </div>

                                <div className="telrow">
                                    <Link to="tel:+971 55 955 4333">+971 55 955 4333</Link>
                                    <Link to="tel:+971 4 3961 444">+971 4 3961 444</Link>
                                </div>
                            </div>
                        </div>
                        <div className="mobileNone">
                            <div className="HeaderRHS">
                                <div className="Headerdropdownmenu">
                                    <div className="dropdown">
                                        <Link className="btn dropdown-toggle" to="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            ENG
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><Link className="dropdown-item" to="/">Spanish</Link></li>
                                            <li><Link className="dropdown-item" to="/">French</Link></li>
                                            <li><Link className="dropdown-item" to="/">German</Link></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <Link className="btn dropdown-toggle" to="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            AED
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><Link className="dropdown-item" to="/">USD $</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="parentaddtocart">
                                    <div className="addtocart">
                                        <Link to="/cart">
                                            <img src="images/homepage/shopping-cart.png" alt="" />
                                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                                        </Link>
                                        <Link to="/whishlist"><img src="images/homepage/like.png" alt="" /></Link>

                                    </div>

                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="cerculeIcon"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                            aria-label="Profile"
                                            data-bs-toggle="dropdown"
                                        >
                                            <FontAwesomeIcon icon={faUser} className="text-light" />
                                        </button>
                                        <ul className="dropdown-menu">
                                        {isLoggedIn ? (
                                            <div>
                                                <Link to="/user-dashboard" className="dropdown-item">
                                                    <div>
                                                        <Person className="text-danger" />
                                                        <span className="userName" style={{ color: "black" }}>{first_name}</span>
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
                                                    <button className="dropdown-item" onClick={handleLogout}>
                                                        <IconDoorClosedFill className="text-danger" /> Logout
                                                    </button>
                                                </li>
                                            </div>
                                        ) : (
                                            <li>
                                                <Link to="/login" className="dropdown-item">Login/SignUp</Link>
                                            </li>
                                        )}
                                    </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    );
};
const mapStateToProps = (state) => ({
    user: state.user.user,
    isLoggedIn: state.user.isLoggedIn,
  });
  
  const mapDispatchToProps = {
    setUser,
    logout,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);

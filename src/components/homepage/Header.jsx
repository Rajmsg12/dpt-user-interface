import React from "react";
import { Link } from "react-router-dom";
import '../../Style/header.css'
import Search from "../Search";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconInfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (

    <header className="p-3 border-bottom bg-blue">
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
                        <li><Link className="dropdown-item" href="/">German</Link></li>
                      </ul>
                    </div>
                    <div className="dropdown">
                      <Link className="btn dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        AED
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><Link className="dropdown-item" to="/">USD $</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="addtocart">
                    <Link to="/"><img src="images/homepage/shopping-cart.png" alt="" /></Link>
                    <Link to="/"><img src="images/homepage/like.png" alt="" /></Link>
                    <Link to="/" className="userIcon"><img src="images/homepage/user.png" alt="" /></Link>

                  </div>


                </div>
              </div>
            </div>
              <div className="hlhsdiv">
                <div className="mobileNone">
                  <div className="tel">
                    <Link href="tel:+1 (800) 659 0187">+1 (800) 659 0187</Link>
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
                      <li><Link className="dropdown-item" href="/">Spanish</Link></li>
                      <li><Link className="dropdown-item" href="/">French</Link></li>
                      <li><Link className="dropdown-item" href="/">German</Link></li>
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
                    <Link to="/"><img src="images/homepage/shopping-cart.png" alt="" /></Link>
                    <Link to="/"><img src="images/homepage/like.png" alt="" /></Link>
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
                            <li>
                              <Link className="dropdown-item" to="/account/profile">
                                <IconPersonBadgeFill /> My Profile
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/star/zone">
                                <IconStarFill className="text-warning" /> Star Zone
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/account/orders">
                                <IconListCheck className="text-primary" /> Orders
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/account/wishlist">
                                <IconHeartFill className="text-danger" /> Wishlist
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/account/notification">
                                <IconBellFill className="text-primary" /> Notification
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/support">
                                <IconInfoCircleFill className="text-success" /> Support
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/">
                                <IconDoorClosedFill className="text-danger" /> Logout
                              </Link>
                            </li>
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
export default Header;

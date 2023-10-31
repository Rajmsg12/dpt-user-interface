import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {data} from '../../data/Footer'
import {
    faTwitter,
    faFacebookF,
    faInstagram,
    faYoutube,
    faApple,
    faWindows,
    faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (

        <footer>
            <div className="followUs">
                <div className="container">
                    <div className="followtext">Follow us on</div>
                    <ul>
                        <li>
                            <Link to="" className="fb"></Link>
                        </li>
                        <li>
                            <Link to="" className="tw"></Link>
                        </li>
                        <li>
                            <Link to="" className="yt"></Link>
                        </li>
                        <li>
                            <Link to="" className="ig"></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="menuWrapper">
                    <div className="footerWidget">
                        <h6>Get In Touch</h6>
                        <p>
                            Dubai Private Tour / Milan Tours & Tour Guide Services LLC. Office
                            117, Al Makhawi Building, Al Karama, Dubai, UAE, P.O.Box: 120730
                        </p>
                        <div className="fInfo">
                            <a href="tel:+91 971 4 3961444" className="call">
                                +91 971 4 3961444
                            </a>
                            <a href="mailto:info@milantoursdubai.com" className="mail">
                                info@milantoursdubai.com
                            </a>
                        </div>
                    </div>
                    <div className="footerWidget">
                        <h6>Tours & Safaris</h6>
                        
                        <ul>
                        {data.CategoryList.map((item, index) => (
                            <li key={index}>
                                {/*<Link to={`/plan/${item.category.toLowerCase().replace(/\s+/g, '-')}`}>{item.category}</Link>*/}
                                <Link to={`/plan`}>{item.category}</Link>
                            </li>
                        ))}
                
                        </ul>
                    </div>
                    <div className="footerWidget">
                        <ul>
                            <li>
                                <Link to="/tours">Desert Safari</Link>
                            </li>
                            <li>
                                <Link to="/tours">Expo 2020 Packages</Link>
                            </li>
                            <li>
                                <Link to="/tours">Meet Local Emirati</Link>
                            </li>
                            <li>
                                <Link to="/tours">Seaplane Tour</Link>
                            </li>
                            <li>
                                <Link to="/tours">Ferrari World</Link>
                            </li>
                            <li>
                                <Link to="/tours">Attractions Tickets</Link>
                            </li>
                            <li>
                                <Link to="/tours">Budget Desert Safaris</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footerWidget">
                        <ul>
                            <li>
                                <Link to="#">Airport Transfers</Link>
                            </li>
                            <li>
                                <Link to="#">Budget Airport Layover Tour</Link>
                            </li>
                            <li>
                                <Link to="#">Hot Air Balloon</Link>
                            </li>
                            <li>
                                <Link to="#">Luxury Yacht Charter</Link>
                            </li>
                            <li>
                                <Link to="#">Hotel Bookings</Link>
                            </li>
                            <li>
                                <Link to="#">Helicopter Tour</Link>
                            </li>
                            <li>
                                <Link to="#">Burj Khalifa Reservations</Link>
                            </li>
                            <li>
                                <Link to="#">Stable Tour</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footerlogoWrapper">
                    <div className="footerlogoLhs">
                        <Link to="#">
                            <img src="images/homepage/footerimg1.png" alt="" />
                        </Link>
                        <Link to="#">
                            <img src="images/homepage/footerimg2.png" alt="" />
                        </Link>
                        <Link to="#">
                            <img src="images/homepage/footerimg3.png" alt="" />
                        </Link>
                        <Link to="#">
                            <img src="images/homepage/footerimg4.png" alt="" />
                        </Link>
                    </div>
                    <div className="footerlogoRhs">
                        <Link to="/">
                            <img src="images/homepage/card1.png" alt="" />
                        </Link>
                        <Link to="/">
                            <img src="images/homepage/card2.png" alt="" />
                        </Link>
                        <Link href="/">
                            <img src="images/homepage/card3.png" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="footerMenu">
                    <ul>
                        <li>
                            <Link to="#">Contact us</Link>
                        </li>
                        <li>
                            <Link to="#">About</Link>
                        </li>
                        <li>
                            <Link to="#">Careers</Link>
                        </li>
                        <li>
                            <Link to="#">Blog</Link>
                        </li>
                        <li>
                            <Link to="#">FAQ</Link>
                        </li>
                    </ul>
                </div>
                <div className="footerMenuBorder"></div>
                <div className="footerBottom">
                    <div className="footerBottomLhs">
                        <p>Copyright 2022. All Rights Reserved.</p>
                    </div>
                    <div className="footerBottomRhs">
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms & Conditions</Link>
                        <Link to="#">Cancellation Policy</Link>
                        <Link to="#">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

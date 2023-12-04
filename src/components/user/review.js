import React, { useState, useEffect } from 'react'
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed.svg";
import { ReactComponent as House } from "bootstrap-icons/icons/house.svg";
import { ReactComponent as Person } from "bootstrap-icons/icons/person.svg";
import { Link } from 'react-router-dom';
import config from '../../config';
import { useNavigate } from 'react-router-dom';

const Review = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        lastName: '',
        email: '',
        country: '',
        phoneno: '',
        address: '',
    });
    const [passwordData, setPasswordData] = useState({
        old_password: '',
        new_password: '',
    });


    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const [first_name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [bookingDetails, setBookingDetails] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuClose, setMenuClose] = useState(true);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch(`${config.baseUrl}/welcome`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            })

                .then(response => response.json())

                .then(data => {

                    setUserName(data.data.first_name);
                    setEmail(data.data.email);
                    setIsLoggedIn(true);
                })

                .catch(error => {
                    console.error("Error fetching user data:", error);
                });
        }
    }, []);



    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch(`${config.baseUrl}/welcome`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setUserName(data.data.first_name);
                    setEmail(data.data.email);
                    setIsLoggedIn(true);
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, []);
    const handleChangePassword = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (token) {
            fetch(`${config.baseUrl}/profile/change-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(passwordData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Change password response:', data);

                    if (data.success) {
                        // Optionally, handle success
                        console.log('Password changed successfully!');
                    } else {
                        // Optionally, handle failure
                        console.log('Failed to change password. Please try again.');
                    }
                })
                .catch((error) => {
                    console.error('Error changing password:', error);
                });
        }
    };

    const fetchBookingDetails = () => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch(`${config.baseUrl}/booking/list`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    // Assuming the response data is an array of booking details
                    setBookingDetails(data.data);
                })
                .catch((error) => {
                    console.error('Error fetching booking details:', error);
                });
        }
    };

    // Use useEffect to fetch booking details on component mount
    useEffect(() => {
        fetchBookingDetails();
    }, []);

    console.log(bookingDetails)
    const handleLogout = () => {
        fetch(`${config.baseUrl}/logout`, {
            method: 'POST',
        })
            .then(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('first_name');
                setIsLoggedIn(false);
                navigate('/');
            })
            .catch((error) => {
                console.error('Logout failed', error);
            });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        const token = localStorage.getItem('token');
        if (token) {
            fetch(`${config.baseUrl}/profile/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Profile update response:', data);

                    if (data.success) {
                        setSuccessMessage('Profile updated successfully!');
                        // Optionally, reset form fields or perform additional actions
                    } else {
                        setSuccessMessage('Failed to update profile. Please try again.');
                    }

                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error updating profile:', error);
                    setLoading(false);
                });
        }
    };
    return (
        <>
            <header className="userHeader">
                <div className="customcontainer ">
                    <div className="userHeaderIn">
                        <div className="userHeaderLhs">

                            <div className="logo"><Link to="/"><img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1701321722/innerlogo_yezfc1.svg"} alt="" /></Link></div>
                            <div className="userboardTitle"><span
                                className="ToggleBtn"
                                onClick={() => setMenuOpen(prevState => !prevState)}
                            ></span>
                                <span className="closeIcon" onClick={closeMenu}></span> Dashboard</div>
                        </div>
                        <div className="userHeaderRhs">
                            <div className="dropdown notificationIcon">
                                {/*     <Link className="btn notificationIconTag dropdown-toggle" to="#" role="button" id="notificationIcon" data-bs-toggle="dropdown" aria-expanded="false">
                  <small>2</small>
                </Link>*/}

                                <ul className="dropdown-menu" aria-labelledby="notificationIcon">
                                    <li><Link className="dropdown-item" to="#"> You have 4 new notifications</Link></li>
                                </ul>
                            </div>
                            <div className="dropdown userIcon">
                                <Link className="btn userIconTag dropdown-toggle" to="#" role="button" id="userIcon" data-bs-toggle="dropdown" aria-expanded="false">

                                </Link>

                                <ul className="dropdown-menu" aria-labelledby="userIcon">
                                    <li>
                                        {isLoggedIn ? (
                                            <div>
                                                <Link to="/user-dashboard" className="dropdown-item">
                                                    <div >
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
                    </div>
                </div>
            </header>
            <div className="userboardContent">
                <div className="d-flex align-items-start">
                    <div
                        className="nav flex-column nav-pills userboardLHS"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <div className="topSidebar">
                            <div className="sidebarLogo">
                                <Link to="/">
                                    {" "}
                                    <img src="images/innerlogo.svg" alt="" />
                                </Link>
                                <span className="closeIcon" />
                            </div>
                            <Link to="/user-dashboard" className="nav-link active DashboardIcon">
                                <img src="images/dashboardicon.png" alt="" /> Dashboard
                            </Link>
                            <Link to="/booking" className="nav-link MyBookingIcon">
                                <img src="images/mybookingicon.png" alt="" /> My Bookings
                            </Link>
                            <Link to="/wishlist" className="nav-link WishlistIcon">
                                <img src="images/wislisticonnew.png" alt="" />
                                Wishlist
                            </Link>
                            <Link to="/editprofile" className="nav-link EditrofileIcon">
                                <img src="images/pen.png" alt="" /> Edit Profile
                            </Link>
                            <Link to="/changepassword" className="nav-link ChangePassWordIcon">
                                <img src="images/changepasswordicon.png" alt="" />
                                Change Password
                            </Link>
                         {/*  <Link href="/help" className="nav-link HelpIcon">
                                <img src="images/customer-supporticon.png" alt="" /> Help
                            </Link>*/}  
                        </div>
                        {/*topSidebar*/}
                        <div className="logoutDiv">
                        <Link onClick={handleLogout}><img src="images/homepage/logouticon.png" alt="" />Logout</Link>
                        </div>
                    </div>
                    {/*userboardLHS*/}
                    <div className="tab-content userboardRHS">
                        <div className="userboardArea">
                            <div className="UserBoardinner">
                                <div className="IntabReviewField">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="pills-readreviews-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-readreviews"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-readreviews"
                                                aria-selected="true"
                                            >
                                                Read Reviews
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-writeareview-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-writeareview"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-writeareview"
                                                aria-selected="false"
                                            >
                                                Write a Review
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="pills-readreviews"
                                            role="tabpanel"
                                            aria-labelledby="pills-readreviews-tab"
                                        >
                                            <div className="readReviewDiv">
                                                <div className="readReviewBox">
                                                    <div className="titlewithsubtitle">
                                                        <h2>
                                                            Trish <small>United Kingdom</small>
                                                        </h2>
                                                    </div>
                                                    {/*titlewithsubtitle*/}
                                                    <div className="posteddiv">
                                                        <span>Posted:</span> January 15, 2020
                                                    </div>
                                                    <div className="RatingDivNew">
                                                        <img src="images/ratingstar.png" alt="" />
                                                    </div>
                                                    <div className="descnew">
                                                        <p>
                                                            Dubai 6hr City Tour We were met at the cruise terminal
                                                            in Dubai by Shah our guide and driver Suhas. From the
                                                            moment we got in the car which was spacious and very
                                                            clean for 6 of us, we knew we were in good hands. Shah
                                                            expanded on the draft itinerary and confirmed we were
                                                            happy with that, he also advised we could change it any
                                                            way we wanted. Our trip day was 31 December so certain
                                                            parts of the city were shutting in advance of the New
                                                            Year firework display. However this did not deter our
                                                            sightseeing in any way down to Shah &amp; Suhas
                                                            knowledge of the city and their way around. They went
                                                            out of their way in particular to ensure we could still
                                                            get a great view of the Burj Khalifa albeit from a
                                                            different than normal viewing point. Shah had an
                                                            excellent knowledge of the city, the country and its
                                                            history and he happily and interestingly shared all his
                                                            knowledge with us and answering our many questions. We
                                                            were enthralled. We all felt we were well looked after
                                                            by them both - the trip felt personal to us and they
                                                            made sure they picked us up safely anytime we left the
                                                            vehicle. I cannot recommend this company enough and I
                                                            only found them by reading reviews prior to our trip -
                                                            hence my review here which is something I am not
                                                            normally in the habit of. Thank you to everyone involved
                                                            but especially Shah &amp; Suhas who ensured our last day
                                                            of 2019 ended on a high.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/*readReviewBox*/}
                                                <div className="readReviewBox">
                                                    <div className="titlewithsubtitle">
                                                        <h2>
                                                            Luke <small>Malta</small>
                                                        </h2>
                                                    </div>
                                                    {/*titlewithsubtitle*/}
                                                    <div className="posteddiv">
                                                        <span>Posted:</span> September 27, 2019
                                                    </div>
                                                    <div className="RatingDivNew">
                                                        <img src="images/ratingstar.png" alt="" />
                                                    </div>
                                                    <div className="descnew">
                                                        <p>
                                                            Me and my girlfriend had an amazing 6 hour tour of
                                                            Dubai’s main attractions. Our guide Basheer was so
                                                            polite and knowledgeable on all aspects of Dubai and you
                                                            can tell that he Learnt all about Dubai. Highly
                                                            recommend the service
                                                        </p>
                                                    </div>
                                                </div>
                                                {/*readReviewBox*/}
                                                <div className="readReviewBox">
                                                    <div className="titlewithsubtitle">
                                                        <h2>
                                                            Mariëlle Rockland <small>Netherlands</small>
                                                        </h2>
                                                    </div>
                                                    {/*titlewithsubtitle*/}
                                                    <div className="posteddiv">
                                                        <span>Posted:</span> September 27, 2019
                                                    </div>
                                                    <div className="RatingDivNew">
                                                        <img src="images/ratingstar.png" alt="" />
                                                    </div>
                                                    <div className="descnew">
                                                        <p>
                                                            Two days ago, we had a layover in Dubai for a few hours
                                                            and we booked a 4 hours private trip to explorer Dubai.
                                                            Our guide gave us a lot of information and showed us a
                                                            lot! It was very interessting. It was an Incredible
                                                            experience and it make our layover one to never forget.
                                                            Thank you very much!!
                                                        </p>
                                                    </div>
                                                </div>
                                                {/*readReviewBox*/}
                                                <div className="readReviewBox">
                                                    <div className="titlewithsubtitle">
                                                        <h2>
                                                            Roshnee Chudoory <small>United Kingdom</small>
                                                        </h2>
                                                    </div>
                                                    {/*titlewithsubtitle*/}
                                                    <div className="posteddiv">
                                                        <span>Posted:</span> August 18, 2019
                                                    </div>
                                                    <div className="RatingDivNew">
                                                        <img src="images/ratingstar.png" alt="" />
                                                    </div>
                                                    <div className="descnew">
                                                        <p>
                                                            What a wonderful afternoon it would have been had we
                                                            fully completed the tour. (My elderly father became a
                                                            little overwhelmed with the heat in particular, and so
                                                            we made the decision to cut the experience short). We
                                                            cannot fault our guide Zeeba, and our driver Suhas. They
                                                            were quick thinking and accommodated our needs. Zeeba
                                                            was very informative during the tour, and she was
                                                            especially kind when she physically assisted my father.
                                                            Suhas drove closer where possible, to minimise my father
                                                            having to walk on sometimes uneven ground in the heat,
                                                            when it became clear that my father was struggling. My
                                                            mother and I are very appreciative of their support. A
                                                            big thank you to Zeeba and Suhas.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/*readReviewBox*/}
                                            </div>
                                            {/*readReviewDiv*/}
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="pills-writeareview"
                                            role="tabpanel"
                                            aria-labelledby="pills-writeareview-tab"
                                        >
                                            <div className="INreviewFieldForm">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Name</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Email</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Email"
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Your Rating</label>
                                                                <select className="form-select" required="">
                                                                    <option value="">Select </option>{" "}
                                                                    <option value={5}>Excellent</option>{" "}
                                                                    <option value={4}>Very Good</option>{" "}
                                                                    <option value={3}>Average</option>{" "}
                                                                    <option value={2}>Poor</option>{" "}
                                                                    <option value={1}>Terrible</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Select Country</label>
                                                                <select className="form-select" required="">
                                                                    <option value="">Select</option>{" "}
                                                                    <option value="Afghanistan">Afghanistan</option>{" "}
                                                                    <option value="Albania">Albania</option>{" "}
                                                                    <option value="Algeria">Algeria</option>{" "}
                                                                    <option value="American Samoa">
                                                                        American Samoa
                                                                    </option>{" "}
                                                                    <option value="Andorra">Andorra</option>{" "}
                                                                    <option value="Angola">Angola</option>{" "}
                                                                    <option value="Anguilla">Anguilla</option>{" "}
                                                                    <option value="Antigua and Barbuda">
                                                                        Antigua and Barbuda
                                                                    </option>{" "}
                                                                    <option value="Argentina">Argentina</option>{" "}
                                                                    <option value="Armenia">Armenia</option>{" "}
                                                                    <option value="Aruba">Aruba</option>{" "}
                                                                    <option value="Australia">Australia</option>{" "}
                                                                    <option value="Austria">Austria</option>{" "}
                                                                    <option value="Azerbaijan">Azerbaijan</option>{" "}
                                                                    <option value="Bahamas">Bahamas</option>{" "}
                                                                    <option value="Bahrain">Bahrain</option>{" "}
                                                                    <option value="Bangladesh">Bangladesh</option>{" "}
                                                                    <option value="Barbados">Barbados</option>{" "}
                                                                    <option value="Belgium">Belgium</option>{" "}
                                                                    <option value="Belize">Belize</option>{" "}
                                                                    <option value="Benin">Benin</option>{" "}
                                                                    <option value="Bermuda">Bermuda</option>{" "}
                                                                    <option value="Bhutan">Bhutan</option>{" "}
                                                                    <option value="Bolivia">Bolivia</option>{" "}
                                                                    <option value="Bosnia">Bosnia</option>{" "}
                                                                    <option value="Botswana">Botswana</option>{" "}
                                                                    <option value="Brazil">Brazil</option>{" "}
                                                                    <option value="British Virgin Islands">
                                                                        British Virgin Islands
                                                                    </option>{" "}
                                                                    <option value="Brunei">Brunei</option>{" "}
                                                                    <option value="Bulgaria">Bulgaria</option>{" "}
                                                                    <option value="Burkina Faso">Burkina Faso</option>{" "}
                                                                    <option value="Burundi">Burundi</option>{" "}
                                                                    <option value="Cambodia">Cambodia</option>{" "}
                                                                    <option value="Cameroon">Cameroon</option>{" "}
                                                                    <option value="Canada">Canada</option>{" "}
                                                                    <option value="Cape Verde">Cape Verde</option>{" "}
                                                                    <option value="Cayman Islands">
                                                                        Cayman Islands
                                                                    </option>{" "}
                                                                    <option value="Central African Republic">
                                                                        Central African Republic
                                                                    </option>{" "}
                                                                    <option value="Chad">Chad</option>{" "}
                                                                    <option value="Chile">Chile</option>{" "}
                                                                    <option value="China">China</option>{" "}
                                                                    <option value="Christmas Island">
                                                                        Christmas Island
                                                                    </option>{" "}
                                                                    <option value="Colombia">Colombia</option>{" "}
                                                                    <option value="Comoros">Comoros</option>{" "}
                                                                    <option value="Cook Islands">Cook Islands</option>{" "}
                                                                    <option value="Costa Rica">Costa Rica</option>{" "}
                                                                    <option value="Cote_d'Ivoire">Cote_d'Ivoire</option>{" "}
                                                                    <option value="Croatia">Croatia</option>{" "}
                                                                    <option value="Cuba">Cuba</option>{" "}
                                                                    <option value="Cyprus">Cyprus</option>{" "}
                                                                    <option value="Czech Republic">
                                                                        Czech Republic
                                                                    </option>{" "}
                                                                    <option value="Democratic Republic of the Congo">
                                                                        Democratic Republic of the Congo
                                                                    </option>{" "}
                                                                    <option value="Denmark">Denmark</option>{" "}
                                                                    <option value="Djibouti">Djibouti</option>{" "}
                                                                    <option value="Dominica">Dominica</option>{" "}
                                                                    <option value="Dominican Republic">
                                                                        Dominican Republic
                                                                    </option>{" "}
                                                                    <option value="Ecuador">Ecuador</option>{" "}
                                                                    <option value="Egypt">Egypt</option>{" "}
                                                                    <option value="El Salvador">El Salvador</option>{" "}
                                                                    <option value="Equatorial_Guinea">
                                                                        Equatorial_Guinea
                                                                    </option>{" "}
                                                                    <option value="Eritrea">Eritrea</option>{" "}
                                                                    <option value="Estonia">Estonia</option>{" "}
                                                                    <option value="Ethiopia">Ethiopia</option>{" "}
                                                                    <option value="Falkland Islands">
                                                                        Falkland Islands
                                                                    </option>{" "}
                                                                    <option value="Faroe Islands">Faroe Islands</option>{" "}
                                                                    <option value="Fiji">Fiji</option>{" "}
                                                                    <option value="Finland">Finland</option>{" "}
                                                                    <option value="France">France</option>{" "}
                                                                    <option value="French Polynesi">
                                                                        French Polynesi
                                                                    </option>{" "}
                                                                    <option value="Gabon">Gabon</option>{" "}
                                                                    <option value="Gambia">Gambia</option>{" "}
                                                                    <option value="Georgia">Georgia</option>{" "}
                                                                    <option value="Germany">Germany</option>{" "}
                                                                    <option value="Ghana">Ghana</option>{" "}
                                                                    <option value="Gibraltar">Gibraltar</option>{" "}
                                                                    <option value="Greece">Greece</option>{" "}
                                                                    <option value="Greenland">Greenland</option>{" "}
                                                                    <option value="Grenada">Grenada</option>{" "}
                                                                    <option value="Guam">Guam</option>{" "}
                                                                    <option value="Guatemala">Guatemala</option>{" "}
                                                                    <option value="Guinea">Guinea</option>{" "}
                                                                    <option value="Guinea Bissau">Guinea Bissau</option>{" "}
                                                                    <option value="Guyana">Guyana</option>{" "}
                                                                    <option value="Haiti">Haiti</option>{" "}
                                                                    <option value="Honduras">Honduras</option>{" "}
                                                                    <option value="Hong Kong">Hong Kong</option>{" "}
                                                                    <option value="Hungary">Hungary</option>{" "}
                                                                    <option value="Iceland">Iceland</option>{" "}
                                                                    <option value="India">India</option>{" "}
                                                                    <option value="Indonesia">Indonesia</option>{" "}
                                                                    <option value="Iran">Iran</option>{" "}
                                                                    <option value="Iraq">Iraq</option>{" "}
                                                                    <option value="Ireland">Ireland</option>{" "}
                                                                    <option value="Israel">Israel</option>{" "}
                                                                    <option value="Italy">Italy</option>{" "}
                                                                    <option value="Jamaica">Jamaica</option>{" "}
                                                                    <option value="Japan">Japan</option>{" "}
                                                                    <option value="Jordan">Jordan</option>{" "}
                                                                    <option value="Kazakhstan">Kazakhstan</option>{" "}
                                                                    <option value="Kenya">Kenya</option>{" "}
                                                                    <option value="Kiribati">Kiribati</option>{" "}
                                                                    <option value="Kuwait">Kuwait</option>{" "}
                                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>{" "}
                                                                    <option value="Laos">Laos</option>{" "}
                                                                    <option value="Latvia">Latvia</option>{" "}
                                                                    <option value="Lebanon">Lebanon</option>{" "}
                                                                    <option value="Lesotho">Lesotho</option>{" "}
                                                                    <option value="Liberia">Liberia</option>{" "}
                                                                    <option value="Libya">Libya</option>{" "}
                                                                    <option value="Liechtenstein">Liechtenstein</option>{" "}
                                                                    <option value="Lithuania">Lithuania</option>{" "}
                                                                    <option value="Luxembourg">Luxembourg</option>{" "}
                                                                    <option value="Macao">Macao</option>{" "}
                                                                    <option value="Macedonia">Macedonia</option>{" "}
                                                                    <option value="Madagascar">Madagascar</option>{" "}
                                                                    <option value="Malawi">Malawi</option>{" "}
                                                                    <option value="Malaysia">Malaysia</option>{" "}
                                                                    <option value="Maldives">Maldives</option>{" "}
                                                                    <option value="Mali">Mali</option>{" "}
                                                                    <option value="Malta">Malta</option>{" "}
                                                                    <option value="Marshall_Islands">
                                                                        Marshall_Islands
                                                                    </option>{" "}
                                                                    <option value="Martinique">Martinique</option>{" "}
                                                                    <option value="Mauritania">Mauritania</option>{" "}
                                                                    <option value="Mauritius">Mauritius</option>{" "}
                                                                    <option value="Mexico">Mexico</option>{" "}
                                                                    <option value="Micronesia">Micronesia</option>{" "}
                                                                    <option value="Moldova">Moldova</option>{" "}
                                                                    <option value="Monaco">Monaco</option>{" "}
                                                                    <option value="Mongolia">Mongolia</option>{" "}
                                                                    <option value="Montserrat">Montserrat</option>{" "}
                                                                    <option value="Morocco">Morocco</option>{" "}
                                                                    <option value="Mozambique">Mozambique</option>{" "}
                                                                    <option value="Myanmar">Myanmar</option>{" "}
                                                                    <option value="Namibia">Namibia</option>{" "}
                                                                    <option value="Nauru">Nauru</option>{" "}
                                                                    <option value="Nepal">Nepal</option>{" "}
                                                                    <option value="Netherlands">Netherlands</option>{" "}
                                                                    <option value="Netherlands Antilles">
                                                                        Netherlands Antilles
                                                                    </option>{" "}
                                                                    <option value="New Zealand">New Zealand</option>{" "}
                                                                    <option value="Nicaragua">Nicaragua</option>{" "}
                                                                    <option value="Niger">Niger</option>{" "}
                                                                    <option value="Nigeria">Nigeria</option>{" "}
                                                                    <option value="Niue">Niue</option>{" "}
                                                                    <option value="Norfolk Island">
                                                                        Norfolk Island
                                                                    </option>{" "}
                                                                    <option value="North Korea">North Korea</option>{" "}
                                                                    <option value="Norway">Norway</option>{" "}
                                                                    <option value="Oman">Oman</option>{" "}
                                                                    <option value="Pakistan">Pakistan</option>{" "}
                                                                    <option value="Palau">Palau</option>{" "}
                                                                    <option value="Panama">Panama</option>{" "}
                                                                    <option value="Papua New Guinea">
                                                                        Papua New Guinea
                                                                    </option>{" "}
                                                                    <option value="Paraguay">Paraguay</option>{" "}
                                                                    <option value="Peru">Peru</option>{" "}
                                                                    <option value="Philippines">Philippines</option>{" "}
                                                                    <option value="Pitcairn Islands">
                                                                        Pitcairn Islands
                                                                    </option>{" "}
                                                                    <option value="Poland">Poland</option>{" "}
                                                                    <option value="Portugal">Portugal</option>{" "}
                                                                    <option value="Puerto Rico">Puerto Rico</option>{" "}
                                                                    <option value="Qatar">Qatar</option>{" "}
                                                                    <option value="Republic of the Congo">
                                                                        Republic of the Congo
                                                                    </option>{" "}
                                                                    <option value="Romania">Romania</option>{" "}
                                                                    <option value="Russian Federation">
                                                                        Russian Federation
                                                                    </option>{" "}
                                                                    <option value="Rwanda">Rwanda</option>{" "}
                                                                    <option value="Saint Kitts and Nevis">
                                                                        Saint Kitts and Nevis
                                                                    </option>{" "}
                                                                    <option value="Saint Lucia">Saint Lucia</option>{" "}
                                                                    <option value="Saint Pierre">Saint Pierre</option>{" "}
                                                                    <option value="Saint Vicent and the Grenadines">
                                                                        Saint Vicent and the Grenadines
                                                                    </option>{" "}
                                                                    <option value="Samoa">Samoa</option>{" "}
                                                                    <option value="San Marino">San Marino</option>{" "}
                                                                    <option value="Sao Tom? and Pr?ncipe">
                                                                        Sao Tom? and Pr?ncipe
                                                                    </option>{" "}
                                                                    <option value="Saudi Arabia">Saudi Arabia</option>{" "}
                                                                    <option value="Senegal">Senegal</option>{" "}
                                                                    <option value="Serbia and Montenegro">
                                                                        Serbia and Montenegro
                                                                    </option>{" "}
                                                                    <option value="Seychelles">Seychelles</option>{" "}
                                                                    <option value="Sierra Leone">Sierra Leone</option>{" "}
                                                                    <option value="Singapore">Singapore</option>{" "}
                                                                    <option value="Slovakia">Slovakia</option>{" "}
                                                                    <option value="Slovenia">Slovenia</option>{" "}
                                                                    <option value="Soloman Islands">
                                                                        Soloman Islands
                                                                    </option>{" "}
                                                                    <option value="Somalia">Somalia</option>{" "}
                                                                    <option value="South Africa">South Africa</option>{" "}
                                                                    <option value="South Georgia">South Georgia</option>{" "}
                                                                    <option value="South Korea">South Korea</option>{" "}
                                                                    <option value="Soviet Union">Soviet Union</option>{" "}
                                                                    <option value="Spain">Spain</option>{" "}
                                                                    <option value="Sri Lanka">Sri Lanka</option>{" "}
                                                                    <option value="Sudan">Sudan</option>{" "}
                                                                    <option value="Suriname">Suriname</option>{" "}
                                                                    <option value="Swaziland">Swaziland</option>{" "}
                                                                    <option value="Sweden">Sweden</option>{" "}
                                                                    <option value="Switzerland">Switzerland</option>{" "}
                                                                    <option value="Syria">Syria</option>{" "}
                                                                    <option value="Taiwan">Taiwan</option>{" "}
                                                                    <option value="Tajikistan">Tajikistan</option>{" "}
                                                                    <option value="Tanzania">Tanzania</option>{" "}
                                                                    <option value="Thailand">Thailand</option>{" "}
                                                                    <option value="Timor Leste">Timor Leste</option>{" "}
                                                                    <option value="Togo">Togo</option>{" "}
                                                                    <option value="Tonga">Tonga</option>{" "}
                                                                    <option value="Trinidad and Tobago">
                                                                        Trinidad and Tobago
                                                                    </option>{" "}
                                                                    <option value="Tunisia">Tunisia</option>{" "}
                                                                    <option value="Turkey">Turkey</option>{" "}
                                                                    <option value="Turkmenistan">Turkmenistan</option>{" "}
                                                                    <option value="Turks and Caicos Islands">
                                                                        Turks and Caicos Islands
                                                                    </option>{" "}
                                                                    <option value="Tuvalu">Tuvalu</option>{" "}
                                                                    <option value="Uganda">Uganda</option>{" "}
                                                                    <option value="Ukraine">Ukraine</option>{" "}
                                                                    <option value="United Arab Emirates">
                                                                        United Arab Emirates
                                                                    </option>{" "}
                                                                    <option value="United Kingdom">
                                                                        United Kingdom
                                                                    </option>{" "}
                                                                    <option value="United States Of America">
                                                                        United States Of America
                                                                    </option>{" "}
                                                                    <option value="Uruguay">Uruguay</option>{" "}
                                                                    <option value="US Virgin Islands">
                                                                        US Virgin Islands
                                                                    </option>{" "}
                                                                    <option value="Uzbekistan">Uzbekistan</option>{" "}
                                                                    <option value="Vanuatu">Vanuatu</option>{" "}
                                                                    <option value="Vatican City">Vatican City</option>{" "}
                                                                    <option value="Venezuela">Venezuela</option>{" "}
                                                                    <option value="Vietnam">Vietnam</option>{" "}
                                                                    <option value="Wallis And Futuna">
                                                                        Wallis And Futuna
                                                                    </option>{" "}
                                                                    <option value="Yemen">Yemen</option>{" "}
                                                                    <option value="Yugoslavia ">Yugoslavia </option>{" "}
                                                                    <option value="Zambia">Zambia</option>{" "}
                                                                    <option value="Zimbabwe">Zimbabwe</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label>Comments</label>
                                                                <textarea
                                                                    className="form-control"
                                                                    placeholder=""
                                                                    rows={3}
                                                                    required=""
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                            {/*formGroup*/}
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="BtnGroupCta">
                                                                <button type="submit" className="cta">
                                                                    Submit
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/*INreviewFieldForm*/}
                                        </div>
                                    </div>
                                </div>
                                {/*IntabReviewField*/}
                            </div>
                            {/*UserBoardinner*/}
                        </div>
                        {/*userboardArea*/}
                        <div className="menuOverlay" />
                        <footer>
                            <div className="userboardFooter">
                                Copyright 2023. All Rights Reserved.
                            </div>
                        </footer>
                    </div>
                    {/*userboardRHS*/}
                </div>
                {/*d-flex align-items-start*/}
            </div>

        </>
    )
}

export default Review

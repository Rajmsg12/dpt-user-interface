import React, { useState, useEffect } from 'react'
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed.svg";
import { ReactComponent as House } from "bootstrap-icons/icons/house.svg";
import { ReactComponent as Person } from "bootstrap-icons/icons/person.svg";
import { Link } from 'react-router-dom';
import config from '../../config';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
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
        <div>
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
                       {/*     <Link href="/help" className="nav-link HelpIcon">
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
                                <div className="edirprofileForm">
                                    <form onSubmit={handleChangePassword}>
                                        <div className="mb-3">
                                            <label className="form-label">Current Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Current Password"
                                                value={passwordData.old_password}
                                                onChange={(e) => setPasswordData({ ...passwordData, old_password: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">New Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="New Password"
                                                value={passwordData.new_password}
                                                onChange={(e) => setPasswordData({ ...passwordData, new_password: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="cta">
                                            Submit
                                        </button>
                                    </form>

                                </div>
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


        </div>
    )
}

export default ChangePassword

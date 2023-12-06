import React, { useState, useEffect } from 'react';
import UserHeader from '../common/dashboardHeader';
import moment from 'moment'
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed.svg";
import { ReactComponent as House } from "bootstrap-icons/icons/house.svg";
import { ReactComponent as Person } from "bootstrap-icons/icons/person.svg";
import './Style/dashboard.css';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const UserProfile = () => {
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
        // localStorage.removeItem('first_name');
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


      <div className={`body ${menuOpen ? 'dashboardMenuOpen' : ''} userboardContent`}>
        <div className="d-flex align-items-start">
          <div className="nav flex-column nav-pills userboardLHS" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <div className="topSidebar">
              <div className="sidebarLogo">
                <Link to="index.html"> <img src="images/homepage/logoblack.png" alt="" /></Link>
                <span className="closeIcon" onClick={closeMenu}></span>
              </div>

              <div className="nav-link active DashboardIcon" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true"><img src="images/homepage/dashboardicon.png" alt="" /> Dashboard</div>
              <div className="nav-link MyBookingIcon" id="v-pills-mybookings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mybookings" role="tab" aria-controls="v-pills-mybookings" aria-selected="false"><img src="images/homepage/mybookingicon.png" alt="" /> My Bookings</div>

              <div className="nav-link" id="v-pills-editprofile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-editprofile" role="tab" aria-controls="v-pills-editprofile" aria-selected="false"><img src="images/homepage/pen.png" alt="" /> Edit Profile</div>
              {/*      <div className="nav-link HelpIcon" id="v-pills-help-tab" data-bs-toggle="pill" data-bs-target="#v-pills-help" role="tab" aria-controls="v-pills-help" aria-selected="false"><img src="images/homepage/customer-supporticon.png" alt="" /> Help</div>*/}
            </div>
            <div className="logoutDiv">
              <Link onClick={handleLogout}><img src="images/homepage/logouticon.png" alt="" />Logout</Link>
            </div>


          </div>

          <div className="tab-content userboardRHS" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">


              <div className="UserBoardinner">

                <div className="DashboardFront">
                  <div className="DashboardFrontTop">
                    <div className="DashboardBox">
                      <div className="Icon"><img src="images/homepage/graphicon.png" alt="" /></div>
                      <div className="Text">
                        <div className="Heading">{bookingDetails.length}</div>
                        <div className="SubHeading">Total Bookings</div>
                      </div>
                    </div>
                    <div className="DashboardBox">
                      <div className="Icon"><img src="images/homepage/next-weekicon.png" alt="" /></div>
                      <div className="Text">
                        <div className="Heading">3</div>
                        <div className="SubHeading">Upcoming Bookings</div>
                      </div>
                    </div>
                    <div className="DashboardBox">
                      <div className="Icon"><img src="images/homepage/forbiddenicon.png" alt="" /></div>
                      <div className="Text">
                        <div className="Heading">5</div>
                        <div className="SubHeading">Cancel Bookings</div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="BookingDetail">
                  <h4>Booking Details</h4>

                  <div className="BookingDetailWrapper">

                    <div className="BookingDetailData">

                      <div className="BookingDetailRow">
                        <div className="srno">SN</div>
                        <div className="OrderID">Order ID</div>
                        <div className="BillingName">Billing Name</div>
                        <div className="Date">Date</div>
                        <div className="TotalPayment">Total Payment</div>
                        <div className="Status">Status</div>
                        <div className="Action">Action</div>
                      </div>

                      {bookingDetails.map((booking, index) => (
                        <div className="BookingDetailRow">
                          <div className="srno">{index + 1}</div>
                          <div className="OrderID">#DK2033</div>
                          <div className="BillingName">{booking.first_name}</div>
                          <div className="Date">{moment(booking.booking_date).format("DD-MM-YYYY")}</div>
                          <div className="TotalPayment">{booking.total}</div>
                          <div className="Status"><Link to="" className="cta pending">Pending</Link></div>
                          <div className="Action">
                            <div className="IconsAll">
                              <Link to="#" className="edit"></Link>
                              <Link to="#" className="view"></Link>
                              <Link to="#" className="trash"></Link>
                            </div>
                          </div>
                        </div>
                      ))}



                    {/*  <div className="paginationDiv">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <Link className="page-link" to="#" aria-label="Previous">
                                <span aria-hidden="true">&lt;</span>
                              </Link>
                            </li>
                            <li className="page-item"><Link className="page-link inactive" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                            <li className="page-item">
                              <Link className="page-link" to="#" aria-label="Next">
                                <span aria-hidden="true">&gt;</span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>*/} 
                    </div>

                  </div>
                </div>

              </div>


            </div>
            <div className="tab-pane fade" id="v-pills-mybookings" role="tabpanel" aria-labelledby="v-pills-mybookings-tab">

              <div className="UserBoardinner">



                <div className="BookingDetail">
                  <h4>Booking Details</h4>

                  <div className="BookingDetailWrapper">
                    <div className="BookingDetailData">
                      <div className="BookingDetailRow">
                        <div className="srno">SN</div>
                        <div className="OrderID">Order ID</div>
                        <div className="BillingName">Billing Name</div>
                        <div className="Date">Date</div>
                        <div className="TotalPayment">Total Payment</div>
                        <div className="Status">Status</div>
                        <div className="Action">Action</div>
                      </div>

                      {bookingDetails.map((booking, index) => (
                        <div className="BookingDetailRow">
                          <div className="srno">{index + 1}</div>
                          <div className="OrderID">#DK2033</div>
                          <div className="BillingName">{booking.first_name}</div>
                          <div className="Date">{moment(booking.booking_date).format("DD-MM-YYYY")}</div>
                          <div className="TotalPayment">{booking.total}</div>
                          <div className="Status"><Link to="" className="cta pending">Pending</Link></div>
                          <div className="Action">
                            <div className="IconsAll">
                              <Link to="#" className="edit"></Link>
                              <Link to="#" className="view"></Link>
                              <Link to="#" className="trash"></Link>
                            </div>
                          </div>
                        </div>
                      ))}


                    {/*  <div className="paginationDiv">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <Link className="page-link" to="#" aria-label="Previous">
                                <span aria-hidden="true">&lt;</span>
                              </Link>
                            </li>
                            <li className="page-item"><Link className="page-link inactive" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                            <li className="page-item">
                              <Link className="page-link" to="#" aria-label="Next">
                                <span aria-hidden="true">&gt;</span>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>*/} 
                    </div>
                  </div>
                </div>

              </div>



            </div>
            {/* <!-- <div className="tab-pane fade" id="v-pills-settings1" role="tabpanel" aria-labelledby="v-pills-settings1-tab">
        <div className="UserBoardinner">
        Account Settings
      </div>
      </div> -->*/}
            {/* <div className="tab-pane fade" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings2-tab">
        <div className="UserBoardinner">
        Profile Settings
        </div>

      </div> -->*/}
            <div className="tab-pane fade" id="v-pills-editprofile" role="tabpanel" aria-labelledby="v-pills-help-tab">
              <div className="UserBoardinner">


                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-editform-tab" data-bs-toggle="pill" data-bs-target="#pills-editform" type="button" role="tab" aria-controls="pills-editform" aria-selected="true">Edit Profile</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-changepassword-tab" data-bs-toggle="pill" data-bs-target="#pills-changepassword" type="button" role="tab" aria-controls="pills-changepassword" aria-selected="false">Change Password</button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-editform" role="tabpanel" aria-labelledby="pills-editform-tab">

                    <div className="edirprofileForm">
                      <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                          <label className="form-label">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={formData.first_name}
                            onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Phone Number</label>
                          <input
                            type=" phoneno"
                            className="form-control"
                            placeholder="Phone Number"
                            value={formData.phoneno}
                            onChange={(e) => setFormData({ ...formData, phoneno: e.target.value })}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Address</label>
                          <input
                            type="address"
                            className="form-control"
                            placeholder="Address"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Email Address</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Country</label>
                          <input
                            type="country"
                            className="form-control"
                            placeholder="Country"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Country Code</label>
                          <select
                            className="form-select"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            required
                          >
                            <option value="">Select Code</option>
                            <option value="Afghanistan"> Afghanistan (+93) </option>
                            <option value="Albania"> Albania (+355) </option>
                            <option value="India"> India (+91) </option>
                            <option value="Zimbabwe"> Zimbabwe (+263) </option>
                          </select>
                        </div>

                        <button type="submit" className="cta">
                          Submit
                        </button>
                      </form>
                    </div>


                  </div>
                  <div className="tab-pane fade" id="pills-changepassword" role="tabpanel" aria-labelledby="pills-changepassword-tab">

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
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-pills-help" role="tabpanel" aria-labelledby="v-pills-help-tab">
              <div className="UserBoardinner">
                Help
              </div>
            </div>
            <div className="menuOverlay"></div>
            <footer>
              <div className="userboardFooter">
                Copyright  2023. All Rights Reserved.
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile

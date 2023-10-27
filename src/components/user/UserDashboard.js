import React, { useState, useEffect } from 'react'
import UserHeader from '../common/dashboardHeader'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'
import './Style/dashboard.css';


const UserProfile = () => {
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
  return (
    <>
      <UserHeader />
      {/*<div style={{ textAlign: 'center', margin: '35px' }}>
        <h4>Name : <span>{user_name}</span></h4>
        <h4>Email : <span>{email}</span></h4>
  </div>*/}


      <div className="userboardContent">
        <div className="d-flex align-items-start">
          <div className="nav flex-column nav-pills userboardLHS" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <div className="topSidebar">
              <div className="sidebarLogo">
                <Link to="index.html"> <img src="images/homepage/logoblack.png" alt="" /></Link>
                <span className="closeIcon"></span>
              </div>

              <div className="nav-link active DashboardIcon" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true"><img src="images/homepage/dashboardicon.png" alt="" /> Dashboard</div>
              <div className="nav-link MyBookingIcon" id="v-pills-mybookings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mybookings" role="tab" aria-controls="v-pills-mybookings" aria-selected="false"><img src="images/homepage/mybookingicon.png" alt="" /> My Bookings</div>
              {/*  <!-- <div className="dropdown">
        <a className="dropdown-toggle SettingIcon" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
         <img src="images/settingicon.png" alt=""> Settings
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a className="nav-link" id="v-pills-settings1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings1" role="tab" aria-controls="v-pills-settings1" aria-selected="false">Profile</a></li>
          <li><a className="nav-link" id="v-pills-settings2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings2"  role="tab" aria-controls="v-pills-settings2" aria-selected="false">Change Password</a></li>
        </ul>
      </div> -->*/}
              <div className="nav-link" id="v-pills-editprofile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-editprofile" role="tab" aria-controls="v-pills-editprofile" aria-selected="false"><img src="images/homepage/pen.png" alt="" /> Edit Profile</div>
              <div className="nav-link HelpIcon" id="v-pills-help-tab" data-bs-toggle="pill" data-bs-target="#v-pills-help" role="tab" aria-controls="v-pills-help" aria-selected="false"><img src="images/homepage/customer-supporticon.png" alt="" /> Help</div>
            </div>
            <div className="logoutDiv">
              <Link to="#"><img src="images/homepage/logouticon.png" alt="" />Logout</Link>
            </div>


          </div>=

          <div className="tab-content userboardRHS" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">


              <div className="UserBoardinner">

                <div className="DashboardFront">
                  <div className="DashboardFrontTop">
                    <div className="DashboardBox">
                      <div className="Icon"><img src="images/homepage/graphicon.png" alt="" /></div>
                      <div className="Text">
                        <div className="Heading">20</div>
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

                      <div className="BookingDetailRow">
                        <div className="srno">01</div>
                        <div className="OrderID">#JH2033</div>
                        <div className="BillingName">Emily Arnold</div>
                        <div className="Date">22/06/2023</div>
                        <div className="TotalPayment">AED 500</div>
                        <div className="Status"><Link to="" className="cta success">Success</Link></div>
                        <div className="Action">
                          <div className="IconsAll">
                            <Link to="#" className="edit"></Link>
                            <Link to="#" className="view"></Link>
                            <Link to="#" className="trash"></Link>
                          </div>
                        </div>
                      </div>
                      <div className="BookingDetailRow">
                        <div className="srno">02</div>
                        <div className="OrderID">#AB2033</div>
                        <div className="BillingName">Emily Arnold</div>
                        <div className="Date">19/06/2022</div>
                        <div className="TotalPayment">AED 350</div>
                        <div className="Status"><Link to="" className="cta pending">Pending</Link></div>
                        <div className="Action">
                          <div className="IconsAll">
                            <Link to="#" className="edit"></Link>
                            <Link to="#" className="view"></Link>
                            <Link to="#" className="trash"></Link>
                          </div>
                        </div>
                      </div>
                      <div className="BookingDetailRow">
                        <div className="srno">03</div>
                        <div className="OrderID">#CD2033</div>
                        <div className="BillingName">Emily Arnold</div>
                        <div className="Date">15/06/2022</div>
                        <div className="TotalPayment">AED 250</div>
                        <div className="Status"><Link to="" className="cta canceled">Canceled</Link></div>
                        <div className="Action">
                          <div className="IconsAll">
                            <Link to="#" className="edit"></Link>
                            <Link to="#" className="view"></Link>
                            <Link to="#" className="trash"></Link>
                          </div>
                        </div>
                      </div>
                      <div className="BookingDetailRow">
                        <div className="srno">04</div>
                        <div className="OrderID">#BK2033</div>
                        <div className="BillingName">Emily Arnold</div>
                        <div className="Date">02/06/2022</div>
                        <div className="TotalPayment">AED 150</div>
                        <div className="Status"><Link to="" className="cta success">Success</Link></div>
                        <div className="Action">
                          <div className="IconsAll">
                            <Link to="#" className="edit"></Link>
                            <Link to="#" className="view"></Link>
                            <Link to="#" className="trash"></Link>
                          </div>
                        </div>
                      </div>
                      <div className="BookingDetailRow">
                        <div className="srno">05</div>
                        <div className="OrderID">#DK2033</div>
                        <div className="BillingName">Emily Arnold</div>
                        <div className="Date">22/06/2020</div>
                        <div className="TotalPayment">AED 300</div>
                        <div className="Status"><Link to="" className="cta pending">Pending</Link></div>
                        <div className="Action">
                          <div className="IconsAll">
                            <Link to="#" className="edit"></Link>
                            <Link to="#" className="view"></Link>
                            <Link to="#" className="trash"></Link>
                          </div>
                        </div>
                      </div>


                      <div className="paginationDiv">
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
                      </div>
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

                      <div className="BookingDetailRow">
                        <div className="srno">01</div>
                        <div className="OrderID">#JH2033</div>
                        <div className="BillingName">Emily Arnold</div>
                        <div className="Date">22/06/2023</div>
                        <div className="TotalPayment">AED 500</div>
                        <div className="Status"><Link to="" className="cta success">Success</Link></div>
                        <div className="Action">
                          <div className="IconsAll">
                            <Link to="#" className="edit"></Link>
                            <Link to="#" className="view"></Link>
                            <Link to="#" className="trash"></Link>
                          </div>
                        </div>
                      </div>
                      <div className="BookingDetailRow">
                        <div className="srno">02</div>
                        <div className="OrderID">#AB2033</div>
                        <div className="BillingName">Emily Arnold</div>
                        <div className="Date">19/06/2022</div>
                        <div className="TotalPayment">AED 350</div>
                        <div className="Status"><Link to="" className="cta pending">Pending</Link></div>
                        <div className="Action">
                          <div className="IconsAll">
                            <Link to="#" className="edit"></Link>
                            <Link to="#" className="view"></Link>
                            <Link to="#" className="trash"></Link>
                          </div>
                        </div>
                      </div>
                      <div className="BookingDetailRow">
                        <div className="srno">03</div>
                        <div className="OrderID">#CD2033</div>
                        <div className="BillingName">Emily Arnold</div>
                        <div className="Date">15/06/2022</div>
                        <div className="TotalPayment">AED 250</div>
                        <div className="Status"><Link to="" className="cta canceled">Canceled</Link></div>
                        <div className="Action">
                          <div className="IconsAll">
                            <Link to="#" className="edit"></Link>
                            <Link to="#" className="view"></Link>
                            <Link to="#" className="trash"></Link>
                          </div>
                        </div>
                      </div>
                      <div className="BookingDetailRow">
                        <div className="srno">04</div>
                        <div className="OrderID">#BK2033</div>
                        <div className="BillingName">Emily Arnold</div>
                        <div className="Date">02/06/2022</div>
                        <div className="TotalPayment">AED 150</div>
                        <div className="Status"><Link to="" className="cta success">Success</Link></div>
                        <div className="Action">
                          <div className="IconsAll">
                            <Link to="#" className="edit"></Link>
                            <Link to="#" className="view"></Link>
                            <Link to="#" className="trash"></Link>
                          </div>
                        </div>
                      </div>
                      <div className="BookingDetailRow">
                        <div className="srno">05</div>
                        <div className="OrderID">#DK2033</div>
                        <div className="BillingName">Emily Arnold</div>
                        <div className="Date">22/06/2020</div>
                        <div className="TotalPayment">AED 300</div>
                        <div className="Status"><Link to="" className="cta pending">Pending</Link></div>
                        <div className="Action">
                          <div className="IconsAll">
                            <Link to="#" className="edit"></Link>
                            <Link to="#" className="view"></Link>
                            <Link to="#" className="trash"></Link>
                          </div>
                        </div>
                      </div>


                      <div className="paginationDiv">
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
                      </div>
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
                      <form>
                        <div className="mb-3">
                          <label className="form-label">First Name</label>
                          <input type="text" className="form-control" placeholder="First Name" required />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Last Name</label>
                          <input type="text" className="form-control" placeholder="Last Name" required />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Email Address</label>
                          <input type="email" className="form-control" placeholder="Email Address" required />
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Country Code</label>
                          <select className="form-select" required>
                            <option value="">Select Code</option>
                            <option value="+93"> Afghanistan (+93) </option>
                            <option value="+355"> Albania (+355) </option>

                            <option value="+263"> Zimbabwe (+263) </option>
                          </select>
                        </div>

                        <button type="submit" className="cta">Submit</button>
                      </form>
                    </div>


                  </div>
                  <div className="tab-pane fade" id="pills-changepassword" role="tabpanel" aria-labelledby="pills-changepassword-tab">

                    <div className="edirprofileForm">
                      <form>
                        <div className="mb-3">
                          <label className="form-label">Change Password</label>
                          <input type="password" className="form-control" placeholder="Change Password" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">New Password</label>
                          <input type="password" className="form-control" placeholder="New Password" />
                        </div>
                        <button type="submit" className="cta">Submit</button>
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

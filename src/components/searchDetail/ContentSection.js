import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Style/TourPage.css";
import Carousel from "react-multi-carousel";
import { connect } from 'react-redux';
import Faq from "./Faq";
import "react-multi-carousel/lib/styles.css";
import CancellationPolicy from "./CancellationPolicy";
import UsefulToKnow from "./UsefulToKnow";
import Itinerary from "./Itinerary";
import WhatToExpect from "./WhatToExpect";
import DetailOverview from "./BannerTabs";
import GetInTouch from "./GetInTouch";
import { useParams } from "react-router-dom";
import { data } from "../../data/Category";
import { addToCart } from "../cart/CartActions";
import axios from 'axios';
import config from "../../config";
import AskQuestion from './AskQuestion'
import Detail from './Detail'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";
import './Style/TourPage.css'

function ContentSection({ selectedCurrency }) {
  console.log(selectedCurrency)
  const { title } = useParams();
  const [backendData, setBackendData] = useState(null);
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null)
  const [isFormValid, setIsFormValid] = useState(true);
  const [tourName, setTourName] = useState("");
  const [tourPriceAed, setTourPriceAed] = useState("");
  const [tourPriceUsd, setTourPriceUsd] = useState("");
  const [tour_id, setTourId] = useState("");
  const [tour_slug, setTour_Slug] = useState("");
  const [selectedEndLocation, setSelectedEndLocation] = useState("0");

  const [tourImage, setTourImage] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.baseUrl}/${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBackendData(data);
        setTourName(data.data[0].tour_name)
        setTourPriceAed(data.data[0].tour_price_aed)
        setTour_Slug(data.data[0].slug)
        setTourPriceUsd(data.data[0].tour_price_usd)
        setTourImage(data.data[0].image)
        setTourId(data.data[0].id)
      
      } catch (error) {
        console.error("Error fetching data from the backend:", error.message);
      }
    };

    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    tourDate: null,
    preferredPickupTime: '0',
    preferredPickupLocation: '0',
    pickupLocation: '0',
    endLocation: '0',
    hotelName: '0',
    preferredGuideLanguage: '',
    paymentMode: '0',
    adults: '',
    children: '',
    infants: '',
    additionalDriver: '0',
    additionalLunch: '0',
    additionalTickets: '0',
    specialRequest: '',
    otherPlaceName: '',
    otherPlaceAddress: '',
    otherPlaceTelephone: '',
    //  tourPrice:"",
    //   tourName:"",
    //  tourImage:""
  });
  const formId = "tourForm";
  // State to control the display of the popup
  const [showPopup, setShowPopup] = useState(false);
  const url1 = window.location.href;
  const spliturl1 = url1.split("=");
  const id = spliturl1[1];


  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Set the tour details in formData
    formData.tour_id = tour_id;
    formData.tour_slug = tour_slug;
    formData.tourName = tourName;
    formData.tourImage = tourImage;
    formData.tourPriceAed = tourPriceAed;
    formData.tourPriceUsd = tourPriceUsd;
    
    formData.tourPriceUsd = tourPriceUsd;

    // Set the selectedCurrency in formData
    formData.selectedCurrency = selectedCurrency;

    // Get all form elements
    const formElements = event.target.elements;

    // Iterate through form elements to get input data
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];

      // Check if the element is an input field
      if (element.tagName === 'INPUT') {
        // Add input data to formData
        formData[element.name] = element.value;
      }
    }

    // Check if any select or input is empty
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];

      if ((element.tagName === 'INPUT' || element.tagName === 'SELECT') && element.value === '0') {
        setIsFormValid(false);
        setShowPopup(true);

        // Automatically hide the popup after 5 seconds
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);

        return;
      }
    }

    // Save the form data in local storage
    let cartdata = localStorage.getItem("cartdata");
    let MyCartData = cartdata ? JSON.parse(cartdata) : [];
    MyCartData.push(formData);
    localStorage.setItem('cartdata', JSON.stringify(MyCartData));
    console.log(localStorage.getItem("cartdata"));

    // If all checks pass, proceed with adding to cart or other actions
    setIsFormValid(true);
    AddToCart(/* pass your item here */);
    navigate('/cart');
  };



  const url = window.location.href;
  const spliturl = url.split("/");
  const slug = spliturl[5];

  const ourData = data.CategoryList.filter((item) => item.slug === slug);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [userDiscount, setUserDiscount] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${config.baseUrl}/${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error("Error fetching data from the backend:", error.message);
      }
    };

    fetchData();
  }, []);
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await axios.get(`${config.baseUrl}/popular-attraction/list`);
        if (response.data.status === 'success') {
          setAttractions(response.data.data);
        } else {
          console.error('Error fetching attractions');
        }
      } catch (error) {
        console.error('Error fetching attractions', error);
      }
    };

    fetchAttractions();
  }, []);

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
          setUserType(data.data.user_type); // Set user type from login API
          setUserDiscount(data.data.discount); // Set user discount from login API
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const AddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const cart = useSelector((state) => state.cart);
  const handleInputChange = (event, name) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };




  return (
    <div className="ContentSection">
      {backendData && backendData.data && backendData.data.map((tour) => (
        <div className="container" key={tour.id}>
          <div className="ContentSectionWrapper">
            <div className="ContentLHS">
              <GetInTouch />
              <div className="DetailPageBanner">
                <div className="owl-carousel owl-theme" id="Detailpageslider">
                  <Carousel responsive={responsive} infinite={true}>
                    <div className="item">
                      <div className="DetailpageSlideBox">
                        <div className="imageBox">
                          <img src={`${config.imageUrl}/${tour.image}`} alt="" />
                        </div>
                        <div className="BannerContent">
                          <div className="bannerContentTop">
                            <div className="caption">
                              <span>{tour.hastag}</span>

                            </div>
                            <div className="logoimg">
                              <div className="rhsimg">

                                {tour.sticker_info[0].id === '1' && (
                                  <img
                                    src="https://res.cloudinary.com/dqslvlm0d/image/upload/v1698211949/choise2_hxevxq.png"
                                    alt=""
                                  />
                                )}
                                {tour.sticker_info[0].id === '2' && (
                                  <img
                                    src="https://res.cloudinary.com/dqslvlm0d/image/upload/v1698211948/choise1_yir4hd.png"
                                    alt=""
                                  />
                                )}
                                {tour.sticker_info[0].id === '3' && (
                                  <img
                                    src="https://res.cloudinary.com/dqslvlm0d/image/upload/v1698211949/choise3_u3nlou.png"
                                    alt=""
                                  />
                                )}
                                {tour.sticker_info.length > 1 && (
                                  <img
                                    src={tour.sticker_info[1].id}
                                    alt=""
                                  />
                                )}

                              </div>
                            </div>
                          </div>
                          <div className="BannerTitle">
                            <h2>{tour.tour_name}</h2>
                          </div>
                        </div>
                        <div className="wishlistTag">
                          <span>Wishlist</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="DetailpageSlideBox">
                        <div className="imageBox">
                          <img
                            src={`${config.imageUrl}/${tour.image}`} alt="" />
                        </div>
                        <div className="BannerContent">
                          <div className="bannerContentTop">
                            <div className="caption">
                              <span>{tour.hastag}</span>

                            </div>
                            <div className="logoimg">
                              <img
                                src={
                                  "https://res.cloudinary.com/dqslvlm0d/image/upload/v1697701524/choise2_yc6jt4.png"
                                }
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="BannerTitle">
                            <h2>{tour.tour_name}</h2>
                          </div>
                        </div>
                        <div className="wishlistTag">
                          <span>Wishlist</span>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>

              {/*BANNER TABS */}
              <div className="DetailTab">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-detail-tab" data-bs-toggle="pill" data-bs-target="#pills-detail" type="button" role="tab" aria-controls="pills-detail" aria-selected="true">
                      <img src="images/info.png" alt="" />Details </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-bookthistour-tab" data-bs-toggle="pill" data-bs-target="#pills-bookthistour" type="button" role="tab" aria-controls="pills-bookthistour" aria-selected="false">
                      <img src="images/add-to-basket.png" alt="" />Book This Tour </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-askquestions-tab" data-bs-toggle="pill" data-bs-target="#pills-askquestions" type="button" role="tab" aria-controls="pills-askquestions" aria-selected="false">
                      <img src="images/question.png" alt="" />Ask Questions </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <Detail />
                  {/* BOOK THIS TOUR */}

                  <div className="tab-pane fade" id="pills-bookthistour" role="tabpanel" aria-labelledby="pills-bookthistour-tab">
                    <div className="BookThisTourSec">
                      <div className="BookingDetailsHd"><span>Booking Details</span></div>
                      <div className="FormInnerDiv">
                        <form id={formId} onSubmit={handleFormSubmit}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3 formGroup">
                                <label>Tour Date*</label>
                                <div className="input-group date" id="datepicker">
                                  <DatePicker
                                    selected={formData.tourDate}
                                    onChange={(date) => setFormData((prevData) => ({ ...prevData, tourDate: date }))}
                                    dateFormat="MM/dd/yyyy"
                                    minDate={new Date()}
                                    placeholderText="Select Date"
                                    customInput={
                                      <input
                                        style={{
                                          width: '100%', // Set the width to 100%
                                          paddingLeft: "10px"
                                        }}
                                      />
                                    }
                                  />



                                </div>
                              </div>{/* formGroup */}
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3 formGroup">
                                <label>Preferred Pickup Time</label>
                                {/* Example for one select element, repeat for others */}
                                <select
                                  className="form-select"
                                  value={formData.preferredPickupTime} // Set the value dynamically based on the state
                                  onChange={(e) => handleInputChange(e, 'preferredPickupTime')} // Pass the name to handleInputChange
                                >
                                  <option value="0">Select Pickup Time</option>
                                  <option value="12:00 AM">12:00 AM</option>
                                  <option value="12:30 AM">12:30 AM</option>
                                  <option value="01:00 AM">01:00 AM</option>
                                  <option value="02:00 AM">02:00 AM</option>
                                  <option value="03:00 AM">03:00 AM</option>
                                  <option value="04:00 AM">04:00 AM</option>
                                  <option value="05:00 AM">05:00 AM</option>
                                  <option value="06:00 AM">06:00 AM</option>
                                  <option value="07:00 AM">07:00 AM</option>
                                  <option value="08:00 AM">08:00 AM</option>
                                  <option value="09:00 AM">09:00 AM</option>
                                  <option value="10:00 AM">10:00 AM</option>
                                  <option value="11:00 AM">11:00 AM</option>
                                  <option value="12:00 PM">12:00 PM</option>
                                  <option value="01:00 PM">01:00 PM</option>
                                  <option value="02:00 PM">02:00 PM</option>
                                  <option value="03:00 PM">03:00 PM</option>
                                  <option value="04:00 PM">04:00 PM</option>
                                  <option value="05:00 PM">05:00 PM</option>
                                  <option value="06:00 PM">06:00 PM</option>
                                  <option value="07:00 PM">07:00 PM</option>
                                  <option value="08:00 PM">08:00 PM</option>
                                  <option value="09:00 PM">09:00 PM</option>
                                  <option value="10:00 PM">10:00 PM</option>
                                  <option value="11:00 PM">11:00 PM</option>
                                  {/* ... (other options) */}
                                </select>

                              </div>{/* formGroup */}
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3 formGroup">
                                <label>Pickup Location*</label>
                                <select
                                  className="form-select"
                                  value={formData.preferredPickupLocation} // Set the value dynamically based on the state
                                  onChange={(e) => handleInputChange(e, 'preferredPickupLocation')} // Pass the name to handleInputChange
                                >
                                  <option value="0">Select Pickup Location</option>
                                  <option value="Hotel/Apartment">Hotel/Apartment</option>
                                  <option value="DXB Airport Terminal 1">DXB Airport Terminal 1</option>
                                  {/* ... (other options) */}
                                </select>

                              </div>{/* formGroup */}
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3 formGroup">
                                <label>End Location*</label>
                                <select
                                  className="form-select"
                                  value={selectedEndLocation}
                                  onChange={(e) => {
                                    handleInputChange(e, 'preferredEndLocation');
                                    setSelectedEndLocation(e.target.value);
                                  }}
                                >
                                  <option value="0">Select Pickup Location</option>
                                  <option value="Hotel/Apartment">Hotel/Apartment</option>
                                  <option value="DXB Airport Terminal 1">DXB Airport Terminal 1</option>
                                  <option value="Abu Dhabi Hotel">Abu Dhabi Hotel</option>
                                  <option value="Any Other Places in Dubai">Any Other Places in Dubai</option>
                                </select>
                                {selectedEndLocation === "Any Other Places in Dubai" && (
                                  <div className="col-md-12">

                                    <label>Place Name</label>
                                    <input className="form-control" placeholder="Place Name" rows="3" name="otherPlaceName"></input>
                                    <label>Place Address</label>
                                    <input className="form-control" placeholder="Residence Address" rows="3" name="otherPlaceAddress"></input>
                                    <label>Place Telephone</label>
                                    <input className="form-control" placeholder="Residence Telephone" rows="3" name="otherPlaceTelephone"></input>

                                  </div>
                                )}

                              </div> {/* formGroup */}
                            </div>
                            <div className="col-md-12">
                              <div className="mb-3 formGroup">
                                <label>Hotel Name*</label>
                                <select
                                  className="form-select"
                                  value={formData.preferredHotelName} // Set the value dynamically based on the state
                                  onChange={(e) => handleInputChange(e, 'preferredHotelName')} // Pass the name to handleInputChange
                                >
                                  <option value="0">Select Hotel</option>
                                  <option value="Hotel Royal Park">Hotel Royal Park</option>
                                  <option value="Flora Inn Hotel Dubai">Flora Inn Hotel Dubai</option>
                                  <option value="Abu Dhabi Hotel">Abu Dhabi Hotel</option>
                                  {/* ... (other options) */}
                                </select>
                              </div>{/* formGroup */}
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3 formGroup">
                                <label>Preferred Guide Language*</label>
                                <select
                                  className="form-select"
                                  value={formData.preferredGuideLanguage} // Set the value dynamically based on the state
                                  onChange={(e) => handleInputChange(e, 'preferredGuidedLanguage')} // Pass the name to handleInputChange
                                >
                                  <option value="">Select Preferred Language</option>
                                  <option value="English">English</option>
                                  <option value="Arabic">Arabic</option>
                                  <option value="Spanish">Spanish</option>
                                  {/* ... (other options) */}
                                </select>

                              </div>{/* formGroup */}
                            </div>

                            <div className="col-md-3">
                              <div className="mb-3 formGroup">
                                <label>Pref.currency</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={selectedCurrency}
                                />
                              </div>{/* formGroup */}
                            </div>
                            <div className="col-md-3">
                              <div className="mb-3 formGroup">
                                <label>Payment Mode*</label>

                                <select
                                  className="form-select"
                                  value={formData.preferredPay} // Set the value dynamically based on the state
                                  onChange={(e) => handleInputChange(e, 'preferredPay')} // Pass the name to handleInputChange
                                >
                                  <option value="">Select Pay Option</option>
                                  <option value="Pay Now">Pay Now</option>
                                  <option value="Pay Later">Pay Later</option>
                                  {/* ... (other options) */}
                                </select>
                              </div>{/* formGroup */}
                            </div>

                            <div className="col-md-4">
                              <div className="mb-3 formGroup infoDetail">
                                <label>Adults*</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="No of Adults"
                                  name="adults"  // Add the name attribute
                                />

                              </div> {/* formGroup */}
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3 formGroup infoDetail">
                                <label>Children</label>
                                <input type="text" className="form-control" placeholder="Age 5-12" name="children" />
                              </div> {/* formGroup */}
                            </div>
                            <div className="col-md-4">
                              <div className="mb-3 formGroup infoDetail">
                                <label>Infants</label>
                                <input type="text" className="form-control" placeholder="Age < 5" name="infants" />
                              </div> {/* formGroup */}
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3 formGroup">
                                <label>Addition driver</label>
                                <select
                                  className="form-select"
                                  value={formData.preferredDriver} // Set the value dynamically based on the state
                                  onChange={(e) => handleInputChange(e, 'preferredDriver')} // Pass the name to handleInputChange
                                >
                                  <option value="">Select Addition Driver</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  {/* ... (other options) */}
                                </select>
                              </div> {/* formGroup */}
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3 formGroup">
                                <label>Additional lunch </label>
                                <select
                                  className="form-select"
                                  value={formData.preferredLunch} // Set the value dynamically based on the state
                                  onChange={(e) => handleInputChange(e, 'preferredLunc')} // Pass the name to handleInputChange
                                >
                                  <option value="">Select Addition Lunch</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  {/* ... (other options) */}
                                </select>

                              </div> {/* formGroup */}
                            </div>
                            <div className="col-md-12">
                              <div className="mb-3 formGroup">
                                <label>Additional tickets</label>
                                <select
                                  className="form-select"
                                  value={formData.preferredTickets} // Set the value dynamically based on the state
                                  onChange={(e) => handleInputChange(e, 'preferredTicketes')} // Pass the name to handleInputChange
                                >
                                  <option value="">Select Addition Tickets</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  {/* ... (other options) */}
                                </select>

                              </div>{/* formGroup */}
                            </div>
                            <div className="col-md-12">
                              <div className="mb-3 formGroup">
                                <label>Special Request</label>
                                <textarea className="form-control" placeholder="Select Special Seat" rows="3" name="request"></textarea>
                              </div>{/* formGroup */}
                            </div>
                            <div className="submitcta">
                              <div className="btnGroup">
                                <button type="submit" className="cta">
                                  Book Now
                                </button>
                                <button type="button" className="cta" onClick={() => setShowPopup(true)}>
                                  Clear
                                </button>
                              </div>
                              <div className="captcha">
                                <div className="captchaimg">
                                  <img src="images/captcha.png" alt="" />
                                </div>
                              </div>
                            </div>{/*submitcta*/}
                          </div>{/*row*/}

                        </form>
                        {showPopup && (
                          <div className="popup" style={{ color: 'green' }}>
                            <p>Please fill in all the required fields.</p>
                            {/* Button to close the popup */}
                            {/* <button onClick={() => setShowPopup(false)}>Close</button> */}
                          </div>
                        )}
                      </div>{/*FormInnerDiv*/}
                    </div>{/*BookThisTourSec*/}
                  </div>
                  {/*tab pannel*/}
                  <AskQuestion />
                  { /*tab panne*/}
                </div>
              </div>
              <WhatToExpect />
              <Itinerary />
              <CancellationPolicy />
              <UsefulToKnow />
              <Faq />
            </div>
            <div className="ContentRHS">
              <div className="fromDiv">
                <h4>From</h4>
                <div className="aedrow">
                  <span>
                    {isLoggedIn ? (
                      <div>AED {Math.floor(getUserPrice(tour))}</div>

                    ) : (
                      <div>AED {Math.floor(getUserPrice(tour))}</div>
                    )}
                  </span>
                  <span>
                    {isLoggedIn ? (
                      <div>USD {Math.floor(getUserPriceUsd(tour))}</div>

                    ) : (
                      <div>USD {Math.floor(getUserPriceUsd(tour))}</div>
                    )}
                  </span>
                </div>
                <div className="Person">
                  per {tour.person} person <strong>({tour.tour_duration})</strong>
                </div>
                <div className="right">
                <Link to="#">View Offers</Link>
                </div>
                <button type="submit" form="tourForm" className="cta">
                  Book This Tour
                </button>
                <p>
                  Free cancellation Up to 24 hours in advance.{" "}
                  <Link to="#">Read More</Link>
                </p>
              </div>
              <div className="Attractions">
                <div className="titleRow">
                  <div className="icon">
                    <img
                      src={
                        "https://res.cloudinary.com/dqslvlm0d/image/upload/v1697701972/locationicon_oyxdy0.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="title">Attractions</div>
                </div>
                <ul>
                  {attractions.map((attraction) => (
                    <li key={attraction.id}><Link to={`/attraction/${attraction.slug}`}>{attraction.name}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="DubaiPrivateTour">
              <div
              className="TA_selfserveprop"
              id="TA_selfserveprop642"
              style={{ width: "100%" }}
            >
              <div id="CDSWIDSSP" className="widSSP widSSPnarrow" style={{ width: 240 }}>
                <div className="widSSPData" style={{ border: "1px solid #589442" }}>
                  <div className="widSSPBranding">
                    <dl>
                      <dt>
                        <Link target="_blank" to="https://www.tripadvisor.com/">
                          <img
                            src="https://www.tripadvisor.com/img/cdsi/img2/branding/150_logo-11900-2.png"
                            alt="TripAdvisor"
                          />
                        </Link>
                      </dt>
                      <dt className="widSSPTagline">
                        Know better. Book better. Go better.
                      </dt>
                    </dl>
                  </div>
                  {/*/ cdsBranding*/}
                  <div className="widSSPComponent">
                    <div className="widSSPSummary">
                      <dl>
                        <Link
                          target="_blank"
                          to="https://www.tripadvisor.com/Attraction_Review-g295424-d2510773-Reviews-Dubai_Private_Tour-Dubai_Emirate_of_Dubai.html"
                          onclick="ta.cds.handleTALink(11900,this);return true;"
                          rel="nofollow"
                        >
                          <dt className="widSSPH18">Dubai Private Tour</dt>
                        </Link>
                      </dl>
                    </div>
                    {/*/ cdsSummary*/}{" "}
                  </div>
                  {/*/ cdsComponent*/}
                  <div className="widSSPComponent widSSPOptional">
                    <div className="widSSPTrvlRtng">
                      <dl>
                        <dt className="widSSPH11">TripAdvisor Traveler Rating</dt>
                        <dd>
                          <div className="widSSPOverall">
                            <img
                              src="https://static.tacdn.com/img2/ratings/traveler/s5.0.gif"
                              alt="5.0 of 5 bubbles"
                              className="rsImg"
                            />
                            <div>
                              Based on <b>1,420</b> traveler reviews
                            </div>
                          </div>
                          {/*/ overall */}{" "}
                        </dd>
                      </dl>
                    </div>
                  </div>
                  {/*/ cdsComponent */}
                  <div className="widSSPWrap widSSPOptional">
                    <div className="widSSPInformation">
                      <div className="widSSPWrap">
                        <div className="widSSPPopIdx widSSPSingle">
                          <b>TripAdvisor Ranking</b>
                          <span className="widSSPPopIdxData">
                            {" "}
                            <span className="widSSPPopIdxData widSSPPopIdxNumbers">
                              {" "}
                              <sup>#</sup>5 of 341{" "}
                            </span>{" "}
                            Outdoor Activities in Dubai{" "}
                          </span>
                        </div>
                        {/*/ popIdx*/}{" "}
                      </div>
                      {/*/ cdsWrap*/}{" "}
                    </div>
                    {/*/ cdsInformation*/}{" "}
                  </div>
                  {/*/ cdsWrap*/}
                  <div className="widSSPComponent widSSPOptional">
                    <dl className="widSSPReviews">
                      <dt className="widSSPH11">Most Recent Traveler Reviews</dt>
                      <dd className="widSSPOneReview">
                        <ul className="widSSPBullet">
                          <li>
                            <span className="widSSPDate">Dec 21, 2016:</span>{" "}
                            <span className="widSSPQuote">“Excellent your group”</span>
                          </li>
                          <li>
                            <span className="widSSPDate">Dec 20, 2016:</span>{" "}
                            <span className="widSSPQuote">
                              “Quick way to explore Dubai if you...”
                            </span>
                          </li>
                        </ul>
                        {/*/ bullet*/}{" "}
                      </dd>
                      {/*/ hReview*/}
                    </dl>
                  </div>
                  <div className="widSSPAll">
                    <ul className="widSSPReadReview">
                      <li>
                        <a
                          href="https://www.tripadvisor.com/Attraction_Review-g295424-d2510773-Reviews-Dubai_Private_Tour-Dubai_Emirate_of_Dubai.html"
                          id="allreviews"
                          onclick="ta.cds.handleTALink(11900,this);window.open(this.href, 'newTAWindow', 'toolbar=1,resizable=1,menubar=1,location=1,status=1,scrollbars=1,width=800,height=600'); return false"
                          rel="nofollow"
                        >
                          Read reviews
                        </a>
                      </li>
                    </ul>
                    <ul className="widSSPWriteReview">
                      <li>
                        <a
                          href="https://www.tripadvisor.com/UserReview-g295424-d2510773-Dubai_Private_Tour-Dubai_Emirate_of_Dubai.html"
                          id="writereview"
                          onclick="ta.cds.handleTALink(11900,this);window.open(this.href, 'newTAWindow', 'toolbar=1,resizable=1,menubar=1,location=1,status=1,scrollbars=1,width=800,height=600'); return false"
                          rel="nofollow"
                        >
                          Write a review
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*/ cdsAll*/}
                  <div className="widSSPLegal">© 2016 TripAdvisor LLC</div>
                  {/*/ cdsLegal*/}{" "}
                </div>
                {/*/ cdsData*/}
              </div>
              {/*/ CDSPOP.cdsBx*/}
            </div>
              </div>
              <div className="offerDiv">
                <div className="offer">10% OFF</div>
                <p>
                  we offer the best tour packages for Dubai & Abu Dhabi at
                  affordable prices.
                </p>
                <Link to="#" className="cta">
                  Check Out
                </Link>
              </div>
              <div className="TouristDiv">
                <div className="img">
                  <img
                    src={
                      "https://res.cloudinary.com/dqslvlm0d/image/upload/v1697702277/plane_lsvzcu.png"
                    }
                    alt=""
                  />
                </div>
                <span>Dubai</span>
                <span>Tourist Visa</span>
                <div className="TouristFooter">
                  <Link to="#" className="cta">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  function getUserPrice(tour) {
    if (userType === 2) {
      // Agent user type
      return (tour.tour_price_aed - (tour.tour_price_aed * userDiscount / 100)).toFixed(2);
    } else if (userType === 3) {
      // Normal user type
      return tour.tour_price_aed;
    } else {
      // Default case (handle other user types if needed)
      return tour.tour_price_aed;
    }

    // ... (remaining code)
  }
  function getUserPriceUsd(tour) {
    if (userType === 2) {
      // Agent user type
      return (tour.tour_price_usd - (tour.tour_price_usd * userDiscount / 100)).toFixed(2);
    } else if (userType === 3) {
      // Normal user type
      return tour.tour_price_usd;
    } else {
      // Default case (handle other user types if needed)
      return tour.tour_price_usd;
    }
  }

}

const mapStateToProps = (state) => ({
  selectedCurrency: state.currency.selectedCurrency,
  // ... (other state mappings)
});

export default connect(mapStateToProps)(ContentSection);

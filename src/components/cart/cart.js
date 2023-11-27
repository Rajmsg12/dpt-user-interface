import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./CartActions";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import './style/cart.css'
import { getUserPrice } from './PriceUtlis';
import config from "../../config";

const Cart = () => {
  const dispatch = useDispatch();
  let cartdata = localStorage.getItem("cartdata");
  const [cart, setCart] = useState([]);
  // const cart = useSelector((state) => state.cart.cart);
  console.log(cart)

  const navigate = useNavigate()
  const calculateTotal = () => {
    return Number(cart.reduce((total, item) => total + (getUserPrice(item)), 0));
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState("");
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);
  

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

          setIsLoggedIn(true);
        })

        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);
  useEffect(() => {
   // Fetch cart data from localStorage when the component mounts
   const storedCart = localStorage.getItem("cartdata");
   if (storedCart) {
     setCart(JSON.parse(storedCart));
   }
 }, []);

 const handleRemoveFromCart = (itemIndex) => {
   // Remove item from the cart
   const updatedCart = cart.filter((_, index) => index !== itemIndex);
   setCart(updatedCart);

   // If the removed item was the one that was expanded, setExpandedItemIndex(null);
   if (expandedItemIndex !== null && expandedItemIndex === itemIndex) {
     setExpandedItemIndex(null);
   }

   // Update localStorage with the modified cart
   localStorage.setItem("cartdata", JSON.stringify(updatedCart));
 };
  
  
  


  return (
    <div className="CartPageContent">
      <div className="container">
        {isLoggedIn ? ( // If user is logged in
          <div className="CartPageContentWrapper">
            <div className="CartPageContenLHS">
              {cart && Array.isArray(cart) && cart.length === 0 ? (
                <div className="EmptyCartMessage">Your cart is empty</div>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="CartBoxWrapper">
                    <div className="CartTopBox">
                      <div className="CartimgWrapper">
                        <img src={`${config.imageUrl}/${item.tourImage}`} alt={item.tourName} />
                      </div>
                      {/*CartimgWrapper*/}
                      <div className="CartContentWrapper">
                        <h4>{item.tourName}</h4>
                        <div className="Price">
                          {getUserPrice(item) && (
                            <>
                              AED{" "}
                              <strong>
                                {Math.floor(getUserPrice(item)).toLocaleString("en-US", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </strong>
                            </>
                          )}
                        </div>
                        <div className="BtnGroup">
                          <Link
                            href="#"
                            className="cta BookingInfoCta"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapseExample${index}`}
                            aria-expanded={expandedItemIndex === index}
                            aria-controls={`collapseExample${index}`}
                            onClick={() => setExpandedItemIndex(index)}
                          >
                            Booking Info
                          </Link>

                        </div>
                        <div className="EditTrashGroup">
                        {/*   <div className="Edit" />*/}
                          <div onClick={() => handleRemoveFromCart(index)} className="Trash" />

                        </div>
                        {/*EditTrashGroup*/}
                      </div>
                      {/*CartContentWrapper*/}
                    </div>
                    {/*CartTopBox*/}
                    <div className="CartBottomBox">
                    <div className="collapse" id={`collapseExample${index}`}>
                        <div className="BookingInfoData">
                          <div className="heading">Booking Info</div>
                          <div className="BookingInfotableData">
                            <div className="BookingInfotableDiv">
                              <div className="BookingInfotablerow">
                                <span>Tour Date*</span>
                                <span>{item.tourDate}</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Pickup Location*</span>
                                <span>{item.preferredPickupLocation}</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Preferred Guide Language*</span>
                                <span>{item.preferredGuidedLanguage}</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Adults*</span>
                                <span>{item.adults}</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Children</span>
                                <span>{item.children}</span>
                              </div>
                              {/*BookingInfotablerow*/}
                            </div>
                            {/*BookingInfotableDiv*/}
                            <div className="BookingInfotableDiv">
                              <div className="BookingInfotablerow">
                                <span>Preferred Pickup Time* </span>

                                <span>{item.preferredPickupTime}</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">

                                <span>End Location*</span>
                              
                                {item.preferredEndLocation === "Any Other Places in Dubai" ? (
                                  <>
                                    {item.otherPlaceName}, {item.otherPlaceAddress} , {item.otherPlaceTelephone}
                                  </>
                                ) : 
                                  item.preferredEndLocation
                                }
                                
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Pref.currency</span>
                                <span>{item.preferredCurrency}</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Infants</span>
                                <span>{item.infants}</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Payment Mode*</span>
                                <span>{item.preferredPay}</span>
                              </div>
                              {/*BookingInfotablerow*/}
                            </div>
                            {/*BookingInfotableDiv*/}
                          </div>
                          {/*BookingInfotableData*/}
                        </div>
                        {/*BookingInfoData*/}
                      </div>
                    </div>
                    {/*CartBottomBox*/}
                  </div>
                ))
              )}
            </div>
            <div className="CartPageContenRHS">
              {cart && Array.isArray(cart) && cart.length > 0 && (
                <div className="OrderSummaryDiv">
                  <div className="heading">Order Summary</div>
                  <div className="OrderSummaryTable">
                    <div className="OrderSummaryTablebody">
                      <div className="OrderSummaryTablerow">
                        <span>Subtotal</span>
                        <span>
                          AED <strong>{calculateTotal()}</strong>
                        </span>
                      </div>
                      <div className="OrderSummaryTablerow">
                        <span>Tax</span>
                        <span>
                          <strong>18 %</strong>
                        </span>
                      </div>
                      <div className="OrderSummaryTablerow">
                        <span>Order total</span>
                        <span>
                          AED <strong>{calculateTotal()}</strong>
                        </span>
                      </div>
                      <div className="ProceedCheckoutCta">
                        <Link to="/billing-detail" className="cta">Proceed to Checkout</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="CenteredLoginButton">
            <button
              className="cta"
              onClick={() => {
                navigate.push("/login"); // Navigate to the login page
              }}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

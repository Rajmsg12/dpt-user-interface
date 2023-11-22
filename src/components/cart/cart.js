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
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate()
  const calculateTotal = () => {
    return Number(cart.reduce((total, item) => total + (getUserPrice(item)), 0));
  };
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState("");

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

  const handleLogout = () => {
    fetch(`${config.baseUrl}/logout`, {
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
                        <img src={`${config.imageUrl}/${item.image}`} alt={item.tour_name} />
                      </div>
                      {/*CartimgWrapper*/}
                      <div className="CartContentWrapper">
                        <h4>{item.tour_name}</h4>
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
                            data-bs-target="#collapseExample1"
                            aria-expanded="false"
                            aria-controls="collapseExample1"
                          >
                            Booking Info
                          </Link>
                        </div>
                        <div className="EditTrashGroup">
                          <div className="Edit" />
                          <div onClick={() => dispatch(removeFromCart(item.id))} className="Trash" />
                        </div>
                        {/*EditTrashGroup*/}
                      </div>
                      {/*CartContentWrapper*/}
                    </div>
                    {/*CartTopBox*/}
                    <div className="CartBottomBox">
                      <div className="collapse" id="collapseExample1">
                        <div className="BookingInfoData">
                          <div className="heading">Booking Info</div>
                          <div className="BookingInfotableData">
                            <div className="BookingInfotableDiv">
                              <div className="BookingInfotablerow">
                                <span>Tour Date*</span>
                                <span>20/Dec/2023</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Pickup Location*</span>
                                <span>Dubai</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Preferred Guide Language*</span>
                                <span>English</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Adults*</span>
                                <span>2</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Children</span>
                                <span>1</span>
                              </div>
                              {/*BookingInfotablerow*/}
                            </div>
                            {/*BookingInfotableDiv*/}
                            <div className="BookingInfotableDiv">
                              <div className="BookingInfotablerow">
                                <span>Preferred Pickup Time* </span>
                                <span>2:00PM</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>End Location*</span>
                                <span>Burj Khalifa</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Pref.currency</span>
                                <span>AED</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Infants</span>
                                <span>0</span>
                              </div>
                              {/*BookingInfotablerow*/}
                              <div className="BookingInfotablerow">
                                <span>Payment Mode*</span>
                                <span>Pay Later</span>
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
                        <button className="cta">Proceed to Checkout</button>
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

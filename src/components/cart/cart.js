import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./CartActions";
import {Link} from 'react-router-dom'
import './style/cart.css'

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log("Cart ", cart);
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="CartPageContent">
      <div className="container">
        <div className="CartPageContentWrapper">
          <div className="CartPageContenLHS">
            {cart && Array.isArray(cart) && cart.length === 0 ? (
              <div className="EmptyCartMessage">Your cart is empty</div>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="CartBoxWrapper">
                  <div className="CartTopBox">
                    <div className="CartimgWrapper">
                      <img src={item.imageSrc} alt={item.title} />
                    </div>
                    <div className="CartContentWrapper">
                      <h4>{item.title}</h4>
                      <div className="Price">
                        AED{" "}
                        <strong>
                          {item.price.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </div>

                      <div className="BtnGroup">
                        <button
                          className="cta RemoveFromCart"
                          onClick={() => dispatch(removeFromCart(item.id))} // Dispatch the removeFromCart action with the item's id
                        >
                          Remove from Cart
                        </button>
                      </div>
                    </div>
                  </div>
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
                        AED <strong>0.00</strong>
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
      </div>
    </div>
  );
};

export default Cart;

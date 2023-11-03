import React from 'react'
import { Link } from 'react-router-dom'
import './style/cart.css'

const cart = () => {
  return (
    <>
    <div className="BreadcrumbSection">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Cart
          </li>
        </ol>
      </nav>
    </div>
  </div>
  <div className="CartPageContent">
    <div className="container">
      <div className="CartPageContentWrapper">
        <div className="CartPageContenLHS">
          <div className="CartAlertDiv">
            <div className="CloseIcon" />
            <div className="Toptitle">Your cart is ready!</div>
          </div>
          {/*CartAlertDiv*/}
          <div className="CartBoxXArea">
            <div className="CartBoxWrapper">
              <div className="CartTopBox">
                <div className="CartimgWrapper">
                  <img src="images/homepage/banner.png" alt="" />
                </div>
                {/*CartimgWrapper*/}
                <div className="CartContentWrapper">
                  <h4>Abu Dhabi Amazing Family Private Tour</h4>
                  <div className="Price">
                    AED <strong>500</strong>
                  </div>
                  <div className="BtnGroup">
                    <Link
                      to="/"
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
                    <div className="Trash" />
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
            {/*CartBoxWrapper Loop*/}
            <div className="CartBoxWrapper">
              <div className="CartTopBox">
                <div className="CartimgWrapper">
                  <img src="images/homepage/banner.png" alt="" />
                </div>
                {/*CartimgWrapper*/}
                <div className="CartContentWrapper">
                  <h4>Abu Dhabi Amazing Family Private Tour</h4>
                  <div className="Price">
                    AED <strong>500</strong>
                  </div>
                  <div className="BtnGroup">
                    <Link
                      to="/"
                      className="cta BookingInfoCta"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample2"
                      aria-expanded="false"
                      aria-controls="collapseExample2"
                    >
                      Booking Info
                    </Link>
                  </div>
                  <div className="EditTrashGroup">
                    <div className="Edit" />
                    <div className="Trash" />
                  </div>
                  {/*EditTrashGroup*/}
                </div>
                {/*CartContentWrapper*/}
              </div>
              {/*CartTopBox*/}
              <div className="CartBottomBox">
                <div className="collapse" id="collapseExample2">
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
            {/*CartBoxWrapper Loop*/}
          </div>
          {/*CartBoxXArea*/}
        </div>
        {/*CartPageContenLHS*/}
        <div className="CartPageContenRHS">
          <div className="OrderSummaryDiv">
            <div className="heading">Order Summary</div>
            <div className="OrderSummaryTable">
              <div className="OrderSummaryTablebody">
                <div className="OrderSummaryTablerow">
                  <span>Subtotal</span>
                  <span>$30.00</span>
                </div>
                {/*OrderSummaryTablerow*/}
                <div className="OrderSummaryTablerow">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                {/*OrderSummaryTablerow*/}
                <div className="OrderSummaryTablerow">
                  <span>Order total</span>
                  <span>$30.00</span>
                </div>
                {/*OrderSummaryTablerow*/}
                <div className="ProceedCheckoutCta">
                  <Link to="/" className="cta">
                    Proceed Checkout
                  </Link>
                </div>
                {/*ProceedCheckoutCta*/}
                <div className="PaymentMethodGroup">
                  <Link to="/">
                    <img src="images/homepage/mastercard.png" alt="" />
                  </Link>
                  <Link to="/">
                    <img src="images/homepage/visacard.png" alt="" />
                  </Link>
                  <Link to="/">
                    <img src="images/homepage/rupaycard.png" alt="" />
                  </Link>
                </div>
                {/*PaymentMethodGroup*/}
              </div>
              {/*OrderSummaryTablebody*/}
            </div>
            {/*OrderSummaryTable*/}
          </div>
          {/*OrderSummaryDiv*/}
        </div>
        {/*CartPageContenRHS*/}
      </div>
      {/*CartPageContentWrapper*/}
    </div>
    {/*container*/}
  </div>
    </>
  )
}

export default cart

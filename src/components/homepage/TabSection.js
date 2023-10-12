import React from 'react'
import '../../Style/header.css'
const TabSection = () => {
  return (

    <div className="tabSection">

      <div className="tabstycky">
        <div className="container">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-privatejet-tab" data-bs-toggle="tab"
                data-bs-target="#nav-privatejet" type="button" role="tab" aria-controls="nav-privatejet"
                aria-selected="true"><img src="images/homepage/jet.png" alt="" />Private jet</button>
              <button className="nav-link" id="nav-weddingonyatch-tab" data-bs-toggle="tab"
                data-bs-target="#nav-weddingonyatch" type="button" role="tab" aria-controls="nav-weddingonyatch"
                aria-selected="false"><img src="images/homepage/yatch.png" alt="" />Wedding on yatch</button>
              <button className="nav-link" id="nav-luxurytour-tab" data-bs-toggle="tab" data-bs-target="#nav-luxurytour"
                type="button" role="tab" aria-controls="nav-luxurytour" aria-selected="false"><img
                  src="images/diamond.png" alt="" />Luxury Tours</button>
              <button className="nav-link" id="nav-privatetour-tab" data-bs-toggle="tab" data-bs-target="#nav-privatetour"
                type="button" role="tab" aria-controls="nav-privatetour" aria-selected="false"><img
                  src="images/tour-guide.png" alt="" />Private Tour</button>
              <button className="nav-link" id="nav-attractiontickets-tab" data-bs-toggle="tab"
                data-bs-target="#nav-attractiontickets" type="button" role="tab" aria-controls="nav-attractiontickets"
                aria-selected="false"><img src="images/homepage/ticket.png" alt="" />Attraction Tickets</button>
              <button className="nav-link" id="nav-chauffeur-tab" data-bs-toggle="tab" data-bs-target="#nav-chauffeur"
                type="button" role="tab" aria-controls="nav-chauffeur" aria-selected="false"><img
                  src="images/taxi-driver.png" alt="" />Chauffeur</button>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-privatejet" role="tabpanel"
            aria-labelledby="nav-privatejet-tab">

            <div className="Title">
              <h2>Private Jet</h2>
            </div>

            <div className="TabLayer">
              <div className="TabWrapper">


                <div className="TabBox">
                  <div className="img">
                    <img src="images/homepage/product1.jpg" alt="" />
                    <div className="discountrow">
                      <div className="discount">
                        <span>-10%</span>
                      </div>
                      <div className="wishlistIcon">
                      </div>
                    </div>


                    <div className="imgBottomRow">
                      <div className="rhsimg">
                        <div><img src="images/homepage/choise1.png" alt="" /></div>
                      </div>
                    </div>

                  </div>
                  <div className="TabBoxBody">
                    <h4>Dubai Airport Private Transfer</h4>
                    <p>We promise, to give you a warm welcome and make you feel comfortable and safe. </p>
                    <div className="ReviewRow">
                      <span className="location">Dubai, United Arab Emirates</span>
                    </div>
                  </div>
                  <div className="TabBoxFooter">
                    <div className="aedLHS">
                      <span>Starting from</span>
                      <div className="aedtext">AED <strong>2,500</strong> Per 3 Person </div>
                    </div>
                    <div className="aedRHS">
                      1 Hour
                    </div>
                  </div>
                </div>
                <div className="TabBox">
                  <div className="img">
                    <img src="images/homepage/product2.jpg" alt="" />
                    <div className="discountrow">
                      <div className="discount">
                        <span>-20%</span>
                      </div>
                      <div className="wishlistIcon">
                      </div>
                    </div>


                    <div className="imgBottomRow">

                      <div className="rhsimg">
                        <div>
                          <img src="images/homepage/choise1.png" alt="" />
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="TabBoxBody">
                    <h4>6 Hours Dubai Private City Tour</h4>
                    <p>Our six hour trip is especially designed for any tourist or visitor on a short stay.</p>
                    <div className="ReviewRow">
                      <span className="location">Dubai, United Arab Emirates</span>
                    </div>
                  </div>
                  <div className="TabBoxFooter">
                    <div className="aedLHS">
                      <span>Starting from</span>
                      <div className="aedtext">AED <strong>1,020</strong> Per Person </div>
                    </div>
                    <div className="aedRHS">
                      6 Hours
                    </div>
                  </div>
                </div>
                <div className="TabBox">
                  <div className="img">
                    <img src="images/homepage/product3.jpg" alt="" />
                    <div className="discountrow">
                      <div className="discount">
                        <span>-10%</span>
                      </div>
                      <div className="wishlistIcon">
                      </div>
                    </div>


                    <div className="imgBottomRow">
                      <div className="lhstext">
                        <span>#1</span>
                        <span>Top Dubai Desert Experience</span>
                      </div>
                      <div className="rhsimg">
                        <div>

                          <img src="images/homepage/choise1.png" alt="" />
                        </div>

                      </div>
                    </div>

                  </div>
                  <div className="TabBoxBody">
                    <h4>3 Hours Morning Desert Safari </h4>
                    <p>The Morning Safari is organized daily throughout the week. </p>
                    <div className="ReviewRow">
                      <span className="location">Dubai, United Arab Emirates</span>
                    </div>
                  </div>
                  <div className="TabBoxFooter">
                    <div className="aedLHS">
                      <span>Starting from</span>
                      <div className="aedtext">AED <strong>875</strong> upto 4 people</div>
                    </div>
                    <div className="aedRHS">
                      3 Hours
                    </div>
                  </div>
                </div>
                <div className="TabBox">
                  <div className="img">
                    <img src="images/homepage/product4.jpg" alt="" />
                    <div className="discountrow">
                      <div className="discount">

                      </div>
                      <div className="wishlistIcon">
                      </div>
                    </div>


                    <div className="imgBottomRow">

                      <div className="rhsimg">
                        <div>
                          <img src="images/homepage/choise2.png" alt="" />
                          <img src="images/choise3.png" alt="" />
                        </div>

                      </div>
                    </div>

                  </div>
                  <div className="TabBoxBody">
                    <h4>Dubai Creek Dhow Dinner Cruise</h4>
                    <p>Enjoy smooth sailing along the creek as night falls with spectacular glittering views.</p>
                    <div className="ReviewRow">
                      <span className="location">Dubai, United Arab Emirates</span>
                    </div>
                  </div>
                  <div className="TabBoxFooter">
                    <div className="aedLHS">
                      <span>Starting from</span>
                      <div className="aedtext">AED <strong>275</strong> Per Person </div>
                    </div>
                    <div className="aedRHS">
                      2 Hours
                    </div>
                  </div>
                </div>
                <div className="TabBox">
                  <div className="img">
                    <img src="images/homepage/product5.jpg" alt="" />
                    <div className="discountrow">
                      <div className="discount">

                      </div>
                      <div className="wishlistIcon">
                      </div>
                    </div>


                    <div className="imgBottomRow">

                      <div className="rhsimg">
                        <div>

                        </div>

                      </div>
                    </div>

                  </div>
                  <div className="TabBoxBody">
                    <h4>Tandem Skydive</h4>
                    <p>A tandem skydive is the quickest and easiest way to experience.</p>
                    <div className="ReviewRow">
                      <span className="location">Dubai, United Arab Emirates</span>
                    </div>
                  </div>
                  <div className="TabBoxFooter">
                    <div className="aedLHS">
                      <span>Starting from</span>
                      <div className="aedtext">AED <strong>2,199</strong> Per Person </div>
                    </div>
                    <div className="aedRHS">
                      4 Hours
                    </div>
                  </div>
                </div>
                <div className="TabBox">
                  <div className="img">
                    <img src="images/homepage/product6.jpg" alt="" />
                    <div className="discountrow">
                      <div className="discount">
                        <span>-15%</span>
                      </div>
                      <div className="wishlistIcon">
                      </div>
                    </div>


                    <div className="imgBottomRow">
                      <div className="lhstext">
                        <span>#1</span>
                        <span>Top Dubai seaplane tour Experience</span>
                      </div>
                      <div className="rhsimg">
                        <div>

                          <img src="images/homepage/choise2.png" alt="" />
                        </div>

                      </div>
                    </div>

                  </div>
                  <div className="TabBoxBody">
                    <h4>Seaplane Tour</h4>
                    <p>Take your pick from two convenient take-off locations, Jebel Ali or Dubai Creek.</p>
                    <div className="ReviewRow">
                      <span className="location">Dubai, United Arab Emirates</span>
                    </div>
                  </div>
                  <div className="TabBoxFooter">
                    <div className="aedLHS">
                      <span>Starting from</span>
                      <div className="aedtext">AED <strong>500</strong> Per Person </div>
                    </div>
                    <div className="aedRHS">
                      4 Hours
                    </div>
                  </div>
                </div>
                <div class="TabBox">
                <div class="img">
                  <img src="images/homepage/product7.jpg" alt="" />
                  <div class="discountrow">
                    <div class="discount">
                      <span>-25%</span>
                    </div>
                    <div class="wishlistIcon">
                    </div>
                  </div>


                  <div class="imgBottomRow">
                    <div class="lhstext">
                
                    </div>
                    <div class="rhsimg">
                      <div>
                 
                        <img src="images/homepage/choise3.png" alt=""/>
                      </div>

                    </div>
                  </div>

                </div>
                <div class="TabBoxBody">
                  <h4>Luxury Yacht Charter</h4>
                  <p>We at Dubai Private tour provide Luxury Yachts charter services in Dubai Marina.</p>
                  <div class="ReviewRow">
                    <span class="location">Dubai, United Arab Emirates</span>
                  </div>
                </div>
                <div class="TabBoxFooter">
                  <div class="aedLHS">
                    <span>Starting from</span>
                    <div class="aedtext">AED <strong>250</strong> upto 5 people </div>
                  </div>
                  <div class="aedRHS">
                    6 Days
                  </div>
                </div>
              </div>
              <div class="TabBox">
                <div class="img">
                  <img src="images/homepage/product8.jpg" alt="" />
                  <div class="discountrow">
                    <div class="discount">
                    
                    </div>
                    <div class="wishlistIcon">
                    </div>
                  </div>


                  <div class="imgBottomRow">
                   
                    <div class="rhsimg">
                      

                    </div>
                  </div>

                </div>
                <div class="TabBoxBody">
                  <h4>Etiquette of Arabic Coffee</h4>
                  <p>Try Arabic coffee at its best, the cafe is well know for serving premium Arabic Coffee!</p>
                  <div class="ReviewRow">
                    <span class="location">Dubai, United Arab Emirates</span>
                  </div>
                </div>
                <div class="TabBoxFooter">
                  <div class="aedLHS">
                    <span>Starting from</span>
                    <div class="aedtext">AED <strong>250</strong> upto 5 people</div>
                  </div>
                  <div class="aedRHS">
                    8 Hours
                  </div>
                </div>
              </div>

            </div>
          </div>



        </div>
        <div class="tab-pane fade" id="nav-weddingonyatch" role="tabpanel" aria-labelledby="nav-weddingonyatch-tab">
          <div class="Title">
            <h2>Wedding on yatch</h2>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-luxurytour" role="tabpanel" aria-labelledby="nav-luxurytour-tab">
          <div class="Title">
            <h2>Luxury Tours</h2>
          </div>

        </div>
        <div class="tab-pane fade" id="nav-privatetour" role="tabpanel" aria-labelledby="nav-privatetour-tab">
          <div class="Title">
            <h2>Private Tour</h2>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-attractiontickets" role="tabpanel"
          aria-labelledby="nav-attractiontickets-tab">
          <div class="Title">
            <h2>Attraction Tickets</h2>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-chauffeur" role="tabpanel" aria-labelledby="nav-chauffeur-tab">
          <div class="Title">
            <h2>Chauffeur</h2>
          </div>
        </div>

      </div>
    </div>
  </div>

  )
}

export default TabSection

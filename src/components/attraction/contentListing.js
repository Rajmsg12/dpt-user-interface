import React from 'react'
import { Link } from 'react-router-dom'
import './Style/attraction.css'
import ContentRhs from './contentRhs'
import ContentLhs from './contentLhs'

const contentListing = () => {
  return (
    <div>
    <>
    <div className="attractiondetailPage">
      <div className="attraction-detailTopTab">
        <div className="container">
          <div className="attraction-detailTopTabIN">
            <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-overviewtab-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-overviewtab"
                  type="button"
                  role="tab"
                  aria-controls="pills-overviewtab"
                  aria-selected="true"
                >
                  Overview
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-toursticket-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-toursticket"
                  type="button"
                  role="tab"
                  aria-controls="pills-toursticket"
                  aria-selected="false"
                >
                  Tours &amp; Tickets
                </button>
              </li>
            </ul>
          </div>
          {/*attraction-detailTopTabIN*/}
        </div>
        {/*container*/}
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-overviewtab"
            role="tabpanel"
            aria-labelledby="pills-overviewtab-tab"
          >
            <div className="overviewtabData">
              <div className="container">
                <h2>The Basics</h2>
                <img src="images/homepage/listproduct1.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  doloribus iste excepturi soluta in ut amet id perspiciatis
                  asperiores ipsum quae cum sunt quod nisi reprehenderit sequi,
                  ipsa quia voluptates? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ducimus doloribus iste excepturi soluta in ut
                  amet id perspiciatis asperiores ipsum quae cum sunt quod nisi
                  reprehenderit sequi, ipsa quia voluptates? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ducimus doloribus iste
                  excepturi soluta in ut amet id perspiciatis asperiores ipsum
                  quae cum sunt quod nisi reprehenderit sequi, ipsa quia
                  voluptates? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ducimus doloribus iste excepturi soluta in ut amet id
                  perspiciatis asperiores ipsum quae cum sunt quod nisi
                  reprehenderit sequi, ipsa quia voluptates? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ducimus doloribus iste
                  excepturi soluta in ut amet id perspiciatis asperiores ipsum
                  quae cum sunt quod nisi reprehenderit sequi, ipsa quia
                  voluptates? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ducimus doloribus iste excepturi soluta in ut amet id
                  perspiciatis asperiores ipsum quae cum sunt quod nisi
                  reprehenderit sequi, ipsa quia voluptates?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  doloribus iste excepturi soluta in ut amet id perspiciatis
                  asperiores ipsum quae cum sunt quod nisi reprehenderit sequi,
                  ipsa quia voluptates? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ducimus doloribus iste excepturi soluta in ut
                  amet id perspiciatis asperiores ipsum quae cum sunt quod nisi
                  reprehenderit sequi, ipsa quia voluptates? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ducimus doloribus iste
                  excepturi soluta in ut amet id perspiciatis asperiores ipsum
                  quae cum sunt quod nisi reprehenderit sequi, ipsa quia
                  voluptates? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ducimus doloribus iste excepturi soluta in ut amet id
                  perspiciatis asperiores ipsum quae cum sunt quod nisi
                  reprehenderit sequi, ipsa quia voluptates? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ducimus doloribus iste
                  excepturi soluta in ut amet id perspiciatis asperiores ipsum
                  quae cum sunt quod nisi reprehenderit sequi, ipsa quia
                  voluptates? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ducimus doloribus iste excepturi soluta in ut amet id
                  perspiciatis asperiores ipsum quae cum sunt quod nisi
                  reprehenderit sequi, ipsa quia voluptates?
                </p>
                <Link href="/" className="cta">
                  View all 137 experiences
                </Link>
                <div className="ThingstwoSection">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ThingstwoSectionIn">
                        <h2>Things to Know Before You Go</h2>
                        <ul>
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </li>
                          <li>
                            Aliquam vitae metus eget tortor luctus placerat at in
                            ligula.
                          </li>
                          <li>Sed cursus quam ac nunc vestibulum aliquam.</li>
                          <li>Aenean tincidunt tortor at aliquam dictum.</li>
                          <li>
                            Vestibulum sed quam posuere, ornare felis id, vehicula
                            lorem.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ThingstwoSectionIn">
                        <h2>How to Get There</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Donec quis consequat tellus, eget facilisis libero.
                          Nullam sem nisi, maximus elementum dolor non, sodales
                          ornare libero. Quisque tincidunt turpis ac lectus
                          ultrices porta. Integer eget fermentum tortor. Nunc
                          massa lacus, commodo a venenatis et, rutrum sed nulla.
                          Pellentesque fringilla tincidunt tellus, non ultrices
                          neque volutpat eget. Etiam luctus tempus lorem, dictum
                          sodales tortor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*container*/}
            </div>
            {/*overviewtabData*/}
          </div>
         <ContentRhs/>
        </div>
      </div>
      {/*attraction-detailTopTab*/}
      {/*faq*/}
      <div className="accordionDiv">
        <div className="container">
          <div className="accordionDivIN">
            <h2>Frequently asked Questions</h2>
            <div className="accordionDivWrapper">
              <div className="faqBox">
                <div className="accordion" id="accordionExamplea">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingone">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseone"
                        aria-expanded="false"
                        aria-controls="collapseone"
                      >
                        {" "}
                        What are the different modes of travel to reach Dubai?{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseone"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingone"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Nulla quasi iure laudantium debitis accusantium
                          molestias eveniet facilis consequuntur amet perspiciatis
                          repellat, voluptatum provident repudiandae dicta
                          deserunt. Eligendi assumenda dicta aliquam!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        {" "}
                        Do I need a visa to travel in Dubai?{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Nulla quasi iure laudantium debitis accusantium
                          molestias eveniet facilis consequuntur amet perspiciatis
                          repellat, voluptatum provident repudiandae dicta
                          deserunt. Eligendi assumenda dicta aliquam!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingthree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsethree"
                        aria-expanded="false"
                        aria-controls="collapsethree"
                      >
                        {" "}
                        What are the different modes of travel to reach Dubai?{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsethree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingthree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Nulla quasi iure laudantium debitis accusantium
                          molestias eveniet facilis consequuntur amet perspiciatis
                          repellat, voluptatum provident repudiandae dicta
                          deserunt. Eligendi assumenda dicta aliquam!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingfour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >
                        {" "}
                        What activities one can do in Dubai?{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Nulla quasi iure laudantium debitis accusantium
                          molestias eveniet facilis consequuntur amet perspiciatis
                          repellat, voluptatum provident repudiandae dicta
                          deserunt. Eligendi assumenda dicta aliquam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faqBox">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingfive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >
                        {" "}
                        What are the different modes of travel to reach Dubai?{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsefive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Nulla quasi iure laudantium debitis accusantium
                          molestias eveniet facilis consequuntur amet perspiciatis
                          repellat, voluptatum provident repudiandae dicta
                          deserunt. Eligendi assumenda dicta aliquam!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingsix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsesix"
                        aria-expanded="false"
                        aria-controls="collapsesix"
                      >
                        {" "}
                        What is the best time to visit Dubai?{" "}
                      </button>
                    </h2>
                    <div
                      id="collapsesix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingsix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Nulla quasi iure laudantium debitis accusantium
                          molestias eveniet facilis consequuntur amet perspiciatis
                          repellat, voluptatum provident repudiandae dicta
                          deserunt. Eligendi assumenda dicta aliquam!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingseven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseseven"
                        aria-expanded="false"
                        aria-controls="collapseseven"
                      >
                        {" "}
                        Which are some of the best sightseeing spot in Dubai?{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseseven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingseven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Nulla quasi iure laudantium debitis accusantium
                          molestias eveniet facilis consequuntur amet perspiciatis
                          repellat, voluptatum provident repudiandae dicta
                          deserunt. Eligendi assumenda dicta aliquam!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingeight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseeight"
                        aria-expanded="false"
                        aria-controls="collapseeight"
                      >
                        {" "}
                        How much time do I need to explore Dubai?{" "}
                      </button>
                    </h2>
                    <div
                      id="collapseeight"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingeight"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Nulla quasi iure laudantium debitis accusantium
                          molestias eveniet facilis consequuntur amet perspiciatis
                          repellat, voluptatum provident repudiandae dicta
                          deserunt. Eligendi assumenda dicta aliquam!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*accordionDivWrapper*/}
          </div>
          {/*accordionDivIN*/}
        </div>
      </div>
      {/*faq*/}
      {/*dubaimemories*/}
      <div className="dubaimemories">
        <div className="container">
          <div className="dubaimemoriesIn">
            <h2>Dubai memories you'll never forget.</h2>
            <p>
              Explore the Emirates experience and plan an unforgettable trip
              beyond your flight.
            </p>
            <Link to="#">Explore Dubai</Link>
          </div>
        </div>
      </div>
      {/*dubaimemories*/}
    </div>
    {/*attractiondetailPage*/}
    <div className="menuOverlay" />
  </>
  
    </div>
  )
}

export default contentListing

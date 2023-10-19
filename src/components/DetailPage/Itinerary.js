import React from 'react'

const Itinerary = () => {
    return (
        <div>
            <div className="Itinerary">
                <h3>Itinerary</h3>
                <div className="ItineraryIn">
                    <div className="d-flex align-items-start">
                        <div className="nav flex-column nav-pills LhsItineraryDiv" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="v-pills-1tinerary1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1tinerary1" type="button" role="tab" aria-controls="v-pills-1tinerary1" aria-selected="true">
                                <div className="parentWrapper">
                                    <div className="imgWrapper">
                                        <img src="images/homepage/itinerary1.jpg" alt="" />
                                    </div>
                                    {/* imgWrapper */}
                                    <div className="Text">
                                        <div className="title">Burj Al Arab | Dubai's Most Iconic Hotel</div>
                                        <p>Welcome to Burj Al Arab, Dubai's most iconic hotel and a global icon of Arabian luxury.</p>
                                    </div>
                                    {/* Text */}
                                </div>
                                {/* parentWrapper */}
                            </button>
                            <button className="nav-link" id="v-pills-1tinerary2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1tinerary2" type="button" role="tab" aria-controls="v-pills-1tinerary2" aria-selected="false">
                                <div className="parentWrapper">
                                    <div className="imgWrapper">
                                        <img src="images/homepage/itinerary2.jpg" alt="" />
                                    </div>
                                    {/* imgWrapper */}
                                    <div className="Text">
                                        <div className="title">10 Amazing Inside Burj Al Arab Secrets</div>
                                        <p>60 minutes open desert ATV Quad biking and another 30 minutes high dunes roller ride.</p>
                                    </div>
                                    {/* Text */}
                                </div>
                                {/* parentWrapper */}
                            </button>
                            <button className="nav-link" id="v-pills-1tinerary3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1tinerary3" type="button" role="tab" aria-controls="v-pills-1tinerary3" aria-selected="false">
                                <div className="parentWrapper">
                                    <div className="imgWrapper">
                                        <img src="images/homepage/itinerary3.jpg" alt="" />
                                    </div>
                                    {/* imgWrapper */}
                                    <div className="Text">
                                        <div className="title"> Burj Al Arab Tour opening five-star hotel</div>
                                        <p>Welcome to Burj Al Arab, Dubai's most iconic hotel and a global icon of Arabian luxury.</p>
                                    </div>
                                    {/* Text */}
                                </div>
                                {/* parentWrapper */}
                            </button>
                            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                <div className="parentWrapper">
                                    <div className="imgWrapper">
                                        <img src="images/homepage/itinerary4.jpg" alt="" />
                                    </div>
                                    {/* imgWrapper */}
                                    <div className="Text">
                                        <div className="title"> Inside Burj Al Arab, Dubai - Hotel Interior Design</div>
                                        <p>60 minutes open desert ATV Quad biking and another 30 minutes high dunes roller ride.</p>
                                    </div>
                                    {/* Text */}
                                </div>
                                {/* parentWrapper */}
                            </button>
                        </div>
                        <div className="tab-content RhsItineraryDiv" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-1tinerary1" role="tabpanel" aria-labelledby="v-pills-1tinerary1-tab">
                                <div className="TabImg1">
                                    <img src="images/homepage/TabImg.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-1tinerary2" role="tabpanel" aria-labelledby="v-pills-1tinerary2-tab">
                                <div className="TabImg1">
                                    <img src="images/homepage/TabImg.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-1tinerary3" role="tabpanel" aria-labelledby="v-pills-1tinerary3-tab">
                                <div className="TabImg1">
                                    <img src="images/homepage/TabImg.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div className="TabImg1">
                                    <img src="images/homepage/TabImg.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ItineraryIn */}
            </div>
        </div>
    )
}

export default Itinerary

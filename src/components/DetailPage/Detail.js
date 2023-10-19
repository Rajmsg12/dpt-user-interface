import React from 'react'

const Detail = () => {
    return (
        <div>
            <div className="tab-pane fade show active" id="pills-detail" role="tabpanel" aria-labelledby="pills-detail-tab">
                <div className="OverviewSection">
                    <h3>Overview</h3>
                    <p>Head into the desert outside Dubai for an evening of dining and entertainment. First, climb aboard your own quad bike for an adrenaline-fueled adventure through the golden sands. Then, head to a Bedouin-style camp to participate in other activities such as sandboarding or camel riding as you enjoy traditional Arab music and dancing. A full buffet dinner is served in addition to tea, coffee, and other refreshments.</p>
                    <ul>
                        <li>Spend an evening at a Bedouin desert camp</li>
                        <li>Dune bashing, quad biking, and other activities included</li>
                        <li>Feast on a buffet dinner with non-alcoholic beverages</li>
                        <li>Hotel pickup and drop-off included</li>
                    </ul>
                </div>
                <div className="SecondPartTab">
                    <ul className="nav nav-pills mb-3" id="pills-tab1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-included-tab" data-bs-toggle="pill" data-bs-target="#pills-included" type="button" role="tab" aria-controls="pills-included" aria-selected="true">What's Included?</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-exclusive-tab" data-bs-toggle="pill" data-bs-target="#pills-exclusive" type="button" role="tab" aria-controls="pills-exclusive" aria-selected="false">What’s exclusive?</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent3">
                        <div className="tab-pane fade show active" id="pills-included" role="tabpanel" aria-labelledby="pills-included-tab">
                            <div className="datainnerUl">
                                <div className="UlWrapper">
                                    <div>Pickup & drop hotel Dubai Cruise terminal & hotel apartments.</div>
                                    <div>Alcohol drinks. However simply paying USD 35 unlimited alcoholic drinks for one hour</div>
                                    <div>ATV quad ride for each children one bike below 14 years, however specified area.</div>
                                </div>
                                <div className="UlWrapper">
                                    <div>Souvenir photos (available to purchase)</div>
                                    <div>Pickup & drop hotel Dubai Cruise terminal & hotel apartments.</div>
                                </div>
                            </div>
                            {/* datainnerUl */}
                        </div>
                        <div className="tab-pane fade" id="pills-exclusive" role="tabpanel" aria-labelledby="pills-exclusive-tab">
                            <div className="datainnerUl">
                                <div className="UlWrapper">
                                    <div>Pickup & drop hotel Dubai Cruise terminal & hotel apartments.</div>
                                    <div>Alcohol drinks. However simply paying USD 35 unlimited alcoholic drinks for one hour</div>
                                    <div>ATV quad ride for each children one bike below 14 years, however specified area.</div>
                                </div>
                                <div className="UlWrapper">
                                    <div>Souvenir photos (available to purchase)</div>
                                    <div>Pickup & drop hotel Dubai Cruise terminal & hotel apartments.</div>
                                </div>
                            </div>
                            {/* datainnerUl */}
                        </div>
                    </div>
                </div>
                {/* SecondPartTab */}
            </div>
        </div>
    )
}

export default Detail

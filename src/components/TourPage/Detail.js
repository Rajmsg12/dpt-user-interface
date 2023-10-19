import React from 'react'
import IncludedExclusive from './IncludedExclusive'

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
                    <IncludedExclusive/>
                </div>
                {/* SecondPartTab */}
            </div>
        </div>
    )
}

export default Detail

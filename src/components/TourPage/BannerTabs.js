import React from 'react'
import AskQuestion from './AskQuestion'
import BookThisTour from './BookThisTour'
import Detail from './Detail'

const DetailOverview = () => {
    return (
        <>
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
                    <Detail/>
              {/* tab pannel */}
                    <BookThisTour/>
                    {/*tab pannel*/}
                    <AskQuestion/>
                   { /*tab panne*/}
                </div>
            </div>
        </>
    )
}

export default DetailOverview

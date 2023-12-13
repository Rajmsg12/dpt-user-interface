import React from 'react'
import './style/style.css'

const breadcrum = () => {
    return (
        <div>
            <>
                <div
                    className="InnerBanner"
                    style={{ backgroundImage: "url(images/innerbanner.jpg)" }}
                >
                    <div className="container">
                        <h1>Tourist Visa</h1>
                    </div>
                </div>
                <div className="BreadcrumbSection">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Tourist Visa
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </>

        </div>
    )
}

export default breadcrum

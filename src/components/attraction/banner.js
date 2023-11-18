import React from 'react'
import './Style/attraction.css'
const banner = () => {
    return (
        <div>
            <div
                className="InnerBanner"
                style={{ backgroundImage: "url(images/innerbanner.jpg)" }}
            >
                <div className="container">
                    <h1>Attraction Detail</h1>
                </div>
            </div>

        </div>
    )
}

export default banner

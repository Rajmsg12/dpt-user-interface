import React from 'react'
import {data} from '../../data/Category'
import {Link} from 'react-router-dom'
const categoryLHS = () => {
  return (
    <>
    <div className="CategoryTopSectionLHS" id="sidebarFilter">
    <div className="Attractions">
        <div className="titleRow">
            <div className="icon">
                <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697701972/locationicon_oyxdy0.png"} alt="" />
            </div>
            <div className="title">
                Tour Listing <span className="closeIcon" />
            </div>
        </div>
        <ul>
            {data && data.TourList.map((item, index) => (
                <li key={index}>{item.tour}</li>
            ))}
        </ul>
    </div>
    <div className="CategoryTopLHSHd">
        <div className="title">select Preference</div>
        <div className="DurationDiv">
            <div className="sidebarlabel">
                <h3>Duration</h3>
            </div>
            <div className="checkBoxDiv">
                <div>
                    <label className="CheckboxIn">
                        <div className="checkboxField">
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </div>
                        <div className="checkboxText">
                            <div className="CheckboxSublabel">Up to 1 hour</div>
                        </div>
                    </label>
                </div>
                <div>
                    <label className="CheckboxIn">
                        <div className="checkboxField">
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </div>
                        <div className="checkboxText">
                            <div className="CheckboxSublabel">1 to 4 hours</div>
                        </div>
                    </label>
                </div>
                <div>
                    <label className="CheckboxIn">
                        <div className="checkboxField">
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </div>
                        <div className="checkboxText">
                            <div className="CheckboxSublabel">4 hours to 1 day</div>
                        </div>
                    </label>
                </div>
                <div>
                    <label className="CheckboxIn">
                        <div className="checkboxField">
                            <input type="checkbox" />
                            <span className="checkmark" />
                        </div>
                        <div className="checkboxText">
                            <div className="CheckboxSublabel">1 to 3 days</div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div className="RangeSlider">
            <div className="sidebarlabel">
                <h3>Price</h3>
            </div>
            <div className="RangeSliderIn">
                <div className="rangeSliderTopLayer">
                    <span>0 AED</span>
                    <span>+ 5000 AED</span>
                </div>
            </div>
        </div>
        <div className="RatingDiv">
            <div className="sidebarlabel">
                <h3>Rating</h3>
            </div>
            <div className="RadioBox">
                <div>
                    <label className="RadioBoxIn">
                        <div className="radioboxField">
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                        </div>
                        <div className="radioboxText">
                            <div className="radioboxSublabel">
                                <span className="imageStarRating">
                                    <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1698738115/ratingstar_nisesy.png"}  alt="" />
                                </span>
                                <div className="ratingSubtext" />
                            </div>
                        </div>
                    </label>
                </div>
                <div>
                    <label className="RadioBoxIn">
                        <div className="radioboxField">
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                        </div>
                        <div className="radioboxText">
                            <div className="radioboxSublabel">
                                <span className="imageStarRating">
                                    <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1698738115/ratingstar_nisesy.png"}  alt="" />
                                </span>
                                <div className="ratingSubtext">&amp; up</div>
                            </div>
                        </div>
                    </label>
                </div>
                <div>
                    <label className="RadioBoxIn">
                        <div className="radioboxField">
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                        </div>
                        <div className="radioboxText">
                            <div className="radioboxSublabel">
                                <span className="imageStarRating">
                                    <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1698738115/ratingstar_nisesy.png"} alt="" />
                                </span>
                                <div className="ratingSubtext">&amp; up</div>
                            </div>
                        </div>
                    </label>
                </div>
                <div>
                    <label className="RadioBoxIn">
                        <div className="radioboxField">
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                        </div>
                        <div className="radioboxText">
                            <div className="radioboxSublabel">
                                <span className="imageStarRating">
                                    <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1698738115/ratingstar_nisesy.png"}  alt="" />
                                </span>
                                <div className="ratingSubtext">&amp; up</div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div className="DubaiPrivateTourDiv">
        <div className="customersayText">
            <div className="topimg">
                <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697702089/Tripadvisorlogo_cc6y9z.png"} alt="" />
            </div>
            <h4>Dubai Private Tour</h4>
            <div className="rating">
                <span className="Recentrating"> Recent Traveler Rating </span>
                <div className="reviewtwxt">
                    <ul>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                    <span>2,444 Revies</span>
                </div>
            </div>
            <div className="Ranking">
                <span> Tripadvisor Ranking </span>
                <h5>#112 of 2070 Outdoor activities in dubai</h5>
            </div>
            <div className="Recent">
                <span>Recent Travelers Reviews</span>
                <p>
                    “Happy with their timely response and I got cheaper tickets from
                    any other site.”
                </p>
                <p>“Best Service And Support Guidance Fast Booking.”</p>
            </div>
            <div className="link">
                <Link href="#">Read reviews </Link>
                <Link href="#">Write a review</Link>
            </div>
        </div>
    </div>
    <div className="offerDiv">
        <div className="offer">10% OFF</div>
        <p>
            we offer the best tour packages for Dubai &amp; Abu Dhabi at
            affordable prices.
        </p>
        <Link href="#" className="cta">
            Check Out
        </Link>
    </div>
    <div className="TouristDiv">
        <div className="img">
            <img src="images/homepage/plane.png" alt="" />
        </div>
        <span>Dubai</span>
        <span>Tourist Visa</span>
        <div className="TouristFooter">
            <Link href="#" className="cta">
                Apply Now
            </Link>
        </div>
    </div>
</div>
    </>
  )
}

export default categoryLHS

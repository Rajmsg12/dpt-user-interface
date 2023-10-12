import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../../Style/header.css'

const Banner = () => {
    useEffect(() => {
        const handleScroll = () => {
            const tabSection = document.querySelector(".tabSection");
            const formobile = document.querySelector(".formobile");
            const homepageContent = document.querySelector(".homepageContent");

            if (window.scrollY > (tabSection.offsetTop - 118)) {
                homepageContent.classList.add("ondesSticky");
            } else {
                homepageContent.classList.remove("ondesSticky");
            }

            if (window.scrollY > 300) {
                homepageContent.classList.add("searchSticky");
            } else {
                homepageContent.classList.remove("searchSticky");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`homepageContent`}>
        
        <div > {/* Changed class to className */}
                <div className="BannerTabSection"> {/* Changed class to className */}
                    <div className="TabImg" style={{ backgroundImage: 'url(images/homepage/banner.png)' }}> {/* Used inline style with double curly braces */}
                        <div className="container">
                            <div className="BannerContent">
                                <span>Unforgateful!</span>
                                <h1>Dubai Memories</h1>
                                <p>Real travelers. Real stories. Real opinions to help you make the right choice.</p>
                                <div className="fordesktop">
                                    <div className="bannerSearch">
                                        <div className="bannerSearchWrapper">
                                            <div className="whereto">
                                                <div className="wheretoIN">
                                                    <div className="iconwithText">
                                                        <div className="icon">
                                                        </div>
                                                        <div className="Text">
                                                            <div className="toptext">Where to?</div>
                                                            <div className="bottomtext">Dubai</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="selectdate">
                                                <div className="selectdateIN">
                                                    <div className="iconwithText">
                                                        <div className="icon">
                                                        </div>
                                                        <div className="Text">
                                                            <div className="toptext">When to?</div>
                                                            <div className="bottomtext">Select Dates</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="selectperson">
                                                <div className="selectpersonIN">
                                                    <div className="iconwithText">
                                                        <div className="icon">
                                                        </div>
                                                        <div className="Text">
                                                            <div className="toptext">Select Persons</div>
                                                            <div className="bottomtext">10 Travellers</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Replace the <button> with a <Link> */}
                                            <div class="SearchBtn">
                                                <button type="submit" class="searchIcon"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="formobile">
                                    <div className="container">
                                        <div className="searchFixedWrapper" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                                            aria-controls="offcanvasTop">
                                            <div className="searchinputformobile">
                                                <button type="submit" className="SearchIconInput"> </button>
                                                <input type="text" value="" placeholder="Search for a place or activity" />
                                            </div>
                                        </div>

                                        <div className="offcanvas offcanvas-top SearchPopupForMob" tabIndex="9" id="offcanvasTop"
                                            aria-labelledby="offcanvasTopLabel">
                                            <div className="offcanvas-header">
                                                <h5 id="offcanvasTopLabel">Change your search</h5>
                                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <div className="SearchPopupForMobInner">
                                                    <div className="searchinputformobile popupSearchbar">
                                                        <button type="submit" className="SearchIconInput"> </button>
                                                        <input type="text" value="" placeholder="Search for a place or activity" />
                                                    </div>

                                                    <div className="SelectdateField">
                                                        <div className="calendarIcon"></div>
                                                        <input type="text" placeholder="Select Dates" />
                                                    </div>

                                                    <div className="SelectpeopleField">
                                                        <div className="UserIcon"></div>
                                                        <input type="text" placeholder="Select Persons" />
                                                    </div>

                                                    <div className="PopupSubmitBtn">
                                                        {/* Replace the <button> with a <Link> */}
                                                        <Link to="/">Search</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    );
}

export default Banner;

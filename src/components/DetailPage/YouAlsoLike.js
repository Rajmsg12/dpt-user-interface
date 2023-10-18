import React from 'react';
import { Link } from 'react-router-dom';
import './Style/DetailPage.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {data} from '../../data/index'

const YouAlsoLike = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
        <div className="PopularTours">
            <div className="container">
                <div className="Title">
                    <h2>you may also like</h2>
                </div>
                <div className="PopularToursSlider">
                    <Carousel responsive={responsive} infinite={true} itemclassName="carousel-item-padding-60-px" arrows={false}>
                        {data.popularTour.map((tour, index) => (
                            <div className="carouselItem" key={index}>
                                <div className="item">
                                    <div className="TabBox">
                                        <div className="img">
                                            <img src={tour.imgSrc} alt="" />
                                            {tour.discount && (
                                                <div className="discountrow">
                                                    <div className="discount">
                                                        <span>{tour.discount}</span>
                                                    </div>
                                                    <div className="wishlistIcon"></div>
                                                </div>
                                            )}
                                            <div className="imgBottomRow">
                                                <div className="lhs-text">
                                                    {tour.imgBottomRow && (
                                                        <span>{tour.imgBottomRow.lhsText}</span>
                                                    )}
                                                    <div className="lhstext">
                                                    <span>{tour.hastag}</span>
                                                    <span>{tour.hastagHeading}</span>
                                                  </div>
                                                </div>
                                                <div className="rhsimg">
                                                    {tour.imgBottomRow && (
                                                        <div>
                                                            <img src={tour.imgBottomRow.rhsimg} alt="" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="TabBoxBody">
                                            <h4>{tour.title}</h4>
                                            <p>{tour.description}</p>
                                            <div className="ReviewRow">
                                                <span className="location">{tour.location}</span>
                                            </div>
                                        </div>
                                        <div className="TabBoxFooter">
                                            <div className="aedLHS">
                                                <span>Starting from</span>
                                                <div className="aedtext">AED <strong>{tour.money}</strong> Per {tour.person} Person</div>
                                            </div>
                                            <div className="aedRHS">
                                                {tour.duration}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
    )
}

export default YouAlsoLike;

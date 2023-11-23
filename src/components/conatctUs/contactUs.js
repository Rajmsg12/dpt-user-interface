import React from 'react'
import InnerHeader from '../common/InnerHeader'
import Footer from '../common/Footer'
import Memories from '../common/memories'
import { Link } from 'react-router-dom'
import './style/contactUs.css'

const contactUs = () => {
    return (
        <div>
            <InnerHeader />
            <>
                <div
                    className="InnerBanner"
                    style={{ backgroundImage: "url(https://res.cloudinary.com/dqslvlm0d/image/upload/v1698737900/innerbanner_rnna6u.jpg)" }}
                >
                    <div className="container">
                        <h1>Contact Us</h1>
                    </div>
                </div>
                {/*InnerBanner*/}
                <div className="BreadcrumbSection">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Contact Us
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </>
            {/*Contact US */}
            <div className="contactUsPage">
                <div className="container">
                    <div className="ContactUsPageTop">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="aa-contact-box">
                                    <h4>Address</h4>
                                    <p>
                                        Dubai Private Tour / Milan Tours &amp; Tour Guide Services LLC.
                                        Office 117, Al Makhawi Building, Al Karama, Dubai, UAE, P.O.Box:
                                        120730
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="aa-contact-box">
                                    <h4>Contant no.</h4>
                                    <p>(+971) 55 955 4333 ,(+971) 4 3961 444</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="aa-contact-box">
                                    <h4>Email</h4>
                                    <p>info@milantoursdubai.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*ContactUsPageTop*/}
                    <div className="ContactUsPageForm">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="aa-contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8170889683192!2d55.30816007538336!3d25.243084977681445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d46fd3b0b9%3A0x1230d572ab5a629f!2sMilan%20Tours%20%26%20Tour%20Guide%20Services%20LLC!5e0!3m2!1sen!2sin!4v1700733602505!5m2!1sen!2sin"
                                        width={600}
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="aa-contact-form">
                                    <form className="form-part">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <input type="text" placeholder="Name" name="name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" placeholder="Email" name="email" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="tel" placeholder="Phone" name="phone" />
                                            </div>
                                            <div className="col-md-12">
                                                <textarea
                                                    placeholder="Message"
                                                    name="message"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="submitForm">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*ContactUsPageForm*/}
                </div>
                {/*container*/}
            </div>

            <Memories />
            <Footer />
        </div>
    )
}

export default contactUs

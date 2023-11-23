import React from 'react'
import InnerHeader from '../common/InnerHeader'
import Memories from '../common/memories'
import Footer from '../common/Footer'
import './style/about.css'
import { Link } from 'react-router-dom'

const about = () => {
    return (
        <div>
            <InnerHeader />
            <>
                <div
                    className="InnerBanner"
                    style={{ backgroundImage: "url(https://res.cloudinary.com/dqslvlm0d/image/upload/v1698737900/innerbanner_rnna6u.jpg)" }}
                >
                    <div className="container">
                        <h1>About Us</h1>
                    </div>
                </div>
                {/*InnerBanner*/}
                <div className="BreadcrumbSection">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="#">Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    About Us
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/*BreadcrumbSection*/}
                <div className="AboutUsPage">
                    <div className="container">
                        <div className="TopAboutUs">
                            <h2>About Us</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad corporis
                                atque pariatur harum est odit eos, ipsa quia delectus deleniti totam
                                reprehenderit facere veniam ullam? Obcaecati non accusamus illo totam.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad corporis
                                atque pariatur harum est odit eos, ipsa quia delectus deleniti totam
                                reprehenderit facere veniam ullam? Obcaecati non accusamus illo totam.
                            </p>
                        </div>
                        {/*TopAboutUs*/}
                        <div className="BottomAboutUs">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="AboutTextLhs">
                                        <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697696847/detailpagebanner_r14h3e.jpg"} className="img-fluid" alt="" />
                                    </div>
                                    {/*AboutTextLhs*/}
                                </div>
                                {/*col-lg-6*/}
                                <div className="col-lg-6">
                                    <div className="AboutTextRhs">
                                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Suscipit veniam labore provident ipsum, ad esse quasi, quod
                                            corporis tempora dolorum ab deserunt repudiandae! Error
                                            molestias animi voluptatem doloremque, explicabo vel. Lorem
                                            ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                                            veniam labore provident ipsum, ad esse quasi, quod corporis
                                            tempora dolorum ab deserunt repudiandae! Error molestias animi
                                            voluptatem doloremque, explicabo vel.
                                        </p>
                                    </div>
                                    {/*AboutTextRhs*/}
                                </div>
                                {/*col-lg-6*/}
                            </div>
                            {/*row*/}
                        </div>
                        {/*BottomAboutUs*/}
                    </div>
                    {/*container*/}
                </div>
            </>

            <Memories />
            <Footer />
        </div>
    )
}

export default about

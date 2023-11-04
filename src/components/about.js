import * as React from "react";
import { Layout } from "../layout/layout";
import '../assets/styles/conponents/about_us.scss'
import AboutCmpImage from '../assets/images/Screen-Shot-2020-07-08-at-5.02.09-PM.png'
import AboutRight from '../assets/images/adam-nowakowski.jpg'


export const About = () => {
    return (
        <Layout active={"about"}>
            <div className="about_us">
                <div className="about-main">
                    <div className="about-main-text w-100">
                        <div className="container">
                            <div className="row">
                                <h6 className="text-white pt-5">WHO WE ARE</h6>
                                <hr />
                                <div className="col-12">
                                    <div className="pt-5">
                                        <h3 className="text-white fnt-lg-65">Building on</h3>
                                        <h3 className="text-white fnt-lg-65">belief</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    {/* 03 */}
                    <div className="container">
                        <div className="row py-4 pb-md-5">
                            <div className="col-12 col-lg-6 d-md-none">
                                <div className="elementor-widget-wrap elementor-element-populated populated-image3">
                                    <div className="elementor-background-overlay"></div>
                                    <div className="elementor-image-box-content text-center w-75">
                                        <h1 className="text-white">About</h1>
                                        {/* <p className="text-white">Improving the Accuracy and Timeliness of Payments</p> */}
                                    </div>
                                </div>
                            </div>

                            <div className=" col-12 col-lg-6 py-3">
                                <h1 className="fnt-36 fnt-md-45 fnt-lg-60 fw-100">About US</h1>
                                <hr />
                                <div className="elementor-widget-container">
                                    <p className="">We are in our structured growth. Morbags brings to our clients over 1 decades of IT and non-IT workforce solution experience.
                                        We leverage our outsourcing expertise to deliver high-end consulting services for various engagements.
                                        We are well known for our strategic processes and client partnering methodology. We specialize in recruiting talent for startups and established commercial organizations.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-none d-lg-block">
                                <div className="elementor-widget-wrap elementor-element-populated populated-image3">
                                    <div className="elementor-background-overlay"></div>
                                    {/* <div className="elementor-image-box-content text-center w-75">
                                        <h1 className="elementor-image-box-title text-white">Web Design &amp; Development</h1>
                                        <p className="elementor-image-box-description text-white">Improving the Accuracy and Timeliness of Payments</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="pt-5">
                                <h3 className="fnt-lg-32">Building greater futures through innovation and collective knowledge</h3>
                                <p className="">We are in our structured growth. Morbags brings to our clients over 1 decades of IT and non-IT workforce solution experience. We leverage our outsourcing expertise to deliver high-end consulting services for various engagements. We are well known for our strategic processes and client partnering methodology. We specialize in recruiting talent for startups and established commercial organizations.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="pt-5">
                                <img className="img-fluid" src={AboutRight} alt="AboutRight" />
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>

        </Layout>
    )
}


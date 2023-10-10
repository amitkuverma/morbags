import React, { useState } from "react";
import { Layout } from "../layout/layout";
import emailjs from 'emailjs-com';
import Cart from '../assets/images/contact.png'
import { Link } from "react-router-dom";

export const Contact = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        // check if all required fields are filled in
        if (!e.target.name.value || !e.target.email.value || !e.target.message.value) {
            if (!e.target.name.value) {
                setErrorName("Please enter your name.");
            } else {
                setErrorName("");
            }
            if (!e.target.email.value) {
                setErrorEmail("Please enter your email address.");
            } else {
                setErrorEmail("");
            }
            if (!e.target.message.value) {
                setErrorMessage("Please enter a message.");
            } else {
                setErrorMessage("");
            }
            return;
        }

        // https://www.emailjs.com/ for params
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        emailjs.sendForm('service_t6u6ogd', 'template_pohljbk', e.target, 'Tbv1CejqNwXHt_8nF')
            .then((result) => {
                console.log('Email sent successfully:', result);
                setEmailSuccess(result.text)
                openModal();
                e.target.reset();
            }, (error) => {
                console.error('Email send error:', error.text);
            });

    };
    return (
        <Layout active={"contact"}>
            <div className="contact">
                <div className="contact-main p-5">
                    <div className="container">
                        <div className="fnt-34 fnt-lg-65 fnt-md-54 fw-900 text-white">Contact Morbags</div>
                        <p className="text-white fnt-18 fnt-md-24">We appreciate your interest in Morbags.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="fnt-md-45 fnt-24 fw-bold">General Inquiries</div>
                    <div className="row">
                        <div className="col-12 col-md-6 pt-3 pt-md-4">
                            {/* <img className="img-fluid" src={Cart} alt="Cart" /> */}
                            <div className="p-4">
                                <h4 className="ps-3">LET'S START SOMETHING TOGETHER!</h4>
                                <ul>
                                    <li>Please feel free to contact us if you have questions or would like to find out more information about our services:
                                        <ul>
                                            <li>EHR Implementation &amp; Optimization</li>
                                            <li>Payer IT &amp; Business Operations Support</li>
                                            <li>Real-Time Location Services (RTLS)</li>
                                            <li>Revenue Recovery Services</li>
                                            <li>and <strong><Link to="/service">so much more!</Link></strong></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-12 col-md-6 bg-clref py-4 px-3 py-md-5 px-md-4 contect-form">
                            <h1 className="py-3 py-md-4 fw-900">For specific questions, get in touch below</h1>
                            <p>Thank you for your interest in Morebags's services. Please provide the following information about your business needs to help us serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within one to two business days.</p>
                            <p>All fields are required when completing this form.</p>
                            <form onSubmit={sendEmail}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Name <span className="star">*</span></label>
                                    <input type="text" name="name" className="form-control fw-bold" placeholder="Recipient Name" />
                                    <p>{errorName}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Email <span className="star">*</span></label>
                                    <input type="email" name="email" className="form-control fw-bold" placeholder="Recipient Email" />
                                    <p>{errorEmail}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Subject</label>
                                    <input type="text" name="subject" className="form-control fw-bold" placeholder="Subject" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Message</label>
                                    <textarea name="message" rows={8} className="form-control fw-bold" placeholder="Message" />
                                    <p>{errorMessage}</p>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="px-5 py-0 mt-3 btn-cmp btn-send border-0 bg-transparent text-uppercase"><span class="btn-cmp__text">Send</span></button>
                                </div>
                            </form>
                        </div>

                        <div className="col-12 py-4 px-lg-0">
                            <h2>LOOKING FOR YOUR NEXT CAREER?</h2>
                            <p>Morbags provides experts in area of operations and information technology management consulting services, specifically for the healthcare industry. Our firm delivers “Subject Matter Experts” when it comes to healthcare business needs. We are committed to helping Health Plans, Hospitals and Integrated Delivery Systems, reduce cost. Morbags hires only the very best; experienced in assisting healthcare organizations with improving the effectiveness of their operations and information technology infrastructures.</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`modal fade ${isModalOpen ? 'show' : ''}`}
                    id="exampleModalCenter"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden={!isModalOpen}
                    style={{ display: isModalOpen ? 'block' : 'none' }}
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">
                                    Email sent successfully!
                                </h5>
                            </div>
                            <div className="modal-body">
                                <h2 className="text-uppercase text-center">Thank you</h2>
                                <p className="text-center">We sent your email! An expert will be in touch soon.</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="fnt-14 py-1 px-4 text-uppercase"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

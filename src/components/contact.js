import React, { useState } from "react";
import { Layout } from "../layout/layout"
import emailjs from 'emailjs-com';
import ContactImage from '../assets/images/Contact-ua.png'
import '../assets/styles/conponents/contact_us.scss';
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
                <section class="main-hero position-relative">
                    <div class="background-image-wrapper">
                        <picture> <img class="lozad" src={ContactImage} alt="" /> </picture>
                    </div>
                    <div class="overlay-dark-sky"></div>
                    <div class="container position-relative">
                        <div class="mx-auto text-center">
                            <h1 class="text-white mb-0">Contact Morbags</h1>
                            <p className="text-white fnt-18 fnt-md-24">We appreciate your interest in Morbags.</p>
                        </div>
                    </div>
                </section>
                <div className="contact-section pb-4">
                    <div className="container">
                        <h1 className="text-center pt-4 pb-3 fw-bold text-uppercase">Ask Any Question</h1>
                        <div className="py-4 px-3 py-md-5 px-md-5 contact-area">
                            <h1 className="py-3 py-md-4 fw-900">For specific questions, get in touch below</h1>
                            <p>Thank you for your interest in Morebags's services. Please provide the following information about your business needs to help us serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within one to two business days.</p>
                            <p>All fields are required when completing this form.</p>
                            <form onSubmit={sendEmail}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Name <span className="star">*</span></label>
                                    <input type="text" name="name" className="form-control fw-bold" placeholder="Recipient Name" />
                                    <p className="star">{errorName}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Email <span className="star">*</span></label>
                                    <input type="email" name="email" className="form-control fw-bold" placeholder="Recipient Email" />
                                    <p className="star">{errorEmail}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Subject</label>
                                    <input type="text" name="subject" className="form-control fw-bold" placeholder="Subject" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Message</label>
                                    <textarea name="message" rows={8} className="form-control fw-bold" placeholder="Message" />
                                    <p className="star">{errorMessage}</p>
                                </div>
                                <div className="d-flex justify-content-center pb-5">
                                    <button type="submit" className="px-5 py-0 mt-3 btn-cmp btn-send border-0 bg-transparent text-uppercase"><span className="btn-cmp__text">Send</span></button>
                                </div>
                            </form>
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

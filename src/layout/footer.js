import React from 'react';
import "../assets/styles/layout/footer.scss";
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
      {/* <div className='footer-sec bg-white'>
        <div className='container py-4 py-md-5'>
          <div className='row pt-5'>
            <div className='col-12 col-lg-6 pb-4 pb-lg-0 text-center'>
              <Link to={"/"} className="navbar-brand pointer logo">
                <img className='img-fluid' src={logo} alt='logo' />
                <span className='fnt-24 fnt-md-36 fw-900 fnt-fly text-uppercase footer-text'>Mor<span className="txt-clr95">bag</span>s Private Limited</span>
              </Link>
            </div>
            <div className='col-12 col-lg-6'>
              <h4 className='fnt-18 fnt-fly fw-900 text-uppercase pb-2 txt-clr67 line'>Morebags </h4>

              <p className="contact_detail mb-0">
                <a className='text-decoration-none' href="mailto:mailto:info@morbags.com">
                  <i className="fa fa-envelope"></i>
                </a>
                <span>
                  <a className='text-decoration-none add-text ps-2' href="mailto:info@morbags.com">info@morebags.com</a>
                </span>
              </p>
              <p className="contact_detail mb-0">
                <i className="fa fa-location-arrow txt-clr67"></i>
                <span><a className='text-decoration-none add-text ps-2' href="https://www.google.com/maps/place/" target="_blank">78, Landmark Lane Fairlawn, NJ 07410</a></span>
              </p>
            </div>
          </div>
        </div>
      </div> */}


      <div className='bg-dark p-4'>
        <div className='col-12 col-lg-6 pb-5 pt-3 px-2'>
          <Link to={"/"} className="navbar-brand pointer logo">
            <img className='img-fluid' src={logo} alt='logo' width={60} />
            <span className='fnt-24 fnt-md-36 fw-900 fnt-fly text-uppercase text-white footer-text'>Mor<span className="">bag</span>s Private Limited</span>
          </Link>
        </div>
        <hr className="text-white" />
        <div class="row mx-0 justify-content-between pt-5 pb-3">
          <div className='col-12 col-md-8 d-flex justify-content-between'>
            <Link class="text-white text-uppercase fw-100" routerLink=""> ABOUT US
            </Link>
            <Link class="text-white text-uppercase fw-100" routerLink="">
              Services
            </Link>
            <Link class="text-white text-uppercase fw-100" routerLink="">
              Payers
            </Link>
            <Link class="text-white text-uppercase fw-100" routerLink="">
              CONTACT US
            </Link>
          </div>

          <div class="col-12 col-md-4 text-end">
            <p class="text-white">
              social media.
            </p>
          </div>
        </div>
        <hr className="text-white" />
        <div class="row mx-0 justify-content-between">
          <div className='col-12 col-md-8 d-flex justify-content-between'>
            <Link class="text-white text-decoration-none" routerLink=""> Privcy Sttement
            </Link>
            <Link class="text-white text-decoration-none" routerLink="">
              Terms &amp; Conditions
            </Link>
            <Link class="text-white text-decoration-none" routerLink="">
              Cookie Policy/Settings
            </Link>
            <Link class="text-white text-decoration-none" routerLink="">
              Accessibility Statement
            </Link>

            <Link class="text-white text-decoration-none" routerLink="">
              Sitemap
            </Link>
          </div>

          <div class="col-12 col-md-4 text-end">
            <p class="text-white">
              &#169; 2023 Morbags. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

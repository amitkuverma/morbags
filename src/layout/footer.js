import React from 'react';
import "../assets/styles/layout/footer.scss";
import logo from "../assets/images/logor.png"
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='bg-dark p-4'>
        <div className='col-12 col-lg-6 pb-5 pt-3 px-2'>
          <Link to={"/"} className="navbar-brand pointer logo d-flex align-items-center">
            <img className='img-fluid' src={logo} alt='logo' width={60} />
            <span className='fnt-24 fnt-md-36 fw-900 fnt-fly text-uppercase txt-clra7 footer-text ms-2'>Mor<span className="">bag</span>s</span>
          </Link>
        </div>
        <hr className="txt-clra7" />
        <div class="row mx-0 justify-content-between align-items-center pt-5 pb-3">
          <div className='col-12 col-md-8 row mb-3'>
            <div className='col-4 col-md-3 my-4'>
              <Link class="txt-clra7 text-uppercase fw-100 " routerLink=""> 
                ABOUT US
              </Link>
            </div>
            <div className='col-4 col-md-3 my-4'>
              <Link class="txt-clra7 text-uppercase fw-100 " routerLink="">
                Services
              </Link>
            </div>
            <div className='col-4 col-md-3 my-4'>
              <Link class="txt-clra7 text-uppercase fw-100 " routerLink="">
                Payers
              </Link>
            </div>
            <div className='col-4 col-md-3 my-4'>
              <Link class="txt-clra7 text-uppercase fw-100 " routerLink="">
                CONTACT
              </Link>
            </div>
          </div>
          {/* <div className='d-md-none w-100 mt-4 mb-5'>
            <Link class="txt-clra7 text-uppercase fw-100" routerLink="">
              CONTACT US
            </Link>
          </div> */}

          <div class="col-12 col-md-4 text-end d-flex justify-content-between px-5">
            <div class="">
              <Link className='linkedIn fa-icon'></Link>
            </div>
            <div class="">
              <Link class="facebook fa-icon"></Link>
            </div>
            <div class="">
              <Link class="instagram fa-icon"></Link>
            </div>
            <div class="">
              <Link class="whatsapp fa-icon"></Link>
            </div>
          </div>
        </div>
        <hr className="txt-clra7" />
        <div class="row mx-0 justify-content-between pt-md-3">
          <div className='col-12 col-md-8 d-md-flex justify-content-between'>
            <Link class="txt-clra7 fnt-11 pe-4" routerLink=""> Privcy Sttement
            </Link>
            <Link class="txt-clra7 fnt-11 pe-4" routerLink="">
              Terms &amp; Conditions
            </Link>
            <Link class="txt-clra7 fnt-11 pe-4" routerLink="">
              Cookie Policy/Settings
            </Link>
            <Link class="txt-clra7 fnt-11 pe-4" routerLink="">
              Accessibility Statement
            </Link>
            <Link class="txt-clra7 fnt-11 pe-4" routerLink="">
              Sitemap
            </Link>
          </div>

          <div class="col-12 col-md-4 text-md-end">
            <p class="txt-clra7 fnt-11 fw-100 pt-4 pt-md-0">
              &#169; 2023 Morbags. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

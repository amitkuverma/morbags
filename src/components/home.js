  import React from 'react'
  import { Layout } from '../layout/layout';
  import { Link } from 'react-router-dom';
  import '../assets/styles/conponents/home.scss'
  import Sap from '../assets/images/sap.jpeg';
  import Scraping from '../assets/images/medical-to.jpg';
  import Web_Development from '../assets/images/web-development.jpg';
  import Digital_Marketing from '../assets/images/digital-marketing.jpg';
  import Training from '../assets/images/traning.jpg';
  import Medical from '../assets/images/Screen-Shot-2020-07-08-at-5.02.09-PM.png';
  import Market_video from '../assets/videos/market.mp4';
  import Medical_video from '../assets/videos/medical.mp4';
  import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
  import { Carousel } from 'react-responsive-carousel';


  export const Home = () => {
    return (
      <Layout active={"home"}>
        <div className='hero mb-5'>
          <Carousel showThumbs={false} className='carousel-cust'>
            <div className='main'>
              <img className='w-auto' src={Sap} alt='sap' />

              <div className='overlay'></div>
              <div className='main-text'>
                <div className='fnt-md-36 fw-bold text-white text-uppercase'>SAP (Think SAP, Think Morbags)</div>
                <p className='text-white'>Taking Care of Patients</p>
                <Link to={"/service"} className='fnt-fly btn_cmp mt-2 mt-md-3 mt-md-4 px-md-5 text-decoration-none link-btn'><span className='btn-cmp__text'>Read More</span></Link>
              </div>
            </div>
            <div className='main'>
              <div class="image-container">
                <img className='img-fluid' src={Scraping} alt='Scraping' />
              </div>
              <div className='overlay'></div>
              <div className='main-text'>
                <div className='fnt-md-36 fw-bold text-white text-uppercase'>Data Scraping & Web Scraping</div>
                <p className='text-white'>Maximize Your Bottom-Line</p>
                <Link to={"/service"} className='fnt-fly btn_cmp mt-2 mt-md-3 mt-md-4 px-md-5 text-decoration-none link-btn'><span className='btn-cmp__text'>Read More</span></Link>
              </div>
            </div>
            <div className='main'>
              <div class="image-container">
                <img className='img-fluid' src={Web_Development} alt='Web_Development' />
              </div>
              <div className='overlay'></div>
              <div className='main-text'>
                <div className='fnt-md-36 fw-bold text-white text-uppercase'>Web Design & Development</div>
                <p className='text-white'>Maximize Your Bottom-Line</p>
                <Link to={"/service"} className='fnt-fly btn_cmp mt-2 mt-md-3 mt-md-4 px-md-5 text-decoration-none link-btn'><span className='btn-cmp__text'>Read More</span></Link>
              </div>
            </div>
            <div className='main'>
              <div class="image-container">
                {/* <video autoPlay src={Medical_video} ></video> */}
                <img className='img-fluid' src={Digital_Marketing} alt='Digital_Marketing' />
              </div>
              <div className='overlay'></div>
              <div className='main-text'>
                <div className='fnt-md-36 fw-bold text-white text-uppercase'>Digital Marketing</div>
                <p className='text-white'>Maximize Your Bottom-Line</p>
                <Link to={"/service"} className='fnt-fly btn_cmp mt-2 mt-md-3 mt-md-4 px-md-5 text-decoration-none link-btn'><span className='btn-cmp__text'>Read More</span></Link>
              </div>
            </div>
            <div className='main'>
              <div class="image-container">
                <img className='img-fluid' src={Training} alt='Web Training' />
              </div>

              <div className='overlay'></div>
              <div className='main-text'>
                <div className='fnt-md-36 fw-bold text-white text-uppercase'>Training</div>
                <p className='text-white'>Maximize Your Bottom-Line</p>
                <Link to={"/service"} className='fnt-fly btn_cmp mt-2 mt-md-3 mt-md-4 px-md-5 text-decoration-none link-btn'><span className='btn-cmp__text'>Read More</span></Link>
              </div>
            </div>
            <div className='main'>              
              <img className='img-fluid' src={Medical} alt='Medical' />
              <div className='overlay'></div>
              <div className='main-text'>
                <div className='fnt-md-36 fw-bold text-white text-uppercase'>Medical Tourism</div>
                <p className='text-white'>Recover Every Dollar</p>
                <Link to={"/service"} className='fnt-fly btn_cmp mt-2 mt-md-3 mt-md-4 px-md-5 text-decoration-none link-btn'><span className='btn-cmp__text'>Read More</span></Link>
              </div>
            </div>
          </Carousel>
          <section>
            {/* 01 */}
            <div className="container">
              <div className="row py-4 pb-md-5">
                <div className="col-12 col-lg-6 d-md-none">
                  <div className="elementor-widget-wrap elementor-element-populated populated-image1">
                    <div className="elementor-background-overlay"></div>
                    <div className="elementor-image-box-content text-center w-75">
                      <h1 className="text-white">SAP</h1>
                      <p className="text-white">Think SAP , Think Morbags</p>
                    </div>
                  </div>
                </div>

                <div className=" col-12 col-lg-6 py-3">
                  <h1 className="fnt-36 fnt-md-45 fnt-lg-60 fw-100">01</h1>
                  {/* <h2 className="fw-900 fnt-22 fnt-md-24 fnt-fly text-uppercase">SAP -- Think SAP , Think Morbags</h2> */}
                  <hr />
                  <div className="elementor-widget-container">
                    <p>SAP is a term used to refer to a new approach to implementing SAP systems, particularly the S/4HANA suite.</p>
                    <p>Traditionally, SAP systems have been customized to meet the specific needs of individual customers, resulting in
                      complex and often difficult-to-maintain software landscapes. With the introduction of SAP S/4HANA, SAP has emphasized
                      the importance of adopting a standard approach to implementing the software, known as a "clean core" approach.</p>
                    <p className="">The clean core approach involves using the standard functionality of the SAP software as much as possible,
                      rather than customizing it to fit specific business requirements. This allows for a simpler, more streamlined implementation process,
                      with fewer complex customizations and a reduced risk of compatibility issues when upgrading to newer versions of the software.</p>
                    <p>Choosing among SAP consulting and implementation companies to set up effective SAP processes for your business can be a daunting task.
                      It is important to pick the right SAP implementation partner that offers a broad range of services and can provide the right expertise to match the needs of your business.
                      SAP itself partners with numerous companies of different sizes across industry verticals, and each company offers different types and combinations of SAP-related services.
                      That is where the complexity of choice comes from, and that is where you would require a list of SAP implementation companies. </p>

                    <p className="">Today, we are going to take a look at the top SAP implementation partners who provide a broad range of SAP services, rather than particular aspects of SAP implementation. Also, we will focus on the companies that do not
                      engage exclusively in SAP-related services and can perform supplementary tasks utilizing a wider range of tools to further boost the capabilities of your ERP and CRM or other enterprise solutions like OpenText, etc</p>
                  </div>
                  <div className="d-flex pb-5">
                    <Link to="/contact" className="px-5 py-0 mt-3 btn-cmp btn-send border-0 bg-transparent text-uppercase"><span className="btn-cmp__text">Get start</span></Link>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-none d-lg-block">
                  <div className="elementor-widget-wrap elementor-element-populated populated-image1">
                    <div className="elementor-background-overlay"></div>
                    <div className="elementor-image-box-content text-center w-75">
                      <h1 className="elementor-image-box-title text-white">SAP</h1>
                      <p className="elementor-image-box-description text-white">Think SAP , Think Morbags</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
          <section>
            {/* 02 */}
            <div className="bg-dark">
              <div className="container">
                <div className="row py-4 py-md-5">
                  <div className="col-12 col-lg-6">
                    <div className="elementor-widget-wrap elementor-element-populated populated-image2">
                      <div className="elementor-background-overlay"></div>
                      <div className="elementor-image-box-content text-center w-75">
                        <h1 className="elementor-image-box-title text-white">Data Scraping &amp; Web Scraping</h1>
                        {/* <p className="elementor-image-box-description text-white">Technology Enablement and Automation</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="service_column col-12 col-lg-6">
                    <h1 className="text-white fnt-36 fnt-md-45 fnt-lg-60 fw-100">02</h1>
                    {/* <h2 className="fw-900 fnt-22 fnt-md-24 fnt-fly text-uppercase text-white">Data Scraping and Web Scraping</h2> */}
                    <hr className="text-white" />
                    <div className="elementor-widget-container">
                      <h3 className='text-white'>Data scraping services</h3>
                      <p className="text-white">Need quick and ready-to-use data scraped from thousands of web sources? Our web scraping services can help!
                        As a leading data scraping company, our team is well-versed in extracting data (files, text, images, etc.)
                        from multiple online sources in a quick turnaround time. We use industry-best APIs like Scraperapi, ready-made scripts,
                        customized scripts (developed by our in-house team), crawlers, and manual techniques to extract raw data from the web and turn it into
                        well-structured data, making it actionable and easy for analysis.</p>
                      <p className="text-white">Depending on your business requirements, our web data scraping services help you identify, extract, clean, filter,
                        and standardize data and deliver it to you in your desired format, ensuring accurate, error-proof results. Whether you need data for lead generation,
                        price monitoring, competitor analysis, or research, our services can meet your custom goals and provide you accurate dataset as per your use case.</p>
                      <p className="text-white">Our web scraping company comprises of specialists that can help you overcome data extraction challenges:</p>
                      <ul>
                        <li className="text-white">Our data scraping service offerings</li>
                        <li className="text-white">E-Commerce price  &amp; product data scraping</li>
                        <li className="text-white">Financial data scraping</li>
                        <li className="text-white">Real estate data scraping</li>
                        <li className="text-white">Social media data scraping</li>
                        <li className="text-white">Data scraping for recruitment companies</li>
                        <li className="text-white">Healthcare data scraping</li>
                        <li className="text-white">Sales &amp; marketing data scraping</li>
                        <li className="text-white">Travel &amp; hospitality data scraping</li>
                      </ul>
                    </div>
                    <div className="d-flex pb-5">
                      <Link to="/contact" className="px-5 py-0 mt-3 btn-cmp btn-send border-0 bg-transparent text-uppercase"><span className="btn-cmp__text">Get start</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            {/* 03 */}
            <div className="container">
              <div className="row py-4 pb-md-5">
                <div className="col-12 col-lg-6 d-md-none">
                  <div className="elementor-widget-wrap elementor-element-populated populated-image3">
                    <div className="elementor-background-overlay"></div>
                    <div className="elementor-image-box-content text-center w-75">
                      <h1 className="text-white">Web Design &amp; Development</h1>
                      {/* <p className="text-white">Improving the Accuracy and Timeliness of Payments</p> */}
                    </div>
                  </div>
                </div>

                <div className=" col-12 col-lg-6 py-3">
                  <h1 className="fnt-36 fnt-md-45 fnt-lg-60 fw-100">03</h1>
                  {/* <h2>Web Design &amp; Development</h2> */}
                  <hr />
                  <div className="elementor-widget-container">
                    <p className="">We focus on The prime role of a web developer is to craft a well-structured website for a business.
                      A website is a digital face of any venture, and it needs to be highly-competitive, SEO-friendly, and attractive from all angles.</p>

                    <p>Developing creative website layout interfaces by implementing standard CSS/HTML practices
                      Designing, developing, and deploying web applications
                      Assisting clients in the maintenance and upkeep of websites
                      Identifying, fixing, and troubleshooting bugs and other emerging issues
                      Using software development ethics to write well-designed and testable codes
                      Correlating data from multiple backend services and databases
                      Inculcating & refining specifications based on technical needs
                      Accountable for maintaining, and scaling websites
                      Collaborating with web designers for a better match visual design intent</p>

                  </div>
                  <div className="d-flex pb-5">
                    <Link to="/contact" className="px-5 py-0 mt-3 btn-cmp btn-send border-0 bg-transparent text-uppercase"><span className="btn-cmp__text">Get start</span></Link>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-none d-lg-block">
                  <div className="elementor-widget-wrap elementor-element-populated populated-image3">
                    <div className="elementor-background-overlay"></div>
                    <div className="elementor-image-box-content text-center w-75">
                      <h1 className="elementor-image-box-title text-white">Web Design &amp; Development</h1>
                      {/* <p className="elementor-image-box-description text-white">Improving the Accuracy and Timeliness of Payments</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            {/* 04 */}
            <div className="bg-dark">
              <div className="container">
                <div className="row py-4 py-md-5">
                  <div className="col-12 col-lg-6">
                    <div className="elementor-widget-wrap elementor-element-populated populated-image4">
                      <div className="elementor-background-overlay"></div>
                      <div className="elementor-image-box-content text-center w-75">
                        <h1 className="elementor-image-box-title text-white">Digital Marketing</h1>
                        {/* <p className="elementor-image-box-description text-white">Technology Enablement and Automation</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="service_column col-12 col-lg-6">
                    <h1 className="text-white fnt-36 fnt-md-45 fnt-lg-60 fw-100">04</h1>
                    <hr className="text-white" />
                    <div className="elementor-widget-container">
                      <h3 className='text-white'>Data scraping services</h3>
                      <p className="text-white">As a Digital Marketer we try to cater although the ultimate criteria to evaluate any business initiative should be its return on investment or any other
                        financial metrics in general, the evaluation criteria and metrics for the digital marketing campaigns can be discussed in more details.
                        The criteria and metrics can be classified according to its type and time span. Regarding the type, we can either evaluate these campaigns "Quantitatively"
                        or "Qualitatively". Quantitative metrics may include "Sales Volume" and "Revenue Increase/Decrease". While qualitative metrics may include the enhanced
                        "Brand awareness, image and health" as well as the "relationship with the customers".</p>
                      <p className="text-white">Shifting the focus to the time span, we may need to measure some "Interim Metrics",
                        which give us some insight during the journey itself, as well as we need to measure some "Final Metrics" at the end of the journey to inform users
                        if the overall initiative was successful or not. As an example, most of the social media metrics and indicators such as likes, shares and engagement comments may
                        be classified as interim metrics while the final increase/decrease in sales volume is clearly from the final category...</p>
                      <p className="text-white">One can publish the content with ease on the website as it understands the documentation effortlessly. Web Info Light is the website design
                        and development company which delivers high-quality websites using WordPress. Users can keep the website updated by editing all the latest information and content along
                        with the images. Websites which are made by using this platform are user-friendly
                        and thus can be used by anybody comfortably. The company designs effective websites which match the requirements of clients.</p>
                    </div>
                    <div className="d-flex pb-5">
                      <Link to="/contact" className="px-5 py-0 mt-3 btn-cmp btn-send border-0 bg-transparent text-uppercase"><span className="btn-cmp__text">Get start</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            {/* 05 */}
            <div className="container">
              <div className="row py-4 pb-md-5">
                <div className="col-12 col-lg-6 d-md-none">
                  <div className="elementor-widget-wrap elementor-element-populated populated-image5">
                    <div className="elementor-background-overlay"></div>
                    <div className="elementor-image-box-content text-center w-75">
                      <h1 className="text-white">Training</h1>
                      <p className="text-white">Vision and Mission</p>
                    </div>
                  </div>
                </div>

                <div className=" col-12 col-lg-6 py-3">
                  <h1 className="fnt-36 fnt-md-45 fnt-lg-60 fw-100">05</h1>
                  {/* <h2>Web Design &amp; Development</h2> */}
                  <hr />
                  <div className="elementor-widget-container">
                    <p className="">To enrich the knowledge & skill sets of young software engineers by providing value added training in the areas of Software Development & Testing.</p>
                    <p>To serve the industries by providing trained human resources in the above areas.</p>
                    <p>To provide quality Software Training & Consulting Services in the areas of  .NET, Data Science ,React JS, Testing, Content Management with Live Projects.</p>
                    <p>Morbags is offering Online Software Training using its vast Technology Expertise and Training Delivery Methodology for the benefit of the student community in transforming their dreams from a wandering generality to specific reality.
                      Our sole maxim in introducing Online Software Training sessions to cater the training requirements of the Software Aspirants .</p>
                  </div>
                  <div className="d-flex pb-5">
                    <Link to="/contact" className="px-5 py-0 mt-3 btn-cmp btn-send border-0 bg-transparent text-uppercase"><span className="btn-cmp__text">Get start</span></Link>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-none d-lg-block">
                  <div className="elementor-widget-wrap elementor-element-populated populated-image5">
                    <div className="elementor-background-overlay"></div>
                    <div className="elementor-image-box-content text-center w-75">
                      <h1 className="elementor-image-box-title text-white">Training</h1>
                      <p className="elementor-image-box-description text-white">Vision and Mission</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            {/* 06 */}
            <div className="bg-dark">
              <div className="container">
                <div className="row py-4 py-md-5">
                  <div className="col-12 col-lg-6">
                    <div className="elementor-widget-wrap elementor-element-populated populated-image6">
                      <div className="elementor-background-overlay"></div>
                      <div className="elementor-image-box-content text-center w-75">
                        <h1 className="elementor-image-box-title text-white">Medical Tourism</h1>
                      </div>
                    </div>
                  </div>
                  <div className="service_column col-12 col-lg-6">
                    <h1 className="text-white fnt-36 fnt-md-45 fnt-lg-60 fw-100">06</h1>
                    <hr className="text-white" />
                    <div className="elementor-widget-container">
                      {/* <h3 className='text-white'>Data scraping services</h3> */}
                      <p className="text-white"><b>1.</b> The global growth in the flow of patients and health professionals as well as medical technology,
                        capital funding and regulatory regimes across national borders has given rise to new patterns of
                        consumption and production of healthcare services over recent decades. A significant new element of a
                        growing trade in healthcare has involved the movement of patients across borders in the pursuit of medical
                        treatment and health; a phenomenon commonly termed ‗medical tourism‘. Medical tourism occurs when
                        consumers elect to travel across international borders with the intention of receiving some form of medical
                        treatment. This treatment may span the full range of medical services, but most commonly includes dental
                        care, cosmetic surgery, elective surgery, and fertility treatment. There has been a shift towards patients
                        from richer, more developed nations travelling to less developed countries to access health services, largely
                        driven by the low-cost treatments available in the latter and helped by cheap flights and internet sources of
                        information.</p>
                      <p className="text-white"><b>2.</b> Despite high-profile media interest and coverage, there is a lack of hard research evidence on the
                        role and impact of medical tourism for OECD countries. Whilst there is an increasing amount written on
                        the subject of medical tourism, such material is hardly ever evidence-based. Medical tourism introduces a
                        range of attendant risks and opportunities for patients. This review identifies the key emerging policy
                        issues relating to the rise of ‗medical tourism‘.</p>
                      <p className="text-white"><b>3.</b> The review details what is currently known about the flow of medical tourists between countries
                        and discusses the interaction of the demand for, and supply of, medical tourism services. It highlights the
                        different organisations and groups involved in the industry, including the range of intermediaries and
                        ancillary services that have grown up to service the industry. Treatment processes (including consideration
                        of quality, safety and risk) and system-level implications for countries of origin and destination (financial
                        issues; equity; and the impact on providers and professionals of medical tourism) are highlighted. The
                        review examines harm, liability and redress in medical tourism services with a particular focus on the
                        legal, ethical and quality-of-care considerations.</p>
                      <p className="text-white"><b>4.</b> In light of this, our broad review outlines key health policy considerations, and draws attention to
                        significant gaps in the research evidence. The central conclusion from this review is that there is a lack of
                        systematic data concerning health services trade, both overall and at a disaggregated level in terms of
                        individual modes of delivery, and of specific countries. This is both in terms of the trade itself, as well as
                        its implications. Mechanisms are needed that help us track the balance of trade around medical tourism on
                        a regular basis. The evidence base is scant to enable us to assess who benefits and who loses out at the
                        level of system, programme, organisation and treatment.</p>
                    </div>
                    <div className="d-flex pb-5">
                      <Link to="/contact" className="px-5 py-0 mt-3 btn-cmp btn-send border-0 bg-transparent text-uppercase"><span className="btn-cmp__text">Get start</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }

import * as React from "react";
import { Layout } from "../layout/layout";
import '../assets/styles/conponents/client.scss';
import OurClientImg from "../assets/images/Clients_b.jpg";

export const OurClients = () => {
    return (
        <Layout active={"clients"}>
            <section class="main-hero position-relative">
                <div class="background-image-wrapper">
                    <picture> <img class="lozad" src={OurClientImg} alt="" /> </picture>
                </div>
                <div class="overlay-dark-sky"></div>
                <div class="container position-relative">
                    <div class="mx-auto text-center">
                        <h1 class="text-white mb-0">Our Clients</h1>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="pt-5 pb-4">
                    <p>A true partnership is a two-way street — ideas and information flow openly and regularly,
                        based on a foundation of mutual trust and respect for one another’s expertise — and our clients embrace this philosophy.
                    </p>
                    <p>The best and most productive relationships are synergistic and goal-oriented, and a long-term
                        relationship has the value add of deep-rooted industry and company knowledge and relationships.</p>
                    <p>Our client list speaks for itself. Since our earliest days, we’ve represented everything from start-ups to
                        Fortune 500 companies with that same partnership approach and dedication at the core of every engagement.
                        Every day, since 1996, we’ve been devoting our hearts and minds to our clients, achieving great successes
                        and building lasting relationships.
                    </p>
                </div>
                <hr />

            </div>
            <section>
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-uppercase fw-bold">Here is a sample of our current and past clients</h2>
                    </div>
                    <div className="mt-4 py-3">
                        <div className="row">
                            <div className="partners">
                                <div className="partners-card position-relative">
                                    <div className="partners-card__image-wrapper">
                                        <figure class="mx-0 my-0"> <img class="lozad" src="https://www.thecastlegrp.com/wp-content/uploads/2022/06/Google_Logo.jpg" data-src="https://www.thecastlegrp.com/wp-content/uploads/2022/06/Google_Logo.jpg" alt="" data-loaded="true" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="partners">
                                <div className="partners-card position-relative">
                                    <div className="partners-card__image-wrapper">
                                        <figure class="mx-0 my-0"> <img class="lozad" src="https://www.thecastlegrp.com/wp-content/uploads/2022/06/GradGuard_Logo.png" data-src="https://www.thecastlegrp.com/wp-content/uploads/2022/06/GradGuard_Logo.png" alt="" data-loaded="true" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="partners">
                                <div className="partners-card position-relative">
                                    <div className="partners-card__image-wrapper">
                                        <figure className="mx-0 my-0">
                                            <img className="lozad" src="https://www.thecastlegrp.com/wp-content/uploads/2023/01/ALKU-logo.png" data-src="https://www.thecastlegrp.com/wp-content/uploads/2023/01/ALKU-logo.png" alt="" data-loaded="true" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="partners">
                                <div className="partners-card position-relative">
                                    <div className="partners-card__image-wrapper">
                                        <figure class="mx-0 my-0"> <img class="lozad" src="https://www.thecastlegrp.com/wp-content/uploads/2022/06/Dell_Logo-1.png" data-src="https://www.thecastlegrp.com/wp-content/uploads/2022/06/Dell_Logo-1.png" alt="" data-loaded="true" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="partners">
                                <div className="partners-card position-relative">
                                    <div className="partners-card__image-wrapper">
                                        <figure class="mx-0 my-0"> <img class="lozad" src="https://www.thecastlegrp.com/wp-content/uploads/2022/06/deloitte-logo.jpg" data-src="https://www.thecastlegrp.com/wp-content/uploads/2022/06/deloitte-logo.jpg" alt="" data-loaded="true" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="partners">
                                <div className="partners-card position-relative">
                                    <div className="partners-card__image-wrapper">
                                        <figure class="mx-0 my-0"> <img class="lozad" src="https://www.thecastlegrp.com/wp-content/uploads/2022/06/hp-logo.jpg" data-src="https://www.thecastlegrp.com/wp-content/uploads/2022/06/hp-logo.jpg" alt="" data-loaded="true" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

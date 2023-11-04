import * as React from "react";
import { Layout } from "../layout/layout";
import '../assets/styles/conponents/client.scss';

export const OurClients = () => {
    return (
        <Layout active={"clients"}>
            <section id="BLOCK__1" class="BLOCK__innerpage-hero position-relative BLOCK__medium-large__enforce-min-height BLOCK__medium-large THEME__bg-secondary ">
                <div class="MODULE__background-image-wrapper">
                    <picture> <img class="lozad" src="https://www.thecastlegrp.com/wp-content/uploads/2022/11/Banner-Image-Castle-804.jpg" data-src="https://www.thecastlegrp.com/wp-content/uploads/2022/11/Banner-Image-Castle-804.jpg" alt="Shadows of the trees on building wall in the Charlestown Navy Yard" data-loaded="true" /> </picture>
                </div>
                <div class="MODULE__tint MODULE__tint-dark-sky"></div>
                <div class="MODULE__tint MODULE__tint-dark-sky">
                </div><div class="container position-relative">
                    <div class="BLOCK__innerpage-hero__content-wrapper THEME__text-inverted THEME__mw-Full mx-auto text-center">
                        <div class="BLOCK__innerpage-hero__heading-wrapper ">
                            <h1 class="BLOCK__innerpage-hero__heading h1 THEME__smaller-font-size-sm mb-0">Our Clients</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="">
                    <p>A true partnership is a two-way street — ideas and information flow openly and regularly,
                        based on a foundation of mutual trust and respect for one another’s expertise — and our clients embrace this philosophy.
                    </p>
                    <p>The best and most productive relationships are synergistic and goal-oriented, and a long-term
                        relationship has the value add of deep-rooted industry and company knowledge and relationships.</p>
                    <p>Our client list speaks for itself. Since our earliest days, we’ve represented everything from start-ups to
                        Fortune 500 companies with that same partnership approach and dedication at the core of every engagement.
                        Every day, since 1996, we’ve been devoting our hearts and minds to our clients, achieving great successes
                        and building lasting relationships.&nbsp;
                        <a rel="noopener">Meet The Castle Group team</a>
                        &nbsp;or go to our&nbsp;<a href="/news/" target="_blank" rel="noopener">Castle News</a>&nbsp;to learn more.
                    </p>
                    <div className="MODULE__button-wrapper pt-4 text-center">
                        <a target="_self" href="/client-media-coverage/">
                            <button type="button" className="THEME__button THEME__button-medium THEME__button-primary">Client Media Coverage</button>
                        </a>
                    </div>
                </div>
                <hr />

            </div>
            <section>
                <div className="container">
                    <div className="text-center">
                        <h2 className="">Here is a sample of our current and past clients</h2>
                    </div>
                    <div className="mt-4 pt-3">
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

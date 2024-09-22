import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";
import DiscoverSection from "../../_components/sections/Discover";
import CallToActionTwoSection from "../../_components/sections/CallToActionTwo";

export const metadata = {
  title: {
    default: "Contact",
  },
  description: AppData.settings.siteDescription,
}

const Contact = () => {
  return (
    <>
      <PageBanner
        pageTitle={"Partner with Us to Build a Greener Future"}
        breadTitle={"Contact"}
        bgImage={"/img/h1.png"}
        subTitle={`Our cutting-edge cement technology reduces CO2 emissions significantly without compromising on quality or performance.`}
      />

      {/* about */}
      <section>
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-between">
            <div className="col-lg-6">

              <div className="mil-mb-90">
                <p className="mil-up mil-mb-40">Let's redefining construction industry for a greener future with our sustainability, cement solution. Join us on our mission to reduce CO2 footprints emission. Together, we could drive positive environmental impact with eco-friendly sustainable cement.
                </p>
              </div>

            </div>
            <div className="col-lg-4 mil-relative">

              <div className="mil-contact-sidebar">

                <div className="mil-sidebar-info">

                  <h6 className="mil-upper mil-up mil-mb-30">Headquarters</h6>
                  <ul className="mil-list mil-dark mil-up mil-mb-30">
                    <li>Singapore</li>
                    <li>Block 71 Ayer Rajah Crescent</li>
                    <li>139951</li>
                  </ul>

                  <h6 className="mil-upper mil-up mil-mb-30">Contact Us</h6>
                  <ul className="mil-list mil-dark mil-up">
                    <li>
                      <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email" style={{ width: '16px', marginRight: '8px', verticalAlign: 'middle' }} />
                      <a href="mailto:circrete@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>circrete@gmail.com</a>
                    </li>
                    <li>
                      <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" style={{ width: '16px', marginRight: '8px', verticalAlign: 'middle' }} />
                      <a href="https://www.linkedin.com/company/circrete/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        LinkedIn
                      </a>
                    </li>
                  </ul>

                </div>

              </div>

            </div>
            <div style={{ marginTop: '14rem' }} />
          </div>
        </div>
      </section>
      {/* about end */}

      {/* map */}
      <div className="mil-map-frame mil-up">
        <div className="mil-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.5769090312324!2d103.786762!3d1.2967926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a502978c483%3A0x7b4dee0cac5594e3!2sBLOCK71%20Singapore!5e0!3m2!1sen!2ssg!4v1685485811069!5m2!1sen!2ssg"
            style={{ "border": "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* map end */}

      <CallToActionTwoSection />
    </>
  );
};
export default Contact;

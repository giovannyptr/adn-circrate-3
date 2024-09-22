import React from "react";
import Link from 'next/link';
import Data from "@data/sections/discover.json";

const DiscoverSection = () => {
  return (
    <section style={{ backgroundColor: "#F1F5EB", paddingTop: "60px" }}>
      <div className="container mil-p-0-90">
        <div className="mil-background-grid mil-softened" />

        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div>
              <h2 className="mil-upper mil-up mil-mb-40" dangerouslySetInnerHTML={{ __html: Data.title }} />
            </div>
          </div>

          <div className="col-lg-6">
            <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{ __html: Data.description }} />

            <div className="row">
              <Link href={Data.button.link} legacyBehavior>
                <a className="mil-link mil-upper mil-up" style={{ cursor: 'pointer' }}>
                  {Data.button.label}
                  <span className="mil-arrow">
                    <img src="img/icons/1.svg" alt="arrow" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;

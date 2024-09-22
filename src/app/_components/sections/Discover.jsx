"use client"; // Add this at the top of your file

import React from "react"; // Import React if not already done
import Data from "@data/sections/discover.json";

const DiscoverSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:circrete@gmail.com";
  };

  return (
    <section style={{ backgroundColor: "#F1F5EB", paddingTop: "60px" }}>
      <div className="container mil-p-0-90">
        <div className="mil-background-grid mil-softened" />

        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div>
              <h2
                className="mil-upper mil-up mil-mb-40"
                dangerouslySetInnerHTML={{ __html: Data.title }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <p
              className="mil-up mil-mb-60"
              dangerouslySetInnerHTML={{ __html: Data.description }}
            />

            <div className="row">
              <button
                onClick={handleEmailClick}
                className="mil-link mil-upper mil-up"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                {Data.button.label}
                <span className="mil-arrow">
                  <img src="img/icons/1.svg" alt="arrow" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;

"use client";

import Data from '@data/sliders/company-1';
import Link from "next/link";

const CompanyOneSlider = () => {
  // Extract the first image from the Data.items array
  const firstItem = Data.items[0];

  return (
    <>
      {/* company one slider */}
      <section>
        <div className="container mil-p-0-30">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-between align-items-center flex-sm-row-reverse">

            <div className="col-lg-6">

              {/* Single image display with 100% width, margin-top, and space from the top */}
              {firstItem && (
                <div className="mil-illustration mil-up mil-mb-90" style={{ paddingTop: "20px", marginTop: "40px" }}>
                  <div className="mil-image-frame">
                    <img 
                      src={firstItem.image} 
                      alt={firstItem.alt} 
                      style={{ width: "100%", height: "auto" }} // Ensures 100% width with responsive height
                    />
                  </div>
                </div>
              )}

            </div>

            <div className="col-lg-5">
              <div className="mil-mb-90">
                <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
                <p
                  className="mil-up mil-mb-40"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* company one slider end */}
    </>
  );
};

export default CompanyOneSlider;

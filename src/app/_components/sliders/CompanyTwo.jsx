"use client";

import Data from '@data/sliders/company-2';
import Link from "next/link";

const CompanySlider = () => {
  // Extract the first image from the Data.items array
  const firstItem = Data.items[0];

  return (
    <>
    {/* company two slider */}
    <section>
        <div className="container mil-p-0-30">
            <div className="mil-background-grid mil-softened" />

            <div className="row justify-content-between align-items-center flex-sm-row-reverse">
                <div className="col-lg-5">

                    <div className="mil-mb-90">
                        <span 
                            className="mil-suptitle mil-upper mil-up mil-mb-30" 
                            dangerouslySetInnerHTML={{ __html: Data.subtitle }} 
                        />
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
                <div className="col-lg-6">

                    {/* Single image display instead of Swiper */}
                    {firstItem && (
                        <div className="mil-illustration mil-up mil-mb-90">
                            <div className="mil-image-frame">
                                <img src={firstItem.image} alt={firstItem.alt} />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    </section>
    {/* company two slider end */}
    </>
  );
};

export default CompanySlider;

"use client";

const PartnersSlider = ({ bgStyle }) => {
  return (
    <>
      {/* partners */}
      <div className={`mil-${bgStyle}-bg mil-partners mil-relative`}>
        {bgStyle === "soft" && (
          <img src="/img/other/bg.svg" className="mil-bg-img" alt="background" />
        )}

        <div className="container ">
          <div className="mil-background-grid mil-softened" />
          {/* <h3 className="mil-center mil-up mil-mb-60">LIST OF KEY PARTNERSHIPS</h3> */}
          
          {/* Display the uploaded image */}
          <div className="mil-center">
            <img src="/img/partners/1.png" alt="List of Key Partnerships" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* partners end */}
    </>
  );
};

export default PartnersSlider;

"use client";

import LogoGallery from "../LogoGallery";

const logos = [
  `/img/logo/1.png`,
  `/img/logo/2.png`,
  `/img/logo/3.png`,
  `/img/logo/4.png`,
  `/img/logo/5.png`,
  `/img/logo/6.png`,
  `/img/logo/7.png`,
  `/img/logo/8.png`,
  `/img/logo/9.png`,
  `/img/logo/10.png`,
]

const PartnersSlider = ({ bgStyle }) => {
  return (
    <>
      {/* partners */}
      <div className={`mil-${bgStyle}-bg mil-partners mil-relative`} style={{ marginBottom: '8rem' }}>
        {bgStyle === "soft" && (
          <img src="/img/other/bg.svg" className="mil-bg-img" alt="background" />
        )}

        <div className="container" style={{ marginBottom: '6rem' }}>
          <div className="mil-background-grid mil-softened" />

          {/* Display the uploaded image */}
          <LogoGallery logos={logos} />
        </div>
      </div>
      {/* partners end */}
    </>
  );
};

export default PartnersSlider;

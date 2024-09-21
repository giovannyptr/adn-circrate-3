import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import AwardsSection from "@components/sections/Awards";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import ContactInfoSection from "@components/sections/ContactInfo";
import ServicesTwoSection from "@components/sections/ServicesTwo";
import IdeasGreenSection from "../../_components/sections/IdeasGreen";
import ProductSpecification from "../../_components/sections/Product";
import CompanyOneSlider from "../../_components/sliders/CompanyOne";


const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), { ssr: false });
const TestimonialSlider = dynamic(() => import("@components/sliders/Testimonial"), { ssr: false });
const CompanySlider = dynamic(() => import("@components/sliders/Company"), { ssr: false });
const ProcessSlider = dynamic(() => import("@components/sliders/Process"), { ssr: false });
const CompanyTwoSlider = dynamic(() => import("@components/sliders/CompanyTwo"), { ssr: false });

export const metadata = {
  title: {
    default: "About",
  },
  description: AppData.settings.siteDescription,
};

const About = () => {
  return (
    <>
      <PageBanner
        pageTitle={"Green Cement That <br> Cuts CO₂ by 70%"}
        breadTitle={"About"}
        bgImage={"/img/covers/solution.png"}
      />
      <ServicesTwoSection />
      <ContactInfoSection />

     <IdeasGreenSection />
     <ProductSpecification />
      <CompanyOneSlider />
      <CompanyTwoSlider />
      <CallToActionTwoSection />
    </>
  );
};

export default About;

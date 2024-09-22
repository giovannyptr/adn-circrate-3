import React, { Suspense } from "react";

import AppData from "@data/app.json";

import { getSortedServicesData } from "@library/services";
import { getSortedPostsData } from "@library/posts";

import PageBanner from "@components/PageBanner";
import VisionSection from "@components/sections/Vision";
import FeaturesTwoSection from "@components/sections/FeaturesTwo";
import AboutFourSection from "@components/sections/AboutFour";
import CallToActionSection from "@components/sections/CallToAction";
import TeamMember from "../../_components/sections/TeamMember";
import PartnersSlider from "../../_components/sliders/Partners";
import DiscoverSection from "../../_components/sections/Discover";
import LatestPostsSection from "../../_components/sections/LatestPosts";


import Link from "next/link";

export const metadata = {
  title: {
    default: "Services",
  },
  description: AppData.settings.siteDescription,
}

async function About() {
  const services = await getAllServices();
  const posts = await getAllPosts();
  
  return (


    <>
      <PageBanner pageTitle={"Your Sustainable <br> Solution "}  bgImage={"/img/solution.png"} />

      <AboutFourSection />
  
      <VisionSection />

      <TeamMember />

      {/* <FeaturesTwoSection /> */}
      
      <CallToActionSection />

      <PartnersSlider />
      
      <DiscoverSection />

      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
    </>
  );
};
export default About;

async function getAllServices() {
  const allServices = getSortedServicesData();
  return allServices;
}

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

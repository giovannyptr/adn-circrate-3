import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";  // Import the Head component

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import IdeasSection from "@components/sections/Ideas";
import ServicesSection from "@components/sections/Services";
import AdvantagesSection from "@components/sections/Advantages";
import LatestProjectsSection from "@components/sections/LatestProjects";
import HowWeWorkSection from "@components/sections/HowWeWork";
import LatestPostsSection from "@components/sections/LatestPosts";
import CoresSection from "@components/sections/Cores";
import SolvingSection from "../_components/sections/Solving";

const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), { ssr: false });

async function Home1() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <>
      {/* Add Head component here */}
      <Head>
        <title>Circrate Green Cement | 70% CO2 Reduction for Sustainable Building</title>
        <meta name="google-site-verification" content="elfrZq5dcnwMuOgckI-yZD9Nm7tqNusmnG9Cz4E3lWA" />
        <meta name="description" content="Circrate Green Cement offers eco-friendly building solutions with 70% CO2 reduction. Join us in promoting sustainable construction with Circrate's innovative cement technology." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Circrate, green cement, sustainable building, eco-friendly cement, CO2 reduction, low-carbon cement, green construction" />
        <link rel="canonical" href="https://circrete.co" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://circrete.co",
            "logo": "https://www.circrete.co/images/logo.png",
            "name": "Circrate Green Cement",
            "description": "Circrate Green Cement offers eco-friendly solutions with 70% CO2 reduction for sustainable building.",
            "email": "circrete@gmail.com",
            "telephone": "(773) 238 7162",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Block 71 Ayer Rajah Crescent",
              "addressLocality": "Chicago",
              "addressCountry": "SG",
              "addressRegion": "SG",
              "postalCode": "139951"
            }
          })
        }} />
      </Head>


      {/* Page content */}
      <HeroOneSection />
      <SolvingSection />
      <AboutSection />
      <IdeasSection />
      <PartnersSlider />
      <HowWeWorkSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestProjectsSection projects={projects} />
      </Suspense>
      <LatestPostsSection posts={posts} />
    </>
  );
}

export default Home1;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}

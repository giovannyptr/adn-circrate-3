import '@styles/scss/style.scss';
import "./globals.css";

import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/magnific-popup.css";

import Head from 'next/head';

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import ScrollbarProgress from "@layouts/scrollbar-progress/Index";

import AppData from "@data/app.json";

export const metadata = {
  metadataBase: new URL('https://circrete.co'), // Set your production domain here
  title: {
    default: AppData.settings.siteName,
    template: `%s | ${AppData.settings.siteName}`,
  },
  description: AppData.settings.siteDescription,
  verification: {
    google: "elfrZq5dcnwMuOgckI-yZD9Nm7tqNusmnG9Cz4E3lWA",
  },
  keywords: [
    "Circrate", 
    "green cement", 
    "sustainable building", 
    "eco-friendly cement", 
    "CO2 reduction", 
    "low-carbon cement", 
    "green construction"
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://circrete.co',
    title: 'Circrate Green Cement | 70% CO2 Reduction for Sustainable Building',
    description: 'Circrate Green Cement offers eco-friendly solutions with 70% CO2 reduction for sustainable building.',
    images: [
      {
        url: 'https://www.circrete.co/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Circrate Green Cement Logo',
      }
    ],
  },
};

const Layouts = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="elfrZq5dcnwMuOgckI-yZD9Nm7tqNusmnG9Cz4E3lWA" />
        <meta name="description" content="Circrate Green Cement offers eco-friendly building solutions with 70% CO2 reduction. Join us in promoting sustainable construction with Circrate's innovative cement technology." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Circrate, green cement, sustainable building, eco-friendly cement, CO2 reduction, low-carbon cement, green construction" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://circrete.co" />
        <meta property="og:title" content="Circrate Green Cement | 70% CO2 Reduction for Sustainable Building" />
        <meta property="og:description" content="Circrate Green Cement offers eco-friendly solutions with 70% CO2 reduction for sustainable building." />
        <meta property="og:image" content="https://www.circrete.co/images/logo.png" />
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
      <body>
        <div className="mil-wrapper">
          {children}
          <ScrollbarProgress />
        </div>
      </body>
    </html>
  );
};

export default Layouts;

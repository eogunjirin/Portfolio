import '../components/index.css';
import React, { useState } from 'react';
import Header from '../components/header';
import FeaturedWorkContainer from '../components/FeaturedWorkContainer';
import SEO from '../components/seo';


import ReportsImage from '../images/Reports.jpg';
import HiWebsiteImage from '../images/HiWebsite.jpg';
import RollsImage from '../images/Rolls.jpg';
import PooperImage from '../images/Pooper.jpg';
import ShopifyImage from '../images/Shopify.jpg';
import GorillasImage from '../images/Gorillas.jpg';
import sMasheDeImage from '../images/sMasheDe.jpg';
import JuulsImage from '../images/Juuls.jpg';


function IndexPage() {
  const [isBigView] = useState(true);

  const projects = [
    {
      title: "Assessment Reports Redesign",
      client: "HiPeople",
      year: "2024",
      description: "Redesigning the reports page into a unified, single-page view for improved visualization and a more seamless user experience.",
      image: ReportsImage,
      viewType: "small",
      externalLink: "https://www.hipeople.io/assessments",
      isExternal: true,
      linkText: "HiPeople Assessments"
    },
    {
      title: "HiPeople Website Redesign",
      client: "HiPeople",
      year: "2023 - 2024",
      description: "Revamping the HiPeople website's design to boost conversions and deliver an engaging experience for visitors.",
      image: HiWebsiteImage,
      viewType: "small",
      externalLink: "https://www.hipeople.io/",
      isExternal: true,
      linkText: "HiPeople Website"
    },
    {
      title: "Rolls",
      year: "2023",
      description: "Share memories with your close friends and friend circles.",
      image: RollsImage,
      viewType: "big",
      route: "/projects/rolls"
    },
    {
      title: "Pooper",
      year: "2022",
      description: "Host listening parties with your friends.",
      image: PooperImage,
      viewType: "big",
      route: "/projects/pooper"
    },
    {
      title: "Payment reminders",
      client: "Shopify",
      year: "2022",
      description: "Enabling merchants to automatically send payment reminder emails directly to customers.",
      image: ShopifyImage,
      viewType: "small",
      externalLink: "https://www.shopify.com/editions/winter2023#payment-reminders",
      isExternal: true,
      linkText: "Shopify Editions"
    },
    {
      title: "Tour dispatcher",
      client: "Gorillas",
      year: "2022",
      description: "Utilizing advanced algorithms to enhance delivery efficiency with an automated dispatch tool for managing stacked orders.",
      image: GorillasImage,
      viewType: "small",
      route: "/projects/tour-dispatcher"
    },
    {
      title: "sMasheDe",
      year: "2020",
      description: "News consumption in a compressed and easy-to-digest format.",
      image: sMasheDeImage,
      viewType: "big",
      route: "/projects/smashede"
    },
    {
      title: "Juuls",
      year: "2019",
      description: "An intelligent habit tracking companion",
      image: JuulsImage,
      viewType: "big",
      route: "/projects/juuls"
    }
  ];

  return (
    <>
      <SEO
        title="Emmanuel Ogunjirin"
        description="Emmanuel Ogunjirin - Designing beautiful things for computers"
      />
      <div className="App">
        <Header />
        <FeaturedWorkContainer projects={projects} isBigView={isBigView} />
      </div>
    </>
  );
};

export default IndexPage;
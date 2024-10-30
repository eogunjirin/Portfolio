import './App.css';
import React, { useState } from 'react';
import Header from './header';
import FeaturedWorkContainer from './FeaturedWorkContainer';

// Import images
import ReportsImage from '../images/Reports.png';
import HiWebsiteImage from '../images/HiWebsite.png';
import RollsImage from '../images/Rolls.png';
import PooperImage from '../images/Pooper.png';
import ShopifyImage from '../images/Shopify.png';
import GorillasImage from '../images/Gorillas.png';
import sMasheDeImage from '../images/sMasheDe.png';
import JuulsImage from '../images/Juuls.png';

function App() {
  const [isBigView, setIsBigView] = useState(true);

  const projects = [
    {
      title: "Assessment Reports Redesign",
      client: "HiPeople",
      year: "2024",
      description: "Redesigning the reports page into a unified, single-page view for improved visualization and a more seamless user experience.",
      image: ReportsImage,
      viewType: "small"
    },
    {
      title: "HiPeople Website Redesign",
      client: "HiPeople",
      year: "2023 - 2024",
      description: "Revamping the HiPeople website's design to boost conversions and deliver an engaging experience for visitors.",
      image: HiWebsiteImage,
      viewType: "small"
    },
    {
      title: "Rolls",
      year: "2023",
      description: "Share memories with your close friends and friend circles.",
      image: RollsImage,
      viewType: "big"
    },
    {
      title: "Pooper",
      year: "2022",
      description: "Host listening parties with your friends.",
      image: PooperImage,
      viewType: "big"
    },
    {
      title: "Payment reminders",
      client: "Shopify",
      year: "2022",
      description: "Enabling merchants to automatically send payment reminder emails directly to customers.",
      image: ShopifyImage,
      viewType: "small"
    },
    {
      title: "Tour dispatcher",
      client: "Gorillas",
      year: "2022",
      description: "Utilizing advanced algorithms to enhance delivery efficiency with an automated dispatch tool for managing stacked orders.",
      image: GorillasImage,
      viewType: "small"
    },
    {
      title: "sMasheDe",
      year: "2020",
      description: "News consumption in a compressed and easy-to-digest format.",
      image: sMasheDeImage,
      viewType: "big"
    },
    {
      title: "Juuls",
      year: "2019",
      description: "An intelligent habit tracking companion",
      image: JuulsImage,
      viewType: "big"
    }
  ];

  return (
    <div className="App">
      <Header />
      <FeaturedWorkContainer projects={projects} isBigView={isBigView} />
    </div>
  );
}

export default App;

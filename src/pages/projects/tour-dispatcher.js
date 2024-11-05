import React from 'react';
import { Link } from 'gatsby';
import BackIcon from '../../images/back-icon.svg';
import FadeInImage from '../../components/FadeInImage';
import '../../components/styles/ProjectDetail.css';

// Import images
import HeroImage from '../../images/tour-dispatcher1.png';
import Image1 from '../../images/tour-dispatcher2.png';
import Image2 from '../../images/tour-dispatcher3.png';
import Image3 from '../../images/tour-dispatcher4.png';
import Image4 from '../../images/tour-dispatcher5.png';
import Image5 from '../../images/tour-dispatcher6.png';
import Image6 from '../../images/tour-dispatcher7.png';
import MapImage1 from '../../images/tour-dispatcher8.png';
import MapImage2 from '../../images/tour-dispatcher9.png';

const TourDispatcherProject = () => {
    return (
        <div className="project-detail-container">
            {/* Back Navigation */}
            <Link to="/" className="back-button">
                <img src={BackIcon} alt="Back" />
                Back Home
            </Link>

            {/* Project Title */}
            <h1 className="project-title">Gorillas Tour Dispatcher</h1>

            {/* Hero Image */}
            <div className="project-hero">
                <FadeInImage
                    src={HeroImage}
                    alt="Tour Dispatcher Dashboard"
                    className="hero-image"
                />
            </div>

            {/* Project Info Grid */}
            <div className="project-info-grid">
                <div className="project-description">
                    <p>
                        During my time at Gorillas, we had a process called Order Stacking, which involved merging multiple orders to boost delivery efficiency. However, over time, this process became more challenging and led to significant time wasted in the warehouse. The difficulties came from trying to identify the right orders to combine and determining the most efficient route for the riders.
                    </p>
                </div>

                <div className="project-metadata">
                    <div className="metadata-item">
                        <h3>Role</h3>
                        <p>Product design</p>
                    </div>
                    <div className="metadata-item">
                        <h3>Team</h3>
                        <p>Barbara Orsingher,</p>
                        <p>Valentina Rojas Mercier,</p>
                        <p>Jevgenija Zigisova</p>
                        <p>Hui Yi Ng</p>
                    </div>
                </div>
            </div>

            {/* Add divider line */}
            <div className="section-divider"></div>

            {/* Introduction Section */}
            <section className="project-section">
                <h2>Introduction</h2>
                <p>
                Tour dispatcher is a tool that automatically stacks orders that are within close proximity to each other and auto assigns them to riders available for pick up.

The tool visualises the flow of orders from warehouse to delivery.
                </p>
                <p>
                    The tool visualizes the flow of orders from warehouse to delivery.
                </p>
                <div className="image-grid">
                    <FadeInImage src={Image1} alt="Tour Dispatcher View 1" />
                    <FadeInImage src={Image2} alt="Tour Dispatcher View 2" />
                </div>
            </section>

            {/* Manual Workflow Section */}
            <section className="project-section">
                <h2>Manual workflow</h2>
                <p>
                To address situations where the dispatcher tool requires human intervention, either due to an algorithm miscalculation or an error, we added the option to disable auto-dispatch.
                </p>
                <div className="image-grid">
                    <FadeInImage src={Image3} alt="Manual Workflow 1" />
                    <FadeInImage src={Image4} alt="Manual Workflow 2" />
                    <FadeInImage src={Image5} alt="Manual Workflow 3" />
                    <FadeInImage src={Image6} alt="Manual Workflow 4" />
                </div>
            </section>

            {/* Map View Section */}
            <section className="project-section">
                <h2>Map view</h2>
                <p>
                There are two views available on dashboard, the standard view and the map view which gives a live view of the riders making the delivery. 
                </p>
                <div className="image-grid">
                    <FadeInImage src={MapImage1} alt="Map View 1" />
                    <FadeInImage src={MapImage2} alt="Map View 2" />
                </div>
            </section>
        </div>
    );
};

export default TourDispatcherProject;
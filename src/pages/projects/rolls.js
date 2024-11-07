import React from 'react';
import { Link } from 'gatsby';
import BackIcon from '../../images/back-icon.svg';
import FadeInImage from '../../components/FadeInImage';
import '../../components/styles/ProjectDetail.css';
import SEO from '../../components/seo';

// Import images
import HeroImage from '../../images/rollshero.png';
import Image1 from '../../images/rolls1.png';
import Image2 from '../../images/rolls2.png';
import Image3 from '../../images/rolls3.png';
import Image4 from '../../images/rolls4.png';
import Image5 from '../../images/rolls5.png';
import Image6 from '../../images/rolls6.png';
import Image7 from '../../images/rolls7.png';
import Image8 from '../../images/rolls8.png';
import Image9 from '../../images/rolls9.png';
import Image10 from '../../images/rolls10.png';
import Image11 from '../../images/rolls11.png';
import Image12 from '../../images/rolls12.png';

const RollsProject = () => {
    return (
        <>
            <SEO
                title="Rolls - Social album with your close friends"
                description="A case study on Rolls, a social album with your close friends"
            />
            <div className="project-detail-container">
                {/* Back Navigation */}
                <Link to="/" className="back-button">
                    <img src={BackIcon} alt="Back" />
                    Back Home
                </Link>

                {/* Project Title */}
                <h1 className="project-title">Rolls</h1>

                {/* Hero Image */}
                <div className="project-hero">
                    <FadeInImage src={HeroImage} alt="Rolls" className="hero-image" />
                </div>

                {/* Project Info Grid */}
                <div className="project-info-grid">
                    <div className="project-description">
                        <p>
                            Back in 2022, while I was at a concert recording videos directly to Instagram, I kept wishing there was a way to capture those moments and share them exclusively with my close friends. Instagram had features like “Close Friends” and “Highlights,”  but I felt it could be more interesting by taking that entire flow into an entirely new thing, which led to me exploring Rolls. </p>
                    </div>

                    <div className="project-metadata">
                        <div className="metadata-item">
                            <h3>Role</h3>
                            <p>Product design</p>
                            <p>Art direction</p>
                        </div>
                    </div>
                </div>

                {/* Add divider line */}
                <div className="section-divider"></div>

                {/* Introduction Section */}
                <section className="project-section">
                    <h2>Introduction</h2>
                    <p>
                        Rolls is a social album with your close friends, it takes away the concept of followers and instead focuses on close friends and friend circles.
                    </p>
                    <div className="image-grid-full">
                        <FadeInImage src={Image1} alt="Rolls 1" />
                    </div>
                </section>

                <section className="project-section">
                    <h2>Creating a roll</h2>
                    <p>
                        The app is opened straight into the camera view which makes starting a roll super easy. a Roll is made up of clips and it can hold up to 100 clips. An inspiration was trying to mirror how Cassette works.
                    </p>
                    <div className="image-grid-full">
                        <FadeInImage src={Image2} alt="Camera view" />
                        <FadeInImage src={Image3} alt="Saving a roll" />
                    </div>
                </section>


                <section className="project-section">
                    <h2>Friends groups</h2>
                    <p>
                        One of the core idea behind Rolls is that beyond wanting to share memories with close friends, people also have different close friend circles that are not intersecting each other, which led to thinking about friend groups.
                    </p>
                    <div className="image-grid">
                        <FadeInImage src={Image4} alt="Friends groups" />
                        <FadeInImage src={Image5} alt="Sharing options" />
                        <FadeInImage src={Image6} alt="Group" />
                        <FadeInImage src={Image7} alt="Group Rolls" />
                    </div>
                </section>

                <section className="project-section">
                    <h2>The “Rolls”</h2>
                    <p>
                        Rolls are viewed in a story like format (yeah very cliche) but it just felt like the right way to view these clips.
                    </p>
                    <div className="image-grid">
                        <FadeInImage src={Image8} alt="Viewing clips" />
                        <FadeInImage src={Image9} alt="Viewing clips" />
                    </div>
                </section>

                <section className="project-section">
                    <p>
                        Using the idea of a cassette, I thought of recreating that feeling of a clip being torn open, similar to how a tape unrolls when playing its content. Unopened clips would be blurred, but users could navigate through different clips by holding the strip down and moving their finger across it.
                    </p>
                    <div className="image-grid-full">
                        <FadeInImage src={Image10} alt="Unrolling a clip" />
                    </div>
                    <div className="image-grid">
                        <FadeInImage src={Image11} alt="Profile" />
                        <FadeInImage src={Image12} alt="Profile" />
                    </div>
                </section>
            </div>
        </>
    );
};

export default RollsProject;
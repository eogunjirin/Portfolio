import React from 'react';
import { Link } from 'gatsby';
import BackIcon from '../../images/back-icon.svg';
import FadeInImage from '../../components/FadeInImage';
import '../../components/styles/ProjectDetail.css';
import SEO from '../../components/seo';

// Import images
import HeroImage from '../../images/pooper-hero.png';
import Image1 from '../../images/pooper1.png';
import Image2 from '../../images/pooper2.png';
import Image2_1 from '../../images/pooper21.png';
import Image2_2 from '../../images/pooper22.png';
import Image2_3 from '../../images/pooper23.png';
import Image3 from '../../images/pooper3.png';
import Image4 from '../../images/pooper4.png';
import Image5 from '../../images/pooper5.png';
import Image6 from '../../images/pooper6.png';
import Image7 from '../../images/pooper7.png';
import Image8 from '../../images/pooper8.png';
import Image9 from '../../images/pooper9.png';
import Image10 from '../../images/pooper10.png';
import Image11 from '../../images/pooper11.png';
import Image11_1 from '../../images/pooper11-1.png';
import Image11_2 from '../../images/pooper11-2.png';
import Image11_3 from '../../images/pooper11-3.png';
import Video1 from '../../images/pooper1.mp4';
import Video2 from '../../images/pooper2.mp4';

const PooperProject = () => {
    return (
        <>
            <SEO
                title="Pooper - Host listening parties with your friends"
                description="A case study on Pooper, a tool for hosting listening parties with friends"
            />
        <div className="project-detail-container">
            {/* Back Navigation */}
            <Link to="/" className="back-button">
                <img src={BackIcon} alt="Back" />
                Back Home
            </Link>

            {/* Project Title */}
            <h1 className="project-title">Pooper</h1>

            {/* Hero Image */}
            <div className="project-hero">
                <FadeInImage
                    src={HeroImage}
                    alt="Pooper"
                    className="hero-image"
                />
            </div>

            {/* Project Info Grid */}
            <div className="project-info-grid">
                <div className="project-description">
                    <p>
                        Sometimes during the summmer of 2022, my friends and I were hanging out at a friend's apartment. We wanted to listen to music together, but lacking external speakers, we decided to create a Spotify group session, hoping to combine our devices for a harmonious audio experience. However we quickly realised that it was a bit of a challenge and didn’t turn out as planned. </p>
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
                    Pooper transforms gatherings with friends into shared experiences, allowing everyone to seamlessly listen to their favourite media together within the same physical space.
                </p>
                <div className="image-grid-full">
                    <FadeInImage src={Image1} alt="Pooper 1" />
                </div>
                <div className="video-grid">
                    <div className="pooper-video-container">
                        <div className="pooper-video-container-inner">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={Video1} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="pooper-video-container">
                        <div className="pooper-video-container-inner">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={Video2} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-section">
                <h2>Hosting a party</h2>
                <p>
                    This is the core of the app experience, I wanted to convey how the app works which led to having this mini rings rotating around the big circle to communicate how the app works at it’s core.
                </p>
                <div className="image-grid">
                    <FadeInImage src={Image2} alt="The App" />
                    <FadeInImage src={Image2_1} alt="The App" />
                    <FadeInImage src={Image2_2} alt="The App" />
                    <FadeInImage src={Image2_3} alt="The App" />
                </div>
            </section>


            <section className="project-section">
                <p>
                    When friends join a party session you see them shown in the ring, this is supposed to replicate what it feels like IRL
                </p>
                <div className="image-grid">
                    <FadeInImage src={Image3} alt="Hosting" />
                    <FadeInImage src={Image4} alt="Hosting" />
                    <FadeInImage src={Image5} alt="Ending a party" />
                    <FadeInImage src={Image6} alt="Ending a party" />
                </div>
            </section>

            <section className="project-section">
                <h2>Join a party</h2>
                <p>
                    When joining a party, you scan the QR code and you join the party. To account for device identification in  a party since accounts are not created,  I decided to go with randomly generated picture for each devices.
                </p>
                <div className="image-grid">
                    <FadeInImage src={Image7} alt="Joining a party" />
                    <FadeInImage src={Image8} alt="Joining a party" />
                    <FadeInImage src={Image9} alt="Joining a party" />
                    <FadeInImage src={Image10} alt="Joining a party" />
                </div>
            </section>

            <section className="project-section">
                <h2>Sub groups</h2>
                <p>
                    The idea behind Sub groups was to create a way to categorise devices with similar capabilities and assign a specific type of equaliser to them. For example, iPhones are great with bass, while some Android devices might do well in treble (no shade to any device)
                </p>
                <div className="image-grid">
                    <FadeInImage src={Image11} alt="Sub groups" />
                    <FadeInImage src={Image11_1} alt="Sub groups" />
                    <FadeInImage src={Image11_2} alt="Sub groups" />
                    <FadeInImage src={Image11_3} alt="Sub groups" />
                </div>
            </section>
        </div>
        </>
    );
};

export default PooperProject;

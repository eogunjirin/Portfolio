import React from 'react';
import { Link } from 'gatsby';
import BackIcon from '../../images/back-icon.svg';
import FadeInImage from '../../components/FadeInImage';
import '../../components/styles/ProjectDetail.css';
import SEO from '../../components/seo';

// Import images
import HeroImage from '../../images/sm-hero.png';
import Image1 from '../../images/sm1.png';
import Image2 from '../../images/sm2.png';
import Image3 from '../../images/sm3.png';
import Image4 from '../../images/sm4.png';
import Image5 from '../../images/sm5.png';
import Video1 from '../../images/1sm.mp4';
import Video2 from '../../images/2sm.mp4';
import Video3 from '../../images/sm3.mp4';

const SmashedeProject = () => {
    return (
        <>
            <SEO
                title="sMasheDe - Compressed News Consumption"
                description="A case study on sMasheDe, delivering news in a compressed and easy-to-digest format"
            />
            <div className="project-detail-container">
                {/* Back Navigation */}
                <Link to="/" className="back-button">
                    <img src={BackIcon} alt="Back" />
                    Back Home
                </Link>

                {/* Project Title */}
                <h1 className="project-title">sMasheDe</h1>

                {/* Hero Image */}
                <div className="project-hero">
                    <FadeInImage
                        src={HeroImage}
                        alt="sMasheDe"
                        className="hero-image"
                    />
                </div>

                {/* Project Info Grid */}
                <div className="project-info-grid">
                    <div className="project-description">
                        <p>
                            sMasheDe was created from my frustration with constantly feeling overwhelmed by news. I always want to stay on top of the news, but every app seemed to force information down your throat. The idea for sMasheDe was heavily inspired by Product Hunt Sip. </p>
                    </div>

                    <div className="project-metadata">
                        <div className="metadata-item">
                            <h3>Role</h3>
                            <p>Product design</p>
                        </div>
                    </div>
                </div>

                {/* Add divider line */}
                <div className="section-divider"></div>

                {/* Introduction Section */}
                <section className="project-section">
                    <h2>Introduction</h2>
                    <p>
                        sMasheDe is a rethink of how we consume news, with a primary focus on what truly matters to us, while filtering the noise that is mostly found on a lot of aggregators.

                        The core idea is a digital imitation of a paper delivery service. It learns your reading preferences and uses this knowledge to curate a personalised news folder,  which is then delivered to you daily at a time of your choosing. This folder is called stacks and it comprises of Briefs which are compressed news.
                    </p>
                    <div className="video-grid">
                        <div className="video-container">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                ref={(el) => {
                                    if (el) {
                                        el.playbackRate = 2.0; // Twice the normal speed
                                    }
                                }}
                            >
                                <source src={Video1} type="video/mp4" />
                            </video>
                        </div>
                        <div className="video-container">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                ref={(el) => {
                                    if (el) {
                                        el.playbackRate = 1.5; // Twice the normal speed
                                    }
                                }}
                            >
                                <source src={Video2} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </section>

                <section className="project-section">
                    <h2>Setting up your stack </h2>
                    <p>
                        When setting up sMasheDe, there are 3 core inputs that are used in creating your stack: the topics you want to stay on top of, how many briefs you want in the stack and time you want to get the stack.
                    </p>
                    <div className="image-grid-full">
                        <FadeInImage src={Image1} alt="Stack" />
                    </div>
                </section>


                <section className="project-section">
                    <h2>Stack</h2>
                    <p>
                        Stacks are presented in a story like format to give the feeling of lightness that exist with them. Briefs are in a vertical story like view which fits the shortness of the article and also makes reading it less overwhelming. You can also keep training the algorithm to learn more about what you like and dislike.
                    </p>
                    <div className="image-grid">
                        <FadeInImage src={Image2} alt="Stack" />
                        <FadeInImage src={Image3} alt="Stack" />
                    </div>
                    <div className="video-container-full">
                        <div className='video-container-full-inner'>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={Video3} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </section>

                <section className="project-section">
                    <p>
                        And when you want to consume your Stack on the go, you have the listen feature that makes it possible for you to do that.
                    </p>
                    <div className="image-grid">
                        <FadeInImage src={Image4} alt="Listen" />
                        <FadeInImage src={Image5} alt="Listen" />
                    </div>
                </section>

            </div>
        </>
    );
};

export default SmashedeProject;

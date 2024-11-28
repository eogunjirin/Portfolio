import React from 'react';
import { Link } from 'gatsby';
import BackIcon from '../../images/back-icon.svg';
import FadeInImage from '../../components/FadeInImage';
import '../../components/styles/ProjectDetail.css';
import SEO from '../../components/seo';


// Import images
import HeroImage from '../../images/juuls-hero.jpg';
import Image1 from '../../images/juuls1.jpg';
import Image2 from '../../images/juuls2.jpg';
import Image3 from '../../images/juuls3.jpg';
import Image4 from '../../images/juuls4.jpg';
import Image5 from '../../images/juuls5.jpg';
import Image6 from '../../images/juuls6.jpg';
import Image7 from '../../images/juuls7.jpg';
import Image8 from '../../images/juuls8.jpg';
import Image9 from '../../images/juuls9.jpg';
import Image10 from '../../images/juuls10.jpg';
import Image11 from '../../images/juuls11.jpg';
import Image12 from '../../images/juuls12.jpg';
import Image13 from '../../images/juuls13.jpg';
import Image14 from '../../images/juuls14.jpg';
import Image15 from '../../images/juuls15.jpg';
import Image16 from '../../images/juuls16.jpg';
import Image17 from '../../images/juuls17.jpg';
import Image18 from '../../images/juuls18.jpg';
import Video from '../../images/juuls.mp4';

const JuulsProject = () => {
    return (
        <>
            <SEO
                title="Juuls - Intent-based habit-tracking app"
                description="A case study on Juuls, an intent-based habit-tracking app"
            />
            <div className="project-detail-container">
                {/* Back Navigation */}
                <Link to="/" className="back-button">
                    <img src={BackIcon} alt="Back" />
                    Back Home
                </Link>

                {/* Project Title */}
                <h1 className="project-title">Juuls</h1>

                {/* Hero Image */}
                <div className="project-hero">
                    <FadeInImage src={HeroImage} alt="Juuls" className="hero-image" />
                </div>

                {/* Project Info Grid */}
                <div className="project-info-grid">
                    <div className="project-description">
                        <p>
                            After trying several habit-tracking apps and realizing they weren’t effective in actually helping me commit to the habits I wanted to build — they felt more like basic to-do lists — I became frustrated, which led me to creating Juuls. </p>
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
                        Juuls is an intent-based habit-tracking app that goes beyond simply providing an overview of your habits and reminders. It actively helps you complete each action, tracking whether you follow through or not.

                        Each habit in Juuls includes specific intents, forming the basis of its tracking system, so you get a clear picture of your performance over time.
                    </p>
                    <div className="image-grid">
                        <div className="juuls-video-container">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={Video} type="video/mp4" />
                            </video>
                        </div>
                        <FadeInImage src={Image1} alt="Juuls Setup" />
                        <FadeInImage src={Image2} alt="Juuls Home" />
                        <FadeInImage src={Image3} alt="Juuls Home" />
                    </div>
                </section>

                <section className="project-section">
                    <h2>Creating a habit</h2>
                    <p>
                        Habits are organized into four categories, where the intent of each habit can be based on time, distance, or app activity. For the most part, Juuls takes over your phone during the time you’ve set aside for that action, tracking whether you meet the goal you’ve set based on the habit intent.
                    </p>
                    <div className="image-grid">
                        <FadeInImage src={Image4} alt="Selecting a habit" />
                        <FadeInImage src={Image5} alt="Setting up habit" />
                        <FadeInImage src={Image6} alt="Setting up habit" />
                        <FadeInImage src={Image7} alt="Setting up habit" />
                    </div>
                </section>

                <section className="project-section">
                    <h2>Juuls “Sessions”</h2>
                    <p>
                        Sessions are what define Juuls beyond just a typical habit tracker, they represent the intent behind each habit you’ve set. Our mobile phones, once helpful tools, have become one of our biggest distractions. This thesis led to the design of “Juuls Sessions.”
                    </p>
                    <div className="image-grid">
                        <FadeInImage src={Image8} alt="Sessions" />
                        <FadeInImage src={Image9} alt="Sessions" />
                    </div>
                </section>

                <section className="project-section">
                    <p>
                        Before starting a “Session” you need to turn on Do not disturb. Focus is important for your session to count, if Do not disturb isn’t turned on your session won’t start.
                    </p>
                    <div className="image-grid-full">
                        <FadeInImage src={Image10} alt="Starting a session" />
                    </div>
                </section>

                <section className="project-section">
                    <p>
                        Each session has a unique intent. For habits where Juuls can’t accommodate the specific intent, they default to being time-based. As long as the set time is completed, the session counts—though it may not be as effective as other intents, where actions are tracked more precisely.
                    </p>
                    <div className="image-grid">
                        <FadeInImage src={Image11} alt="Run Session" />
                        <FadeInImage src={Image12} alt="Meditation Session" />
                        <FadeInImage src={Image13} alt="Journal Session" />
                        <FadeInImage src={Image14} alt="Session Completed" />
                    </div>
                </section>

                <section className="project-section">
                    <h2>Performance</h2>
                    <p>
                        Juuls provides a clear overview of your performance with each habit you’ve set up, allowing you to track progress across all habits as well as individually. A key goal for this feature was to ensure that the data isn’t overwhelming but instead offers insights that help you improve.
                    </p>
                    <div className="image-grid">
                        <FadeInImage src={Image15} alt="Juuls Insights" />
                        <FadeInImage src={Image16} alt="Habit Performance" />
                    </div>
                </section>

                <section className="project-section">
                    <h2>Journey</h2>
                    <p>
                        Juuls provides a detailed timeline of your sessions, these are called  “Journey”. It includes every habit you’ve set within Juuls, showing what each session looked like on the days you engaged with it.
                    </p>
                    <div className="image-grid">
                        <FadeInImage src={Image17} alt="Run" />
                        <FadeInImage src={Image18} alt="Journal" />
                    </div>
                </section>

            </div>
        </>
    );
};

export default JuulsProject;
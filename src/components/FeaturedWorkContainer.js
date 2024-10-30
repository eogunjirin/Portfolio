import React from 'react';
import FlowerIcon from '../images/FB.svg'; // Adjust the path as necessary
import FeaturedWorkBigView from './FeaturedWorkBigView';
import FeaturedWorkSmallView from './FeaturedWorkSmallView';

const FeaturedWorkContainer = ({ projects }) => {

    return (
        <div className="featured-work-container">
            <h2>
                Featured work
                <img src={FlowerIcon} alt="Flower Icon" style={{ height: '35px', marginLeft: '13px' }} />
            </h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    (project.viewType === "big") ? <FeaturedWorkBigView project={project} key={index} /> : <FeaturedWorkSmallView project={project} key={index} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedWorkContainer;
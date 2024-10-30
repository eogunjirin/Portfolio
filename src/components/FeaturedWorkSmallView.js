import React from 'react';
import './styles/FeaturedWork.css';

const FeaturedWorkSmallView = ({ project, key }) => {
    return (
        <div className="project-small" key={key}>
                <img src={project.image} alt={project.title} />
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <span className="dot">•</span>
                        <span>{project.client} </span>
                        <span className="year-badge">{project.year}</span>
                        <p>{project.description}</p>
                    </div>
        </div>
    );
};

export default FeaturedWorkSmallView;
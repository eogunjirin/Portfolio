import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { useInView } from '../hooks/useInView';
import './styles/FeaturedWork.css';

const FeaturedWorkBigView = ({ project, key }) => {
    const ref = useRef(null);
    const isVisible = useInView(ref);

    return (
        <div className="featured-work-big" key={key}>
            <Link to={project.route} className="project-big">
                <img 
                    ref={ref}
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    className={`fade-in ${isVisible ? 'visible' : ''}`}
                />
                <div className="project-info">
                    <h3>{project.title}</h3> 
                    <span>{project.client} </span>
                    <span className="year-badge">{project.year}</span>
                    <p>{project.description}</p>
                </div>
            </Link>
        </div>
    );
};

export default FeaturedWorkBigView;
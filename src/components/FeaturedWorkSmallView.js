import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { useInView } from '../hooks/useInView';
import './styles/FeaturedWork.css';

const FeaturedWorkSmallView = ({ project }) => {
    const ref = useRef(null);
    const isVisible = useInView(ref);

    // Determine if it's an external or internal link
    const ProjectWrapper = ({ children }) => {
        if (project.route?.startsWith('http')) {
            return (
                <a 
                    href={project.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-small"
                >
                    {children}
                </a>
            );
        }
        
        return project.route ? (
            <Link to={project.route} className="project-small">
                {children}
            </Link>
        ) : (
            <div className="project-small">
                {children}
            </div>
        );
    };

    return (
        <ProjectWrapper>
            <img 
                ref={ref}
                src={project.image} 
                alt={project.title}
                loading="lazy"
                className={`fade-in ${isVisible ? 'visible' : ''}`}
            />
            <div className="project-info">
                <h3>{project.title}</h3>
                <span className="dot">•</span>
                {project.client && <span>{project.client}</span>}
                <span className="year-badge">{project.year}</span>
                <p>{project.description}</p>
            </div>
        </ProjectWrapper>
    );
};

export default FeaturedWorkSmallView;
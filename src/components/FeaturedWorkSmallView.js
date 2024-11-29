import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { useInView } from '../hooks/useInView';
import './styles/FeaturedWork.css';

const FeaturedWorkSmallView = ({ project }) => {
    const ref = useRef(null);
    const isVisible = useInView(ref);

    // Determine if it's an external or internal link
    const ProjectWrapper = ({ children }) => {
        // If it's an external project, don't make the whole card clickable
        if (project.isExternal) {
            return (
                <div className="project-small">
                    {children}
                </div>
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
                <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="dot">•</span>
                    {project.client && <span>{project.client}</span>}
                    <span className="year-badge">{project.year}</span>
                </div>
                <p>{project.description}</p>
                {project.isExternal && project.linkText && (
                    <div className="external-link-wrapper">
                        <a 
                            href={project.externalLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="external-link"
                        >
                            {project.linkText}
                            <svg 
                                width="16" 
                                height="16" 
                                viewBox="0 0 16 16" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M5.5 3.5L12.5 10.5M12.5 3.5L12.5 10.5L5.5 10.5" 
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        </ProjectWrapper>
    );
};

export default FeaturedWorkSmallView;
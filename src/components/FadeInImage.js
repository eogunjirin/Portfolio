import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const FadeInImage = ({ src, alt, className = '' }) => {
    const ref = useRef(null);
    const isVisible = useInView(ref);

    return (
        <img
            ref={ref}
            src={src}
            alt={alt}
            className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}
        />
    );
};

export default FadeInImage; 
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LazyVideo = ({ src, ...props }) => {
    const [videoRef, isVisible] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '50px'
    });

    return (
        <video
            ref={videoRef}
            {...props}
            autoPlay={isVisible}
            preload="none"
        >
            {isVisible && <source src={src} type="video/mp4" />}
        </video>
    );
};

export default LazyVideo; 
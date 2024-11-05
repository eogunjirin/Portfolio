import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-container ${isLoaded ? 'loaded' : ''}`}>
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="blur"
        className={className}
        onLoad={() => setIsLoaded(true)}
        threshold={100}
        // Generate a tiny placeholder or use a low-res version
        placeholderSrc={`${src}?w=20`} // If using a service like Cloudinary
      />
    </div>
  );
};

export default LazyImage; 
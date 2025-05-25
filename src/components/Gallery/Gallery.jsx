import React from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img key={index} src={img.src} alt={`Imagem ${index + 1}`} />
      ))}
    </div>
  );
};

export default Gallery;

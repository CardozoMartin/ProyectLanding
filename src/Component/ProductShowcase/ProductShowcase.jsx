// src/Component/ProductShowcase.js
import React from 'react';
import './ProductShowcase.css'; // Asegúrate de tener un archivo CSS separado

const ProductShowcase = () => {
  return (
    <div className="product-showcase">
      <h2 className="showcase-title">¡Muestra tus Productos!</h2>
      <p className="showcase-description">
        Comparte tus increíbles productos con el mundo. Escoge cómo te gustaría mostrarlos:
      </p>
      <div className="showcase-buttons">
        <button className="showcase-button gallery-button">Galería</button>
        <button className="showcase-button slider-button">Slider</button>
      </div>
    </div>
  );
};

export default ProductShowcase;

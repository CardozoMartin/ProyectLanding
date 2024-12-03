import React, { useState, useEffect } from 'react';
import "./carruselLanding.css";
import zapatillas from "../../../img/zapatillas.png";
import hamburguesas from "../../../img/hamburguesas.png";
import ia from "../../../img/ia.png";
import marketing from "../../../img/marketing.png";
import restaurante from "../../../img/restaurante.jpg";
import cafe from "../../../img/caffe.jpg";
import tecnologia from "../../../img/tecnologia.jpg";

const CarruselLanding = () => {
  const arreglo = [
    { id: 1, src: zapatillas },
    { id: 2, src: cafe },
    { id: 3, src: hamburguesas },
    { id: 4, src: ia },
    { id: 5, src: marketing },
    { id: 6, src: restaurante },
    { id: 7, src: tecnologia },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5); // Cambia según el ancho de la pantalla

  // Manejar el cambio de tamaño de la pantalla
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1); // En móviles muestra 1
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2); // En tablets muestra 2
      } else {
        setVisibleItems(5); // En escritorio muestra 5
      }
    };
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems < arreglo.length ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? arreglo.length - visibleItems : prevIndex - 1
    );
  };

  const displayedImages = arreglo.slice(
    currentIndex,
    currentIndex + visibleItems
  );

  return (
    <section className="carrusel-container">
      <div className="carrusel">
        <div className="carrusel-image-container">
          {displayedImages.map((item) => (
            <div className="m-2" key={item.id}>
              <img
                src={item.src}
                alt={`Imagen ${item.id}`}
                className="carrusel-image"
              />
            </div>
          ))}
        </div>
        <div className="controls">
          <button onClick={prevSlide} className="prev-button">{"<"}</button>
          <button onClick={nextSlide} className="next-button">{">"}</button>
        </div>
      </div>
    </section>
  );
};

export default CarruselLanding;

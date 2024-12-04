import React, { useState } from 'react';

const Features = () => {
  const [currentImage, setCurrentImage] = useState('assets/img/default-image.svg');

  const handleMouseEnter = (image) => {
    setCurrentImage(image);
  };

  const handleMouseLeave = () => {
    setCurrentImage('assets/img/default-image.svg'); // Imagen por defecto
  };

  return (
    <section id="features" className="features section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
            <img src={currentImage} className="img-fluid" alt="Feature" />
          </div>

          <div className="col-xl-7 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="row align-self-center gy-5">

              {featuresData.map((feature, index) => (
                <div 
                  className="col-md-6 icon-box" 
                  key={index} 
                  onMouseEnter={() => handleMouseEnter(feature.image)}  // Cambia la imagen al hacer hover
                  onMouseLeave={handleMouseLeave}  // Vuelve a la imagen por defecto cuando se quita el hover
                >
                  <i className={`bi ${feature.icon}`}></i>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const featuresData = [
  {
    icon: 'bi-award',
    title: 'Corporis voluptates sit',
    description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
    image: 'https://media.revistagq.com/photos/5f10224264f52a842c7f9e8b/1:1/w_720,h_720,c_limit/apps.39852.14455250034361967.824623c3-91b6-402f-9a68-c66bfac9bc20.jpg', // Imagen específica para esta característica
  },
  {
    icon: 'bi-card-checklist',
    title: 'Ullamco laboris nisi',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    image: 'assets/img/feature2.svg',
  },
  {
    icon: 'bi-dribbble',
    title: 'Labore consequatur',
    description: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere',
    image: 'assets/img/feature3.svg',
  },
  {
    icon: 'bi-filter-circle',
    title: 'Beatae veritatis',
    description: 'Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta',
    image: 'assets/img/feature4.svg',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Molestiae dolor',
    description: 'Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte',
    image: 'assets/img/feature5.svg',
  },
  {
    icon: 'bi-patch-check',
    title: 'Explicabo consectetur',
    description: 'Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore',
    image: 'assets/img/feature6.svg',
  },
];

export default Features;

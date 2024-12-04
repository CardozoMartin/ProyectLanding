import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PricingSection.css'; // Archivo de estilos personalizados

const PricingSection = () => {
  return (
    <section id="pricing" className="pricing section py-5">
      <div className="container section-title text-center mb-5" data-aos="fade-up">
        <h2>Planes para todos los negocios</h2>
        <p>Elige el plan que mejor se adapte a tus necesidades y lleva tu negocio al siguiente nivel.</p>
      </div>

      <div className="container">
        <div className="row gy-4 justify-content-center">
          
          {/* Plan Básico */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card pricing-card shadow-sm border-light">
              <div className="card-body text-center">
                <h3 className="card-title">Básico</h3>
                <p className="price">$29 <span className="price-subtext">/ mes</span></p>
                <p className="text-muted">Perfecto para emprendedores.</p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill"></i> Landing Page Estática</li>
                  <li><i className="bi bi-check-circle-fill"></i> Botón de Contacto</li>

                </ul>
                <button className="btn btn-primary">Contratar</button>
              </div>
            </div>
          </div>

          {/* Plan Intermedio */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card pricing-card shadow-sm border-light">
              <div className="card-body text-center">
                <h3 className="card-title">Intermedio</h3>
                <p className="price">$59 <span className="price-subtext">/ mes</span></p>
                <p className="text-muted">Ideal para pequeñas empresas.</p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill"></i> Landing Page con Animaciones</li>
                  <li><i className="bi bi-check-circle-fill"></i> Mostrar Producto</li>
                  <li><i className="bi bi-check-circle-fill"></i> Botón de Contacto</li>
                </ul>
                <button className="btn btn-primary">Contratar</button>
              </div>
            </div>
          </div>

          {/* Plan Premium */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card pricing-card shadow-lg border-primary premium-card">
              <div className="card-body text-center">
                <h3 className="card-title">Premium</h3>
                <p className="price">$99 <span className="price-subtext">/ mes</span></p>
                <p className="text-muted">Para grandes proyectos.</p>
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill"></i> Landing Page con Animaciones</li>
                  <li><i className="bi bi-check-circle-fill"></i> Mostrar Producto</li>
                  <li><i className="bi bi-check-circle-fill"></i> Botón de Contacto</li>
                  <li><i className="bi bi-check-circle-fill"></i> Dominio Personalizado</li>
                </ul>
                <button className="btn btn-primary premium-btn">Contratar</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;

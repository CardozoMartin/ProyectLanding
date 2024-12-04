import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Para los íconos de Bootstrap
import './WorkProcessSection.css'; // Archivo de estilos personalizado

const WorkProcessSection = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (step < 3) {
        setStep(step + 1);
      } else {
        clearInterval(interval);
      }
    }, 2000); // Avanza cada 2 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [step]);

  return (
    <section id="work-process" className="work-process section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Así trabajamos contigo</h2>
        <p>Un proceso simple y claro, ¡para ayudarte a alcanzar tus metas rápidamente!</p>
      </div>

      <div className="container">
        <div className="row gy-5 justify-content-center">
          <div className="col-md-3 step" data-aos="fade-up" data-aos-delay="100">
            <div className={`step-box ${step >= 1 ? 'active' : ''}`}>
              <i className="bi bi-person-check"></i>
              <h4>Consulta inicial</h4>
              <p>Entendemos tus necesidades.</p>
            </div>
          </div>

          <div className="col-md-3 step" data-aos="fade-up" data-aos-delay="200">
            <div className={`step-box ${step >= 2 ? 'active' : ''}`}>
              <i className="bi bi-pencil"></i>
              <h4>Diseño personalizado</h4>
              <p>Creamos un boceto único para ti.</p>
            </div>
          </div>

          <div className="col-md-3 step" data-aos="fade-up" data-aos-delay="300">
            <div className={`step-box ${step >= 3 ? 'active' : ''}`}>
              <i className="bi bi-play-circle"></i>
              <h4>Desarrollo y entrega</h4>
              <p>Lanzamos tu página en tiempo récord.</p>
            </div>
          </div>
        </div>

        {/* Línea de progreso animada */}
        <div className="progress-container mt-4">
          <div className="progress-bar" style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;

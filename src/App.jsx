import { useEffect, useState } from "react";
import "./App.css"; // Estilos generales
import rocket from "./img/rocket.png";
import useStore from "./useStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faBorderNone,
  faCameraRetro,
  faFire,
  faTriangleExclamation,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Component/Card";

function App() {
  const [opacity, setOpacity] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const { theme, setTheme } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      const newOpacity = Math.min(newScrollY / window.innerHeight, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Aplicar la clase del tema al body
  useEffect(() => {
    // Eliminar clases de tema anteriores
    document.body.classList.remove("light", "dark", "neon", "retro");

    // Agregar la nueva clase de tema
    document.body.classList.add(theme);
  }, [theme]); // Ejecutar cuando cambie el tema

  return (
    <div className="app">
      <section style={{ height: "100vh" }}>
        <article>
          <div>
            <div className="container">
              <h1 className="title">
                <span>T</span>
                ransforma visitantes en clientes con una landing page optimizada
                y a medida para tu negocio.
              </h1>
              <img className="rocket" src={rocket} alt="" />
              <p className="subtitle">
                Impulsa tu negocio con una landing page que convierte.
              </p>
              <button>Contactanos</button>
            </div>
          </div>
        </article>
      </section>
      <section>
        <article className="containerCard">
          <div className="cardArticle">
            <Card
              title={"Aumenta tus Clientes Potenciales"}
              mesage={
                "Transforma cada visitante en una oportunidad. Con una landing page optimizada, captura la información clave de tus futuros clientes fácilmente. ¡Haz crecer tu base de contactos y amplía tu alcance!"
              }
              icon={
                <FontAwesomeIcon
                  icon={faFire}
                  size="2x1"
                  style={{ color: "#f2985b" }}
                />
              }
            />
          </div>
          <div className="cardArticle">
            <Card
              title={"Enfoca la Atención en lo que Importa"}
              mesage={
                "Guía a tus visitantes hacia una acción clara. Con un diseño estratégico, una landing page elimina distracciones y aumenta tus conversiones al 100%."
              }
              icon={
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  style={{ color: "#f2985b" }}
                />
              }
            />
          </div>
          <div className="cardArticle">
            <Card
              title={"Atrae Más Visitas con Mejor SEO"}
              mesage={
                "Haz que te encuentren rápido y fácil. Una landing page optimizada mejora tu posición en buscadores, aumentando tu visibilidad y atrayendo más tráfico a tu negocio."
              }
              icon={
                <FontAwesomeIcon
                  icon={faEye}
                  size="2xl"
                  style={{ color: "#f2985b" }}
                />
              }
            />
          </div>
        </article>
      </section>

      <section className="section2">
        <article>
          <h2>Tu eliges el diseño o el estilo</h2>
          <div>
            <button onClick={() => setTheme("light")}>
              Modo Light <FontAwesomeIcon icon={faSun} beat />
            </button>
            <button onClick={() => setTheme("dark")}>
              Modo Dark <FontAwesomeIcon icon={faMoon} bounce />
            </button>
            <button onClick={() => setTheme("neon")}>
              Modo Neon <FontAwesomeIcon icon={faBorderNone} spin />
            </button>
            <button onClick={() => setTheme("retro")}>
              Modo Retro <FontAwesomeIcon icon={faCameraRetro} beat />
            </button>
          </div>
        </article>

        <article>
          <div>
          <div className="hero-section">
    <h3>Construye la landing page de tus sueños</h3>
    <p>Transforma tus ideas en resultados reales con un diseño atractivo y conversión garantizada.</p>
    <ul>
        <li>📈 <strong>Aumenta tus conversiones</strong> con un diseño optimizado.</li>
        <li>🎨 <strong>Personaliza tu estilo</strong> con plantillas fáciles de usar.</li>
        <li>⚡ <strong>Carga rápida</strong> para mejorar la experiencia del usuario.</li>
    </ul>
    <a href="#start" className="btn-cta">¡Empieza ahora!</a>
    
</div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;

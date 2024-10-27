import { useEffect, useState } from "react";
import "./App.css"; // Estilos generales
import rocket from "./img/rocket.png";
import useStore from "./useStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBorderNone, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

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

      <section
        className="section2"
        
      >
        <article>
          <h2>Tu eliges el diseño o el estilo</h2>
          <div>
            <button  onClick={() => setTheme('light')}>Modo Light <FontAwesomeIcon icon={faSun} beat /></button>
            <button onClick={() => setTheme('dark')}>Modo Dark <FontAwesomeIcon icon={faMoon} bounce /></button>
            <button onClick={() => setTheme('neon')}>Modo Neon <FontAwesomeIcon icon={faBorderNone} spin /></button>
            <button onClick={() => setTheme('retro')}>Modo Retro <FontAwesomeIcon icon={faCameraRetro} beat /></button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;

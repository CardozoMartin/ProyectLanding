import { useEffect, useState } from "react";
import "./App.css"; // Estilos generales
import rocket from "./img/rocket.png";
import whatsapp from "./img/whatsapp.png";
import telegram from "./img/telegrama.png";
import chatBot from "./img/bot-conversacional.png";


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
import EmblaCarousel from "./Component/Carrusel/EmblaCarousel";
import Gallery from "./Component/Gallery/Gallery";
import CarruselLanding from "./Component/CarruselLanding/AppLaning/CarruselLanding";
import WorkProcessSection from "./Component/Utils/WorkProcessSection";
import PricingSection from "./Component/PricingSection/PricingSection";
import Features from "./Component/Utils/Features";



const OPTIONS = {};
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
  const [opacity, setOpacity] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [carrusel, setCarrusel] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [buttonChatBot, setChatBot] = useState(false);
  const [buttonTelegram, setTelegram] = useState(false);
  const [buttonWahtsapp, setWhatsapp] = useState(false);
  const { theme, setTheme } = useStore();

  
  

  // Verifica si hay un tema guardado en localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add("light"); // Por defecto se aplica el tema claro
    }
  }, []);

  // Cambiar tema y guardarlo en localStorage
  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(selectedTheme);
  };

  return (
    <div className="app">
      <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand">Landing</a>
        <div className="d-flex text-end">
        <button>Contactanos</button>
          {theme === "light" ? (
            <button onClick={() => toggleTheme("dark")}>
               <FontAwesomeIcon icon={faMoon} bounce />
  s          </button>
          ) : (
            <button onClick={() => toggleTheme("light")}>
               <FontAwesomeIcon icon={faSun} beat />
            </button>
          )}
          
        </div>
      </div>
    </nav>
      <section style={{ height: "100vh" }}>
        <article>
          <div>
            <div className="container d-flex justify-content-center mt-5">
              <h1 className="fw-bolder fs-1">Necesitas una web ?</h1>
              {/* <img className="rocket" src={rocket} alt="" />  */}
              <p className="subtitle lead">
                "La web que necesitas, como la imaginas."
              </p>
              <button>Contactanos</button>
              <CarruselLanding></CarruselLanding>
            </div>
            <div className="">

            </div>
          </div>
        </article>

      </section>


      <section className="mt-5">
            <Features></Features>
      </section>
          <section>
        <WorkProcessSection></WorkProcessSection>
          </section>
      <section>
        <PricingSection></PricingSection>
      </section>
    </div>
  );
}

export default App;

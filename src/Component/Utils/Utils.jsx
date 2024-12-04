  {/* <section>
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
              <p>
                Transforma tus ideas en resultados reales con un diseño
                atractivo y conversión garantizada.
              </p>
              <ul>
                <li>
                  📈 <strong>Aumenta tus conversiones</strong> con un diseño
                  optimizado.
                </li>
                <li>
                  🎨 <strong>Personaliza tu estilo</strong> con plantillas
                  fáciles de usar.
                </li>
                <li>
                  ⚡ <strong>Carga rápida</strong> para mejorar la experiencia
                  del usuario.
                </li>
              </ul>
              <a href="#start" className="btn-cta">
                ¡Empieza ahora!
              </a>
            </div>
          </div>
        </article>
      </section>

      <section>
        <div className="containerSlider">
          <h2>Te gustaria mostrar tus productos </h2>
          <button onClick={handleCarrusel}>Carrusel</button>
          <button onClick={handleGallery}>Galleria</button>
          <button>Carrusel animado</button>
          {carrusel && ( // Render carousel when carrusel is true
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          )}
          {gallery && <Gallery />}
        </div>
      </section>
      <section>
        <h2>
          Tambien podes personalizar aun mas agregando botones para contacto
        </h2>
        <button onClick={handleWhatsapp}>Ver Whatsapp</button>
        <button onClick={handleTelegram}>Telegram</button>
        <button onClick={handleChatBot}>ChatBot</button>

        {buttonWahtsapp && (
          <div className="whatsapp">
            <a href="https://wa.me/tu-numero" target="_blank">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        )}
        {buttonTelegram && (
          <div className="telegram">
            <a href="https://wa.me/tu-numero" target="_blank">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        )}
        {
          buttonChatBot && (
            <div className="chatBot">
            <a href="https://wa.me/tu-numero" target="_blank">
              <img src={chatBot} alt="chatBot" />
            </a>
          </div>
          )
        }
        
      </section> */}
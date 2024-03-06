import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_Cw1E5TCy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<!--Lenguaje de la pagina--><html lang="es"> <!-- Cabecera --> <head><!-- Caracteres especiales --><meta charset="UTF-8"><!-- Responsivo de pantalla --><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicon --><link rel="shortcut icon" href="/public/imgs/logo.png" type="image/x-icon"><!-- Iconos de boxicons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.1/css/boxicons.min.css"><!-- Nombre de la pagina --><title>Portfolio | ${title}</title><!-- Bootstrap 5 --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"><!-- Iconos de Bootstrap --><link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"><!-- Swiper--><link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/layouts/Layout.astro", void 0);

const $$Astro$8 = createAstro();
const $$Scripts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Scripts;
  return renderTemplate``;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/Scripts.astro", void 0);

const $$Astro$7 = createAstro();
const $$BotonUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BotonUp;
  return renderTemplate`<!-- Boton UP-->${maybeRenderHead()}<a href="#hero" class="btn-up" id="boton-up"> <i class="bi bi-arrow-up"></i> </a> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/botonUp.astro", void 0);

const $$Astro$6 = createAstro();
const $$Spinner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Spinner;
  return renderTemplate`<!-- Spinner-->${maybeRenderHead()}<div class="loader-wrapper"> <div class="loader"></div> </div> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/spinner.astro", void 0);

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!--TODO Header -->${maybeRenderHead()}<header id="header" data-astro-cid-hpnw4vwy> <nav class="navbar navbar-expand-lg navbar-light" data-astro-cid-hpnw4vwy> <div class="container container-header d-flex justify-content-between align-items-center" data-astro-cid-hpnw4vwy> <!-- Logo --> <a class="navbar-brand" href="#" data-astro-cid-hpnw4vwy> <img width="50" src="/imgs/logo.png" alt="Logo" data-astro-cid-hpnw4vwy> </a> <!-- Botón de hamburguesa para pantallas pequeñas --> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-astro-cid-hpnw4vwy> <span class="navbar-toggler-icon" data-astro-cid-hpnw4vwy></span> </button> <!-- Menú de navegación sin íconos centrado --> <div class="collapse navbar-collapse" id="navbarNav" data-astro-cid-hpnw4vwy> <ul class="navbar-nav mx-auto" data-astro-cid-hpnw4vwy> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#hero" data-astro-cid-hpnw4vwy>Inicio</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#sobre" data-astro-cid-hpnw4vwy>Sobre</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#servicios" data-astro-cid-hpnw4vwy>Servicios</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#proyectos" data-astro-cid-hpnw4vwy>Portafolio</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#contacto" data-astro-cid-hpnw4vwy>Contacto</a> </li> </ul> </div> <!-- Botones de redes sociales a la derecha, ocultos en pantallas pequeñas --> <div class="d-none d-lg-flex" data-astro-cid-hpnw4vwy> <button class="btn btn-outline-secondary btn-facebook me-2" data-astro-cid-hpnw4vwy><i class="bi bip bi-facebook" data-astro-cid-hpnw4vwy></i></button> <button class="btn btn-outline-secondary btn-linkedin me-2" data-astro-cid-hpnw4vwy><i class="bi bip bi-linkedin" data-astro-cid-hpnw4vwy></i></button> <button class="btn btn-outline-secondary btn-instagram" data-astro-cid-hpnw4vwy><i class="bi bip bi-instagram" data-astro-cid-hpnw4vwy></i></button> </div> </div> </nav> </header> <!--TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`<!--TODO Hero -->${maybeRenderHead()}<section class="container-fluid p-0 m-0" id="hero" data-astro-cid-zi4ldr3x> <!-- Contenedor del video de fondo --> <div class="video-container pt-5 mt-4" data-astro-cid-zi4ldr3x> <!-- Video de fondo --> <video autoplay muted loop id="video-background" data-astro-cid-zi4ldr3x> <source src="/imgs/fondo-estrellas.mp4" type="video/mp4" data-astro-cid-zi4ldr3x>
Your browser does not support the video tag.
</video> <div class="container container-hero" data-astro-cid-zi4ldr3x> <div class="row row-hero p-3" data-astro-cid-zi4ldr3x> <div class="col-lg-6 container-texto-hero" id="hero-card" data-astro-cid-zi4ldr3x> <!-- Contenido --> <div data-astro-cid-zi4ldr3x> <!-- Título --> <h2 class="nombre" data-astro-cid-zi4ldr3x>
IRVING ALEJANDRO <br data-astro-cid-zi4ldr3x> HERNÁNDEZ RAMÍREZ
</h2> <!-- Párrafo --> <p class="puesto" data-astro-cid-zi4ldr3x>Desarrollador Frontend</p> <!-- Párrafo adicional --> <p data-astro-cid-zi4ldr3x>
¡Hola! Soy un apasionado desarrollador frontend con
                            experiencia en la creación de experiencias web
                            cautivadoras. Estoy aquí para ayudarte a dar vida a
                            tus ideas y proyectos. ¡Hablemos de cómo puedo
                            contribuir al éxito de tu próximo proyecto!
</p> <!-- Subtítulo --> <h5 class="mb-3 servicios" data-astro-cid-zi4ldr3x>Servicios</h5> <!-- Botones con iconos --> <div class="d-flex align-items-center" data-astro-cid-zi4ldr3x> <!-- Botón 1 --> <a target="_blank" href="https://wa.link/wxqq6l" class="btn btn-outline-success btn-whatsapp me-3" data-astro-cid-zi4ldr3x> <i class="bi bi-whatsapp" data-astro-cid-zi4ldr3x></i> Contactar
</a> <!-- Botón 2 --> <a href="#proyectos" class="btn btn-outline-warning" data-astro-cid-zi4ldr3x> <i class="bi bi-card-text" data-astro-cid-zi4ldr3x></i> Ver Portfolio
</a> </div> </div> </div> <!-- Imagen --> <div class="col-lg-6 container-planeta" data-astro-cid-zi4ldr3x> <img class="planeta" src="/imgs/ilustraciones/1.png" alt="Descripción de la imagen" data-astro-cid-zi4ldr3x> </div> </div> </div> </div> </section> <!--TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$CardsIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardsIcon;
  return renderTemplate`<!--TODO Cards -->${maybeRenderHead()}<section class="container-fluid pt-5 pb-5" id="cards-one" data-astro-cid-tpvsrvd5> <div class="container" data-astro-cid-tpvsrvd5> <div class="row justify-content-center" data-astro-cid-tpvsrvd5> <!-- Primera card --> <div class="col-lg-4" data-astro-cid-tpvsrvd5> <div class="card text-center glass-card mb-3" id="card1" data-astro-cid-tpvsrvd5> <div class="card-body" data-astro-cid-tpvsrvd5> <!-- Icono --> <i class="bi icono-card bi-speedometer2" style="font-size: 3rem;" data-astro-cid-tpvsrvd5></i> <!-- Título --> <h5 class="card-title mt-3" data-astro-cid-tpvsrvd5>Rápido y Eficiente</h5> <!-- Párrafo --> <p class="card-text" data-astro-cid-tpvsrvd5>
Desarrollo sitios web rápidos y eficientes, optimizados para un
              rendimiento excepcional.
</p> </div> </div> </div> <!-- Segunda card --> <div class="col-lg-4" data-astro-cid-tpvsrvd5> <div class="card text-center glass-card mb-3" id="card2" data-astro-cid-tpvsrvd5> <div class="card-body" data-astro-cid-tpvsrvd5> <!-- Icono --> <i class="bi icono-card bi-palette" style="font-size: 3rem;" data-astro-cid-tpvsrvd5></i> <!-- Título --> <h5 class="card-title mt-3" data-astro-cid-tpvsrvd5>Diseños Creativos</h5> <!-- Párrafo --> <p class="card-text" data-astro-cid-tpvsrvd5>
Creación de diseños atractivos y modernos que destacan por su
              creatividad y originalidad.
</p> </div> </div> </div> <!-- Tercera card --> <div class="col-lg-4" data-astro-cid-tpvsrvd5> <div class="card text-center glass-card mb-3" id="card3" data-astro-cid-tpvsrvd5> <div class="card-body" data-astro-cid-tpvsrvd5> <!-- Icono --> <i class="bi icono-card bi-code-slash" style="font-size: 3rem;" data-astro-cid-tpvsrvd5></i> <!-- Título --> <h5 class="card-title mt-3" data-astro-cid-tpvsrvd5>Código Limpio</h5> <!-- Párrafo --> <p class="card-text" data-astro-cid-tpvsrvd5>
Escritura de código limpio, bien estructurado y fácil de mantener
              para una mejor escalabilidad.
</p> </div> </div> </div> </div> </div> </section> <!-- TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/cards-icon.astro", void 0);

const $$Astro$2 = createAstro();
const $$Sobre = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sobre;
  return renderTemplate`<!--TODO Sobre -->${maybeRenderHead()}<div class="container-fluid pt-5 pb-5" id="sobre" data-astro-cid-igpiwhfj> <div class="col text-center pb-3" data-astro-cid-igpiwhfj> <h6 class="azul" data-astro-cid-igpiwhfj>Explorando mi Trayectoria</h6> <h2 class="subtitulo" data-astro-cid-igpiwhfj>Apasionado por Transformar Ideas en Código</h2> </div> <div class="container container-sobre" data-astro-cid-igpiwhfj> <div class="row row-sobre" data-astro-cid-igpiwhfj> <div class="col-md-6 container-planeta mb-5" data-astro-cid-igpiwhfj> <img width="400" src="/imgs/ilustraciones/5.png" alt="Imagen" class="planeta" data-astro-cid-igpiwhfj> </div> <div class="col-md-6 mt-3 mb-3 contenedor-texto-sobre" data-astro-cid-igpiwhfj> <h2 class="pb-3 titulo" data-astro-cid-igpiwhfj>Descubre mobre Mí</h2> <p data-astro-cid-igpiwhfj>
Soy un desarrollador <span class="frontend" data-astro-cid-igpiwhfj>Frontend</span> apasionado
                    por crear experiencias web cautivadoras y funcionales. Mi enfoque
                    principal radica en la implementación de diseños atractivos y
                    accesibles que mejoren la usabilidad y la interactividad del
                    usuario. Con experiencia en <span class="html" data-astro-cid-igpiwhfj>HTML</span>, <span class="css" data-astro-cid-igpiwhfj>CSS</span>
y <span class="javascript" data-astro-cid-igpiwhfj>JavaScript</span>, disfruto
                    transformando conceptos creativos en interfaces visuales
                    dinámicas y receptivas. ¡Siempre buscando aprender y
                    explorar nuevas tecnologías para llevar las <span class="experiencias" data-astro-cid-igpiwhfj>experiencias</span> digitales al siguiente nivel!
</p> <button class="btn btn-outline-success mt-3" data-astro-cid-igpiwhfj> <i class="bi bi-download me-2" data-astro-cid-igpiwhfj></i> Descargar CV
</button> </div> </div> </div> </div> <!--TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/sobre.astro", void 0);

const $$Astro$1 = createAstro();
const $$Swiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Swiper;
  return renderTemplate`<!--TODO Swiper -->${maybeRenderHead()}<div class="container-fluid pt-5 pb-5" id="cards-two" data-astro-cid-hy4wkotr> <div class="container" data-astro-cid-hy4wkotr> <div class="swiper miSwiper" data-astro-cid-hy4wkotr> <div class="swiper-wrapper" data-astro-cid-hy4wkotr> <!--tarjeta 1--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-html5 bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>HTML5</h5> </div> </div> </div> <!--tarjeta 2--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-css3 bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>CSS3</h5> </div> </div> </div> <!--tarjeta 3--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-javascript bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>JavaScript</h5> </div> </div> </div> <!--tarjeta 4--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-bootstrap bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>Bootstrap</h5> </div> </div> </div> <!--tarjeta 5--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-jquery bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>jQuery</h5> </div> </div> </div> <!--tarjeta 6--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-sass bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>Sass</h5> </div> </div> </div> <!--tarjeta 7--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-github bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>GitHub</h5> </div> </div> </div> </div> </div> </div> </div> <!--TODO Estilos -->  <!--TODO Scripts --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/swiper.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Scripts", $$Scripts, {})} ${renderComponent($$result2, "BtnUP", $$BotonUp, {})} ${renderComponent($$result2, "Spinner", $$Spinner, {})} ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "CardsIcon", $$CardsIcon, {})} ${renderComponent($$result2, "Sobre", $$Sobre, {})} ${renderComponent($$result2, "Swiper", $$Swiper, {})} ` })}`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/pages/index.astro", void 0);

const $$file = "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

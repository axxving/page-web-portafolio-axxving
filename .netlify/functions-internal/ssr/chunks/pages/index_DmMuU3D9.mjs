import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_Cw1E5TCy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<!--Lenguaje de la pagina--><html lang="es"> <!-- Cabecera --> <head><!-- Caracteres especiales --><meta charset="UTF-8"><!-- Responsivo de pantalla --><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicon --><link rel="shortcut icon" href="/public/imgs/logo.png" type="image/x-icon"><!-- Iconos de boxicons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.1/css/boxicons.min.css"><!-- Nombre de la pagina --><title>Portfolio | ${title}</title><!-- Bootstrap 5 --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"><!-- Iconos de Bootstrap --><link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"><!-- Swiper--><link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$BotonUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BotonUp;
  return renderTemplate`<!-- Boton UP-->${maybeRenderHead()}<a href="#hero" class="btn-up" id="boton-up"> <i class="bi bi-arrow-up"></i> </a>`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/botonUp.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!-- Header -->${maybeRenderHead()}<header id="header"> <nav class="navbar navbar-expand-lg navbar-light"> <div class="container container-header d-flex justify-content-between align-items-center"> <!-- Logo --> <a class="navbar-brand" href="#"> <img width="50" src="/imgs/logo.png" alt="Logo"> </a> <!-- Botón de hamburguesa para pantallas pequeñas --> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <!-- Menú de navegación sin íconos centrado --> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav mx-auto"> <li class="nav-item"> <a class="nav-link" href="#hero">Inicio</a> </li> <li class="nav-item"> <a class="nav-link" href="#sobre">Sobre</a> </li> <li class="nav-item"> <a class="nav-link" href="#servicios">Servicios</a> </li> <li class="nav-item"> <a class="nav-link" href="#proyectos">Portafolio</a> </li> <li class="nav-item"> <a class="nav-link" href="#contacto">Contacto</a> </li> </ul> </div> <!-- Botones de redes sociales a la derecha, ocultos en pantallas pequeñas --> <div class="d-none d-lg-flex"> <button class="btn btn-outline-secondary btn-facebook me-2"><i class="bi bip bi-facebook"></i></button> <button class="btn btn-outline-secondary btn-linkedin me-2"><i class="bi bip bi-linkedin"></i></button> <button class="btn btn-outline-secondary btn-instagram"><i class="bi bip bi-instagram"></i></button> </div> </div> </nav> </header>`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`<!-- Hero -->${maybeRenderHead()}<section class="container-fluid p-0 m-0" id="hero"> <!-- Contenedor del video de fondo --> <div class="video-container pt-5 mt-4"> <!-- Video de fondo --> <video autoplay muted loop id="video-background"> <source src="/imgs/fondo-estrellas.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> <div class="container container-hero"> <div class="row row-hero p-3"> <div class="col-lg-6 container-texto-hero" id="hero-card"> <!-- Contenido --> <div> <!-- Título --> <h2 class="nombre">
IRVING ALEJANDRO <br> HERNÁNDEZ RAMÍREZ
</h2> <!-- Párrafo --> <p class="puesto">Desarrollador Frontend</p> <!-- Párrafo adicional --> <p>
¡Hola! Soy un apasionado desarrollador frontend con
                            experiencia en la creación de experiencias web
                            cautivadoras. Estoy aquí para ayudarte a dar vida a
                            tus ideas y proyectos. ¡Hablemos de cómo puedo
                            contribuir al éxito de tu próximo proyecto!
</p> <!-- Subtítulo --> <h5 class="mb-3 servicios">Servicios</h5> <!-- Botones con iconos --> <div class="d-flex align-items-center"> <!-- Botón 1 --> <a target="_blank" href="https://wa.link/wxqq6l" class="btn btn-outline-success btn-whatsapp me-3"> <i class="bi bi-whatsapp"></i> Contactar
</a> <!-- Botón 2 --> <a href="#proyectos" class="btn btn-outline-warning"> <i class="bi bi-card-text"></i> Ver Portfolio
</a> </div> </div> </div> <!-- Imagen --> <div class="col-lg-6 container-planeta"> <img class="planeta" src="/imgs/ilustraciones/1.png" alt="Descripción de la imagen"> </div> </div> </div> </div> </section>`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$CardsIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardsIcon;
  return renderTemplate`<!--TODO Cards -->${maybeRenderHead()}<section class="container-fluid pt-5 pb-5" id="cards-one"> <div class="container"> <div class="row justify-content-center"> <!-- Primera card --> <div class="col-lg-4"> <div class="card text-center glass-card mb-3" id="card1"> <div class="card-body"> <!-- Icono --> <i class="bi bi-speedometer2" style="font-size: 3rem;"></i> <!-- Título --> <h5 class="card-title mt-3">Rápido y Eficiente</h5> <!-- Párrafo --> <p class="card-text">Desarrollo sitios web rápidos y eficientes, optimizados para un rendimiento
                excepcional.</p> </div> </div> </div> <!-- Segunda card --> <div class="col-lg-4"> <div class="card text-center glass-card mb-3" id="card2"> <div class="card-body"> <!-- Icono --> <i class="bi bi-palette" style="font-size: 3rem;"></i> <!-- Título --> <h5 class="card-title mt-3">Diseños Creativos</h5> <!-- Párrafo --> <p class="card-text">Creación de diseños atractivos y modernos que destacan por su creatividad y
                originalidad.</p> </div> </div> </div> <!-- Tercera card --> <div class="col-lg-4"> <div class="card text-center glass-card mb-3" id="card3"> <div class="card-body"> <!-- Icono --> <i class="bi bi-code-slash" style="font-size: 3rem;"></i> <!-- Título --> <h5 class="card-title mt-3">Código Limpio</h5> <!-- Párrafo --> <p class="card-text">Escritura de código limpio, bien estructurado y fácil de mantener para una mejor
                escalabilidad.</p> </div> </div> </div> </div> </div> </section>`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/cards-icon.astro", void 0);

const $$Astro$1 = createAstro();
const $$Sobre = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sobre;
  return renderTemplate`<!--TODO Sobre -->${maybeRenderHead()}<div class="container-fluid pt-5 pb-5" id="sobre"> <div class="col text-center pb-3"> <h6 class="azul">Explorando mi Trayectoria</h6> <h2 class="subtitulo">Apasionado por Transformar Ideas en Código</h2> </div> <div class="container container-sobre"> <div class="row row-sobre"> <div class="col-md-6 container-planeta mb-5"> <img width="400" src="/imgs/ilustraciones/5.png" alt="Imagen" class="planeta"> </div> <div class="col-md-6 mt-3 mb-3 contenedor-texto-sobre"> <h2 class="pb-3 titulo">Descubre mobre Mí</h2> <p>
Soy un desarrollador <span class="frontend">Frontend</span> apasionado
                    por crear experiencias web cautivadoras y funcionales. Mi enfoque
                    principal radica en la implementación de diseños atractivos y
                    accesibles que mejoren la usabilidad y la interactividad del
                    usuario. Con experiencia en <span class="html">HTML</span>, <span class="css">CSS</span>
y <span class="javascript">JavaScript</span>, disfruto
                    transformando conceptos creativos en interfaces visuales
                    dinámicas y receptivas. ¡Siempre buscando aprender y
                    explorar nuevas tecnologías para llevar las <span class="experiencias">experiencias</span> digitales al siguiente nivel!
</p> <button class="btn btn-outline-success mt-3"> <i class="bi bi-download me-2"></i> Descargar CV
</button> </div> </div> </div> </div>`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/sobre.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BtnUP", $$BotonUp, {})} ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "CardsIcon", $$CardsIcon, {})} ${renderComponent($$result2, "Sobre", $$Sobre, {})} ` })} `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/pages/index.astro", void 0);

const $$file = "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

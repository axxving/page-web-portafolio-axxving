import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_Cw1E5TCy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<!--Lenguaje de la pagina--><html lang="es"> <!-- Cabecera --> <head><!-- Caracteres especiales --><meta charset="UTF-8"><!-- Responsivo de pantalla --><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicon --><link rel="shortcut icon" href="/public/imgs/logo.png" type="image/x-icon"><!-- Iconos de boxicons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.1/css/boxicons.min.css"><!-- Nombre de la pagina --><title>Portfolio | ${title}</title><!-- Bootstrap 5 --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"><!-- Iconos de Bootstrap --><link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"><!-- Swiper--><link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!-- Header -->${maybeRenderHead()}<header id="header"> <nav class="navbar navbar-expand-lg navbar-light"> <div class="container container-header d-flex justify-content-between align-items-center"> <!-- Logo --> <a class="navbar-brand" href="#"> <img width="50" src="/imgs/logo.png" alt="Logo"> </a> <!-- Botón de hamburguesa para pantallas pequeñas --> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <!-- Menú de navegación sin íconos centrado --> <div class="collapse navbar-collapse" id="navbarNav"> <ul class="navbar-nav mx-auto"> <li class="nav-item"> <a class="nav-link" href="#hero">Inicio</a> </li> <li class="nav-item"> <a class="nav-link" href="#sobre">Sobre</a> </li> <li class="nav-item"> <a class="nav-link" href="#servicios">Servicios</a> </li> <li class="nav-item"> <a class="nav-link" href="#proyectos">Portafolio</a> </li> <li class="nav-item"> <a class="nav-link" href="#contacto">Contacto</a> </li> </ul> </div> <!-- Botones de redes sociales a la derecha, ocultos en pantallas pequeñas --> <div class="d-none d-lg-flex"> <button class="btn btn-outline-secondary btn-facebook me-2"><i class="bi bip bi-facebook"></i></button> <button class="btn btn-outline-secondary btn-linkedin me-2"><i class="bi bip bi-linkedin"></i></button> <button class="btn btn-outline-secondary btn-instagram"><i class="bi bip bi-instagram"></i></button> </div> </div> </nav> </header>`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<btnUP></btnUP> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ` })} `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/pages/index.astro", void 0);

const $$file = "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

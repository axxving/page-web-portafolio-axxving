import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_Cw1E5TCy.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<!--Lenguaje de la pagina--><html lang="es"> <!-- Cabecera --> <head><!-- Caracteres especiales --><meta charset="UTF-8"><!-- Responsivo de pantalla --><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicon --><link rel="shortcut icon" href="/public/imgs/logo.png" type="image/x-icon"><!-- Iconos de boxicons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.1/css/boxicons.min.css"><!-- Nombre de la pagina --><title>Portfolio | ${title}</title><!-- Bootstrap 5 --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"><!-- Iconos de Bootstrap --><link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"><!-- Swiper--><link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!-- Header -->${maybeRenderHead()}<header id="header" data-astro-cid-hpnw4vwy> <nav class="navbar navbar-expand-lg navbar-light" data-astro-cid-hpnw4vwy> <div class="container container-header d-flex justify-content-between align-items-center" data-astro-cid-hpnw4vwy> <!-- Logo --> <a class="navbar-brand" href="#" data-astro-cid-hpnw4vwy> <img width="50" src="/imgs/logo.png" alt="Logo" data-astro-cid-hpnw4vwy> </a> <!-- Botón de hamburguesa para pantallas pequeñas --> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-astro-cid-hpnw4vwy> <span class="navbar-toggler-icon" data-astro-cid-hpnw4vwy></span> </button> <!-- Menú de navegación sin íconos centrado --> <div class="collapse navbar-collapse" id="navbarNav" data-astro-cid-hpnw4vwy> <ul class="navbar-nav mx-auto" data-astro-cid-hpnw4vwy> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#hero" data-astro-cid-hpnw4vwy>Inicio</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#sobre" data-astro-cid-hpnw4vwy>Sobre</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#servicios" data-astro-cid-hpnw4vwy>Servicios</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#proyectos" data-astro-cid-hpnw4vwy>Portafolio</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#contacto" data-astro-cid-hpnw4vwy>Contacto</a> </li> </ul> </div> <!-- Botones de redes sociales a la derecha, ocultos en pantallas pequeñas --> <div class="d-none d-lg-flex" data-astro-cid-hpnw4vwy> <button class="btn btn-outline-secondary btn-facebook me-2" data-astro-cid-hpnw4vwy><i class="bi bip bi-facebook" data-astro-cid-hpnw4vwy></i></button> <button class="btn btn-outline-secondary btn-linkedin me-2" data-astro-cid-hpnw4vwy><i class="bi bip bi-linkedin" data-astro-cid-hpnw4vwy></i></button> <button class="btn btn-outline-secondary btn-instagram" data-astro-cid-hpnw4vwy><i class="bi bip bi-instagram" data-astro-cid-hpnw4vwy></i></button> </div> </div> </nav> </header> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/header.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<btnUP></btnUP> ${renderComponent($$result2, "Header", $$Header, {})} ` })} `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/pages/index.astro", void 0);

const $$file = "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

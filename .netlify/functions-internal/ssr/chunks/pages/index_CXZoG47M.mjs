import { e as createAstro, f as createComponent, r as renderTemplate, i as renderSlot, j as renderHead, m as maybeRenderHead, k as renderComponent } from '../astro_CYfKtmTf.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$g = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!--Lenguaje de la pagina--><html lang="es"> <!-- Cabecera --> <head><!-- Caracteres especiales --><meta charset="UTF-8"><!-- Responsivo de pantalla --><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Favicon --><link rel="shortcut icon" href="/public/imgs/logo.png" type="image/x-icon"><!-- Oracle CX Tag - begin --><script type="text/javascript" src="https://c.oracleinfinity.io/acs/account/e0a4074ec4a4477e0d7d61aa359ca278/js/prueba_infinity_tag/odc.js?_ora.config=recommender:test;personalization:test;analytics:test"><\/script><!-- Oracle CX Tag - end --><!-- Font awesome --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"><!-- Iconos de boxicons --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.1/css/boxicons.min.css"><!-- Nombre de la pagina --><title>Portfolio | ', '</title><!-- Bootstrap 5 --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"><!-- Iconos de Bootstrap --><link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"><!-- Swiper--><link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">', "</head> <body> ", " </body></html>"])), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/layouts/Layout.astro", void 0);

const $$Astro$f = createAstro();
const $$Scripts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Scripts;
  return renderTemplate``;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/Scripts.astro", void 0);

const $$Astro$e = createAstro();
const $$BotonUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$BotonUp;
  return renderTemplate`<!--TODO Boton UP-->${maybeRenderHead()}<a href="#hero" class="btn-up" id="boton-up" data-astro-cid-vrj6rlqq> <i class="bi bi-arrow-up" data-astro-cid-vrj6rlqq></i> </a> <!--TODO Estilos -->  <!--TODO Script --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/botonUp.astro", void 0);

const $$Astro$d = createAstro();
const $$Spinner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Spinner;
  return renderTemplate`<!-- Spinner-->${maybeRenderHead()}<div class="loader-wrapper"> <div class="loader"></div> </div> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/spinner.astro", void 0);

const $$Astro$c = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`<!--TODO Header -->${maybeRenderHead()}<header id="header" data-astro-cid-hpnw4vwy> <nav class="navbar navbar-expand-lg navbar-light" data-astro-cid-hpnw4vwy> <div class="container container-header d-flex justify-content-between align-items-center" data-astro-cid-hpnw4vwy> <!-- Logo --> <a class="navbar-brand" href="#" data-astro-cid-hpnw4vwy> <img width="50" src="/imgs/logo.png" alt="Logo" data-astro-cid-hpnw4vwy> </a> <!-- Botón de hamburguesa para pantallas pequeñas --> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-astro-cid-hpnw4vwy> <span class="navbar-toggler-icon" data-astro-cid-hpnw4vwy></span> </button> <!-- Menú de navegación sin íconos centrado --> <div class="collapse navbar-collapse" id="navbarNav" data-astro-cid-hpnw4vwy> <ul class="navbar-nav mx-auto" data-astro-cid-hpnw4vwy> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#hero" data-astro-cid-hpnw4vwy>Inicio</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#sobre" data-astro-cid-hpnw4vwy>Sobre</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#servicios" data-astro-cid-hpnw4vwy>Servicios</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#proyectos" data-astro-cid-hpnw4vwy>Portafolio</a> </li> <li class="nav-item" data-astro-cid-hpnw4vwy> <a class="nav-link" href="#contacto" data-astro-cid-hpnw4vwy>Contacto</a> </li> </ul> </div> <!-- Botones de redes sociales a la derecha, ocultos en pantallas pequeñas --> <div class="d-none d-lg-flex" data-astro-cid-hpnw4vwy> <button class="btn btn-outline-secondary btn-facebook me-2" data-astro-cid-hpnw4vwy><i class="bi bip bi-facebook" data-astro-cid-hpnw4vwy></i></button> <button class="btn btn-outline-secondary btn-linkedin me-2" data-astro-cid-hpnw4vwy><i class="bi bip bi-linkedin" data-astro-cid-hpnw4vwy></i></button> <button class="btn btn-outline-secondary btn-instagram" data-astro-cid-hpnw4vwy><i class="bi bip bi-instagram" data-astro-cid-hpnw4vwy></i></button> </div> </div> </nav> </header> <!--TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/header.astro", void 0);

const $$Astro$b = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
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
</p> <!-- Subtítulo --> <h5 class="mb-3 texto-servicios" data-astro-cid-zi4ldr3x>Contactame</h5> <!-- Botones con iconos --> <div class="d-flex align-items-center" data-astro-cid-zi4ldr3x> <!-- Botón 1 --> <a target="_blank" href="https://wa.link/wxqq6l" class="btn btn-outline-success btn-whatsapp me-3" data-astro-cid-zi4ldr3x> <i class="bi bi-whatsapp" data-astro-cid-zi4ldr3x></i> Contactar
</a> <!-- Botón 2 --> <a href="#proyectos" class="btn btn-outline-warning" data-astro-cid-zi4ldr3x> <i class="bi bi-card-text" data-astro-cid-zi4ldr3x></i> Ver Portfolio
</a> </div> </div> </div> <!-- Imagen --> <div class="col-lg-6 container-planeta" data-astro-cid-zi4ldr3x> <img class="planeta" src="/imgs/ilustraciones/1.png" alt="Descripción de la imagen" data-astro-cid-zi4ldr3x> </div> </div> </div> </div> </section> <!--TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/hero.astro", void 0);

const $$Astro$a = createAstro();
const $$CardsIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
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
</p> </div> </div> </div> </div> </div> </section> <!-- TODO Estilos -->  `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/cards-icon.astro", void 0);

const $$Astro$9 = createAstro();
const $$Sobre = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Sobre;
  return renderTemplate`<!--TODO Sobre -->${maybeRenderHead()}<div class="container-fluid pt-5 pb-5" id="sobre" data-astro-cid-igpiwhfj> <div class="col text-center pb-3" data-astro-cid-igpiwhfj> <h6 class="azul" data-astro-cid-igpiwhfj>EXPLORA COMO SIGO</h6> <h2 class="subtitulo" data-astro-cid-igpiwhfj>TRANSFORMANDO IDEAS EN CÓDIGO</h2> </div> <div class="container container-sobre" data-astro-cid-igpiwhfj> <div class="row row-sobre" data-astro-cid-igpiwhfj> <div class="col-md-6 container-planeta mb-5" data-astro-cid-igpiwhfj> <img width="400" src="/imgs/ilustraciones/5.png" alt="Imagen" class="planeta" data-astro-cid-igpiwhfj> </div> <div class="col-md-6 mt-3 mb-3 contenedor-texto-sobre" data-astro-cid-igpiwhfj> <h2 class="pb-3 titulo" data-astro-cid-igpiwhfj>Descubre más sobre Mí</h2> <p data-astro-cid-igpiwhfj>
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

const $$Astro$8 = createAstro();
const $$Swiper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Swiper;
  return renderTemplate`<!--TODO Swiper -->${maybeRenderHead()}<div class="container-fluid pt-5 pb-5" id="cards-two" data-astro-cid-hy4wkotr> <div class="container" data-astro-cid-hy4wkotr> <div class="swiper miSwiper" data-astro-cid-hy4wkotr> <div class="swiper-wrapper" data-astro-cid-hy4wkotr> <!--tarjeta 1--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-html5 bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>HTML5</h5> </div> </div> </div> <!--tarjeta 2--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-css3 bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>CSS3</h5> </div> </div> </div> <!--tarjeta 3--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-javascript bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>JavaScript</h5> </div> </div> </div> <!--tarjeta 4--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-bootstrap bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>Bootstrap</h5> </div> </div> </div> <!--tarjeta 5--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-jquery bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>jQuery</h5> </div> </div> </div> <!--tarjeta 6--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-sass bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>Sass</h5> </div> </div> </div> <!--tarjeta 7--> <div class="swiper-slide" data-astro-cid-hy4wkotr> <div class="card glass-card text-center" data-astro-cid-hy4wkotr> <div class="card-body d-flex flex-column align-items-center" data-astro-cid-hy4wkotr> <!-- Icono --> <i class="bx icono-card bxl-github bx-lg mb-3" data-astro-cid-hy4wkotr></i> <!-- Título --> <h5 class="card-title" data-astro-cid-hy4wkotr>GitHub</h5> </div> </div> </div> </div> </div> </div> </div> <!--TODO Estilos -->  <!--TODO Scripts --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/swiper.astro", void 0);

const $$Astro$7 = createAstro();
const $$Habilidades = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Habilidades;
  return renderTemplate`<!--TODO Habilidades -->${maybeRenderHead()}<div class="container-fluid pt-5 pb-5" id="habilidades" data-astro-cid-bakio6bi> <div class="container text-center pb-5" data-astro-cid-bakio6bi> <h6 class="azul" data-astro-cid-bakio6bi>EXPLORA MIS DESTREZAS</h6> <h2 class="subtitulo" data-astro-cid-bakio6bi>ENFOQUE Y PASIÓN CONVERTIDOS EN ACCIÓN</h2> </div> <div class="container container-progres" data-astro-cid-bakio6bi> <div class="row row-progres" data-astro-cid-bakio6bi> <!-- Barras de progreso a la izquierda --> <div class="col-md-6 columna-uno" data-astro-cid-bakio6bi> <!-- Primera barra de progreso --> <div class="mt-3" data-astro-cid-bakio6bi> <p class="titulo-html" data-astro-cid-bakio6bi>HTML5</p> <div class="progress glass-progress" data-astro-cid-bakio6bi> <div class="progress-bar html-progress" role="progressbar" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" data-astro-cid-bakio6bi></div> </div> </div> <!-- Segunda barra de progreso --> <div class="mt-3" data-astro-cid-bakio6bi> <p class="titulo-css" data-astro-cid-bakio6bi>CSS3</p> <div class="progress glass-progress" data-astro-cid-bakio6bi> <div class="progress-bar css-progress" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" data-astro-cid-bakio6bi></div> </div> </div> <!-- Tercera barra de progreso --> <div class="mt-3" data-astro-cid-bakio6bi> <p class="titulo-js" data-astro-cid-bakio6bi>JavaScript</p> <div class="progress glass-progress" data-astro-cid-bakio6bi> <div class="progress-bar js-progress" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" data-astro-cid-bakio6bi></div> </div> </div> <!-- Astro --> <div class="mt-3" data-astro-cid-bakio6bi> <p class="titulo-js" data-astro-cid-bakio6bi>Astro</p> <div class="progress glass-progress" data-astro-cid-bakio6bi> <div class="progress-bar js-progress" role="progressbar" style="width: 50%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" data-astro-cid-bakio6bi></div> </div> </div> </div> <!-- Barras de progreso a la derecha --> <div class="col-md-6 columna-dos" data-astro-cid-bakio6bi> <!-- Primera barra de progreso --> <div class="mt-3" data-astro-cid-bakio6bi> <p class="titulo-laravel" data-astro-cid-bakio6bi>Laravel</p> <div class="progress glass-progress" data-astro-cid-bakio6bi> <div class="progress-bar laravel-progress" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-astro-cid-bakio6bi></div> </div> </div> <!-- Segunda barra de progreso --> <div class="mt-3" data-astro-cid-bakio6bi> <p class="titulo-bootstrap" data-astro-cid-bakio6bi>Bootstrap 5</p> <div class="progress glass-progress" data-astro-cid-bakio6bi> <div class="progress-bar bootstrap-progress" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" data-astro-cid-bakio6bi></div> </div> </div> <!-- Tercera barra de progreso --> <div class="mt-3" data-astro-cid-bakio6bi> <p class="titulo-sql" data-astro-cid-bakio6bi>SQL</p> <div class="progress glass-progress" data-astro-cid-bakio6bi> <div class="progress-bar sql-progress" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" data-astro-cid-bakio6bi></div> </div> </div> <!-- Sass --> <div class="mt-3" data-astro-cid-bakio6bi> <p class="titulo-js" data-astro-cid-bakio6bi>Sass</p> <div class="progress glass-progress" data-astro-cid-bakio6bi> <div class="progress-bar js-progress" role="progressbar" style="width: 70%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" data-astro-cid-bakio6bi></div> </div> </div> </div> </div> </div> </div> <!--TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/habilidades.astro", void 0);

const $$Astro$6 = createAstro();
const $$Servicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Servicios;
  return renderTemplate`<!--TODO Servicios -->${maybeRenderHead()}<div class="container-fluid pt-5 pb-5" id="servicios" data-astro-cid-hwguk7ea> <div class="container text-center pb-5" data-astro-cid-hwguk7ea> <div class="row" data-astro-cid-hwguk7ea> <div class="col text-center" data-astro-cid-hwguk7ea> <h6 class="azul" data-astro-cid-hwguk7ea>DESCUBRE MIS SERVICIOS</h6> <h2 class="subtitulo" data-astro-cid-hwguk7ea>
EXPERIENCIAS EXCEPCIONALES PARA MIS CLIENTES
</h2> </div> </div> </div> <div class="container" data-astro-cid-hwguk7ea> <div class="row justify-content-center align-items-center" data-astro-cid-hwguk7ea> <!-- Cards superiores --> <div class="col-md-4" data-astro-cid-hwguk7ea> <div class="card text-center mb-4 glass-card" data-astro-cid-hwguk7ea> <div class="card-body" data-astro-cid-hwguk7ea> <i class="bi bi-laptop fs-1 mb-3" data-astro-cid-hwguk7ea></i> <h5 class="card-title" data-astro-cid-hwguk7ea>Desarrollo Web</h5> <p class="card-text" data-astro-cid-hwguk7ea>
Creación de sitios web modernos y atractivos
                            utilizando las últimas tecnologías frontend.
</p> </div> </div> </div> <div class="col-md-4" data-astro-cid-hwguk7ea> <div class="card text-center mb-4 glass-card" data-astro-cid-hwguk7ea> <div class="card-body" data-astro-cid-hwguk7ea> <i class="bi bi-code-slash fs-1 mb-3" data-astro-cid-hwguk7ea></i> <h5 class="card-title" data-astro-cid-hwguk7ea>Codificación</h5> <p class="card-text" data-astro-cid-hwguk7ea>
Codificación limpia y eficiente siguiendo las
                            mejores prácticas y estándares de la industria.
</p> </div> </div> </div> <div class="col-md-4" data-astro-cid-hwguk7ea> <div class="card text-center mb-4 glass-card" data-astro-cid-hwguk7ea> <div class="card-body" data-astro-cid-hwguk7ea> <i class="bi bi-lightbulb fs-1 mb-3" data-astro-cid-hwguk7ea></i> <h5 class="card-title" data-astro-cid-hwguk7ea>Creatividad</h5> <p class="card-text" data-astro-cid-hwguk7ea>
Diseños innovadores y personalizados para destacar
                            la identidad de tu marca en la web.
</p> </div> </div> </div> <!-- Cards inferiores --> <div class="col-md-4" data-astro-cid-hwguk7ea> <div class="card text-center mb-4 glass-card" data-astro-cid-hwguk7ea> <div class="card-body" data-astro-cid-hwguk7ea> <i class="bi bi-pen fs-1 mb-3" data-astro-cid-hwguk7ea></i> <h5 class="card-title" data-astro-cid-hwguk7ea>Diseño UI/UX</h5> <p class="card-text" data-astro-cid-hwguk7ea>
Creación de interfaces de usuario intuitivas y
                            agradables para mejorar la experiencia del usuario.
</p> </div> </div> </div> <div class="col-md-4" data-astro-cid-hwguk7ea> <div class="card text-center mb-4 glass-card" data-astro-cid-hwguk7ea> <div class="card-body" data-astro-cid-hwguk7ea> <i class="bi bi-chat-dots fs-1 mb-3" data-astro-cid-hwguk7ea></i> <h5 class="card-title" data-astro-cid-hwguk7ea>Comunicación</h5> <p class="card-text" data-astro-cid-hwguk7ea>
Comunicación efectiva y constante para entender y
                            cumplir con los requisitos del proyecto.
</p> </div> </div> </div> <div class="col-md-4" data-astro-cid-hwguk7ea> <div class="card text-center mb-4 glass-card" data-astro-cid-hwguk7ea> <div class="card-body" data-astro-cid-hwguk7ea> <i class="bi bi-briefcase fs-1 mb-3" data-astro-cid-hwguk7ea></i> <h5 class="card-title" data-astro-cid-hwguk7ea>Profesionalismo</h5> <p class="card-text" data-astro-cid-hwguk7ea>
Servicio profesional y comprometido para entregar
                            proyectos de alta calidad.
</p> </div> </div> </div> </div> </div> </div> <!--TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/servicios.astro", void 0);

const $$Astro$5 = createAstro();
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Proyectos;
  return renderTemplate`<!--TODO Proyectos -->${maybeRenderHead()}<div class="container-fluid pt-5 pb-5" id="proyectos" data-astro-cid-awy57mrf> <div class="container text-center pb-5" data-astro-cid-awy57mrf> <div class="row" data-astro-cid-awy57mrf> <div class="col text-center" data-astro-cid-awy57mrf> <h6 class="azul" data-astro-cid-awy57mrf>EXPLORA MIS PROYECTOS</h6> <h2 class="subtitulo" data-astro-cid-awy57mrf>
INNOVACIÓN Y SOLUCIONES A MEDIDA PARA TUS NECESIDADES
</h2> </div> </div> </div> <div class="container" data-astro-cid-awy57mrf> <div class="row" data-astro-cid-awy57mrf> <div class="col-md-12" data-astro-cid-awy57mrf> <!-- Tabs --> <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist" data-astro-cid-awy57mrf> <li class="nav-item" role="presentation" data-astro-cid-awy57mrf> <button class="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true" data-astro-cid-awy57mrf>ALL</button> </li> <li class="nav-item" role="presentation" data-astro-cid-awy57mrf> <button class="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false" data-astro-cid-awy57mrf>CARD</button> </li> <li class="nav-item" role="presentation" data-astro-cid-awy57mrf> <button class="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false" data-astro-cid-awy57mrf>PÁGINA WEB</button> </li> </ul> <!-- Tab content --> <div class="tab-content" id="myTabContent" data-astro-cid-awy57mrf> <!-- Tab 1 --> <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab" data-astro-cid-awy57mrf> <div class="row" data-astro-cid-awy57mrf> <!-- Cards Proyectos --> <!-- Rick y Morty --> <a href="https://cards-rickandmorty.netlify.app/" class="col-md-4" data-astro-cid-awy57mrf> <div class="card glass-card text-center" data-astro-cid-awy57mrf> <img src="/imgs/proyectos/rickandmorty.png" class="card-img-top" alt="Cartas de Rick y Morty" data-astro-cid-awy57mrf> <div class="card-body" data-astro-cid-awy57mrf> <h5 class="card-title" data-astro-cid-awy57mrf>
Cartas de Rick y Morty
</h5> <p class="card-text" data-astro-cid-awy57mrf>
Una divertida web de cartas
                                            temáticas de Rick y Morty.
                                            Desarrollada utilizando HTML, CSS y
                                            JavaScript. ¡Explora el universo de
                                            Rick y Morty de una manera única con
                                            esta web!
</p> <!-- Etiquetas de tecnología con colores e iconos --> <div class="mt-3 contenedor-badges" data-astro-cid-awy57mrf> <span class="badge bg-html text-light" data-astro-cid-awy57mrf><i class="bx bxl-html5" data-astro-cid-awy57mrf></i> HTML</span> <span class="badge bg-css text-light" data-astro-cid-awy57mrf><i class="bx bxl-css3" data-astro-cid-awy57mrf></i> CSS</span> <span class="badge bg-js text-dark" data-astro-cid-awy57mrf><i class="bx bxl-javascript" data-astro-cid-awy57mrf></i> JavaScript</span> <span class="badge bg-bootstrap text-light" data-astro-cid-awy57mrf><i class="bi bi-bootstrap" data-astro-cid-awy57mrf></i>
Bootstrap</span> <span class="badge bg-astro text-light" data-astro-cid-awy57mrf> <img class="icono-astro" width="18" src="/imgs/favicon.png" alt="" data-astro-cid-awy57mrf> Astro
</span> </div> </div> </div> </a> <!-- Encriptador --> <a href="https://encriptador-desafio-alura.netlify.app/" class="col-md-4" data-astro-cid-awy57mrf> <div class="card glass-card text-center" data-astro-cid-awy57mrf> <img src="/imgs/proyectos/encriptador.png" class="card-img-top" alt="Encriptador" data-astro-cid-awy57mrf> <div class="card-body" data-astro-cid-awy57mrf> <h5 class="card-title" data-astro-cid-awy57mrf>Encriptador</h5> <p class="card-text" data-astro-cid-awy57mrf>
Una aplicación de encriptación
                                            desarrollada como desafío en Alura.
                                            Utiliza algoritmos de encriptación
                                            modernos para proteger la
                                            información. ¡Descubre cómo tus
                                            datos están seguros!
</p> <div class="mt-3 contenedor-badges" data-astro-cid-awy57mrf> <span class="badge bg-html text-light" data-astro-cid-awy57mrf><i class="bx bxl-html5" data-astro-cid-awy57mrf></i> HTML</span> <span class="badge bg-css text-light" data-astro-cid-awy57mrf><i class="bx bxl-css3" data-astro-cid-awy57mrf></i> CSS</span> <span class="badge bg-js text-dark" data-astro-cid-awy57mrf><i class="bx bxl-javascript" data-astro-cid-awy57mrf></i> JavaScript</span> <span class="badge bg-bootstrap text-light" data-astro-cid-awy57mrf><i class="bi bi-bootstrap" data-astro-cid-awy57mrf></i>
Bootstrap</span> </div> </div> </div> </a> <!-- Pagina Web MarketUP --> <a href="https://market-up.netlify.app/" class="col-md-4" data-astro-cid-awy57mrf> <div class="card glass-card text-center" data-astro-cid-awy57mrf> <img src="/imgs/proyectos/marketup.png" class="card-img-top" alt="Pagina Web MarketUP" data-astro-cid-awy57mrf> <div class="card-body" data-astro-cid-awy57mrf> <h5 class="card-title" data-astro-cid-awy57mrf>
Pagina Web MarketUP
</h5> <p class="card-text" data-astro-cid-awy57mrf>
Un proyecto de desarrollo web para
                                            MarketUP. Diseñado para facilitar la
                                            gestión de negocios mediante una
                                            interfaz amigable y funcional.
                                            ¡Descubre cómo optimizar tu empresa!
</p> <!-- Etiquetas de tecnología con colores e iconos --> <div class="mt-3 contenedor-badges" data-astro-cid-awy57mrf> <span class="badge bg-html text-light" data-astro-cid-awy57mrf><i class="bx bxl-html5" data-astro-cid-awy57mrf></i> HTML</span> <span class="badge bg-css text-light" data-astro-cid-awy57mrf><i class="bx bxl-css3" data-astro-cid-awy57mrf></i> CSS</span> <span class="badge bg-js text-dark" data-astro-cid-awy57mrf><i class="bx bxl-javascript" data-astro-cid-awy57mrf></i> JavaScript</span> <span class="badge bg-bootstrap text-light" data-astro-cid-awy57mrf><i class="bi bi-bootstrap" data-astro-cid-awy57mrf></i>
Bootstrap</span> </div> </div> </div> </a> <!-- Pagina Web Chef Guadalupe Ramirez --> <a href="https://guadalupe-ramirez.netlify.app/" class="col-md-4" data-astro-cid-awy57mrf> <div class="card glass-card text-center" data-astro-cid-awy57mrf> <img src="/imgs/proyectos/chef.png" class="card-img-top" alt="Pagina Web Guadalupe Ramirez" data-astro-cid-awy57mrf> <div class="card-body text-center" data-astro-cid-awy57mrf> <h5 class="card-title" data-astro-cid-awy57mrf>
Pagina Web Guadalupe Ramirez
</h5> <p class="card-text" data-astro-cid-awy57mrf>
Un sitio web personalizado para la
                                            chef Guadalupe Ramirez. Muestra sus
                                            recetas, habilidades culinarias y
                                            experiencias. ¡Sumérgete en el mundo
                                            gastronómico de Guadalupe!
</p> <!-- Etiquetas de tecnología con colores e iconos --> <div class="mt-3 contenedor-badges" data-astro-cid-awy57mrf> <span class="badge bg-html text-light" data-astro-cid-awy57mrf><i class="bx bxl-html5" data-astro-cid-awy57mrf></i> HTML</span> <span class="badge bg-css text-light" data-astro-cid-awy57mrf><i class="bx bxl-css3" data-astro-cid-awy57mrf></i> CSS</span> <span class="badge bg-js text-dark" data-astro-cid-awy57mrf><i class="bx bxl-javascript" data-astro-cid-awy57mrf></i> JavaScript</span> <span class="badge bg-bootstrap text-light" data-astro-cid-awy57mrf><i class="bi bi-bootstrap" data-astro-cid-awy57mrf></i>
Bootstrap</span> </div> </div> </div> </a> <!-- Pagina Web Productos belleza --> <a href="https://paginadeproductos.netlify.app/" class="col-md-4" data-astro-cid-awy57mrf> <div class="card glass-card text-center" data-astro-cid-awy57mrf> <img src="/imgs/proyectos/productos.png" class="card-img-top" alt="Pagina Web de productos de belleza" data-astro-cid-awy57mrf> <div class="card-body text-center" data-astro-cid-awy57mrf> <h5 class="card-title" data-astro-cid-awy57mrf>
Pagina Web de productos de belleza
</h5> <p class="card-text" data-astro-cid-awy57mrf>
Un catálogo online de productos de
                                            belleza. Explora las últimas
                                            tendencias y descubre productos de
                                            alta calidad. ¡Encuentra tu rutina
                                            de belleza perfecta!
</p> <!-- Etiquetas de tecnología con colores e iconos --> <div class="mt-3 contenedor-badges" data-astro-cid-awy57mrf> <span class="badge bg-html text-light" data-astro-cid-awy57mrf><i class="bx bxl-html5" data-astro-cid-awy57mrf></i> HTML</span> <span class="badge bg-css text-light" data-astro-cid-awy57mrf><i class="bx bxl-css3" data-astro-cid-awy57mrf></i> CSS</span> <span class="badge bg-js text-dark" data-astro-cid-awy57mrf><i class="bx bxl-javascript" data-astro-cid-awy57mrf></i> JavaScript</span> <span class="badge bg-bootstrap text-light" data-astro-cid-awy57mrf><i class="bi bi-bootstrap" data-astro-cid-awy57mrf></i>
Bootstrap</span> </div> </div> </div> </a> <!-- Número secreto: Alura Latam --> <a href="https://numero-secreto-axxving.netlify.app/" class="col-md-4" data-astro-cid-awy57mrf> <div class="card glass-card text-center" data-astro-cid-awy57mrf> <img src="/imgs/proyectos/numero-secreto.png" class="card-img-top" alt="Número secreto: Alura Latam" data-astro-cid-awy57mrf> <div class="card-body text-center" data-astro-cid-awy57mrf> <h5 class="card-title" data-astro-cid-awy57mrf>
Número secreto: Alura Latam
</h5> <p class="card-text" data-astro-cid-awy57mrf>
Un juego interactivo desarrollado
                                            como parte del desafío de Alura
                                            Latam. Pon a prueba tu habilidad
                                            para adivinar el número secreto.
                                            ¡Ponte a prueba y demuestra que eres
                                            el mejor!
</p> <!-- Etiquetas de tecnología con colores e iconos --> <div class="mt-3 contenedor-badges" data-astro-cid-awy57mrf> <span class="badge bg-html text-light" data-astro-cid-awy57mrf><i class="bx bxl-html5" data-astro-cid-awy57mrf></i> HTML</span> <span class="badge bg-css text-light" data-astro-cid-awy57mrf><i class="bx bxl-css3" data-astro-cid-awy57mrf></i> CSS</span> <span class="badge bg-js text-dark" data-astro-cid-awy57mrf><i class="bx bxl-javascript" data-astro-cid-awy57mrf></i> JavaScript</span> <span class="badge bg-bootstrap text-light" data-astro-cid-awy57mrf><i class="bi bi-bootstrap" data-astro-cid-awy57mrf></i>
Bootstrap</span> </div> </div> </div> </a> </div> </div> <!-- Tab 2 --> <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab" data-astro-cid-awy57mrf> <div class="row" data-astro-cid-awy57mrf></div> </div> <!-- Tab 3 --> <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab" data-astro-cid-awy57mrf> <div class="row" data-astro-cid-awy57mrf> <!-- Cards arriba --> <!-- Pagina Web MarketUP --> <div class="col-md-4" data-astro-cid-awy57mrf> <div class="card glass-card text-center" data-astro-cid-awy57mrf> <img src="/imgs/proyectos/marketup.png" class="card-img-top" alt="Pagina Web MarketUP" data-astro-cid-awy57mrf> <div class="card-body" data-astro-cid-awy57mrf> <h5 class="card-title" data-astro-cid-awy57mrf>
Pagina Web MarketUP
</h5> <p class="card-text" data-astro-cid-awy57mrf>
Un proyecto de desarrollo web para
                                            MarketUP. Diseñado para facilitar la
                                            gestión de negocios mediante una
                                            interfaz amigable y funcional.
                                            ¡Descubre cómo optimizar tu empresa!
</p> <!-- Etiquetas de tecnología con colores e iconos --> <div class="mt-3 contenedor-badges" data-astro-cid-awy57mrf> <span class="badge bg-html text-light" data-astro-cid-awy57mrf><i class="bx bxl-html5" data-astro-cid-awy57mrf></i> HTML</span> <span class="badge bg-css text-light" data-astro-cid-awy57mrf><i class="bx bxl-css3" data-astro-cid-awy57mrf></i> CSS</span> <span class="badge bg-js text-dark" data-astro-cid-awy57mrf><i class="bx bxl-javascript" data-astro-cid-awy57mrf></i> JavaScript</span> <span class="badge bg-bootstrap text-light" data-astro-cid-awy57mrf><i class="bi bi-bootstrap" data-astro-cid-awy57mrf></i>
Bootstrap</span> </div> </div> </div> </div> <!-- Pagina Web Chef Guadalupe Ramirez --> <div class="col-md-4" data-astro-cid-awy57mrf> <div class="card glass-card text-center" data-astro-cid-awy57mrf> <img src="/imgs/proyectos/chef.png" class="card-img-top" alt="Pagina Web Guadalupe Ramirez" data-astro-cid-awy57mrf> <div class="card-body text-center" data-astro-cid-awy57mrf> <h5 class="card-title" data-astro-cid-awy57mrf>
Pagina Web Guadalupe Ramirez
</h5> <p class="card-text" data-astro-cid-awy57mrf>
Un sitio web personalizado para la
                                            chef Guadalupe Ramirez. Muestra sus
                                            recetas, habilidades culinarias y
                                            experiencias. ¡Sumérgete en el mundo
                                            gastronómico de Guadalupe!
</p> <!-- Etiquetas de tecnología con colores e iconos --> <div class="mt-3 contenedor-badges" data-astro-cid-awy57mrf> <span class="badge bg-html text-light" data-astro-cid-awy57mrf><i class="bx bxl-html5" data-astro-cid-awy57mrf></i> HTML</span> <span class="badge bg-css text-light" data-astro-cid-awy57mrf><i class="bx bxl-css3" data-astro-cid-awy57mrf></i> CSS</span> <span class="badge bg-js text-dark" data-astro-cid-awy57mrf><i class="bx bxl-javascript" data-astro-cid-awy57mrf></i> JavaScript</span> <span class="badge bg-bootstrap text-light" data-astro-cid-awy57mrf><i class="bi bi-bootstrap" data-astro-cid-awy57mrf></i>
Bootstrap</span> </div> </div> </div> </div> <!-- Pagina Web Productos belleza --> <div class="col-md-4" data-astro-cid-awy57mrf> <div class="card glass-card text-center" data-astro-cid-awy57mrf> <img src="/imgs/proyectos/productos.png" class="card-img-top" alt="Pagina Web de productos de belleza" data-astro-cid-awy57mrf> <div class="card-body text-center" data-astro-cid-awy57mrf> <h5 class="card-title" data-astro-cid-awy57mrf>
Pagina Web de productos de belleza
</h5> <p class="card-text" data-astro-cid-awy57mrf>
Un catálogo online de productos de
                                            belleza. Explora las últimas
                                            tendencias y descubre productos de
                                            alta calidad. ¡Encuentra tu rutina
                                            de belleza perfecta!
</p> <!-- Etiquetas de tecnología con colores e iconos --> <div class="mt-3 contenedor-badges" data-astro-cid-awy57mrf> <span class="badge bg-html text-light" data-astro-cid-awy57mrf><i class="bx bxl-html5" data-astro-cid-awy57mrf></i> HTML</span> <span class="badge bg-css text-light" data-astro-cid-awy57mrf><i class="bx bxl-css3" data-astro-cid-awy57mrf></i> CSS</span> <span class="badge bg-js text-dark" data-astro-cid-awy57mrf><i class="bx bxl-javascript" data-astro-cid-awy57mrf></i> JavaScript</span> <span class="badge bg-bootstrap text-light" data-astro-cid-awy57mrf><i class="bi bi-bootstrap" data-astro-cid-awy57mrf></i>
Bootstrap</span> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <!--TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/proyectos.astro", void 0);

const $$Astro$4 = createAstro();
const $$Testimonios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Testimonios;
  return renderTemplate`<!--TODO Testimonios -->${maybeRenderHead()}<section class="container-fluid pt-5 pb-5" id="testimonios" data-astro-cid-7mndaata> <div class="container text-center pb-5" data-astro-cid-7mndaata> <div class="row" data-astro-cid-7mndaata> <div class="col text-center" data-astro-cid-7mndaata> <h6 class="azul" data-astro-cid-7mndaata>DESCUBRE TESTIMONIOS</h6> <h2 class="subtitulo" data-astro-cid-7mndaata>
EXPERIENCIAS REALES, VOCES SATISFECHAS
</h2> </div> </div> </div> <div class="container" data-astro-cid-7mndaata> <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-astro-cid-7mndaata> <div class="carousel-inner" data-astro-cid-7mndaata> <div class="carousel-item active" data-astro-cid-7mndaata> <div class="row justify-content-center" data-astro-cid-7mndaata> <div class="col-md-8" data-astro-cid-7mndaata> <div class="card border-0 shadow item-carrusel" data-astro-cid-7mndaata> <div class="card-body text-center" data-astro-cid-7mndaata> <i class="bi bi-chat-quote-fill fs-3 text-primary mb-3" data-astro-cid-7mndaata></i> <p class="card-text" data-astro-cid-7mndaata>
¡Excelente trabajo! Me ayudaron a crear
                                        un sitio web impresionante para mi
                                        negocio. ¡Altamente recomendado!
</p> <img src="imgs/Clientes/1.png" class="rounded-circle mx-auto mb-3" alt="Cliente 1" width="80" data-astro-cid-7mndaata> <h5 class="card-title mb-0" data-astro-cid-7mndaata>Juan</h5> <p class="card-text" data-astro-cid-7mndaata>Pérez</p> </div> </div> </div> </div> </div> <div class="carousel-item" data-astro-cid-7mndaata> <div class="row justify-content-center" data-astro-cid-7mndaata> <div class="col-md-8" data-astro-cid-7mndaata> <div class="card border-0 shadow item-carrusel" data-astro-cid-7mndaata> <div class="card-body text-center" data-astro-cid-7mndaata> <i class="bi bi-chat-quote-fill fs-3 text-primary mb-3" data-astro-cid-7mndaata></i> <p class="card-text" data-astro-cid-7mndaata>
Increíble atención al cliente y
                                        resultados impecables. ¡Gracias por tu
                                        trabajo!
</p> <img src="imgs/Clientes/2.png" class="rounded-circle mx-auto mb-3" alt="Cliente 2" width="80" data-astro-cid-7mndaata> <h5 class="card-title mb-0" data-astro-cid-7mndaata>María</h5> <p class="card-text" data-astro-cid-7mndaata>Gómez</p> </div> </div> </div> </div> </div> <div class="carousel-item" data-astro-cid-7mndaata> <div class="row justify-content-center" data-astro-cid-7mndaata> <div class="col-md-8" data-astro-cid-7mndaata> <div class="card border-0 shadow item-carrusel" data-astro-cid-7mndaata> <div class="card-body text-center" data-astro-cid-7mndaata> <i class="bi bi-chat-quote-fill fs-3 text-primary mb-3" data-astro-cid-7mndaata></i> <p class="card-text" data-astro-cid-7mndaata>
¡Muy profesional y talentoso! Hicieron
                                        realidad mi visión y estoy encantado con
                                        el resultado final.
</p> <img src="imgs/Clientes/3.png" class="rounded-circle mx-auto mb-3" alt="Cliente 3" width="80" data-astro-cid-7mndaata> <h5 class="card-title mb-0" data-astro-cid-7mndaata>Carlos</h5> <p class="card-text" data-astro-cid-7mndaata>Rodríguez</p> </div> </div> </div> </div> </div> </div> <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" data-astro-cid-7mndaata> <span class="carousel-control-prev-icon" aria-hidden="true" data-astro-cid-7mndaata></span> <span class="visually-hidden" data-astro-cid-7mndaata>Previous</span> </button> <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" data-astro-cid-7mndaata> <span class="carousel-control-next-icon" aria-hidden="true" data-astro-cid-7mndaata></span> <span class="visually-hidden" data-astro-cid-7mndaata>Next</span> </button> </div> </div> </section> <!--TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/testimonios.astro", void 0);

const $$Astro$3 = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`<!--TODO Contacto -->${maybeRenderHead()}<section class="container-fluid pt-5 pb-5" id="contacto" data-astro-cid-eztzsz44> <div class="container text-center pb-5" data-astro-cid-eztzsz44> <div class="row" data-astro-cid-eztzsz44> <div class="col text-center" data-astro-cid-eztzsz44> <h6 class="azul" data-astro-cid-eztzsz44>¡HABLEMOS!</h6> <h2 class="subtitulo" data-astro-cid-eztzsz44>
ESCUCHO ATENTAMENTE TUS COMENTARIOS Y PREGUNTAS
</h2> </div> </div> </div> <div class="container" data-astro-cid-eztzsz44> <div class="row" data-astro-cid-eztzsz44> <!-- Columna izquierda con las bolitas --> <div class="col-md-6" data-astro-cid-eztzsz44> <!-- Información de contacto mejorada y llamativa --> <div class="d-flex flex-column align-items-start mb-4" data-astro-cid-eztzsz44> <!-- Bolita 1 - Email --> <div class="contact-item d-flex align-items-center mb-3 rounded p-3" data-astro-cid-eztzsz44> <div class="icon-circle text-light" data-astro-cid-eztzsz44> <i class="bi bip bi-envelope-fill" data-astro-cid-eztzsz44></i> </div> <div data-astro-cid-eztzsz44> <h5 class="text-primary" data-astro-cid-eztzsz44>Email</h5> <p class="mb-0" data-astro-cid-eztzsz44>alex.ing.rz@gmail.com</p> </div> </div> <!-- Bolita 2 - Teléfono --> <div class="contact-item d-flex align-items-center mb-3 rounded p-3" data-astro-cid-eztzsz44> <div class="icon-circle text-light" data-astro-cid-eztzsz44> <i class="bi bip bi-telephone-fill" data-astro-cid-eztzsz44></i> </div> <div data-astro-cid-eztzsz44> <h5 class="text-success" data-astro-cid-eztzsz44>Teléfono</h5> <p class="mb-0" data-astro-cid-eztzsz44>+52 221 125 1774</p> </div> </div> <!-- Bolita 3 - Dirección --> <div class="contact-item d-flex align-items-center rounded p-3" data-astro-cid-eztzsz44> <div class="icon-circle text-light" data-astro-cid-eztzsz44> <i class="bi bip bi-geo-alt-fill" data-astro-cid-eztzsz44></i> </div> <div data-astro-cid-eztzsz44> <h5 class="text-warning" data-astro-cid-eztzsz44>Dirección</h5> <p class="mb-0" data-astro-cid-eztzsz44>México, Puebla, #72620</p> </div> </div> </div> </div> <!-- Columna derecha con el formulario de contacto --> <div class="col-md-6" data-astro-cid-eztzsz44> <form data-astro-cid-eztzsz44> <!-- Formulario de contacto --> <div class="row" data-astro-cid-eztzsz44> <div class="col-md-6 mb-3" data-astro-cid-eztzsz44> <input type="text" class="form-control glass mb-2" id="nombre" placeholder="Nombre" data-astro-cid-eztzsz44> </div> <div class="col-md-6 mb-3" data-astro-cid-eztzsz44> <input type="text" class="form-control glass mb-2" id="apellido" placeholder="Apellido" data-astro-cid-eztzsz44> </div> </div> <div class="row" data-astro-cid-eztzsz44> <div class="col-md-6 mb-3" data-astro-cid-eztzsz44> <input type="tel" class="form-control glass mb-2" id="telefono" placeholder="Teléfono" data-astro-cid-eztzsz44> </div> <div class="col-md-6 mb-3" data-astro-cid-eztzsz44> <input type="email" class="form-control glass mb-2" id="correo" placeholder="Correo electrónico" data-astro-cid-eztzsz44> </div> </div> <div class="mb-3" data-astro-cid-eztzsz44> <textarea class="form-control glass" id="mensaje" rows="4" placeholder="Escribe aquí tu mensaje" data-astro-cid-eztzsz44></textarea> </div> <button type="submit" class="btn btn-outline-secondary" data-astro-cid-eztzsz44>Enviar</button> </form> </div> </div> </div> </section> <!--TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/contacto.astro", void 0);

const $$Astro$2 = createAstro();
const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$News;
  return renderTemplate`<!--TODO News -->${maybeRenderHead()}<section class="container-fluid pt-5 pb-5" id="news" data-astro-cid-zo7tafxh> <div class="container container-news" data-astro-cid-zo7tafxh> <div class="row" data-astro-cid-zo7tafxh> <!-- Columna izquierda con título pequeño, título grande y título pequeño --> <div class="col-md-6" data-astro-cid-zo7tafxh> <h6 data-astro-cid-zo7tafxh>¡Suscríbete a nuestro newsletter!</h6> <h2 data-astro-cid-zo7tafxh>Recibe las últimas actualizaciones</h2> <h6 data-astro-cid-zo7tafxh>Mantente al tanto de nuestras novedades</h6> </div> <!-- Columna derecha con formulario de suscripción --> <div class="col-md-6 content-input mt-2" data-astro-cid-zo7tafxh> <form class="row g-3 align-items-center" data-astro-cid-zo7tafxh> <!-- Input para el correo electrónico con icono --> <div class="col-auto" data-astro-cid-zo7tafxh> <div class="input-group" data-astro-cid-zo7tafxh> <input type="email" class="form-control glass" id="email" placeholder="Tu correo electrónico" aria-label="Tu correo electrónico" aria-describedby="button-addon2" data-astro-cid-zo7tafxh> <button class="btn btn-outline-secondary glass-button" type="button" id="button-addon2" data-astro-cid-zo7tafxh><i class="bi bi-envelope" data-astro-cid-zo7tafxh></i></button> </div> </div> </form> </div> </div> </div> </section> <!--TODO News --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/news.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`<!--TODO Footer -->${maybeRenderHead()}<section class="container-fluid pt-5 pb-5" id="footer" data-astro-cid-k2f5zb5c> <div class="container" data-astro-cid-k2f5zb5c> <div class="row" data-astro-cid-k2f5zb5c> <!-- Primera columna con imagen, párrafo y redes sociales --> <div class="col-md-3 mt-3 mb-3" data-astro-cid-k2f5zb5c> <img width="200" class="mb-5" src="/imgs/logo-footer.png" alt="Logo" data-astro-cid-k2f5zb5c> <p class="" data-astro-cid-k2f5zb5c>
Transformo tu ideas en Sitios Web: La Innovación Conecta con
                    tu presencia online.
</p> <!-- Botones de redes sociales a la derecha, ocultos en pantallas pequeñas --> <div class="social-icons" data-astro-cid-k2f5zb5c> <button class="btn btn-outline-secondary btn-facebook me-2" data-astro-cid-k2f5zb5c><i class="bi bip bi-facebook" data-astro-cid-k2f5zb5c></i></button> <button class="btn btn-outline-secondary btn-linkedin me-2" data-astro-cid-k2f5zb5c><i class="bi bip bi-linkedin" data-astro-cid-k2f5zb5c></i></button> <button class="btn btn-outline-secondary btn-instagram" data-astro-cid-k2f5zb5c><i class="bi bip bi-instagram" data-astro-cid-k2f5zb5c></i></button> </div> </div> <!-- Segunda columna con título de Servicios y enlaces --> <div class="col-md-3 mt-3 mb-3" data-astro-cid-k2f5zb5c> <h3 class="mb-4 titulo" data-astro-cid-k2f5zb5c>Servicios</h3> <ul class="list-unstyled" data-astro-cid-k2f5zb5c> <li class="mb-3" data-astro-cid-k2f5zb5c> <a class="footer-a" href="#" data-astro-cid-k2f5zb5c>Pagina Web</a> </li> <li class="mb-3" data-astro-cid-k2f5zb5c> <a class="footer-a" href="#" data-astro-cid-k2f5zb5c>Aplicacion Web</a> </li> <li class="mb-3" data-astro-cid-k2f5zb5c> <a class="footer-a" href="#" data-astro-cid-k2f5zb5c>Diseño Web</a> </li> <li class="mb-3" data-astro-cid-k2f5zb5c> <a class="footer-a" href="#" data-astro-cid-k2f5zb5c>Asesoria Web</a> </li> <li class="mb-3" data-astro-cid-k2f5zb5c> <a class="footer-a" href="#" data-astro-cid-k2f5zb5c>Consultoria</a> </li> </ul> </div> <!-- Tercera columna con título de Enlaces Rápidos y enlaces --> <div class="col-md-3 mt-3 mb-3" data-astro-cid-k2f5zb5c> <h3 class="mb-4 titulo" data-astro-cid-k2f5zb5c>Enlaces Rápidos</h3> <ul class="list-unstyled" data-astro-cid-k2f5zb5c> <li class="mb-3" data-astro-cid-k2f5zb5c> <a class="footer-a" href="#sobre" data-astro-cid-k2f5zb5c>Acerca</a> </li> <li class="mb-3" data-astro-cid-k2f5zb5c> <a class="footer-a" href="#servicios" data-astro-cid-k2f5zb5c>Servicios</a> </li> <li class="mb-3" data-astro-cid-k2f5zb5c> <a class="footer-a" href="#proyectos" data-astro-cid-k2f5zb5c>Portafolio</a> </li> <li class="mb-3" data-astro-cid-k2f5zb5c> <a class="footer-a" href="#blog" data-astro-cid-k2f5zb5c>Blog</a> </li> <li class="mb-3" data-astro-cid-k2f5zb5c> <a class="footer-a" href="#contacto" data-astro-cid-k2f5zb5c>Contacto</a> </li> </ul> </div> <div class="col-md-3 mt-3 mb-3" data-astro-cid-k2f5zb5c> <h3 class="mb-4 titulo" data-astro-cid-k2f5zb5c>Contacto</h3> <ul class="list-unstyled" data-astro-cid-k2f5zb5c> <li class="mb-3" data-astro-cid-k2f5zb5c> <i class="bi bixe bi-geo-alt" data-astro-cid-k2f5zb5c></i> <a class="footer-a" href="#direccion" data-astro-cid-k2f5zb5c>México, Puebla.</a> </li> <li class="mb-3" data-astro-cid-k2f5zb5c> <i class="bi bixe bi-phone" data-astro-cid-k2f5zb5c></i> <a class="footer-a" href="#telefono" data-astro-cid-k2f5zb5c>2211251774</a> </li> <li class="mb-3" data-astro-cid-k2f5zb5c> <i class="bi bixe bi-envelope" data-astro-cid-k2f5zb5c></i> <a class="footer-a" href="#correo" data-astro-cid-k2f5zb5c>alex.ing.rz@gmail.com</a> </li> </ul> </div> </div> </div> </section> <!--TODO Estilos --> `;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/components/footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Scripts", $$Scripts, {})} ${renderComponent($$result2, "BtnUP", $$BotonUp, {})} ${renderComponent($$result2, "Spinner", $$Spinner, {})} ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "CardsIcon", $$CardsIcon, {})} ${renderComponent($$result2, "Sobre", $$Sobre, {})} ${renderComponent($$result2, "Swiper", $$Swiper, {})} ${renderComponent($$result2, "Habilidades", $$Habilidades, {})} ${renderComponent($$result2, "Servicios", $$Servicios, {})} ${renderComponent($$result2, "Proyectos", $$Proyectos, {})} ${renderComponent($$result2, "Testimonios", $$Testimonios, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} ${renderComponent($$result2, "News", $$News, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/pages/index.astro", void 0);

const $$file = "/home/alex/Documentos/GitHub/page-web-portafolio-axxving/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

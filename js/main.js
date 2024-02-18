// Inicializar ScrollReveal
const sr = ScrollReveal({
    origin: "bottom",   // Desde la parte inferior
    distance: "20px",   // Distancia de revelación
    duration: 2000,     // Duración de la animación
    delay: 300          // Retraso antes de la animación
});

// Revelar elementos del header
sr.reveal('#header', {
    origin: "top",      // Desde la parte superior
    distance: "20px"    // Distancia de revelación
});

// Revelar elementos del hero
sr.reveal('#hero .container-texto-hero', {
    origin: "left"      // Desde la izquierda
});
sr.reveal('#hero .container-planeta', {
    origin: "right"     // Desde la derecha
});

// Revelar elementos de la sección "Cards"
sr.reveal('#cards-one .card', {
    origin: "bottom",   // Desde la parte inferior
    distance: "20px",   // Distancia de revelación
    interval: 200       // Intervalo entre la animación de cada tarjeta
});

// Revelar elementos de la sección "Sobre"
sr.reveal('#titulo', {
    origin: "left",     // Desde la izquierda
    distance: "20px"    // Distancia de revelación
});
sr.reveal('#titulo .subtitulo', {
    origin: "right",    // Desde la derecha
    distance: "20px"    // Distancia de revelación
});

// Revelar elementos de la sección "Mi Bio"
sr.reveal('#sobre .contenedor-texto-sobre', {
    origin: "left",     // Desde la izquierda
    distance: "20px"    // Distancia de revelación
});
sr.reveal('#sobre img', {
    origin: "right",    // Desde la derecha
    distance: "20px"    // Distancia de revelación
});

// Revelar elementos de la sección "Cards Two"
sr.reveal('#cards-two .card', {
    origin: "bottom",   // Desde la parte inferior
    distance: "20px",   // Distancia de revelación
    interval: 200       // Intervalo entre la animación de cada tarjeta
});

// Revelar elementos de la sección "Habilidades"
sr.reveal('#habilidades .progress-bar', {
    origin: "bottom",   // Desde la parte inferior
    distance: "20px",   // Distancia de revelación
    interval: 200       // Intervalo entre la animación de cada barra de progreso
});

// Revelar títulos de secciones
sr.reveal('#titulo', {
    origin: "left",     // Desde la izquierda
    distance: "20px"    // Distancia de revelación
});
sr.reveal('#titulo .subtitulo', {
    origin: "right",    // Desde la derecha
    distance: "20px"    // Distancia de revelación
});

// Revelar título de la sección "Servicios"
sr.reveal('#titulo', {
    origin: "left",     // Desde la izquierda
    distance: "20px"    // Distancia de revelación
});
sr.reveal('#titulo .subtitulo', {
    origin: "right",    // Desde la derecha
    distance: "20px"    // Distancia de revelación
});

// Revelar elementos de la sección "Servicios"
sr.reveal('#servicios .card', {
    origin: "bottom",   // Desde la parte inferior
    distance: "20px",   // Distancia de revelación
    interval: 200       // Intervalo entre la animación de cada tarjeta
});

// Revelar título de la sección "Proyectos"
sr.reveal('#titulo', {
    origin: "left",     // Desde la izquierda
    distance: "20px"    // Distancia de revelación
});
sr.reveal('#titulo .subtitulo', {
    origin: "right",    // Desde la derecha
    distance: "20px"    // Distancia de revelación
});

// Revelar elementos de la sección "Proyectos"
sr.reveal('#proyectos .tab-content', {
    origin: "bottom",   // Desde la parte inferior
    distance: "20px"    // Distancia de revelación
});

// Revelar título de la sección "Testimonios"
sr.reveal('#titulo', {
    origin: "left",     // Desde la izquierda
    distance: "20px"    // Distancia de revelación
});
sr.reveal('#titulo .subtitulo', {
    origin: "right",    // Desde la derecha
    distance: "20px"    // Distancia de revelación
});

// Revelar elementos de la sección "Testimonios"
sr.reveal('#testimonios', {
    origin: "bottom",   // Desde la parte inferior
    distance: "20px",   // Distancia de revelación
    interval: 300       // Intervalo entre cada elemento
});

// Revelar título de la sección "Blog"
sr.reveal('#titulo', {
    origin: "left",     // Desde la izquierda
    distance: "20px"    // Distancia de revelación
});
sr.reveal('#titulo .subtitulo', {
    origin: "right",    // Desde la derecha
    distance: "20px"    // Distancia de revelación
});

// Revelar elementos de la sección "Blog"
sr.reveal('#blog .card', {
    origin: "bottom",   // Desde la parte inferior
    distance: "20px",   // Distancia de revelación
    interval: 200       // Intervalo entre cada elemento
});

// Revelar título de la sección "Contacto"
sr.reveal('#titulo', {
    origin: "left",     // Desde la izquierda
    distance: "20px"    // Distancia de revelación
});
sr.reveal('#titulo .subtitulo', {
    origin: "right",    // Desde la derecha
    distance: "20px"    // Distancia de revelación
});

// Revelar elementos de la sección "Contacto"
sr.reveal('#contacto .col-md-6', {
    origin: "left",     // Desde la izquierda
    distance: "20px",   // Distancia de revelación
    interval: 200       // Intervalo entre cada elemento
});
sr.reveal('#contacto form', {
    origin: "right",    // Desde la derecha
    distance: "20px",   // Distancia de revelación
    interval: 200       // Intervalo entre cada elemento
});

// Revelar elementos de la sección "News"
sr.reveal('#news h6', {
    origin: "left",     // Desde la izquierda
    distance: "20px"    // Distancia de revelación
});
sr.reveal('#news h2', {
    origin: "bottom",   // Desde abajo
    distance: "20px"    // Distancia de revelación
});
sr.reveal('#news h6:last-of-type', {
    origin: "right",    // Desde la derecha
    distance: "20px"    // Distancia de revelación
});
sr.reveal('#news .content-input', {
    origin: "bottom",   // Desde abajo
    distance: "20px"    // Distancia de revelación
});

// Revelar elementos de la sección "Footer"
sr.reveal('#footer .col-md-3', {
    origin: "bottom",   // Desde abajo
    distance: "20px",   // Distancia de revelación
    interval: 200       // Intervalo entre cada columna
});
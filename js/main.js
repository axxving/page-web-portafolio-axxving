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

// Revelar elementos de la sección "Servicios"
sr.reveal('#servicios .card', {
    origin: "bottom",   // Desde la parte inferior
    distance: "20px",   // Distancia de revelación
    interval: 200       // Intervalo entre la animación de cada tarjeta
});

// Revelar elementos de la sección "Proyectos"
sr.reveal('#proyectos .tab-content', {
    origin: "bottom",   // Desde la parte inferior
    distance: "20px"    // Distancia de revelación
});

// Revelar elementos de la sección "Blog"
sr.reveal('#blog .card', {
    origin: "bottom",   // Desde la parte inferior
    distance: "20px",   // Distancia de revelación
    interval: 200       // Intervalo entre cada elemento
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

// Boton UP
document.addEventListener("DOMContentLoaded", function () {
    const btnUp = document.getElementById("boton-up");

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY || window.pageYOffset;

        if (scrollY >= 200) {
            btnUp.style.bottom = "15px"; // Ajusta la posición según tus necesidades
        } else {
            btnUp.style.bottom = "-100px"; // Oculta el botón fuera de la pantalla
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento de navegación
    var nav = document.querySelector('.navbar-nav');

    // Agrega un evento de clic para los enlaces del menú
    for (var i = 0; i < nav.children.length; i++) {
        var link = nav.children[i].querySelector('a');
        link.addEventListener('click', function (event) {
            // Previene la acción predeterminada del enlace
            event.preventDefault();

            // Obtiene el destino del enlace
            var targetSectionId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetSectionId);

            // Desplaza la ventana a la posición de la sección
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Cambia el color del texto del enlace clicado
            for (var j = 0; j < nav.children.length; j++) {
                nav.children[j].querySelector('a').style.color = '';
            }
            this.style.color = '#5CE1E6';
        });
    }

    // Agrega un evento de escucha para hacer algo cuando la ventana se desplace
    window.addEventListener('scroll', function () {
        // Restaura el color del texto cuando te desplazas fuera de todas las secciones
        for (var i = 0; i < nav.children.length; i++) {
            nav.children[i].querySelector('a').style.color = '';
        }
    });
});

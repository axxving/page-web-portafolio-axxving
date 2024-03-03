// Inicializar ScrollReveal
const sr = ScrollReveal({
    origin: "bottom",   // Desde la parte inferior
    distance: "20px",   // Distancia de revelación
    duration: 2000,     // Duración de la animación
    delay: 300          // Retraso antes de la animación
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


// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtén el botón de hamburguesa y la barra de navegación
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarNav = document.querySelector('#navbarNav');

    // Agrega un evento de clic al botón de hamburguesa
    navbarToggler.addEventListener('click', function () {
        // Verifica si la barra de navegación está abierta
        var isOpen = navbarNav.classList.contains('show');

        // Si está abierta, ciérrala; si está cerrada, no hagas nada
        if (isOpen) {
            navbarToggler.click(); // Simula un clic para cerrar la barra de navegación
        }
    });

    // Agrega eventos de clic a los elementos del menú solo si la barra de navegación está abierta
    var menuItems = document.querySelectorAll('.navbar-nav .nav-link');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var isOpen = navbarNav.classList.contains('show');
            if (isOpen) {
                navbarToggler.click(); // Cierra la barra de navegación al hacer clic en un elemento del menú
            }
        });
    });
});


// Este evento se dispara cuando el DOM ha sido completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Inicializar Swiper para la nueva sección de tarjetas con diseño diferente
    const miSwiper = new Swiper(".miSwiper", {
        // Definir la cantidad de tarjetas visibles de forma automática
        slidesPerView: 'auto',
        // Espacio entre tarjetas
        spaceBetween: 10,
        // Configuración de navegación con botones siguiente y anterior
        navigation: {
            nextEl: ".swiper-button-next", // Selector del botón siguiente
            prevEl: ".swiper-button-prev", // Selector del botón anterior
        },
        // Configuración de breakpoints para cambiar la cantidad de tarjetas visibles en diferentes tamaños de pantalla
        breakpoints: {
            // Pantallas pequeñas: 576px o más
            576: {
                slidesPerView: 1.5, // Mostrar una tarjeta por pantalla
            },
            // Pantallas medianas: 768px o más
            768: {
                slidesPerView: 2.5, // Mostrar dos tarjetas por pantalla
            },
            // Pantallas grandes: 992px o más
            992: {
                slidesPerView: 3.5, // Mostrar tres tarjetas por pantalla
            }
        }
    });
});

// Esperar a que todos los estilos CSS se carguen completamente
window.addEventListener("load", function () {
    // Ocultar la pantalla de carga después de que la página haya cargado completamente
    document.getElementById("loader").style.opacity = 0;
    document.getElementById("content").style.display = "block";
});
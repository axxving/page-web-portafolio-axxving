let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    const header = document.getElementById('header');

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            header.classList.add('shadow');
            header.style.transform = 'translateY(0)';
        }, 300); // Adjust the delay as needed
    } else {
        // Scrolling up
        header.classList.remove('shadow');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

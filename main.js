// Show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Toggle the show-menu class for the navigation menu
            nav.classList.toggle('show-menu');
            console.log("Clicked");
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

// Remove menu on nav__link click
const navLinks = document.querySelectorAll('.nav__link');

function closeMenu() {
    const navMenu = document.getElementById('nav-menu');
    // Remove the show-menu class from the navigation menu
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(navLink => navLink.addEventListener('click', closeMenu));

// Scroll sections and activate links
/*const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}
*/
const headerHeight = document.querySelector('.l-header').offsetHeight;
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - headerHeight;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}


window.addEventListener('scroll', scrollActive);

// Show scroll top button
function showScrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 200 viewport height, add the show-scroll class
    if (window.scrollY >= 200) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', showScrollTop);

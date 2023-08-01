// Funcion para cambiar el background del sticky menu
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

/* Funcion para activar el menú responsive */
function toggleMenu() {
    var menuToggle = document.querySelector('.menuToggle');
    var navbar = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
}
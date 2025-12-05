// Efecto scroll del header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Toggle menú lateral
const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("nav-menu-side");
const overlay = document.getElementById("menu-overlay");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Cerrar tocando fuera
overlay.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
});

// Cerrar al hacer clic en un enlace
document.querySelectorAll("#nav-menu-side a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
});


// Botón
const whatsappBtn = document.getElementById('whatsapp-btn');

// Control del scroll para mostrar el botón (app.js)

let whatsappShown = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 200 && !whatsappShown) {
    whatsappTimeline.play(); // usa la animación definida en min.js
    whatsappShown = true;
  }
});

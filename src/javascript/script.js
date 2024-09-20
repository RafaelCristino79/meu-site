const btnmobile = document.querySelector(".btn-mobile");
const menumobile = document.querySelector(".nav_list");
const body = document.body; // Seleciona o body para controlar o scroll
const menuItems = document.querySelectorAll(".nav_list a"); // Seleciona os links do menu

btnmobile.addEventListener("click", () => {
    btnmobile.classList.toggle('active');    
    menumobile.classList.toggle('active');
    
    // Bloqueia ou desbloqueia o scroll quando o menu estiver ativo
    if (menumobile.classList.contains('active')) {
        body.style.overflow = 'hidden'; // Bloqueia o scroll
    } else {
        body.style.overflow = ''; // Restaura o scroll
    }
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!menumobile.contains(e.target) && !btnmobile.contains(e.target)) {
        menumobile.classList.remove('active');
        btnmobile.classList.remove('active');
        body.style.overflow = ''; // Restaura o scroll quando o menu fecha
    }
});

// Fecha o menu ao clicar em uma opção do menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menumobile.classList.remove('active');
        btnmobile.classList.remove('active');
        body.style.overflow = ''; // Restaura o scroll quando o menu fecha
    });
});





// Verifica se a tela é de um dispositivo móvel
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

// Adiciona uma transição suave para a navbar
navbar.style.transition = "top 0.3s ease";

// Manipula o evento de scroll
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset;

    if (scrollTop > lastScrollTop) {
        // Scroll para baixo - esconder navbar
        navbar.style.top = isMobile() ? "-100px" : "-100px";
    } else {
        // Scroll para cima - mostrar navbar
        navbar.style.top = "0";
    }

    // Alternar entre a classe transparente e a sólida dependendo da posição do scroll
    if (scrollTop > 0) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }

    lastScrollTop = scrollTop;
});
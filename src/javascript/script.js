const btnmobile = document.querySelector(".btn-mobile");
const menumobile = document.querySelector(".nav_list");
const body = document.body; // Seleciona o body para controlar o scroll
const menuItems = document.querySelectorAll(".nav_list a"); // Seleciona os links do menu
const navbar = document.getElementById("navbar");
let isMenuOpen = false; // Flag para saber se o menu está aberto
let lastScrollTop = 0; // Controle do scroll

// Adiciona uma transição suave para a navbar
navbar.style.transition = "top 0.3s ease"; // Transição suave de 0.3s ao alterar a propriedade 'top'

// Função que lida com o scroll quando o menu está fechado
function handleScroll() {
    if (isMenuOpen) return; // Se o menu estiver aberto, não faz nada

    let scrollTop = window.pageYOffset;

    // Ocultar navbar ao rolar para baixo e mostrar ao rolar para cima
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px"; // Esconde a navbar com transição suave
    } else {
        navbar.style.top = "0"; // Mostra a navbar com transição suave
    }

    lastScrollTop = scrollTop;
}

// Evento de clique no botão do menu mobile
btnmobile.addEventListener("click", () => {
    btnmobile.classList.toggle('active');    
    menumobile.classList.toggle('active');
    isMenuOpen = menumobile.classList.contains('active'); // Atualiza o status do menu

    // Bloqueia ou desbloqueia o scroll quando o menu estiver ativo
    if (isMenuOpen) {
        body.style.overflow = 'hidden'; // Bloqueia o scroll
        navbar.style.top = "0"; // Garante que a navbar fique visível ao abrir o menu
        navbar.style.position = "fixed"; // Fixa a navbar no topo
        window.removeEventListener("scroll", handleScroll); // Desabilita o scroll enquanto o menu está aberto
    } else {
        body.style.overflow = ''; // Restaura o scroll
        navbar.style.position = ""; // Restaura o comportamento normal da navbar
        window.addEventListener("scroll", handleScroll); // Habilita o scroll quando o menu fecha
    }
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!menumobile.contains(e.target) && !btnmobile.contains(e.target)) {
        menumobile.classList.remove('active');
        btnmobile.classList.remove('active');
        body.style.overflow = ''; // Restaura o scroll quando o menu fecha
        isMenuOpen = false; // Atualiza o status do menu
        window.addEventListener("scroll", handleScroll); // Reativa o scroll
    }
});

// Fecha o menu ao clicar em uma opção do menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menumobile.classList.remove('active');
        btnmobile.classList.remove('active');
        body.style.overflow = ''; // Restaura o scroll quando o menu fecha
        isMenuOpen = false; // Atualiza o status do menu
        window.addEventListener("scroll", handleScroll); // Reativa o scroll
    });
});

// Verifica se a tela é de um dispositivo móvel
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

// Adiciona o evento de scroll inicialmente
window.addEventListener("scroll", handleScroll);


//accordion

// Seleciona todos os cabeçalhos do acordeão
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(accordion => {
  accordion.addEventListener('click', function() {
    // Seleciona o corpo do acordeão relacionado
    const body = this.nextElementSibling;

    // Alterna a classe "active" no corpo do acordeão
    body.classList.toggle('active');

    // Fecha os outros itens do acordeão ao abrir um novo
    accordions.forEach(item => {
      const otherBody = item.nextElementSibling;
      if (otherBody !== body) {
        otherBody.classList.remove('active');
      }
    });
  });
});


//Carrossel de imagens - Equipe

new Swiper('.card-wrapper1', {
    // Optional parameters
    loop: true,
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
      el: '#pagination1',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#next1',
      prevEl: '#prev1',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  
  });

  //

// Instância do segundo carrossel
new Swiper('#carrossel2', {
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: '#pagination2', // Paginação específica do segundo carrossel
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '#next2', // Botões de navegação específicos do segundo carrossel
        prevEl: '#prev2',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});



  //Modal equipe - 1

  const button = document.querySelector("#btn-modal-1")
  const modal = document.querySelector("#dialog-1")
  const buttonClose = document.querySelector("#close-modal")

  button.onclick = function () {
    modal.showModal()
    modal.scrollTop = 0;
    document.documentElement.classList.add("no-scroll")
  }

  buttonClose.onclick = function () {
    modal.close()
    document.documentElement.classList.remove("no-scroll")
  }


  //Modal equipe - 2

  const button2 = document.querySelector("#btn-modal-2")
  const modal2 = document.querySelector("#dialog-2")
  const buttonClose2 = document.querySelector("#close-modal2")

  button2.onclick = function () {
    modal2.showModal()
    modal2.scrollTop = 0;
    document.documentElement.classList.add("no-scroll")
  }

  buttonClose2.onclick = function () {
    modal2.close()
    document.documentElement.classList.remove("no-scroll")
  }


   //Modal equipe - 3

   const button3 = document.querySelector("#btn-modal-3")
   const modal3 = document.querySelector("#dialog-3")
   const buttonClose3 = document.querySelector("#close-modal3")
 
   button3.onclick = function () {
     modal3.showModal()
     modal3.scrollTop = 0;
     document.documentElement.classList.add("no-scroll")
   }
 
   buttonClose3.onclick = function () {
     modal3.close()
     document.documentElement.classList.remove("no-scroll")
   }



    //Modal equipe - 4

    const button4 = document.querySelector("#btn-modal-4")
    const modal4 = document.querySelector("#dialog-4")
    const buttonClose4 = document.querySelector("#close-modal4")
  
    button4.onclick = function () {
      modal4.showModal()
      modal4.scrollTop = 0;
      document.documentElement.classList.add("no-scroll")
    }
  
    buttonClose4.onclick = function () {
      modal4.close()
      document.documentElement.classList.remove("no-scroll")
    }
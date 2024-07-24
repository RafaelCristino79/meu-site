const btnmobile = document.querySelector(".btn-mobile");
const menumobile = document.querySelector(".nav_list");

btnmobile.addEventListener("click", () => {
    btnmobile.classList.toggle('active');    
    menumobile.classList.toggle('active');    
})



const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => (
    accordion.addEventListener('click', () =>{
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
))


function redirectToExternalDownload() {
    // Link para o arquivo externo
    var externalDownloadLink = "https://drive.usercontent.google.com/download?id=1Nr1ga8pGj3Y4IuRxmCMx0EoKpqVu0CRr&export=download";
    
    // Redireciona o navegador para o link de download externo
    window.location.href = externalDownloadLink;
  }

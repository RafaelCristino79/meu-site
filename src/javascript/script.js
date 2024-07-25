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




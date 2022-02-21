$('.slider-principal').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000
});

const menu = document.querySelector("#menu-hamburguer")
const menuNav = document.querySelector("nav")

menu.addEventListener("click",()=>{
   menuNav.classList.toggle("menuAtivo")  
})

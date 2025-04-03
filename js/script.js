function menuMobile() {
    if (document.querySelector(".nav__list").style.display == "flex") {
        document.querySelector(".nav__list").style.display = "none";
    }
    else {
        document.querySelector(".nav__list").style.display = "flex";
    }
}


function monitoraScroll() {
    if (window.scrollY === 0) {
        //Ocultar Botão
        document.querySelector(".scrollbutton").style.display = "none";
    } else {
        //Mostrar Botão
        document.querySelector(".scrollbutton").style.display = "block";
    }
}

function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.querySelector(".menu__mobile").addEventListener("click", menuMobile);
window.addEventListener("scroll", monitoraScroll); 
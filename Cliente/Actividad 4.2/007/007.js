"use strict"

//simplemente creo las instancias de las etiquetas
let img = document.querySelector("img");
let div = document.querySelector(".menu");
let titleText = document.querySelector(".title-text");

//hago una funcion con un event listener, que al hacer click en el enunciado de 
//la lista se muestre o se oculte
div.addEventListener("click", function() {
    //al no tener acceso a css, he optado por añadir y eliminar la etiqueta hidden para mostrar y viceversa
    if (img.hasAttribute("hidden")) {
        //además le cambio el título
        titleText.textContent = "v Los chuches";
        img.removeAttribute("hidden");
    } else {
        titleText.textContent = "> Los chuches";
        img.setAttribute("hidden", "");
    }
});

//Se que no es una lista como tal porque sale una foto, pero me he tomado mis licencias, ya que
//en vez de poner 1 ul y 5 li he puesto 1 imagen, en caso de la lista simplemente oculto el ul
//o incluso creo un div, lo meto todo dentro y hago lo mismo
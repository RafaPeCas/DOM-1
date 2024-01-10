"use strict"


//Primero selecciono todos los enlaces
let links = document.querySelectorAll("a");

//Ahora hago un for of para ir recorriendolos
for (let link of links) {
    //Aquí lo que hago es obtener el atributo para poder tratar con el
    let href = link.getAttribute("href");
    //las condiciones son: tiene que no ser null, es decir, que exista, tiene que tener "://" y no puede empezar por "http://internal.com"
    if (href && href.includes("://") && !href.startsWith("http://internal.com")) {
        //Si se cumple todo esto le da el estilo a las letras para que sean moradas
        link.style.color = "purple";
    }
}

//Inyectar styles directamente en el html es una mala práctica, lo que se debería hacer es por ejemplo crear una clase
//en css que cambie el color del texto a morado y añadirle esa clase a la etiqueta, pero como es un ejercicio
//simple de ejemplo esto es mucho más rápido y limpio y cumple la función
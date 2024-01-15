"use strict"

//creo una variable para la foto principal
let mainImg = document.querySelector("#mainImg img");

//creo un eventListener para la galeria, para que se active al clickar sobre una imagen
document.getElementById('gallery').addEventListener('click', function (event) {

    //esto comprueba que lo pulsado sea una imagen
    if (event.target.tagName === 'IMG') {
        //esto crea una variable con el valor de la imagen pulsada
        let clickedImg = event.target;

        //verifico si la variable mainImg es null
        if (mainImg === null) {
            //si es null, asigna la imagen clicada a mainImg
            mainImg = clickedImg;
        } else {
            //si mainImg no es null, realiza un intercambio de las src de las imágenes y los alt
            let tempSrc = clickedImg.src;
            clickedImg.src = mainImg.src;
            clickedImg.alt = mainImg.alt;

            mainImg.src = tempSrc;
            mainImg.alt = tempAlt;
        }
    }
});
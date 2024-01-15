"use strict"

function update() {
    //creo la fecha actual
    let date = new Date();
    //creo una variable para minutos, otra para horas y otra para segundos
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    //para imprimirlo en el documento, utilizo el query selecto para localizar los span por sus clases
    //y dentro con innerHTML inserto el valor de la hora, minuto y segundo
    clock.querySelector(".hh").innerHTML = hh;
    clock.querySelector(".mm").innerHTML = mm;
    clock.querySelector(".ss").innerHTML = ss;
}

//creo esta variable para actualizar el contenido del reloj
let actualizate;

function clockStart() {
    //si al pulsar el boton la variable no está seteada, la setea de forma que
    if (!actualizate) { 
        //cada segundo se ejecute la funcion update
        actualizate = setInterval(update, 1000);
    }
}

function clockStop() {
    //esto lo que hace es eliminar el intervalo que llama a la funcion update en este caso cada segundo
    clearInterval(actualizate);
    //le cambio el valor a actualizate para que sea falso y en la otra funcion se inicialice de nuevo
    actualizate = false; 
}
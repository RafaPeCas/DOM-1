"use strict"

//esto pasa por utilizar el onclick en un a, entonces aunque realice la accion de la funcion
//va a ir al enlace de todas formas, para evitar esto hay que usar un event.preventDefault()
//que anula el uso por defecto de una etiqueta en pos del codigo

function handler() {
    alert("000");
    event.preventDefault() //con esta linea ya funcionaria
    return false;
}

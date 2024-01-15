"use strict"

function runOnKeys(func, ...codes) {
    let keys = new Set();

    //crep un eventListener que lo que haga es escuchar si el usuario pulsa alguna tecla
    document.addEventListener('keydown', function (event) {
        //si la pulsa la añade a un array
        keys.add(event.code);
        //creo un for of para iterar entre los valores del array y comprobar si los 2 botones necesarios
        //han sido pulsados
        for (let key of keys) {
            //Si los botones pulsados no son los correctos sale de la funcion y prueba de nuevo
            if (!keys.has(key)) {
                return;
            }
        }
        //si los botones son los correctos ocurre lo siguiente:
        window.open("https://view.genial.ly/64122587b692cc001366b7a7/presentation-misterio-nuestro", "_blank");
        document.querySelector("p").setAttribute("hidden", "");
        document.querySelector("img").removeAttribute("hidden");
    });

    //esto lo que hace es que al levantar las teclas limpia el array que guarda que teclas han sido pulsadas
    document.addEventListener('keyup', function (event) {
        keys.delete(event.code);
    });

}

//aquí defino que letras serán las que hagan que pasen cositas, en este caso la M y la N
runOnKeys(
    "KeyM",
    "KeyN"
);
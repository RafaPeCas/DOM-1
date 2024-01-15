"use strict"

//defino lo que será el textArea y el div actual
let area;
let container = document.querySelector("div");

//la funcion modifyContent es llamada al pulsar el div
function modifyContent() {
    //aqui le asigno a la variable para que sea un textarea
    area = document.createElement('textarea');
    //le doy un par de estilos para que ocupe casi toda la pantalla
    area.style.width = "100%"
    area.style.height = "90vh"
    //aqui lo que hago es hacer que el contenido del textarea sea el codigo de dentro
    //del container, en este caso el h1 y los 2 p
    area.value = container.innerHTML;

    //aqui reemplazamos el div original por el textarea para modificarlo
    container.replaceWith(area);
    area.focus();
    
    //aqui lo que hago es que al pulsar la tecla enter pierda el focus el textarea
    area.onkeydown = function (event) {
        if (event.key == 'Enter') {
            this.blur();
        }
    };

    //y aqui lo que hacemos es que cuando el textArea pierda el focus salga del
    //"modo edicion"
    area.onblur = function () {
        modifyContentEnd();
    };

}

function modifyContentEnd() {
    //esto lo que haces es asignarle al div orinigial que es el container, 
    //todo lo escrito en el text area y luego reemplaza el textarea por el container de nuevo 
    container.innerHTML = area.value;
    area.replaceWith(container);
}
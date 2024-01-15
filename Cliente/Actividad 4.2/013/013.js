"use strict";

//aqui me he tomado la libertad de poner un eventListener porque considero
//que queda mejor que un alert

//creo el objeto para la etiqueta cuyo id es alumnos
let alumnos = document.getElementById('alumnos');

//creo el event listener que este escuchando que opcion hemos elegido
alumnos.addEventListener('change', function () {
    //Creo esta variable para obtener la opcion pulsada
    let selectedOption = alumnos.options[alumnos.selectedIndex];

    //Llamo a la funcion que imprime la seleccion
    select(selectedOption)
});

//aqui lo que hago es añadir una nueva opcion con el texto y el value en ese orden
let newOption = new Option("Cutito lindo", "Cutito");
//aqui lo añado a la lista ya existente
alumnos.append(newOption);
//aqui marco la opcion seleccionada
newOption.selected = true;
//imprimo
select(newOption)

function select(selectedOption) {
    //imprime el resultado en la etiqueta p que cree antes para esto mismo
    document.querySelector("p").innerHTML = "Has seleccionado " + selectedOption.innerHTML;
}

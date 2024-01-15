"use strict"

ul.onclick = function (event) {
    //esta condición evita que pulsemo otro elemento dentro del ul que no sea un li, como por
    //ejemplo el propio ul
    if (event.target.tagName != "LI") return;

    //esta condicion determina si estamos haciendo una selección multiple o una individual
    if (event.ctrlKey || event.metaKey) {
        //al pulsar la tecla control o cmd para mac, se llamará a la funcion para seleccionar varios
        //elementos, en este caso event.target es la etiqueta pulsada, li
        toggleSelect(event.target);
    } else {
        //en caso contrario se seleccionará solo uno
        singleSelect(event.target);
    }
}
//esta es para seleccionar varios, simplemente añade el estilo del background-color al pulsar
//sobre una etiqueta li
function toggleSelect(li) {
    li.style.backgroundColor="green";
}

//esta funcion es para seleccion individual, que comprueba si hay mas elementos seleccionados
//y de ser así le quita la seleccion y se la pone al elemento seleccionado
function singleSelect(li) {
    //selecciona todas las etiquetas li dentro de ul que tengan el estilo bg green
    let selected = ul.querySelectorAll('li[style*="background-color: green;"]');
    //itera por los elementos del array recien creado y les elimina el estilo
    for (let lis of selected) {
        lis.style.removeProperty('background-color');
    }
    //le añade el estilo a la etiqueta individual seleccionada
    li.style.backgroundColor="green";
}

//en este caso si lo he hecho sin el css porque no era tan complicado como el anterior
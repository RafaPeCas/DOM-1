"use strict"

//como tiene un guion en el nombre, la forma de seleccionarlo es:
let table = document.getElementById("age-table");
console.log(table);

//selecciono todos los elementos con etiqueta label dentro de la tabla y los muestro con un bucle for of
console.log("labels dentro de la tabla:");
for (let label of table.querySelectorAll("label")){
    console.log(label);
}

//selecciono el primer elemento td de la tabla, en este caso es el que contiene la palabra Age:
console.log(table.querySelector("td"));

//Para encontrar el formulario por su nombre, se pone forms["nombre del formulario"]
console.log("formulario con nombre search");
console.log(document.forms["search"]);

//Para encontrar el primer input, selecciono el formulario al igual que antes y le añado el querySelector
//que selecciona el primer elemento especificado
console.log(document.forms["search"].querySelector("input"));

//para seleccionar el ultimo, lo que hago es seleccionar todos los input y almacenarlos en un array,
//después le digo que me elija el que está en ultima posición y ese es el último
console.log("Último elemento tipo input del formulario search")
let inputList = document.forms["search"].querySelectorAll("input");
console.log(inputList[inputList.length-1]);
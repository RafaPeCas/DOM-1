"use strict"

let elem1 = document.getElementById("textNode");
let elem2 = document.getElementById("innerHTML");
let elem3 = document.getElementById("textContent");

//Texto de pruebas
let text = "¡Hola, mundo!";

//createTextNode y append
let textNode1 = document.createTextNode(text);
elem1.append(textNode1);
console.log("Método 1 para elem1:", textNode1);

//innerHTML
elem2.innerHTML = text;
console.log("Método 2 para elem2:", text);

//textContent
elem3.textContent = text;
console.log("Método 3 para elem3:", text);

//Aparentemente son lo mismo, y en el html es lo mismo, pero por consola se puede ver
//como con el metodo 1 se crea un elemento y con los 2 y 3 es solamente texto
//por lo que el metodo 2 y 3 son iguales pero el 1 es diferente
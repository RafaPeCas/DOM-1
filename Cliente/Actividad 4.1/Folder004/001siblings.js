"use strict"

//En este caso efectivamente da null, porque tras el lastChild no hay más espacios en blanco
//ni etiquetas a la misma altura
console.log(document.querySelector("div").lastChild.nextSibling)

//en cambio entre el primer elemento y el padre hay un espacio en blanco que sería un #text,
//por lo que no es null
console.log(document.querySelector("div").children[0].previousSibling)
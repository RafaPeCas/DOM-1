"use strict"

let button = document.querySelector("button");

//se ejecutan el primero y el ultimo, ya que para borrar la funcion tenemos que pasar exactamente
//la funcion que queremos borrar, pero en cambio estamos pasando una funcion identica, pero no la misma
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

//para poder borrarla deberiamos tener un handler como este
function handler() {
    alert("1");
}

button.addEventListener("click", handler);
button.removeEventListener("click", handler);
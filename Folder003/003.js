"use strict"

//Aquí lo que hago es comprobar si tiene el atributo y con un if imprimo una cosa u otra según el resultado
document.querySelector("a").hasAttribute("target") ? console.log(document.querySelector("a").target) : console.log("El atributo target no está presente");

//Creo una variable por comodidad
let firstLi =document.querySelector("ul").firstElementChild;
//Hago exactamente lo mismo, solo que seleccionando al primer hijo y cambiando data-tipo por dataset.tipo,
//ya que en js no se pueden poner guiones y dataset muestra toda la info de los data-*, para especificar
//que queremos el tipo ponemos .tipo
firstLi.hasAttribute("data-tipo") ? console.log(document.querySelector("a").dataset.tipo) : console.log("El atributo data-tipo no está presente");

//creo la variable parrafo por comodidad
let parrafo=document.querySelector(".parrafo");
//Para cambiar el valor simplemente se iguala al valor que le quieras poner
parrafo.dataset.tipo="nuevo-parrafo"; 
//Lo muestro por consola
console.log(parrafo.dataset.tipo);

//simplemente pongo el style deseado a la etiqueta h1
document.querySelector("h1").style="color:blue";

//Para borrar el atributo se selecciona la etiqueta, en este caso estoy reutilizando la variable de antes
//y se utiliza la funcion removeAttribute
firstLi.removeAttribute("data-tipo");
console.log(firstLi.attributes);


//Compruebo si hay registros en el dataset
if (Object.keys(document.querySelector("a").dataset).length > 0) {
    //Si hay registros los muestra
    console.log("Hay personalizados y son los siguientes:", document.querySelector("a").dataset);
} else {
    //En caso contrario imprime que no hay registros
    console.log("No hay ninguno personalizado");
}
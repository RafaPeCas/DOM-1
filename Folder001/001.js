"use strict"

//Para obtener los childNodes de una etiqueta tenemos que indicar, mediante el id en este caso, de que elementos queremos 
//sacar sus hijos Para ello creo una variable que va a almacenar un array con todos los elementos que se encuentran
//entro del div con le id contenedor y lo muestro
let childNodesList = contenedor.childNodes;
console.log(childNodesList);
//Estaría mostrando todas las etiquetas más los espacios en blanco que son mostrados como #text

//Para mostrar el primer hijo se utiliza firstChild directamente sobre el elemento a seleccionar, ya que devuelve solo el primer nodo
console.log("First child:");
console.log(contenedor.firstChild);

//Para el last child igual que el anterior pero mostrando el último nodo en vez de el primero
console.log("Last child");
console.log(contenedor.lastChild);

//Para este caso, utilizando lo aplicado anteriormente, en la posicion 0 hay texto en blanco y en la posición 1 
//se encuentra el h1, una vez seleccionado, para encontrar el padre, se utiliza parentElement.
console.log("Parent de h1:");
console.log(childNodesList[1].parentElement);

//aplicando la logica anterior busco el elemento ul y utilizo children para crear un array de elemento al igual que el apartado 1
//Muestro los elementos del array como en el apartado 1
console.log("Children de ul:");
console.log(childNodesList[5].children);

//A diferencia de firstChild, esto lo que hace es seleccionar la primera etiqueta obviando los espacios blanco #text
console.log("First element child:");
console.log(contenedor.firstElementChild);

//Igual que el anterior pero el último hijo en este caso
console.log("last element child:");
console.log(contenedor.lastElementChild);

//en este caso, al pedir un elemento por su clase no se puede escribir directamente como he hecho con el id, para ellos
//he utilizado la funcion querySelector, que lo que hace es buscar los elementos dentro de js según su etiqueta de css
//en este caso es una clase por lo que se pone delante el punto al igual que en css y luego el nombre
//PreviousElementSibling lo que hace es mostrar el anterior elemento que se encuentre en el mismo nivel, es decir, su hermano
console.log("previous element sibling:");
//creo una variable para comodidad
let parrafo=document.querySelector(".parrafo");
console.log(parrafo.previousElementSibling);

//hace lo mismo que el anterior pero mostrando el siguiente
console.log("next element sibling:");
console.log(document.querySelector(".parrafo").nextElementSibling);

//Aprovechando la variable que escribí antes lo he reutilizado, pero podría haber usado querySelector("ul") por ejemplo
console.log("Primer child de ul:");
//creo una variable para mayor comodidad
let ulFirstChild= childNodesList[5].firstElementChild;
console.log(ulFirstChild);

//devuelve el numero que representa el tipo de nodo, en este caso 1 porque es una etiqueta html, 3 es para textos y 8 para comentarios
console.log("nodeType: "+ulFirstChild.nodeType);
//nodeName es el nombre del nodo como su nombre indica, al tratarse de una etiqueta html devuelve el nombre de la etiqueta en mayúsculas
console.log("nodeName: "+ulFirstChild.nodeName);
//tagName es igual que la anterior pero específica para elementos html de forma exclusiva
console.log("tagName: "+ulFirstChild.tagName);

//innerHTML es el contenido de la etiqueta, en este caso enlace de prueba, mientras que outerHTML
//es toda la etiqueta incluyendo su contenido y la propia etiqueta
console.log("innerHTML de a: "+document.querySelector("a").innerHTML+ " outerHTML: " +document.querySelector("a").outerHTML);

//La propiedad nodeValue suele estar asociada con nodos de texto, y en este caso, el contenido del párrafo
//es considerado un nodo de texto. Entonces, para obtener el valor de ese nodo de texto, se usaría textContent
console.log("previous element sibling:");
console.log(parrafo.nodeValue + " " + parrafo.textContent);

//Para comprobar si una etiqueta tiene un atributo se utiliza la funcion hasAttribute y dentro se señala
//que atributo estamos comprobando, como devuelve true o false se hace una lógica simple para imprimir el mensaje

contenedor.hasAttribute("hidden") ? console.log("El elemento está oculto") : console.log("El elemento no está oculto");
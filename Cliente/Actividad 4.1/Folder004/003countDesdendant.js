"use strict"

//Lo primero que hago aqui es un array relacional para que el programa sea capaz de distinguir 
//entre lo que sería un titulo("ul") y su contenido ("li")
let listContent = [
    { word: 'Animales', type: 'title' },
    { word: 'Mamíferos', type: 'subtitle' },
    { word: 'Vacas', type: 'content' },
    { word: 'Burros', type: 'content' },
    { word: 'Perros', type: 'content' },
    { word: 'Tigres', type: 'content' },
    { word: 'Otros', type: 'subtitle' },
    { word: 'Serpientes', type: 'content' },
    { word: 'Aves', type: 'content' },
    { word: 'Lagartos', type: 'content' },
    { word: 'Peces', type: 'title' },
    { word: 'Acuario', type: 'subtitle' },
    { word: 'Guppy', type: 'content' },
    { word: 'Angelote', type: 'content' },
    { word: 'Mar', type: 'subtitle' },
    { word: 'Trucha de mar', type: 'content' }
];

let finalList = document.createElement("ul"); //Esto es lo que será la lista principal a la que le añado las sublistas
let actualUl = finalList; //Asigno a la lista actual la lista final
let body = document.body; //Esto es para añadir luego la lista al body

//Un for of para recorrer los datos del array
for (let element of listContent) {
    //Aquí creo el li y le asigno el valor que va a tener
    let newLi = document.createElement("li");
    newLi.textContent = element.word;

    if (element.type === "title") {
        //Si es un título, verifica si ya hay una lista actual, si la hay, retrocede al nivel superior antes de añadir el nuevo título
        if (actualUl !== finalList) {
            actualUl = actualUl.parentElement.parentElement;
        }
        //le añado el contenido al ul
        actualUl.appendChild(newLi);
    } else if (element.type === "subtitle") {
        //Si es un subtítulo, crea una nueva lista ul y actualiza la lista actual a esta nueva lista
        let newUl = document.createElement("ul");
        newUl.appendChild(newLi);
        actualUl.appendChild(newUl);
        actualUl = newUl;
    } else if (element.type === "content") {
        //Si es contenido, simplemente agrega el nuevo elemento li a la lista actual
        actualUl.appendChild(newLi);
    }
}

//Añade la lista final al body
body.appendChild(finalList);
console.log(finalList);

//No he sido capaz de resolverlo tal cual porque me he quedado sin tiempo, pero bueno la lógica es esa 
//más o menos
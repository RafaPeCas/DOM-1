"use strict"
//Lo primero que hago aqui es un array relacional para que el programa sea capaz de distinguir 
//entre lo que sería un titulo("ul") y su contenido ("li")

const listContent = [
    { word: 'Animales', type: 'title' },
    { word: 'Mamíferos', type: 'title' },
    { word: 'Vacas', type: 'content' },
    { word: 'Burros', type: 'content' },
    { word: 'Perros', type: 'content' },
    { word: 'Tigres', type: 'content' },
    { word: 'Otros', type: 'title' },
    { word: 'Serpientes', type: 'content' },
    { word: 'Aves', type: 'content' },
    { word: 'Lagartos', type: 'content' },
    { word: 'Peces', type: 'title' },
    { word: 'Acuario', type: 'subtitle' },
    { word: 'Guppy', type: 'content' },
    { word: 'Angelote', type: 'content' },
    { word: 'Mar', type: 'title' },
    { word: 'Trucha de mar', type: 'content' }
];

let finalList = document.createElement("ul")

let finalElement= document.createElement("ul");
for (let element of listContent) {

    if (element["type"]==="title"){

        finalElement.textContent=element["word"];

    }else{

    }
finalList.querySelector("ul").appendChild();
}
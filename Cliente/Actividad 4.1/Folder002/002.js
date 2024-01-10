"use strict"

//Utilizo el metodo insertRow para introducir una nueva fila en la tabla, y luego con innerHTML
//hago que en esa fila esten los datos pertinentes
miTabla.insertRow().innerHTML = "<td>Pedro</td><td>28</td><td>Colombia</td>";

//Creo la variable rows con los elementos tr que se encuentran dentro de la tabla
let rows = miTabla.getElementsByTagName("tr");

//Creo un bucle for para extraer las celdas de cada fila en una variable
for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");

    //Como los nombres estan en la primera celda, compruebo si el nombre coincide con el de Carlos
    if (cells.length > 0 && cells[0].textContent === "Carlos") {
        //De ser así cambio el valor del texto de la primera celda a Juan y el de la segunda a 26
        cells[0].textContent = "Juan";
        cells[1].textContent = "26";
    }
}

//Para calcular la edad máxima pongo como comienzo 0 para ir comparando con la edad de los demás
//además creo otra variable para guardar el nombre a la vez que se comprueba la edad para evitar
//tener que hacer otro bucle para buscar el nombre una vez encontrada la edad más alta
let maxAge = 0;
let maxName = "";

//Hago un bucle siguiendo la misma lógica que el ejercicio anterior
for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");

    //Aquí lo que hago es convertir a entero en valor de segunda celda, que es la edad, ya que 
    //textContent devuelve un string. Luego lo comparo con la edad máxima actual
    if (parseInt(cells[1].textContent) > maxAge) {
        maxAge = parseInt(cells[1].textContent);
        maxName = cells[0].textContent;
    }
}

// Muestra en la consola el nombre de la persona con la edad más alta
console.log(maxName+" es la persona que más cerca de la muerte se encuentra a sus "+ maxAge +" añazos");

//Creo otro bucle más siguiendo la lógica anterior
for (let i = 1; i < rows.length; i++) {
    //Creo una nueva celda en la última posición, que es la -1 en este caso
    let cell = rows[i].insertCell(-1);

    //Aquí creo un boton
    let deleteButton = document.createElement("button");
    //Aquí hago que en el boton que acabo de crear ponga eliminar
    deleteButton.textContent = "Eliminar";
    //Aquí le añado al boton la funcion onclick para que al ser pulsado elimine la fila
    deleteButton.onclick = function() {
        //Para eliminar la fila le digo que elimine al padre del padre, ya que ahora nos encontramos
        //en un button, que está dentro de un td que está dentro de un tr, entonces el padre del padre
        //es el tr y borramos la fila completa
        deleteButton.parentNode.parentNode.remove();
    };

    //Añadimos el boton que acabamos de crear dentro de la celda
    cell.appendChild(deleteButton);
}
"use strict"

//selecciono el div en el que voy a crear el calendario
let cal = document.querySelector("#calendar");

//llamo a la funcion para crearlo
createCalendar(cal, 2023, 2)

function createCalendar(cal, year, month) {
    //creo date 1, que al crearla con dia 0 me sale el ultimo dia del mes anterior para saber cuantos dias tiene el mes
    let date = new Date(year, month, 0);
    //creo la date2 que le resta 1 al mes, ya que en js los meses van de 0 a 11, para obtener el primer dia del mes seleccionado
    let date2 = new Date(year, month - 1);
    //creo la tabla
    let result = "<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>";

    //la funcion getDay te da un numero del 0 al 6 que te indica que dia de la semana es, en funcion de eso creo tantas
    //casillas vacias como sean necesarias
    for (let i = 0; i < date2.getDay(); i++) {
        result += "<td></td>"
    }

    //creo un for que se itera tantas veces como dias de la semana tenga
    for (let i = 0; i < date.getDate(); i++) {
        //creo una celda por cada dia de la semana
        result += "<td>" + date2.getDate() + "</td>"

        if (getWeekDay(date2) == "DO") {
            //si el dia es domingo cierra la fila y crea una nueva
            result += "</tr><tr>"
        }
        //suma uno al dia para añadir el siguiente
        date2.setDate(date2.getDate() + 1)
    }

    //cierro la tabla y la ultima fila
    result += '</tr></table>';

    //añado la tabla al html
    cal.innerHTML = result;

    //le doy los estilos necesarios
    estilizar(cal);
}

function estilizar(cal) {

    //selecciono la tabla que acabo de crear
    let table = cal.querySelector('table');

    //aplico el estilo del borde de la tabla
    table.style.borderCollapse = "collapse";

    //creo un variable con el array de td y th
    let cells = table.querySelectorAll('td, th');

    //recorro el array con un foreach y acada celda le doy los estilos
    cells.forEach(function (cell) {
        cell.style.border = "1px solid black";
        cell.style.padding = "3px";
        cell.style.textAlign = "center";
    });

    //lo mismo que antes pero para los encabezados solamente
    let ths = table.querySelectorAll('th');
    ths.forEach(function (th) {
        th.style.fontWeight = "bold";
        th.style.backgroundColor = "#E6E6E6";
    });

    //se que insertar css a traves de styles es mala práctica pero lo hago así porque el enunciado no me daba opcion a crear un css

}

function getWeekDay(date) {
    //esta funcion comprueba que dia de la semana es en funcion del dia y luego lo devuelve
    let days = ['LU', 'MA', 'MI', 'JU', 'VI', 'SA', 'DO'];
    let weekDay = date.getDay()

    return days[weekDay];
}
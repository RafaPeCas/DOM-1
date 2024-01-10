"use strict"

let cal = document.createElement("table");
let tr = document.createElement("th");
let td = document.createElement("td");

for (let i=0; i<=7; i++){
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    td.set(days[i]);
    tr.appendChild(td);
}

cal.appendChild(tr);

createCalendar(cal, 2024, 3);

function createCalendar(elem, year, month) {
    month -= 1;
    let fexita = new Date(year, month);
    let fexita2 = new Date(year, month + 1);
    let monthLong = (Math.round((fexita2 - fexita) / 86400000))
    console.log(monthLong);
    console.log(getWeekDay(fexita));
    for (let i = 1; i <= monthLong; i++) {
        let fexota = new Date(year, month, i)
        console.log(fexota);
        document.createElement("")
    }

    calendario.appendChild(cal);
}

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
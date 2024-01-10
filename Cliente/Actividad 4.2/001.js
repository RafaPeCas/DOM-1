"use strict"

let cal = document.createElement("table");
cal.setAttribute("border", 1)
let tr = document.createElement("tr");


for (let i=0; i<7; i++){
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    let th = document.createElement("th");
    th.textContent=days[i];
    tr.appendChild(th);
    console.log(th)
    console.log(tr)
}

cal.appendChild(tr);

createCalendar(cal, 2024, 1);

function createCalendar(elem, year, month) {
    month -= 1;
    let fexita = new Date(year, month);
    let fexita2 = new Date(year, month + 1);
    let monthLong = (Math.round((fexita2 - fexita) / 86400000))
    console.log(monthLong);
    console.log(getWeekDay(fexita));
    for (let i = 1; i <= monthLong; i++) {
        let fexota = new Date(year, month, i)
        let td = document.createElement("td");
        if(getWeekDay(fexota)==="SU"){
            let tr2 = document.createElement("tr");
            td.textContent=i;
            tr2.appendChild(td)
            cal.appendChild(tr2)
        }
        

        
        if(getWeekDay(fexota)==="SA"){
            
        }
        
    }

    calendario.appendChild(cal);
}

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
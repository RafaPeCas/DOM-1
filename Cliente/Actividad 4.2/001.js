"use strict"

let cal = document.querySelector("table");

createCalendar(cal, 2023, 1)

function createCalendar(cal, year, month) {
    let date = new Date(year, month, 0);
    console.log(date);
    console.log(date.getDate());

    for(let i=0; i<getWeekDay(date); i++){
        
    }

    for (let i=1; i<=date.getDate(); i++){
        let date2 = new Date(year, month-1,i)
        if(console.log(date2) == "LU"){
            cal.insertRow(7);
        }
        
        console.log(getWeekDay(date2))
        
    }

}



function getWeekDay(date) {
    let weekDay=date.getDay()
    let days = ['LU', 'MA', 'MI', 'JU', 'VI', 'SA', 'DO'];

    return days[weekDay];
}
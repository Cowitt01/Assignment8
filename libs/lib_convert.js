/*
Cory Witt
script.js
INFO 1579
Shaw
07/26/2025
*/

"use strict";

//SuperDate class definition. SuperDate extends the Date class 
//for defining short names for month and day
//as well as full names fir month and day.

class SuperDate extends Date {  
    constructor(date) {
        if (date == undefined) {  // If no date is provided, use the current date
            date = new Date();
            super();    
        } else {                  // If a date is provided, use it to create a new instance
            super(date);
        }
    }
    getFullDayName() {  // Returns the full name of the day (predefined array containing day names of the week )
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[this.getDay()];
    }
    getShortDayName() { // Returns the first three letters of the day name (substring 0 to 3)
        return this.getFullDayName().substring(0, 3); 
    }
    getFullMonthName() {  // Returns the full name of the month (predefined array containing month names)
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[this.getMonth()];
    }
    getShortMonthName() {   // Returns the first three letters of the month name (substring 0 to 3)
        return this.getFullMonthName().substring(0, 3);
    }

};
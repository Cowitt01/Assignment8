/*
Cory Witt
lib_convert.js
INFO 1579
Shaw
07/26/2025
*/

"use strict";

//SuperDate class definition. SuperDate extends the Date class 
//for defining short and full names for month and day.


class SuperDate extends Date {  
    constructor(date) {           // Constructor for SuperDate class
        if (date == undefined) {  // If no date is provided, use the current date
            super();    
        } else {                  // If a date is provided, use it to create a new instance
            super(date);
        }
    }
    getFullDayName() {             // Returns the full name of the day by using the getDay() method as an index to a predefined array of day names
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfWeek[this.getDay()];   
    }
    getShortDayName() {            // Returns the first three letters of the day name (substring 0 to 3) by using the getFullDayName method
        return this.getFullDayName().substring(0, 3); 
    }
    getFullMonthName() {           // Returns the full name of the month by using the getMonth() method as an index to a predefined array of month names
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[this.getMonth()];
    }
    getShortMonthName() {          // Returns the first three letters of the month name (substring 0 to 3) by using the getFullMonthName method
        return this.getFullMonthName().substring(0, 3);
    }

};
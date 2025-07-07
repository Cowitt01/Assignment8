/*
Cory Witt
script.js
INFO 1579
Shaw
07/24/2025
*/

"use strict";

class SuperDate extends Date {
    constructor(date) {
        if (date == undefined) {
            super();
        } else {
            super(date);
        }
    }
    getFullDayName() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[this.getDay()];
    }
    getShortDayName() {
        return this.getFullDayName().substring(0, 3); 
    }
    getFullMonthName() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[this.getMonth()];
    }
    getShortMonthName() {
        return this.getFullMonthName().substring(0, 3);
    }
    getDateOrdinal() {
        const day = this.getDate();
        const suffix = ["th", "st", "nd", "rd"];
        const value = day % 100;
        return day + (suffix[(value - 20) % 10] || suffix[value] || suffix[0]);

    }
};
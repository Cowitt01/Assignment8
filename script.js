/*
Cory Witt
script.js
INFO 1579
Shaw
07/27/2025
*/
 
//Date-a-Lator program allows the user to input a date.
//The program will then display the full and short names of the day and month as well
//as whether the input date was past or present.

"use strict";
window.addEventListener('load', function() {                               //Ensure the DOM is fully loaded 
    const userInput = document.getElementById('userInput');                //Reference the input field for date.
    const action = document.getElementById('action');                      //Reference the action button
    const resultHolder = document.getElementById('resultHolder');          //Reference the result holder output
    let superDate;   

    function checkValue(str, max) {                                        // Function validates and formats that the input value
        if (str.charAt(0) !== '0' || str == '00') {
            let num = parseInt(str);
            if (isNaN(num) || num <= 0 || num > max) num = 1;              // If the input is not numeric, less than or equal to 0, or greater than max, set the input value to 1 
            str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();   
        };
        return str;
    };

    userInput.addEventListener('input', function(e) {                      // Event listener for input entry. Formats the input and validates the date.
        const field = e.currentTarget;
        field.type = 'text';
        let input = field.value;                                           
        if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);  
        let values = input.split('/').map(function(v) {                   
            return v.replace(/\D/g, '');
        });
        if (values[0]) values[0] = checkValue(values[0], 12);             // Validates and format the month value by calling the checkValue() function
        if (values[1]) values[1] = checkValue(values[1], 31);             // Validates and format the day value by calling the checkValue() function
        let output = values.map(function(v, i) {
          return v.length == 2 && i < 2 ? v + ' / ' : v;
        });
        field.value = output.join('').substr(0, 14);
        if(input == "") resultHolder.innerHTML = "";                      // If the input is empty, clear the result holder.
    });

    userInput.addEventListener('blur', function(e) {                      // Event listener for when the input field loses focus.
        const field = e.currentTarget;
        field.type = 'text';
        let input = field.value;
        let values = input.split('/').map(function(v, i) {  
          return v.replace(/\D/g, '')
        });
        let output = '';
        
        if (values.length == 3) {                                        // If input value has the three values of month, day, and year, assign them to variables, and create a new Date object.
          let year = values[2].length !== 4 ? parseInt(values[2]) + 2000 : parseInt(values[2]);
          let month = parseInt(values[0]) - 1;
          let day = parseInt(values[1]);
          let d = new Date(year, month, day);
          if (!isNaN(d)) {                                                   // If the date is valid, format the output to display the date.
            let dates = [d.getMonth() + 1, d.getDate(), d.getFullYear()];    // Get the month, date, and year from the SuperDate methods getMonth, getDate, and getFullYear
            output = dates.map(function(v) {                                 // output result is set.
              v = v.toString();
              return v.length == 1 ? '0' + v : v;
            }).join(' / ');
            superDate = new SuperDate(d);                                 
          };
        };
        field.value = output;                                                // Set the input field to the formatted output result.
      });

    action.addEventListener('click', function(e) {                           // Event listener for the action button click. 
        const currentDate = new Date();                                                           // Get the current date
        let verb = superDate.getFullYear() > currentDate.getFullYear() ? "will take" : "took";    // Calls the SuperDate method getFullYear to compare superDate year with current year to determine if the event is future or past. Since only the year is compared, the year has to be greater than the current year to be "will take"
        if (superDate != undefined) {                                                             // If superDate is defined, display the formatted date information by calling the SuperDate methods getfullDayName, getShortDayName, getFullMonthName, and getShortMonthName
            const s = `                                                                            
                <h2>Date-A-Late:</h2>
                <div>This event ${verb} place on a ${superDate.getFullDayName()} (${superDate.getShortDayName()})</div>   
                <div>in the month of ${superDate.getFullMonthName()} (${superDate.getShortMonthName()}).</div>
            `
            resultHolder.innerHTML = s;
        }
      })
});
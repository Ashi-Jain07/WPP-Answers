//Get the current date
const today = new Date();

//Create a date object for christmas of the current year
var cmas = new Date(today.getFullYear(), 11, 25);

//Check if the current date is after December 25th
if(today.getMonth()==11 && today.getDate()>25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}

//Calculate the difference in days between today and christmas
var one_day = 1000 * 60 * 60 * 24;

//Print the number of days left until christmas
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) + " " + "days left until christmas!");
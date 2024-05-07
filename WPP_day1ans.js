//Get the current date and time
var today = new Date();

//Get the day of the week (0-6, where 0 is sunday, 1 is monday, 2 is tuesday and so on.)
var day = today.getDay();

//Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//Display the current day
console.log("Today is:" + daylist[day] + ".");

///Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

//Determine if it's AM or PM
var AmorPm = (hour >= 12) ? "PM" : "AM";

//Convert 24-Hour format to 12-hour format
hour = (hour > 12) ? hour - 12 : hour;

console.log("Current time is : " + hour + AmorPm + " : " + minute +" : " + second);
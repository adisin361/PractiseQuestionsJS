// Q5. Write a JavaScript function ( both regular and arrow function) which takes year as parameter to determine and print whether a given year is a leap year or not. Try using ternary operator
const year = 800;

function leapYear(year){
    return year % 4 == 0 && year % 100!=0 || year % 400 == 0 ? true:false;
}

const leapYearArrow = year => year % 4 == 0 && year % 100!=0 || year % 400 == 0 ? true:false;

console.log(leapYear(year))
console.log(leapYearArrow(year))

module.exports = {leapYear, leapYearArrow}

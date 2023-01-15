// Q2. Write a JavaScript function (both regular and arrow) which takes a number as param to check whether all the digits in a given number are the same or not, and print true or false. Consider numbers to have 2 digits or more.
let number = 2222

function sameDigits(number){
    let numberString = number.toString();
    let firstDigit = numberString[0];
    let numberLength = numberString.length;
    let count = 0;
    for(let i=1; i<numberLength; i++){
        if(numberString[i] == firstDigit) count++;
        else break;
    }
    return count+1 == numberLength?true:false;
}

const sameDigitsArrow = (number) => {
    let numberString = number.toString();
    let firstDigit = numberString[0];
    let numberLength = numberString.length;
    let count = 0;
    for(let i=1; i<numberLength; i++){
        if(numberString[i] == firstDigit) count++;
        else break;
    }
    return count+1 == numberLength?true:false;
}

console.log(sameDigits(number));
console.log(sameDigitsArrow(number));

module.exports = {sameDigits, sameDigitsArrow} 

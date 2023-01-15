// Q7. Write a JavaScript function ( both regular and arrow function) which takes an array of 2 strings as parameter to concatenate two strings except their first character.
const str1 = 'apple'
const str2 = 'watch'

function concatenate(str1, str2){
    return str1.slice(1).concat(str2.slice(1));
}

const concatenateArrow = (str1, str2) => str1.slice(1).concat(str2.slice(1));

console.log(concatenate(str1, str2));
console.log(concatenateArrow(str1, str2));

module.exports = {concatenate, concatenateArrow}




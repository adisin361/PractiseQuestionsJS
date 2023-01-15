// Q8. Write a JavaScript function ( both regular and arrow function) which takes a string as parameter to count the number of vowels in a given string.

const str = 'apple'

function vowelsCount(str){
    vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])) count++;
    }
    return count;
}

const vowelsCountArrow = (str) => {
    vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])) count++;
    }
    return count;
}

console.log(vowelsCount(str))
console.log(vowelsCountArrow(str))

module.exports = {vowelsCount, vowelsCountArrow}
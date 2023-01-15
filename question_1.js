// Q1. Write a JavaScript function (both regular and arrow) which takes an array of integers as paramater, to get the largest even number. Return -1 if no even numbers are found.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function largestEvenNumber(numbers){ 
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<numbers.length; i++)
        if(numbers[i]>max && numbers[i]%2==0) 
            max = numbers[i];
    return max==Number.MIN_SAFE_INTEGER?-1:max;
}

const largestEvenNumberArrow = (numbers) => {
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<numbers.length; i++)
        if(numbers[i]>max && numbers[i]%2==0) 
            max = numbers[i];
    return max==Number.MIN_SAFE_INTEGER?-1:max;
}

console.log(largestEvenNumber(numbers))
console.log(largestEvenNumberArrow(numbers))

module.exports = {largestEvenNumber, largestEvenNumberArrow}


// Q3. Write a JavaScript function (both regular and arrow) which takes a string as parameter, to change the capitalization of all letters in a given string and returns the result and then print it.
const str = 'AditYa';

function capitalization(str){
  let strLen = str.length;
  let newStr = '';
  for(let i = 0; i<strLen; i++){
    let char = str[i];
    if(char != char.toUpperCase()) newStr+=char.toUpperCase();
    else newStr+=char.toLowerCase();
  }
  return newStr;
}

const capitalizationArrow = (str) =>{
  let strLen = str.length;
  let newStr = '';
  for(let i = 0; i<strLen; i++){
    let char = str[i];
    if(char != char.toUpperCase()) newStr+=char.toUpperCase();
    else newStr+=char.toLowerCase();
  }
  return newStr;
};

console.log(capitalization(str));
console.log(capitalizationArrow(str));

module.exports = {capitalization, capitalizationArrow};
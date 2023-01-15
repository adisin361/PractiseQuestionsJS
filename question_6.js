// Q6. Write a JavaScript function ( both regular and arrow function) which takes a string as parameter to test whether a string end with "Script"(case-sensitive). The string length must be greater or equal to 6.
const str = 'JavaScript'

function endsWithScript(str){
    return str.endsWith('Script')?true:false;
}

const endsWithScriptArrow = str => str.endsWith('Script')?true:false;

console.log(endsWithScript(str));
console.log(endsWithScriptArrow(str));

module.exports = {endsWithScript, endsWithScriptArrow}
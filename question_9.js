// Q9. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
const str = 'mckinsey'

function replaceChar(str){
    let new_str = '';
    for(let i = 0; i<str.length; i++){
        if(str[i] == 'z') new_str+='a';
        else if(str[i] == 'Z') new_str+='A';
        else new_str+=String.fromCharCode(str.charCodeAt(i)+1);
    }
    return new_str;
}

const replaceCharArrow = (str) => {
    let new_str = '';
    for(let i = 0; i<str.length; i++){
        if(str[i] == 'z') new_str+='a';
        else if(str[i] == 'Z') new_str+='A';
        else new_str+=String.fromCharCode(str.charCodeAt(i)+1);
    }
    return new_str;
}

console.log(replaceChar(str));
console.log(replaceCharArrow(str));

module.exports = {replaceChar, replaceCharArrow}

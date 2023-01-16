// Q4. Write a JavaScript function (both regular and arrow) which takes an array of string as parameter to find the longest string from a given array (read about string methods)

const str = ['iphone', 'macbook', 'airpods', 'ipad'];
function longestString(str){
  let maxLen = 0;
  let longestWord;
  for(let i = 0; i<str.length; i++){
    let len = str[i].length;
        
    if(maxLen < len){
      maxLen = len;
      longestWord = str[i];
    }
  }
  return longestWord;
}

const longestStringArrow = (str) => {
  let maxLen = 0;
  let longestWord;
  for(let i = 0; i<str.length; i++){
    let len = str[i].length;
        
    if(maxLen < len){
      maxLen = len;
      longestWord = str[i];
    }
  }
  return longestWord;
}; 

console.log(longestString(str));
console.log(longestStringArrow(str));

module.exports = {longestString, longestStringArrow};
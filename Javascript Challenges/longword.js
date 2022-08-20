/*

input = "I am the boss"
output = "boss"

*/

const longWord = (inputstr) => {
  let words = inputstr.split(' ');
  let longestword = '';
  for (let word of words) {
    console.log(' word =>', word);
    if (longestword.length < word.length) {
      longestword = word;
    }
  }
  console.log('longword =>', longestword);
  return inputstr;
};

console.log(longWord('I am the boss'));

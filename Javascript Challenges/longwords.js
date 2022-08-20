/*

input = "I am the your boss"
output = ["your","boss"]

*/

const longestWords = (list) => {
  let size = 0;
  let maxArray = [''];
  let newList = list.split(' ');
  for (let word of newList) {
    if (word.length >= size) {
      if (maxArray[maxArray.length - 1].length < word.length) {
        maxArray = [];
        console.log(
          'maxArray[maxArray.length - 1]',
          maxArray[maxArray.length - 1]
        );
        maxArray.push(word);
      } else {
        maxArray = [...maxArray, word];
      }
    }
  }
  return maxArray;
};

console.log(longestWords('Immm am trea boss'));

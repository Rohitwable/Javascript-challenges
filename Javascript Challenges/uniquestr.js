/*

input = "abcdsss"
output = false

input = "abcd"
output = true

*/
//solution 1
const unique = (str) => {
  let check = [];

  for (let char of str) {
    console.log('char', char);
    console.log('indexof char', check.indexOf(char));
    if (check.indexOf(char) !== -1) {
      console.log('chars', check);

      return false;
    }
    check.push(char);
  }

  return true;
};

// console.log(unique('abcdmm'));

//solution 2

const unique2 = (str) => {
  let check = {};

  for (let char of str) {
    if (check[char]) {
      console.log('chars', check);

      return false;
    }
    check[char] = char;
  }

  return true;
};

console.log(unique2('abcdmm'));

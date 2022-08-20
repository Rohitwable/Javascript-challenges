/*

input = "I am the your boss"
output = "I Am The Your Boss"

*/

const capitalize = (str) => {
  const newStr = str.trim().toLowerCase().split(' ');
  console.log('New Str: =>', newStr);
  let final = newStr
    .map((word) => {
      let first = word.slice(0, 1).toUpperCase();
      console.log('first =>>', first);
      let rest = word.slice(1).toLowerCase();
      console.log('rest ==>', rest);
      return first + rest;
    })
    .join(' ');
  console.log('final =>', final);

  return final;
};

console.log(capitalize(' i am the your boss'));

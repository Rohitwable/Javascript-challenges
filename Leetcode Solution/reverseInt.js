/*
Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
*/

const reverseInt = (num) => {
  if (num < 0) {
    return -1 * reverseInt(-num);
  }
  const strNum = String(num);
  console.log('strNum', strNum);
  const reversed = strNum.split('').reverse().join('');
  console.log('reversed', reversed);
  return reversed;
  // return num;
};

console.log(reverseInt(120));

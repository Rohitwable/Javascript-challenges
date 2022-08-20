/*

input = [2,4,6,8]
output = aithmatic

input = [3,9,27]
output = geomatric

*/

const mathCalc = (arr) => {
  let arith = new Set();
  let geoM = new Set();
  for (let i = 1; i < arr.length; i++) {
    // console.log('arr[i] =>', arr[i]);
    let num1 = arr[i] - arr[i - 1];
    arith.add(num1);
    let num2 = arr[i] / arr[i - 1];
    geoM.add(num2);
  }
  return arith.size == 1
    ? 'arithmatic'
    : geoM.size == 1
    ? 'Geometric'
    : 'No Sequence';

  return arr;
};

console.log(mathCalc([2, 4, 6, 8]));
console.log(mathCalc([6, 4, 6, 8]));
console.log(mathCalc([3, 9, 27]));

/********* Math Sequence*******/
/*
function mathSequence(arra) {
  let arith = new Set();
  let geom = new Set();

  for (let i = 1; i < arra.length; i++) {
    // console.log('Array: ', arra[i]);
    let num1 = arra[i] - arra[i - 1];
    arith.add(num1);
    // console.log('Num1', num1);
    let num2 = arra[i] / arra[i - 1];
    geom.add(num2);
    // console.log('Num2:', num2);
  }
  // console.log('Arith:', arith);
  // console.log("Geom:", geom);
  if (arith.size === 1) {
    console.log('Arithmatic')
  }
  if (geom.size === 1) {
    console.log('Geomatric');
  }

  return -1;
}

console.log(mathSequence([2, 4, 6, 8]));
console.log(mathSequence([3, 9, 27]));

*/

/*********************Longest Word ************************************/
/*
function longestWord(str) {
  const words = str.split(' ');
  let longWord = '';
  for (let word of words) {
    // console.log('word:', word);
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  console.log('Word: ', words);
  return longWord;
}

console.log(longestWord('I m the boss'));
*/
/******************* ***********/

/*

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]

*/

const generateParam = (n) => {
  let solution = [];
  const generateCombo = (leftPcount, rightPCount, partial) => {
    if (leftPcount > rightPCount) {
      console.log('left p count is greater than right');
      return;
    }

    if (!leftPcount && !rightPCount) {
      console.log('left p count is not equal to right');
      return solution.push(partial);
    }
    if (leftPcount > 0) {
      generateCombo(leftPcount - 1, rightPCount, partial + '(');
    }

    if (rightPCount > 0) {
      generateCombo(leftPcount, rightPCount - 1, partial + ')');
    }
  };
  generateCombo(n, n, '');
  return solution;
};

console.log(generateParam(1));

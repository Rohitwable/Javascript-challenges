//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]

const twoSum = (nums, target) => {
  let tempObj = {};
  // console.log('nums:', nums.entries());
  for (let [index, num] of nums.entries()) {
    console.log('num:', num);
    if (tempObj[num] !== undefined) return [tempObj[num], index];

    tempObj[target - num] = index;

    console.log('tempObj[target- num]', tempObj[target - num]);
    console.log('index', index);

    console.log('tempObj', tempObj);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

function Summ(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const complement = target - currentNum;

      if (complement in numIndices) {
          return [numIndices[complement], i];
      }

      numIndices[currentNum] = i;
  }

  return null;
}


const nums = [2, 7, 11, 15];
const target = 9;
const result = Summ(nums, target);

console.log(result); 

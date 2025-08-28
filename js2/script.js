let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;

function minMax(nums) {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    num < min && (min = num);
    num > max && (max = num);
  }
}

minMax([1, 2, 3, 4, 5, 6, 10000000, -193918])

console.log(`Min: ${min}`);
console.log(`Max: ${max}`);

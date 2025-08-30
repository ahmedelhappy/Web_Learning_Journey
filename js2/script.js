/*
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
*/

/*
let button1 = document.querySelector(".btn");
let button2 = document.querySelector(".btn2");
let h1 = document.querySelector(".h1");
let counter = h1.textContent;
let intervalId;
let running = false;

function startIntervalFunc() {
  if (!running) {
    intervalId = setInterval(function () {
      ++counter;
      h1.innerHTML = counter;
    }, 1000);
    running = true;
  }
}

function stopIntervalFunc() {
  clearInterval(intervalId);
  running = false;
}
*/



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

/*
let xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
})

xhr.open("GET", "https://supersimplebackend.dev/hello");
xhr.send();

// console.log(xhr.response); // cannot access it right away because it takes time.
// will add eventListener, once the response arrive (load), will print it.
*/

/*
let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://supersimplebackend.dev/hello");
xhr2.send();
*/

function printHelloImmediately () {
  console.log("Hello Immediately");
}

function printHello() {
  setTimeout(() => {
    console.log("hello");
  }, 1000)
}

new Promise((resolve) => {
  console.log("Start of the promise")
  printHello(() => {
    resolve();
  });
}).then(() => {
  console.log("next step");
})
















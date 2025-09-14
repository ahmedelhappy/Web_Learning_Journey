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

// function printHelloImmediately () {
//   console.log("Hello Immediately");
// }

// function printHello() {
//   setTimeout(() => {
//     console.log("hello");
//   }, 1000)
// }

// new Promise((resolve) => {
//   console.log("Start of the promise")
//   printHello(() => {
//     resolve();
//   });
// }).then(() => {
//   console.log("next step");
// })

/*
// Simulating async tasks with setTimeout
function orderPizza(callback) {
  setTimeout(() => {
    console.log("Pizza Ordered");
    callback();
  }, 1000);
}

function deliverPizza(callback) {
  setTimeout(() => {
    console.log("Pizza Delivered");
    callback();
  }, 1000);
}

function eatPizza(callback) {
  setTimeout(() => {
    console.log("Eating Pizza");
    callback();
  }, 1000);
}

// Callback Hell 
orderPizza(()=> {
  deliverPizza(() => {
    eatPizza(()=> {
      console.log("Ate Pizza, every thing is done.")
    })
  })
})
*/

/*
function getWeather(weatherLoaded) { //takes time
  setTimeout(()=> {
    weatherLoaded("sunny")
  }, 2000)
}

function weatherLoaded(data) {
  let weather = data;
  console.log(weather);
}


getWeather(weatherLoaded)
*/

/*
function fun1() {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      reject('404')
    }, 1000)
  });
}

function fun2() {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve('resolved')
    }, 1000)
  });
}

function onSuccess(data) {
  console.log(data)
}

function onError(errorCode) {
  console.log(`error: ${errorCode}`)
}

func
*/

// Promises initially Pending --then--> Resolved OR Rejected
// new Promise(Takes callback)
// new Promise((resolve, reject) => {async code})

/*
// Promises
console.log("Hi");


function walkDog() {
  
  return new Promise((resolve, reject) => {
    let dogWalked = false;
    setTimeout(() => {
      if (dogWalked) {
        resolve("You walk the dog");
      }
      else 
        reject("You DIDN'T walk the dog!")
    }, 1500);
  });
}

function cleanKitchen() {

  return new Promise((resolve, reject) => {
    let kitchenCleaned = true; 
    setTimeout(() => {
      if (kitchenCleaned) {
      resolve("You clean The kitchen");
      }
      else
        reject("Kitchen wasn't cleaned!")
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    let trashTakenOut = false;
    setTimeout(() => {
      if(trashTakenOut) {
        resolve("You take out trash");
      }
      else
        reject("You DIDN'T Take the trash out!")
    }, 500);
  });
}

walkDog()
  .then((resolve, reject) => {console.log(resolve || reject); return cleanKitchen()})
  .then((resolve, reject) => {console.log(resolve || reject); return takeOutTrash()})
  .then((resolve, reject) => {console.log(resolve || reject)})
  .catch((error) => {console.log(error)})
*/

/*
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://supersimplebackend.dev/hello");

let xhrPromise = new Promise((resolve, reject) => {

  xhr.onload = () => {
      resolve(xhr.response);
  };

  xhr.send();
});

xhrPromise.then((response) => console.log(response));

console.log("Hi");

*/

/*
//Promise Example
// 1. Fetch a user
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json()) // Convert response to JS object
  .then(user => {
    console.log("👤 User found:", user.name);

    // 2. Fetch that user's posts
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(response => response.json())
  .then(posts => {
    console.log("📝 Posts by this user:");
    posts.forEach(post => console.log("-", post.title));
  })
  .catch(error => {
    console.error("❌ Something went wrong:", error);
  });
*/

/*
//Promise Example
let x;

let promiseToReturnX = new Promise((resolve, reject) => {
  setTimeout(() => {
    Success = false;
    x = 100;
    Success ? resolve(x) : reject("Failed");
  }, 500);
});

promiseToReturnX
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((result) => (result += 10))
  .then((result) => console.log(result))
  // .catch((error) => {
  //   console.error(error);
  //   throw error; // keep it rejected!
  // })
  .then((_) => console.log("before finally"))
  .finally((_) => console.log("Finally"));
*/

/*
async function start() {
  let data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/fosrecast')
  let result = await data.json();
  console.log(result)
}

start() 
*/

/*
async function getUserAndPosts() {
  try {
    // 1. Fetch user
    const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    console.log(userResponse);
    console.log("===========");
    const user = await userResponse.json();
    console.log("👤 User:", user.name);

    // 2. Fetch posts for that user
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsResponse.json();

    console.log("📝 Posts by this user:");
    posts.forEach(post => console.log("-", post.title));

  } catch (error) {
    console.error("❌ Something went wrong:", error);
  } finally {
    console.log("✅ Finished fetching data (success or error)");
  }
}

getUserAndPosts();

console.log("The end")
*/

/*
let url = "https://api.github.com/users/ahmedelhappy/repos";

async function fetchGitHub() {

  let response = await fetch(url, {
    headers: {
      // "Authorization: TOKEN HERE
    }
  });
  let data = await response.json();

  data.forEach(item => {
    let myDiv = document.createElement("div");
    myDiv.textContent = item.name;
    document.body.append(myDiv)
  })
}

fetchGitHub();
*/


/*
async function getRandomJoke() {
  let url = "https://official-joke-api.appspot.com/random_joke";
  let data = await (await fetch(url)).json();

  let myJoke = {
    "setup": data.setup,
    "punchline": data.punchline,
  }

  Object.values(myJoke).forEach(line => {
    let myLineDiv = document.createElement("div");
    myLineDiv.textContent = `${line}`;
    document.body.append(myLineDiv);
  })

}

getRandomJoke();

// Response Object
// Request object
*/








# Notes
  This are some JS notes, like a cheat-sheet.
## Json
    Keys must be in double quotes (" ").
    Values can be:
      string ("hello")
      number (123)
      boolean (true / false)
      null
      array ([])
      object ({})
    No functions, no comments, no variables.
    {
      "name": "Ahmed",
      "age": 21,
      "skills": ["JavaScript", "React", "Node.js"],
      "isStudent": true
      }

## Objects
    Keys can be unquoted (if they are valid identifiers).
    Values can be anything: strings, numbers, arrays, objects, functions, symbols, etc.
    You can add methods, variables, and dynamic properties.

    let country = Egypt;
    const user = {
      name: "Ahmed",
      age: 21,
      country: country, //Variable declared above
      skills: ["JavaScript", "React", "Node.js"],
      isStudent: true,
      greet: function() {
        console.log("Hello " + this.name);
      }
    };

    JSON.stringify(myObject) => converts to JSON
    JSON.parse(myJson) => converts to JS Object

## Note
    localStorage only supports strings.

## undefined vs null
    function func(parameter = 'default') {
      console.log(parameter);
    }
    func();           => 'default'
    func(undefined);  => 'default'
    func(null);       =>  null

## objects
    const object1 = {
      message: 'hello',
      price: 799
    };  
    const object2 = object1; //Copy by Reference (arrays also)

    object1.message = 'Good job!';
    console.log(object1); // 'Good job!'
    console.log(object2); // 'Good job!'

    const object3 = {
      message: 'Good job!',
      price: 799
    };

    console.log(object1 === object3); // false, because they have different references.

## innerHTML vs innerText
    innerHtml = <p>Hello</p> => insert a paragraph. (parses the html, and displays it)
    innerText = inserts text.

## Array
    typeof [1, 2] => object //Array are objects.
    Array.isArray(myArray).
    myArray.push
    myArray.splice()

## Arrow Functions
![alt text](image.png)

## Event Listeners
  Adding & Removing Event Listeners
  ![alt text](image-1.png)
    so here "click" wasn't printed out because the first eventListener was removed.

## Array Filter
  ![alt text](image-2.png)

## Array Map
  ![alt text](image-3.png)

## Data Attribute
  ![alt text](image-4.png)
  use in HTML cebab case, in JS dataset.camelCase.

## Testing
  ![alt text](image-6.png)
  ![alt text](image-7.png)
  ![alt text](image-8.png)
  Naming and grouping related tests

## Testing Frameworks (Jasmine)
describe function create suite <br>
it function create a test <br>
expect and .toEqual to match (easily readable in EN)
![alt text](image-9.png)
![alt text](image-10.png)

## OOP
Constructor
![alt text](image-11.png)

Private properties (add # also when using the private property inside the class)
![alt text](image-12.png)

## This Keyword
![alt text](image-13.png)

## XMLHttpRequest

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://supersimplebackend.dev/hello");
    xhr.send();

    // console.log(xhr.response); // cannot access it right away because it takes time.
    // will add eventListener, once the response arrive (load), will print it.   

    xhr.addEventListener("load", () => {
      console.log(xhr.response);
    })
    // Put the eventListener above the send function (here is not really important, as the response takes time, but if the response was to arrive right away it wouldn't work)

### Network Tab
![alt text](image-16.png)

### Status Code
![alt text](image-14.png)
if it starts with 4, it's our problem (for example you request a page that doesn't exist) <br>
if starts with 5, it's the backend problem (for example the server crashes)

### API
![alt text](image-15.png)
the supported back-end requests are called API <br>
Writing a URL in the browser is a GET request.

## Async JavaScript & Callback Functions | Color Code
### callback hell

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

Note:  

Passing a function reference (or an anonymous function) → delays execution until the function is called. 

Calling the function immediately → runs it right now and passes its return value (usually undefined for async functions).

Another Example:

    //Example (Call back way)
    console.log("Hi");

    function walkDog(callback) {

      setTimeout(() => {
        console.log("You walk the dog");
        callback();
      }, 1500)
    }

    function cleanKitchen(callback) {

      setTimeout(() => {
        console.log("You clean The kitchen");
        callback();
      }, 2500)
    }

    function takeOutTrash(callback) {

      setTimeout(() => {
        console.log("You take out trash");
        callback();
      }, 500)
    }

    walkDog(() => {
      cleanKitchen(() => takeOutTrash(() => {
        console.log("You Finished All The Chores!")
      }));
    })


## Promises
[promise-execution](https://www.lydiahallie.com/blog/promise-execution)
![alt text](image-17.png)

### Note
.catch() recovers the chain by turning the error into a resolved value (unless you rethrow). <br>
meaning the .thens after .catch get executed by default

## Async Await
right here you should await inside an async function, otherwise will get an error.
![alt text](image-18.png)

on this next screenshot a comparison between using await & async VS .then()
![alt text](image-19.png)

Notes <br>
![alt text](image-20.png)

We use Try catch instead of .catch() as it may cause some issues.
![alt text](image-21.png)


### 📌 `Response.json()` (Summary)

- **What it is:**  
  A method of the `Response` object returned by `fetch()`.

- **What it does:**  
  - Reads the response **body stream** asynchronously  
  - Parses it as JSON  
  - Returns a **Promise** that resolves to a JS object

- **Usage:**  

  ```js
  const response = await fetch(url);
  const data = await response.json();

![alt text](image-22.png)
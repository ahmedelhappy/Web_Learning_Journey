# Notes
This are some JS notes, like a cheat-sheet.


## [Inheritance | Prototype | Proto](https://www.youtube.com/watch?v=jnME98ckDbQ&list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP&index=3)
### Notes
* `object.__proto__ === className.prototype`
* prototype chain: when calling a method or a property, it first looks for it top level (current object), then goes to next prototype, then next... etc 
* 2 types of properties, one that belongs to the constructor (class) and get inherited for all objects (like "Egyptian"), and one that doesn't belong to the constructor, and is unique to each object (like "myName").
* C++ → Fast but heavier:
Uses class-based inheritance with a fixed memory layout — each object contains all parent data and methods, making it faster but uses more memory.
* C++ → Fast but heavier:
Uses class-based inheritance with a fixed memory layout — each object contains all parent data and methods, making it faster but uses more memory.
* JavaScript → Flexible but slower:
Uses prototype-based inheritance where objects share methods via prototypes — this makes it more memory-efficient but slower due to runtime lookups.



CODE 1
```js
// This is a constructor function, and yea it's outside a class.
// This is old practice
function Person() {
  this.talk = _ => "talking"
  // talk method (it's a property) is not on the Person class, it just gets copied to new objects 
  // so here there is inheritance, like if I change myObj.talk() won't change.
  // also not eff, as it gets copied on all the objects
}
```
CODE 2
```js
function Person2() {
}
// talk method doesn't get copied on children
Person2.prototype.talk = _ => "talking2";
```
<br>







## Json
Keys must be in double quotes (" ").  
Values can be:
- string ("hello")
- number (123)
- boolean (true / false)
- null
- array ([])
- object ({})

No functions, no comments, no variables.

```json
{
  "name": "Ahmed",
  "age": 21,
  "skills": ["JavaScript", "React", "Node.js"],
  "isStudent": true
}
```

## Objects
Keys can be unquoted (if they are valid identifiers).  
Values can be anything: strings, numbers, arrays, objects, functions, symbols, etc.  
You can add methods, variables, and dynamic properties.

```js
let country = "Egypt";
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

JSON.stringify(myObject) // converts to JSON
JSON.parse(myJson) // converts to JS Object
```

## Note
localStorage only supports strings.

## undefined vs null
```js
function func(parameter = 'default') {
  console.log(parameter);
}
func();           // 'default'
func(undefined);  // 'default'
func(null);       // null
```

## objects (reference behavior)
```js
const object1 = { message: 'hello', price: 799 };  
const object2 = object1; // Copy by Reference (arrays also)

object1.message = 'Good job!';
console.log(object1); // 'Good job!'
console.log(object2); // 'Good job!'

const object3 = { message: 'Good job!', price: 799 };
console.log(object1 === object3); // false (different references)
```

## innerHTML vs innerText
- `innerHTML = "<p>Hello</p>"` → inserts a paragraph (parses HTML)
- `innerText` → inserts text only.

## Array
```js
typeof [1, 2] // object (arrays are objects)
Array.isArray(myArray)
myArray.push()
myArray.splice()
```

## Arrow Functions
![alt text](image.png)

## Event Listeners
Adding & Removing Event Listeners  
![alt text](image-1.png)

## Array Filter
![alt text](image-2.png)

## Array Map
![alt text](image-3.png)

## Data Attribute
![alt text](image-4.png)

Use kebab-case in HTML, camelCase in JS (`dataset.camelCase`).

## Testing
![alt text](image-6.png)  
![alt text](image-7.png)  
![alt text](image-8.png)

## Testing Frameworks (Jasmine)
- `describe()` → create test suite  
- `it()` → create test  
- `expect().toEqual()` → assertion  
![alt text](image-9.png)  
![alt text](image-10.png)

## OOP
Constructor  
![alt text](image-11.png)

Private properties (prefix with `#` and use inside the class)  
![alt text](image-12.png)

## This Keyword
![alt text](image-13.png)

## XMLHttpRequest
```js
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://supersimplebackend.dev/hello");
xhr.send();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});
```

### Network Tab
![alt text](image-16.png)

### Status Code
![alt text](image-14.png)

- **4xx** → client error (bad request, not found)
- **5xx** → server error (crash, internal error)

### API
![alt text](image-15.png)

## Async JavaScript & Callback Functions | Color Code
### Callback Hell Example
```js
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
orderPizza(() => {
  deliverPizza(() => {
    eatPizza(() => {
      console.log("Ate Pizza, everything is done.");
    });
  });
});
```

Another Example:

```js
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
});
```

## Promises
[promise-execution](https://www.lydiahallie.com/blog/promise-execution)  
![alt text](image-17.png)

**Note:**  
`.catch()` recovers the chain by turning the error into a resolved value (unless you rethrow).  
Meaning `.then()` after `.catch()` still executes by default.

## Async Await
![alt text](image-18.png)  
![alt text](image-19.png)

We use `try/catch` instead of `.catch()` to handle errors more clearly.  
![alt text](image-21.png)


## 🌐 Fetch - Explanation & Examples | [colorCode](https://youtu.be/ubw2hdQIl4E?si=Y1PHheBddQmECimR)

When you call `fetch(URL)`, JavaScript creates a **request** behind the scenes and sends it.  
This is how it works under the hood:

![Fetch Request Flow](image-23.png)

---

### 📌 Example
Basic fetch example:

![Fetch Example](image-24.png)

### 📌 `Response.json()` (Summary)

- **What it is:**  
  A method of the `Response` object returned by `fetch()`.

- **What it does:**  
  - Reads the response **body stream** asynchronously  
  - Parses it as JSON  
  - Returns a **Promise** that resolves to a JS object (or array)

- **Usage:**
```js
const response = await fetch(url);
const data = await response.json();
```

- **Why it's async:**  
  The body might still be downloading when you call `.json()`, so it must wait for it to finish before parsing.

- **Common mistake:**  
  Forgetting `await`, which gives you a **Promise** instead of the actual object.
---

### ✅ Successful Fetch (Promise Resolved)
In this case, the fetch request successfully **connects to the server** and returns a resolved promise.  
However, if the server returns an error (like `404`), the **`catch` block will not run** — you have to manually check:

- `response.status`
- `response.ok`

![Successful Fetch](image-26.png)

---

### ❌ Failed Fetch (Promise Rejected)
If the fetch itself fails (e.g., **no internet connection**, **CORS error**, or **server unreachable**),  
then the **`catch` block will run**.

![Failed Fetch](image-25.png)

---

### 📤 POST Requests
`POST` is generally used to **send data to the server**, such as submitting forms or uploading data.

![POST Example](image-27.png)

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>







# 📝Side Notes
some general notes, kinda off-topic.

## Object Iteration

### 1. `for...in`
Iterates over **keys** (property names) in an object.

    const user = { name: "Ahmed", age: 21 };

    for (const key in user) {
      console.log(key);         // "name", "age"
      console.log(user[key]);   // "Ahmed", 21
    }

---

### 2. `Object.keys()`
Returns an **array of keys** → allows using array methods like `forEach`.

    Object.keys(user).forEach(key => {
      console.log(key, user[key]);
    });

---

### 3. `Object.values()`
Returns an **array of values**.

    Object.values(user).forEach(value => {
      console.log(value);
    });

---

### 4. `Object.entries()`
Returns an **array of [key, value] pairs**.

    Object.entries(user).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });

## Numbers Notes
| **Value**                  | **Meaning**                                       | **Example**                             |
| -------------------------- | ------------------------------------------------- | --------------------------------------- |
| `Infinity`                 | Positive infinity (bigger than any number)        | `1 / 0 → Infinity`                      |
| `-Infinity`                | Negative infinity (smaller than any number)       | `-1 / 0 → -Infinity`                    |
| `Number.MAX_VALUE`         | Largest finite number (\~1.79 × 10³⁰⁸)            | `console.log(Number.MAX_VALUE)`         |
| `Number.MIN_VALUE`         | Smallest positive number (>0, very close to zero) | `console.log(Number.MIN_VALUE)`         |
| `Number.POSITIVE_INFINITY` | Same as `Infinity`                                | `console.log(Number.POSITIVE_INFINITY)` |
| `Number.NEGATIVE_INFINITY` | Same as `-Infinity`                               | `console.log(Number.NEGATIVE_INFINITY)` |
| `NaN`                      | "Not a Number" (invalid math result)              | `0 / 0 → NaN`                           |
| `Number.isFinite(x)`       | Checks if `x` is finite (not ±Infinity, not NaN)  | `Number.isFinite(42) → true`            |


<br>
<br>
<br>
<br>

-> hoisting doesn't work with arrow functions


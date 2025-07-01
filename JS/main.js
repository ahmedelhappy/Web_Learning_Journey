// "use strict"
// window.onload = function () {
//   document.querySelector("h1").style.color = 'red';
// }

// window.alert("Hello") //not commonly used.

// document.write("<h1>Hello</h1>"); //Deprecated

//===============================
// console.log("Log");
// console.error("Error");
// console.table(["Osama", "Ahmed", "Sayed"]);

// console.log(
//   "Hello From %cJS %cFile",
//   "color: red; font-size: 40px",
//   "color: blue; font-size: 40px"
// );
//===============================
/*
  ES6
*/

// var myName = "Osama";

// console.log("Hello " + myName);
// console.log(`Hello ${myName}`);

//===============================
// ========>Data Types

/*
  Data Types Intro
  - String
  - Number
  - Array => Object
  - Object
  - Boolean
*/
// console.log("Osama Mohamed");
// console.log(typeof "Osama Mohamed");
// console.log(typeof 5000);
// console.log(typeof 5000.99);
// console.log(typeof [10, 15, 17]);
// console.log(typeof { name: "Osama", age: 17, country: "Eg" });
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);

// // Modern JS shorthand
// const name = "Ahmed";
// const age = 25;

// // Instead of {name: name, age: age}
// const person = {name, age};  // ✨ Clean!
// ================================

// ========>Variables
/*
  Variables Intro
  - What Is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  - Id And Global Variable
  - Loosely Typed vs Strongly Typed
*/

// console.log(user3); //  declared in HTML File <div id="user3">Mo Salah</div>
// user3.innerHTML = "Ahmmmmed"; // can be edited.
// The famous JS weirdness (loosely typed)
// console.log([] + []);        // "" (empty string)
// console.log([] + {});        // "[object Object]"
// console.log({} + []);        // 0 (what?!)
// console.log(true == 1);      // true
// console.log("2" == 2);       // true (loose equality)
// console.log("2" === 2);      // false (strict equality)

/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/

//===============================
/*
Concatenation
*/

// let a = "We Love";
// let b = "JavaScript";

// console.log(a + b);

// console.log(a, b);

/*
Template Literals (Template Strings)
*/

// First Example

// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";


// console.log(`${a} "" '' \\ ${b}
// ${c} ${d}`);

// // Second Example

// let title = "Elzero";
// let desc = "Elzero Web School";

// let markup = `
//   <div class="card">
//     <div class="child">
//       <h2>${title}</h2>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;

// document.write(markup);

// y = 20;
// let name = "Ahmed";
// let x = `
// hello, ${name}.
// I'm ${y} years old`;
// console.log(x);
//===============================
/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/
// console.log(+100);
// console.log(+"100");
// console.log(+"-100");
// console.log(+"Osama");
// console.log(+"15.5");
// console.log(+0xff);
// console.log(+null);
// console.log(+false);
// console.log(+true);

// console.log(-100);
// console.log(-"100");
// console.log(-"-100");
// console.log(-"Osama");
// console.log(-"15.5");
// console.log(-0xff);
// console.log(-null);
// console.log(-false);
// console.log(-true);

// console.log(Number("100"));

//===============================
/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/
// let a = "100";
// let b = 20;
// let c = true;

// console.log(a + b + c);
// console.log(+a + b + c); //using unary plus operator.
// console.log(Number(a) + b + c); //using Number constructor.
// console.log(a - b + c);
//===============================
/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.0);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 23434343434);
//===============================
/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

// console.log((100).toString());
// console.log(100.1.toString());

// console.log(100.554555.toFixed(2)); //string

// console.log(Number("100 Osama"));
// console.log(+"100 Osama");
// console.log(parseInt("100 Osama"));
// console.log(parseInt("Osama 100 Osama"));
// console.log(parseInt("100.500 Osama"));
// console.log(parseFloat("100.500 Osama"));

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.500));
// console.log(Number.isInteger(100));
// console.log(Number.isNaN("Osama" / 20));
//===============================
/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));

// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));

// console.log(Math.pow(2, 4));
// console.log(Math.random());
// console.log(Math.trunc(99.5));
//===============================
/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

// let theName = "  Ahmed  ";

// console.log(theName);
// console.log(theName[1]);
// console.log(theName[55]);
// console.log(theName.charAt(1));
// console.log(theName.charAt(55));
// console.log(theName.length);
// console.log(theName.trim());
// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());
// console.log(theName.trim().charAt(2).toUpperCase());
//===============================
/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

// let a = "Elzero Web School";

// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));
// console.log(a.indexOf("o")); // 5
// console.log(a.lastIndexOf("o")); // 15
// console.log(a.slice(2, 6));
// console.log(a.slice(-5));
// console.log(a.repeat(5));
// console.log(a.split(" ", 2));

//===============================
/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

// let a = "Elzero Web School";
// console.log(a.length);
// console.log(a.substring(6, 2));
// console.log(a.substring(-10, 6)); // 0 - 6
// console.log(a.substring(a.length - 5, a.length - 3));

// console.log(a.substr(0, 6));
// console.log(a.substr(17));
// console.log(a.substr(-3));
// console.log(a.substr(-5, 2));

// console.log(a.includes("Web"));
// console.log(a.includes("Web", 8));

// console.log(a.startsWith("E"));
// console.log(a.startsWith("E", 2));
// console.log(a.startsWith("zero", 2));

// console.log(a.endsWith("l"));
//===============================
/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = 0;

// console.log(`The Price Is ${price || 200}`); //if 0, "", false, undefined, null, etc.
// console.log(`The Price Is ${price ?? 200}`); //if null or undefined only.
//===============================
// /*
//   Arrays Methods [Adding And Removing]
//   - unshift("", "") Add Element To The First
//   - push("", "") Add Element To The End
//   - shift() Remove First Element From Array
//   - pop() Remove Last Element From Array
// */

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);

// myFriends.unshift("Osama", "Nabil");

// console.log(myFriends);

// myFriends.push("Samah", "Eman");

// console.log(myFriends);

// let first = myFriends.shift();

// console.log(myFriends);

// console.log(`First Name Is ${first}`);

// let last = myFriends.pop();

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);


//===============================
// /*
//   Arrays Methods [Slicing]
//   - slice(Start [Opt], End [Opt] Not Including End)
//   --- slice() => All Array
//   --- If Start Is Undefined => 0
//   --- Negative Count From End
//   --- If End Is Undefined || > Indexes => Slice To The End Array.length
//   --- Return New Array
//   - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
//   --- If Negative => Start From The End
// */

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 3));
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1, -2));
// console.log(myFriends.slice(-4, -2));
// console.log(myFriends);

// myFriends.splice(1, 2, "Sameer", "Samara");

// console.log(myFriends);
//===============================
// /*
//   Arrays Methods [Joining]
//   - concat(array, array) => Return A New Array
//   - join(Separator)
// */

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

// console.log(allFriends);

// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());
//===============================
// /*
//   Loop Control
//   - Break
//   - Continue
//   - Label
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === "Green") {
//       break mainLoop;
//     }
//   }
// }
//===============================
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 5;

// document.writeln(`<h1>Show ${showCount} Products</h1>`);

// for(let i = 0; i < showCount; i++) {
//   document.writeln(`<div class"${products[i]}">`);
//   document.writeln(`<h3>${products[i]}</h3>`);
//   document.writeln(`</div>`);
// }

//===============================
// function sayHello(userName, age) {
//   age = "Unknown" || age;
//   return(`Hello ${userName}, Your age is ${age}.`)
// }
// console.log(sayHello("Ahmed", 21));
//===============================
// /*
//   Function
//   - Rest Parameters
//   - Only One Allowed
//   - Must Be Last Element
// */

// function calc(...numbers) {
//   // console.log(Array.isArray(numbers));
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i]; // result = result + numbers[i]
//   }
//   return `Final Result Is ${result}`;
// }

// console.log(calc(10, 20, 10, 30, 50, 30));
//===============================
// function showInfo(usr = "Un", age = "Un", rph = 0, show = "yes", ...sk) {
//   document.writeln(`<div>`);
//   document.writeln(`<h1>Welcome To The Page!</h1>`);
//   document.writeln(`<h2>Your Name is ${usr}</h2>`);
//   document.writeln(`<h2>Your Age is ${age}</h2>`);
//   document.writeln(`<h2>Your Rate Per Hour is ${rph}</h2>`);
//   if(show === "yes") {
//     document.writeln(`<h2>Your Skills are ${sk.join(" | ")}</h2>`);
//   }else {document.writeln(`<h2>Your skills are hidden</h2>`)};
//   document.writeln(`</div>`);
// }

// showInfo("Ahmed", 22, 40, "yes", "HTML", "CSS", "JS", "Py", "React");
//===============================
/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

// let calculator = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(calculator(10, 20));

// function sayHello() {
//   document.writeln(`<h1>Hello Ahmed</h2>`);
// }

// document.getElementById("show").onclick = sayHello;

// setTimeout(function elzero() {
//   console.log("Good");
// }, 2000);
//===============================
// let sayHello = function () {
//   console.log(`Hello Ahmed`);
// };


// let sayHello2 = () => {
//   return `Hello Ahmed`;
// }

// let sayHello3 = () => `Hello Ahmed`;

// let sayHello4 = _ => `Hello Ahmed`;

// let sayHello5 = (name) => `Hello ${name}`;

// let sayHello6 = name => `Hello ${name}`;

// let sayHello7 = (name1, name2) => `Hello ${name1}, Hello ${name2}`;

// sayHello();
// console.log(sayHello2());
// console.log(sayHello3());
// console.log(sayHello4());
// console.log(sayHello5("Ahmed"));
// console.log(sayHello6("Ahmed"));
// console.log(sayHello7("Ahmed", "Mo"));

//===============================
// let a = 10;
// let b = 20;

// // function test() {
// //   console.log(`from function\na = ${a}\nb = ${b}`);
// //   a = 100;
// //   b = 200
// // }

// for(; a < 11; a++) {
//   console.log("yes");brackets
//   a = 100;
// }

// console.log(`${a}`)

//===============================
// /*
//   Higher Order Functions
//   ---> is a function that accepts functions as parameters and/or returns a function.

//   - Map
//   --- method creates a new array
//   --- populated with the results of calling a provided function on every element
//   --- in the calling array.

//   Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
//   - Element => The current element being processed in the array.
//   - Index => The index of the current element being processed in the array.
//   - Array => The Current Array

//   Notes
//   - Map Return A New Array

//   Examples
//   - Anonymous Function
//   - Named Function

// */

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// //traditional way
// for (let i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i] + myNums[i]);
// }

// console.log(newArray);

// // Same Idea With Map

// // let addSelf = myNums.map(function (element, index, arr) {
// //   // console.log(`Current Element => ${element}`);
// //   // console.log(`Current Index => ${index}`);
// //   // console.log(`Array => ${arr}`);
// //   // console.log(`This => ${this}`);
// //   return element + element;
// // }, 10);

// // let addSelf = myNums.map((a) => a + a);

// // console.log(addSelf);

// function addition(ele) {
//   return ele + ele;
// }

// let add = myNums.map(addition);

// console.log(add);
//===============================
// let myarr = [1, 2, 3, 4, 5, 6];

// function add(num) {
//   return num + num;
// }
// let newArr = myarr.map(add)

// console.log(newArr);

// let func = (ele) => ele + ele;


// console.log(myarr.map(func))

// console.log(myarr.map(function(ele){return ele + ele;}))

// console.log(myarr.map(fun = (ele) => ele + ele))
//===============================
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let invv = invertedNumbers.map(function (ele) {return ele * -1;});
// console.log(invertedNumbers.map(func = (ele) => ele * -1));
// console.log(func(10));
//===============================
// let ignoreNumbers = "Elz123er4o";
// funcc = function(ele) {
//   if(ele - 20 === NaN) {
//     return ele;
//   }
//   else {
//     return;
//   }
// }

// let ignored = ignoreNumbers.split("").map(funcc);
// console.log(ignored);
// console.log('E' - 20);
//===============================
// /*
//   Map
//   - Swap Cases
//   - Inverted Numbers
//   - Ignore Boolean Value
// */

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// // let sw = swappingCases
// //   .split("")
// //   .map(function (ele) {
  // //     // Condition ? True : False
  // //     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  // //   })
  // //   .join("");
  
  // // Arrow Function Version
  
  // let sw = swappingCases
  //   .split("")
  //   .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  //   .join("");
  
  // console.log(sw);
  
  // let inv = invertedNumbers.map(function (ele) {
    //   return -ele;
    // });
    
    // console.log(inv);
    
    // let ign = ignoreNumbers
    //   .split("")
    //   .map(function (ele) {
      //     return isNaN(parseInt(ele)) ? ele : "";
      //   })
      //   .join("");
      
      // console.log(ign);
      
      
//===============================
/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let filterdFriends = friends.filter(function (el) {
//   return el.startsWith("A") ? true : false;
// });

// console.log(filterdFriends);

// // Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter(function (el) {
//   return el % 2 === 0;
// });

// console.log(evenNumbers);

// // Test Map vs Filter

// // let addMap = numbers.map(function (el) {
// //   return el + el;
// // });

// // console.log(addMap);

// // let addFilter = numbers.filter(function (el) {
// //   return el + el;
// // });

// // console.log(addFilter);

// let mix = "A13BS2ZX";
// let result = 1;
// let filteredMix = mix.split("").filter(function(el) {
// return !isNaN(parseInt(el));
// }).map(function(el) {
//   result *= el;
// })

// console.log(result);

// /*
//   - Reduce
//   --- method executes a reducer function on each element of the array,
//   --- resulting in a single output value.

//   Syntax
//   reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
//   - Accumulator => the accumulated value previously returned in the last invocation
//   - Current Val => The current element being processed in the array
//   - Index => The index of the current element being processed in the array.
//   ---------- Starts from index 0 if an initialValue is provided.
//   ---------- Otherwise, it starts from index 1.
//   - Array => The Current Array
// */

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(acc + current);
//   console.log(`#############`);
//   return acc + current;
// }, 5);

// console.log(add);




//===============================
// /*
//   Higher Order Functions Challenges

//   You Can Use
//   - ,
//   - _
//   - Space
//   - True => 1 => One Time Only In The Code

//   You Cannot Use
//   - Numbers
//   - Letters

//   - You Must Use [Filter + Map + Reduce + Your Knowledge]
//   - Order Is Not Important
//   - All In One Chain

// */

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("").filter(ch => )

// console.log(solution); // Elzero Web School

//===============================
// const numbers = [1, 2, 3, 4, 5];

// // forEach - use return to skip
// numbers.forEach(num => {
//     if (num === 3) return; // Skip this iteration
//     console.log(num);
// });
// // Output: 1, 2, 4, 5

// // map - return a placeholder or filter later
// const doubled = numbers.map(num => {
//     if (num === 3) return null; // Skip by returning null
//     return num * 2;
// }).filter(Boolean); // Remove null values
// console.log(doubled); // [2, 4, 8, 10]

// // filter - just return false to skip
// const filtered = numbers.filter(num => {
//     if (num === 3) return false; // Skip this element
//     return true;
// });
// console.log(filtered); // [1, 2, 4, 5]
//===============================
// /*
//   Object
//   - Dig Deeper
//   - Dot Notation vs Bracket Notation
//   - Dynamic Property Name
// */

// let myVar = "country";

// let user = {
//   theName: "Osama",
//   country: "Egypt",
//   "the age": 21,
// };

// console.log(user.theName);
// console.log(user["the age"]);// Must use square  here.
// console.log(user.country); // user.country
// console.log(user.myVar); // will not work
// console.log(user[myVar]); // user.country
//===============================
// /*
//   Object
//   - Nested Object And Trainings
// */

// let available = true;

// let user = {
//   name: "Osama",
//   age: 38,
//   skills: ["HTML", "CSS", "JS"],
//   available: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (user.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free`;
//     }
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]); // Access With Index
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt.one);
// console.log(user["addresses"]["egypt"]);
// console.log(user["addresses"]["egypt"]["one"]);

// console.log(user.checkAv());
//===============================
// /*
//   Object
//   - Create With New Keyword new Object();
// */



// let user = new Object({
//   age: 20,
// });
// //The previous was is the same as the old way.
// let user2 = {
//   age: 30,
// };

// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";

// user.sayHello = function () {
//   return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());
//===============================
// /*
//   Function this Keyword
//   - this Introduction
//   - this Inside Object Method
//   --- When a function is called as a method of an object,
//   --- its this is set to the object the method is called on.
//   - Global Object
//   - Test Variables With Window And This
//   - Global Context
//   - Function Context

//   Search
//   - Strict Mode
// */

// console.log(this);
// console.log(this === window);

// myVar = 100;

// console.log(window.myVar);
// console.log(this.myVar);

// function sayHello() {
//   console.log(this);
//   return this;
// }
// sayHello();

// console.log(sayHello() === window);

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// let user = {
//   age: 38,
//   ageInDays: function () {
//     console.log(this);
//     return this.age * 365;
//   },
// };

// console.log(user.age);
// console.log(user.ageInDays());
//===============================
// let user = {
//   age: 40,
//   doubleAge: function() {
//     return user.age * 2;
//   },
//   doubleAge2: _ => user.age * 2,
// }

// console.log(user.doubleAge2())

//===============================
/*
  Object
  - Create Object With Create Method
*/

let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

let copyObj = Object.create(user);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
//===============================

//===============================
//===============================
//===============================
//===============================







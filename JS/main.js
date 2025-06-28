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
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.writeln(`<h1>Show ${showCount} Products</h1>`);

for(let i = 0; i < showCount; i++) {
  document.writeln(`<div class"${products[i]}">`);
  document.writeln(`<h3>${products[i]}</h3>`);
  document.writeln(`</div>`);
}








//===============================
//===============================
//===============================
//===============================
//===============================








//====================Day1================================
// //Factory Function

// //Basic Example

// function CreatePerson (name) {
//   return {
//     name,
//     talk: () => `${name} talking`,
//   }
// }

// const user1 = CreatePerson("Ahmed")
// const user2 = CreatePerson("Mo")

// console.log(user1.talk())
// console.log(user2.talk())
// console.log(`############`)

// //Example 2

// function createDomElementFactory(type, text, color) {
//   const element = document.createElement(type);
//   element.innerText = text;
//   element.style.color = color;
//   document.body.append(element);

//   //Returning an object to be a reference to the DOM element just created above
//   //So yes this is an object

//   return {
//     // Public property
//     element: element,
    
//     // Public method
//     updateText: function updateText(newText) {
//       element.innerText = newText;
//     },
    
//     updateColor: function updateColor(newColor) {
//       element.style.color = newColor;
//     }
//   };
// }

// let h1 = createDomElementFactory(
//   "h1",
//   "Hi, This is h1 from createDomElementFactory",
//   "blue"
// );

// let div = createDomElementFactory(
//   "div",
//   "Hi, This is div from createDomElementFactory",
//   "green"
// );

// h1.updateText("Updated h1 text");
// div.updateColor("lightgreen");

// console.log(h1) //object that contain (properties of (name, methods...))
// console.log(h1.element) //the DOM element itself
//==================Tip===============
// //short hand for creating objects
// let name = "Ahmed";
// let age = 22;

// let person = {
//   name, // same as name: name
//   age   // same as age: age
// };

// console.log(person); // { name: "Ahmed", age: 22 }

// let obj = {
//   sayHi: function() {
//     console.log("Hi");
//   }
// };


//=================Day2==================
//Constructor Function











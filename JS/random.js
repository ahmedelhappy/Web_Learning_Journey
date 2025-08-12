//====================Day1================================
// function createElementFactory(type, text, color) {
//   // Private variables (can't be accessed directly from outside)
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


// let el2 = createElementFactory(
//   "h1",
//   "Hi, This is h1 from createElementFactory",
//   "blue"
// );

// el2.updateText("Updated h1 text");
// el2.updateColor("red"); 
// el2.updateColor("green"); 

// const testElePrint = document.querySelector(".root");
// console.log(el2)
// console.log(testElePrint)

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










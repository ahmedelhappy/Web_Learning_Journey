import { createElement } from "react"
import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector("#root"));

// root.render(<h1>Hello</h1>)
// const createEle = createElement("h1", null, "Hi From createElement!")
// root.render(createEle);
// console.log(createEle) //js object
// //createElement wasn't the best when it comes to nested elements

//JSX Syntax
// const createEle = (
//   <h1>
//     Hi From <span>Nested Span</span> JSX!
//   </h1>
// );
// root.render(createEle);

//===========================================
// function MainContent() {
//   return <h1>React is great!</h1>;
// }

// root.render(
//   <div>
//     <MainContent />
//   </div>
// );

// //=======================Declarative React============================
// // Using js, it's Imperative (have to tell every single step)
// let myElement = document.createElement("h1");
// myElement.textContent = "Hello, React!";
// myElement.classList.add("header");
// document.body.append(myElement);

// // React is Declarative, (just ask what do you want to do)
// root.render(
//     <h1 className="header">Hello, React!</h1>
// )

//=============================


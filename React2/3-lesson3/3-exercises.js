let root = ReactDOM.createRoot(document.querySelector(".js-container"));

/* 3a Exercise */
// function CounterButton() {
//   function displayClicked() {
//     console.log("clicked")
//   }

//   return(
//   <>
//     <button onClick={displayClicked} >Clicked 0 times</button>
//   </>)
// }

// function App() {
//   return(
//     <>
//       <CounterButton />
//     </>
//   )
// }

// root.render(<App />)
/* ------------------------- */

/* 3b Exercise */
// function CounterButton() {
//   // const array = React.useState(0);
//   // let count = array[0];
//   // const setCount = array[1];

//   let [count, setCount] = React.useState(0);

//   function increaseCount() {
//     setCount(++count);
//     console.log("clicked")
//   }

//   return(
//   <>
//     <button onClick={increaseCount} >Clicked {count} times</button>
//   </>)
// }

// function App() {
//   return(
//     <>
//       <CounterButton />
//     </>
//   )
// }

// root.render(<App />)
/* ------------------------- */

/* 3c Exercise */
// function CounterButton() {
//   let [count, setCount] = React.useState(0);

//   function increaseCount() {
//     setCount(++count);
//   }

//   return (
//     <>
//       <button onClick={increaseCount}>
//         Clicked {count} {count === 1 ? "time" : "times"}
//       </button>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <CounterButton />
//     </>
//   );
// }

// root.render(<App />);
/* ------------------------- */

/* 3d Exercise */
// function CounterButton() {
//   let [count, setCount] = React.useState(0);

//   function increaseCount() {
//     setCount(++count);
//   }

//   return (
//     <>
//       <button onClick={increaseCount}>
//         Clicked {count} {count === 1 ? "time" : "times"}
//       </button>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <CounterButton />
//       <CounterButton />
//     </>
//   );
// }

// root.render(<App />);
/* ------------------------- */

/* 3e Exercise */
// function CounterButton({ count, setCount }) {
//   function increaseCount() {
//     setCount(++count);
//   }

//   return (
//     <>
//       <button onClick={increaseCount}>
//         Clicked {count} {count === 1 ? "time" : "times"}
//       </button>
//     </>
//   );
// }

// function App() {
//   let [count, setCount] = React.useState(0);

//   return (
//     <>
//       <CounterButton count={count} setCount={setCount} />
//       <CounterButton count={count} setCount={setCount} />
//     </>
//   );
// }

// root.render(<App />);
/* ------------------------- */

/* 3f Exercise */
// function CounterButton({ count, setCount }) {
//   function increaseCount() {
//     setCount(++count);
//   }

//   return (
//     <>
//       <button onClick={increaseCount}>
//         Clicked {count} {count === 1 ? "time" : "times"}
//       </button>
//     </>
//   );
// }

// function ResetButton({ setCount }) {
//   function reset() {
//     setCount(0);
//   }

//   return (
//     <button onClick={reset}>
//       Reset
//     </button>
//   )
// }

// function App() {
//   let [count, setCount] = React.useState(0);

//   return (
//     <>
//       <CounterButton count={count} setCount={setCount} />
//       <CounterButton count={count} setCount={setCount} />
//       <ResetButton setCount={setCount} />
//     </>
//   );
// }

// root.render(<App />);
/* ------------------------- */

/* 3g Exercise */
// function Input() {
//   let [inputText, setInputText] = React.useState(null);

//   function captureInput(e) {
//     setInputText(e.target.value);
//   }

//   return(
//     <>
//       <input onChange={captureInput} />
//       <p>Hello {inputText} </p>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <Input />
//     </>
//   );
// }

// root.render(<App />);
/* ------------------------- */

/* 3h Exercise */
// function Form({ inputText, setInputText }) {
//   return (
//     <>
//       <input onChange={(e) => setInputText(e.target.value)} value={inputText} />
//       <button onClick={() => setInputText("Ahmed")}>Example</button>
//       <button onClick={() => setInputText("")}>Reset</button>
//       <p>Hello {inputText}</p>
//     </>
//   );
// }


// function App() {
//   let [inputText, setInputText] = React.useState("");

//   return (
//     <>
//       <Form inputText={inputText} setInputText={setInputText} />
//     </>
//   );
// }

// root.render(<App />);
/* ------------------------- */


/* 3i Exercise */
function Form({ inputText, setInputText }) {
  return (
    <>
      <input onChange={(e) => setInputText(e.target.value)} value={inputText} />
      <button onClick={() => setInputText("Ahmed")}>Example</button>
      <button onClick={() => setInputText("")}>Reset</button>
      <p>Hello {inputText}</p>
    </>
  );
}


function App() {
  let [inputText, setInputText] = React.useState("");

  return (
    <>
      <Form inputText={inputText} setInputText={setInputText} />
    </>
  );
}

root.render(<App />);
/* ------------------------- */

/* 3j Exercise */
/* ------------------------- */

/* 3k Exercise */
/* ------------------------- */

/* 3l Exercise */
/* ------------------------- */

/* 3m Exercise */
/* ------------------------- */

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
function CounterButton() {
  let [count, setCount] = React.useState(0);

  function increaseCount() {
    setCount(++count);
  }

  return (
    <>
      <button onClick={increaseCount}>
        Clicked {count} {count === 1 ? "time" : "times"}
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <CounterButton />
      <CounterButton />
    </>
  );
}

root.render(<App />);
/* ------------------------- */

/* 3e Exercise */
/* ------------------------- */

/* 3f Exercise */
/* ------------------------- */

/* 3g Exercise */
/* ------------------------- */

/* 3h Exercise */
/* ------------------------- */

/* 3i Exercise */
/* ------------------------- */

/* 3j Exercise */
/* ------------------------- */

/* 3k Exercise */
/* ------------------------- */

/* 3l Exercise */
/* ------------------------- */

/* 3m Exercise */
/* ------------------------- */

/* 4a Exercise */
// const container = document.querySelector(".js-container");
// ReactDOM.createRoot(container).render(<App />);

// function App() {
//   return (
//     <button className="no-button">No</button>
//   )
// }

/* ------------------------- */

/* 4b Exercise */
// const container = document.querySelector(".js-container");
// ReactDOM.createRoot(container).render(<App />);

// function App() {
//   const [isButtonOn, setIsButtonOn] = React.useState(true);

//   return (
//     <button
//     className="is-button-on"
//     onClick={() => isButtonOn? setIsButtonOn(false) : setIsButtonOn(true)}
//     >
//       {isButtonOn? "true" : "false"}
//     </button>
//   )
// }
/* ------------------------- */

/* 4c Exercise */
// const container = document.querySelector(".js-container");
// ReactDOM.createRoot(container).render(<App />);

// function App() {
//   const [isButtonOn, setIsButtonOn] = React.useState(true);

//   return (
//     <button
//     className = {isButtonOn ? "is-button-on" : "is-button-off"}
//     onClick={() => isButtonOn? setIsButtonOn(false) : setIsButtonOn(true)}
//     >
//       {isButtonOn? "ON" : "OFF"}
//     </button>
//   )
// }

/* ------------------------- */

/* 4d Exercise */
// const container = document.querySelector(".js-container");
// ReactDOM.createRoot(container).render(<App />);

// function App() {

//   return (
//     <>
//       <p>Hello, welcome to my website</p>
//       <input placeholder="Email" type="email" />
//       <br />
//       <input placeholder="Password" type="Password" />
//       <br />
//       <button>Login</button>
//       <button>Sign Up</button>
//     </>
//   )
// }

/* ------------------------- */

/* 4e Exercise */
// const container = document.querySelector(".js-container");
// ReactDOM.createRoot(container).render(<App />);

// function App() {
//   const [showPass, setShowPass] = React.useState(false);

//   return (
//     <>
//       <p>Hello, welcome to my website</p>
//       <input placeholder="Email" type="email" />
//       <br />
//       <div className="pass-container">
//         <input placeholder="Password" type={!showPass ? "password" : "text"} />
//         <button
//           className="show-password-button"
//           onClick={() => (showPass ? setShowPass(false) : setShowPass(true))}
//         >
//           <img src="https://cdn-icons-png.flaticon.com/128/2767/2767146.png"></img>
//         </button>
//       </div>
//       <br />
//       <button className="login-button">Login</button>
//       <button className="sign-up-button">Sing up</button>
//     </>
//   );
// }
/* ------------------------- */

/* 4f Exercise */
// const container = document.querySelector(".js-container");
// ReactDOM.createRoot(container).render(<App />);

// function App() {
//   const [time, setTime] = React.useState(dayjs().format("HH:mm:ss"));
//   React.useEffect(()=> {
//     setInterval(()=> {
//       setTime(dayjs().format("HH:mm:ss"));
//     }, 1000)
//   }, [])
//   // https://chatgpt.com/share/68fa5586-155c-8006-95a6-b1238b7c99c4
//   return (
//     <>
//       <p>Current Time: {time}</p>
//     </>
//   );
// }
/* ------------------------- */

/* 4g Exercise */
// const container = document.querySelector(".js-container");
// ReactDOM.createRoot(container).render(<App />);

// function App() {
//   const [time, setTime] = React.useState(dayjs().format("HH:mm:ss"));
//   React.useEffect(()=> {
//     setInterval(()=> {
//       setTime(dayjs().format("HH:mm:ss"));
//       console.log("run code")
//     }, 1000)
//   }, [])
//   // https://chatgpt.com/share/68fa5586-155c-8006-95a6-b1238b7c99c4
//   return (
//     <>
//       <p>Current Time: {time}</p>
//     </>
//   );
// }
/* ------------------------- */

/* 4h Exercise */
// const container = document.querySelector(".js-container");
// const root = ReactDOM.createRoot(container);

// function App() {
//   const [count, setCount] = React.useState(0);
//   function autoClick() {
//     setInterval(() => {setCount(prev => prev + 1)
//       console.log("ran")
//     }, 1000);

//     // setInterval(() => setCount(count + 1), 1000);
//   }

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>
//         Clicked {count} {count === 1 ? "time" : "times"}
//       </button>
//       <button onClick={autoClick}>Auto Click</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </>
//   );
// }

// root.render(<App />);

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

function App() {
  const [count, setCount] = React.useState(0);
  const buttonRef = React.useRef();

  function autoClick() {
    setInterval(() => {
      const buttonElem = buttonRef.current;
      if (buttonElem) {
        buttonElem.click();
      }
    }, 1000);
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)} ref={buttonRef}>
        Clicked {count} {count === 1 ? "time" : "times"}
      </button>
      
      <button onClick={() => setCount(0)}>Reset</button>

      <button onClick={autoClick} >
        Auto Click
      </button>
      
    </div>
  );
}

root.render(<App />);
/* ------------------------- */

/* 4i Exercise */
/* ------------------------- */

/* 4j Exercise */
/* ------------------------- */

/* 4k Exercise */
/* ------------------------- */

/* 4l Exercise */
// function useAutoScroll(dependencies) {
//   const containerRef  = React.useRef(null);
  
//   React.useEffect(() => {
//     const containerElem = containerRef.current;
//     if (containerElem) {
//       containerElem.scrollTop = containerElem.scrollHeight;
//     }
//   }, dependencies);

//   return containerRef ;
// }
/* ------------------------- */

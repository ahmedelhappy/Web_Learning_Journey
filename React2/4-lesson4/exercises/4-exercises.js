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
const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<App />);

function App() {
  const [showPass, setShowPass] = React.useState(false);

  return (
    <>
      <p>Hello, welcome to my website</p>
      <input placeholder="Email" type="email" />
      <br />
      <div className="pass-container">
        <input placeholder="Password" type={!showPass ? "password" : "text"} />
        <button
          className="show-password-button"
          onClick={() => (showPass ? setShowPass(false) : setShowPass(true))}
        >
          <img src="https://cdn-icons-png.flaticon.com/128/2767/2767146.png"></img>
        </button>
      </div>
      <br />
      <button className="login-button">Login</button>
      <button className="sign-up-button">Sing up</button>
    </>
  );
}
/* ------------------------- */

/* 4f Exercise */
/* ------------------------- */

/* 4g Exercise */
/* ------------------------- */

/* 4h Exercise */
/* ------------------------- */

/* 4i Exercise */
/* ------------------------- */

/* 4j Exercise */
/* ------------------------- */

/* 4k Exercise */
/* ------------------------- */

/* 4l Exercise */
/* ------------------------- */

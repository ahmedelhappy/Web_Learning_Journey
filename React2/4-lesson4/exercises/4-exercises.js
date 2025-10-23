
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
const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<App />);

function App() {
  const [isButtonOn, setIsButtonOn] = React.useState(true);

  return (
    <button 
    className="is-button-on"
    onClick={() => isButtonOn? setIsButtonOn(false) : setIsButtonOn(true)}
    >
      {isButtonOn? "true" : "false"}
    </button>
  )
}

/* ------------------------- */


 /* 4c Exercise */
/* ------------------------- */


 /* 4d Exercise */
/* ------------------------- */


 /* 4e Exercise */
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

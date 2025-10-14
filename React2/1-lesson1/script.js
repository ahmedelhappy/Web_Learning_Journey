/* 1a Exercise */
// const container = document.querySelector(".js-container");
// const root = ReactDOM.createRoot(container);

// root.render(
//   <button>Good Job</button>
// )
/* ------------------------- */

/* 1b Exercise */
// const container = document.querySelector(".js-container");
// const root = ReactDOM.createRoot(container);

// root.render(
//   <p>My name is Ahmed</p>
// )
/* ------------------------- */

/* 1c Exercise */
// const container = document.querySelector(".js-container");
// const root = ReactDOM.createRoot(container);

// root.render(
//   <>
//   <p>Cotton Socks</p>
//   <p>Price: $10</p>
//   <button>Add to Cart</button>
//   </>
// )
/* ------------------------- */

/* 1d Exercise */
// const container = document.querySelector(".js-container");
// const root = ReactDOM.createRoot(container);

// let productCost = (1 * 1000 + 2 * 800) / 100;
// console.log(productCost);
/* ------------------------- */

/* 1e Exercise */
// const container = document.querySelector(".js-container");
// const root = ReactDOM.createRoot(container);

// let productCost = (1 * 1000 + 2 * 800) / 100;
// console.log(productCost);

// root.render(
//   <p>Product cost: $ {productCost}</p>
// )
/* ------------------------- */

/* 1f Exercise */
// const container = document.querySelector(".js-container");
// const root = ReactDOM.createRoot(container);

// let productCost = (1 * 1000 + 2 * 800);
// let shippingCost = 500;

// root.render(
//   <>
//     <p>Product cost: $ {productCost / 100}</p>
//     <p>Shipping cost: $ {shippingCost / 100}</p>
//     <p>Total cost: $ {(productCost + shippingCost) / 100}</p>
//   </>
// )
/* ------------------------- */

/* 1g Exercise */
// const container = document.querySelector(".js-container");
// const root = ReactDOM.createRoot(container);

// let currentDate = dayjs().format("MMMM D")

// console.log(currentDate)

// root.render(
//   <>

//   </>
// )
/* ------------------------- */

/* 1h Exercise */
// const container = document.querySelector(".js-container");
// const root = ReactDOM.createRoot(container);

// let currentDate = dayjs().format("MMMM D")

// console.log(currentDate)

// root.render(
//   <>
//     Today is {currentDate}th
//   </>
// )
/* ------------------------- */

/* 1i Exercise */
// const container = document.querySelector(".js-container");
// const root = ReactDOM.createRoot(container);

// let time = dayjs().format("HH:mm:ss")

// console.log(time)

// root.render(
//   <>
//     <p>Current Time: {time}</p>
//   </>
// )
/* ------------------------- */

/* 1j Exercise */
const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

root.render(<p>Current time: {dayjs().format('HH:mm:ss')}</p>);
setInterval(() => {
  root.render(<p>Current time: {dayjs().format('HH:mm:ss')}</p>)
}
, 1000)

/* ------------------------- */
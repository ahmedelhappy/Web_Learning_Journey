const root = ReactDOM.createRoot(document.querySelector(".js-container"));

/* 2a Exercise */
// function App() {
//   return (
//     <p>Welcome to my website</p>
//   )
// }

// root.render(<App />)
/* ------------------------- */

/* 2b Exercise */
// function App() {
//   return (
//     <>
//       <p>Welcome to my website</p>
//       <button>Login</button>
//       <button>Sign up</button>
//     </>
//   )
// }

// root.render(<App />)
/* ------------------------- */

/* 2c Exercise */
// function App() {
//   return (
//     <>
//       <p>Welcome to my website</p>
//       <div><input placeholder="Email" /></div>
//       <div><input placeholder="Password" type="password" /></div>
//       <button>Login</button>
//       <button>Sign up</button>
//     </>
//   )
// }

// root.render(<App />)
/* ------------------------- */

/* 2d Exercise */
// function LoginForm() {
//   return (
//     <>
//       <div>
//         <input placeholder="Email" />
//       </div>
//       <div>
//         <input placeholder="Password" type="password" />
//       </div>
//       <button>Login</button>
//       <button>Sign up</button>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <p>Welcome to my website</p>
//       <LoginForm />
//     </>
//   );
// }

// root.render(<App />);
/* ------------------------- */

/* 2e Exercise */
// function App() {
//   return (
//     <>
//       <p>Cotton socks</p>
//       <p>Price: $10.90</p>
//       <button>Add to Cart</button>
//     </>
//   )
// }

// root.render(<App />);
/* ------------------------- */

/* 2f Exercise */

// function Product({ name, price }) {
//   return (
//     <>
//       <p>name</p>
//       <p>Price: ${(price / 100).toFixed(2)}</p>
//       <button>Add to Cart</button>
//       <hr />
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <Product name="Cotton socks" price={1090} />
//       <Product name="Tennis balls" price={600} />
//       <Product name="Plain T-Shirt" price={799} />
//     </>
//   )
// }

// root.render(<App />);
/* ------------------------- */

/* 2g Exercise */
// function Product({ name, price, discountPrice }) {
//   return (
//     <>
//       <p>{name}</p>
//       <p>Price: ${((discountPrice || price)/ 100).toFixed(2)}</p>
//       <button>Add to Cart</button>
//       <hr />
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <Product name="Cotton socks" price={1090 } discountPrice={545} />
//       <Product name="Tennis balls" price={600} />
//       <Product name="Plain T-Shirt" price={799} />
//     </>
//   )
// }

// root.render(<App />);
/* ------------------------- */

/* 2h Exercise */
// function Product({ name, price, discountPrice }) {
//   function Prices() {
//     if (discountPrice) {
//       return (
//         <>
//           <del>Price: {(price / 100).toFixed(2)}</del>
//           <p>discount price: ${(discountPrice / 100).toFixed(2)}</p>
//         </>
//       );
//     } else {
//       return <p>Price: {(price / 100).toFixed(2)}</p>;
//     }
//   }

//   return (
//     <>
//       <p>{name}</p>
//       <Prices />
//       <button>Add to Cart</button>
//       <hr />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Product name="Cotton socks" price={1090} discountPrice={545} />
//       <Product name="Tennis balls" price={600} />
//       <Product name="Plain T-Shirt" price={799} />
//     </>
//   );
// }

// root.render(<App />);
/* ------------------------- */

/* 2i Exercise */
// function Product({ name, price, discountPrice }) {
//   return (
//     <>
//       <p>{name}</p>
//       {discountPrice? (
//         <>
//           <p><del>Price: ${(price/100).toFixed(2)}</del></p>
//           <p>Discount price:${(discountPrice/100).toFixed(2)}</p>
//         </>
//       ) : (
//         <p>Price: ${(price/100).toFixed(2)}</p>
//       )}
//       <button>Add to Cart</button>
//       <hr />
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Product name="Cotton socks" price={1090} discountPrice={545} />
//       <Product name="Tennis balls" price={600} />
//       <Product name="Plain T-Shirt" price={799} />
//     </>
//   );
// }

// root.render(<App />);
/* ------------------------- */

/* 2j Exercise */
function Product({ name, price, discountPrice, imgSrc }) {
  return (
    <>
      <img src = {imgSrc} width={150} />
      <p>{name}</p>
      {discountPrice? (
        <>
          <p><del>Price: ${(price/100).toFixed(2)}</del></p>
          <p>Discount price:${(discountPrice/100).toFixed(2)}</p>
        </>
      ) : (
        <p>Price: ${(price/100).toFixed(2)}</p>
      )}
      <button>Add to Cart</button>
      <hr />
    </>
  );
}

function App() {
  return (
    <>
      <Product name="Cotton socks" price={1090} discountPrice={545} imgSrc="./imgs/cotton-socks.png" />
      <Product name="Tennis balls" price={600} imgSrc="./imgs/tennis-balls.png" />
      <Product name="Plain T-Shirt" price={799} imgSrc="./imgs/plain-t-shirt.png" />
    </>
  );
}

root.render(<App />);
/* ------------------------- */

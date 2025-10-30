import { useState } from 'react';
import "./LoginForm.css"

export default function LoginForm () {
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <p>Hello, welcome to my website</p>
      <input placeholder="Email" type="email" />
      <br />
      <div className="pass-container">
        <input placeholder="Password" type={!showPass ? "password" : "text"} />
        <img
          src="https://cdn-icons-png.flaticon.com/128/2767/2767146.png"
          className="show-password-button"
          onClick={() => (showPass ? setShowPass(false) : setShowPass(true))}
        />
      </div>
      <br />
      <button className="login-button">Login</button>
      <button className="sign-up-button">Sing up</button>
    </>
  );
}
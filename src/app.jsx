import React, { useState } from "react";
import "./App.css"

export default function Login2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
    } else if (!email.includes("@")) {
      alert("Enter valid email");
    } else {
      alert("Login Successful");
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="container" style={{backgroundImage: "url('https://wallpapershome.com/images/pages/pic_h/901.jpg')",
      backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
  }}>
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/">Forget Password</a>
          </div>

          <button type="submit" className="btn">
            Log in
          </button>
        </form>

        <p className="register">
          Don't have an account? <a href="/">Register</a>
        </p>
      </div>
    </div>
  );
}

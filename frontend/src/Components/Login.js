import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="login-box">
        <p>Login</p>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              required
              name="email"
              value={credentials.email}
              onChange={onChange}
              type="email"
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              required
              name="password"
              value={credentials.password}
              onChange={onChange}
              autoComplete="on"
              type="password"
            />
            <label>Password</label>
          </div>
          <button>Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="a2">
            Sign up!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

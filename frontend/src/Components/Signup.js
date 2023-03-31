import React from "react";
import "./Login.css";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="text-header">Register</div>
      </div>
      <div className="card-body">
        <form action="#">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              required
              className="form-control"
              name="username"
              id="username"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              required
              className="form-control"
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              required
              className="form-control"
              name="password"
              id="password"
              type="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              required
              className="form-control"
              name="confirm-password"
              id="confirm-password"
              type="password"
              minLength={5}
            />
          </div>
          <input type="submit" className="btn" value="Signup" />{" "}
          <p className="a3">
            Already have an account?{" "}
            <Link to="/login" className="a2">
              Login!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

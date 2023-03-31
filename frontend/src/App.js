import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
// import Alert from "./Components/Alert";
import NoteStates from "./context/notes/NoteStates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <NoteStates>
        <Router>
          <Navbar />
          {/* <Alert message={"This is Alert"} /> */}
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </NoteStates>
    </>
  );
}

export default App;

import "./App.css";
import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = " black";
      showAlert("Dark Mode Enables", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enables", "success");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route
              exact
              path="/"
              element={/>}
            />
            {/* <Route path="/about" element={<About/>}/> */}
           <Form title="This is the first form" mode={mode} />   
           
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

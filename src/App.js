import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import React from 'react';

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setalert] = useState(null);

  const toggleMode = (event) => {
    let x = event.currentTarget.id;
    setMode(x);
    var all = document.getElementsByTagName("a");
    if (x === "primary") {
      document.body.style.backgroundColor = "#e9f2ff";
      for (let i = 0, max = all.length; i < max; i++) {
        all[i].style.color = "white";
      }
      showAlert("Blue mode has been enable", "success");
    } else if (x === "dark") {
      document.body.style.backgroundColor = "grey";
      for (let i = 0, max = all.length; i < max; i++) {
        all[i].style.color = "white";
      }
      showAlert("Dark mode has been enable", "success");
    } else if (x === "light") {
      document.body.style.backgroundColor = "white";
      for (let i = 0, max = all.length; i < max; i++) {
        all[i].style.color = "black";
      }
      showAlert("Light mode has been enable", "success");
    } else if (x === "danger") {
      document.body.style.backgroundColor = "white";
      for (let i = 0, max = all.length; i < max; i++) {
        all[i].style.color = "white";
      }
      showAlert("Red mode has been enable", "success");
    }
  };

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    
    <>
    <Navbar title="Utilities" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <TextForm  path="/" showAlert={showAlert} mode={mode} heading="Enter the heading" />
    </>
  );
}

export default App;
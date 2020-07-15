import React from "react";
import logo from "./trivia.png";
import "./App.css";
import { emailHash } from "./services/genEmailHash";

export default function App() {
  console.log(emailHash("danieldelacerdamiranda@gmail.com"));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
      </header>
    </div>
  );
}

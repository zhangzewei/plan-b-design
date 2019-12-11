import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Typography from "./components/typography/Typography";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Typography variant="head" color="primary" underline>
          Typography
        </Typography>
      </header>
    </div>
  );
};

export default App;

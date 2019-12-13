import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Dropdown from "./components/dropdown";

const App = () => {
  const Dom = <div>11122223333</div>;
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
        <Dropdown overlay={Dom} trigger={["click"]}>
          <div>aaaa</div>
        </Dropdown>
      </header>
    </div>
  );
};

export default App;

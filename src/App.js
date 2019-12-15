import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Typography from "./components/typography/Typography";
import Notification from "./components/notification";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          onClick={() => {
            Notification.notice({
              message: "111",
            });
          }}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p
          className="App-link"
          onClick={() => {
            Notification.notice({
              message: "222",
              placement: "left-top",
            });
          }}
        >
          Learn React
        </p>
        <Typography variant="head" color="primary" underline>
          Typography
        </Typography>
      </header>
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1> Weather App</h1>
      <div className="container">
        <button className="btn btn-primary">Hello</button>

        <footer>
          This project was coded by Oksana Zagranychna and is{" "}
          <a
            href="https://github.com/Zagranychna/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

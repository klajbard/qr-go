import React from 'react'
import ReactDOM from "react-dom";
import App from "./App";
import ParticlesContainer from "./ParticlesContainer";

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(
  <>
    <ParticlesContainer />
    <App />
  </>,
  container
);

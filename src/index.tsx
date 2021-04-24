import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./App.less";
import "particles.js";

const container = document.createElement("div");
const particlesContainer = document.createElement("div");
particlesContainer.classList.add(styles.particles);
particlesContainer.id = "particles-js";
container.classList.add(styles.body);
document.body.appendChild(particlesContainer);
document.body.appendChild(container);
ReactDOM.render(<App />, container);
// @ts-ignore
window.particlesJS.load("particles-js", "particles.json");

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./style.css";
import * as serviceWorker from "./serviceWorker";

let state = {};
window.setState = (changes) => {
  state = Object.assign({}, state, changes);
  ReactDOM.render(<App {...state} />, document.getElementById("root"));
};

let initialState = {
  name: "basel"
};
window.setState(initialState);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
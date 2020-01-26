import React from "react";
import ReactDOM from "react-dom";
import { RequestProvider } from "react-request-hook";
import axios from "axios";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// use axios and react-request-hook to request posts.
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/"
});

// use resource hooks with RequestProvider
ReactDOM.render(
  <RequestProvider value={axiosInstance}>
    <App />
  </RequestProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

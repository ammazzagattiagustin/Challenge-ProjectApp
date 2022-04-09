import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { projectReducer } from "./redux/reducers/projectReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(projectReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);

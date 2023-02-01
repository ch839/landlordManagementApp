import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components";

import store from "./store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Provider store={store}>
      <Main />
    </Provider>
  </Router>
);

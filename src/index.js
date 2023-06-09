import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./Context";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);

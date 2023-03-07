// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
import { Theme } from "@theme";
import Router from "./Router";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import "@theme/styles/styles.scss";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <Router />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);

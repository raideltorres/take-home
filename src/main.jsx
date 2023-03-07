// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------
import { store } from "@store";

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
    <Provider store={store}>
      <BrowserRouter>
        <Theme>
          <Router />
        </Theme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

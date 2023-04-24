import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <Auth0Provider
    domain="dev-fuvx3vmayyl7tqrf.us.auth0.com"
    clientId="ZKBtpFISDdVmf04bXYmoNhNZME412t6T"
    redirectUri={window.location.origin}>
    <AppProvider>
      <FilterContextProvider>
          <App />
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);

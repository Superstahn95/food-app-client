import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./app/store";
import AuthProvider from "./context/auth";
import ScreenProvider from "./context/screen";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ScreenProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </ScreenProvider>
    </AuthProvider>
  </React.StrictMode>
);

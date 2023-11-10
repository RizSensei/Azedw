import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppProvider from "./context/AppProvider.jsx";
import ProductProvider from "./context/ProductProvider.jsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </AppProvider>
      </ProductProvider>
    </Provider>
  </React.StrictMode>
);

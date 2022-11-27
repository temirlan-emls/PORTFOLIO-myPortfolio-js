import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TagManager from "react-gtm-module";
import { store } from "./store/store";
import { Provider } from "react-redux";

const tagManagerArgs = {
    gtmId: "G-EQR9DYB8SX",
};

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

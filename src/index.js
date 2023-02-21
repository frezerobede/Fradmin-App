import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { store,persistor } from "./redux/store";
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <DarkModeContextProvider>

        <App />
      </DarkModeContextProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

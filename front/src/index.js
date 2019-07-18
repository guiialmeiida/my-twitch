import React from "react";
import ReactDOM from "react-dom"

import App from "./components";

//UI
import "./index.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import palette from "./palette";

//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./redux/reducers";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={palette}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

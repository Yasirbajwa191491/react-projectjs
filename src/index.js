import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './components/redux/Store';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import Context from "./components/Context"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <Context>
    <App />
    </Context>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


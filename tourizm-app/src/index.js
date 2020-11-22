import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {registerCustomer} from './redux/state';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) =>{
ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} registerCustomer={registerCustomer}/>
      </React.StrictMode>,
    </BrowserRouter>,
      document.getElementById('root')
);}

rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

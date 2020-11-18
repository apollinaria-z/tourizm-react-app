import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
            {id: 1, message: "HI! it is my post", likesCount: 12},
            {id: 2, message: "Hey!! my friend", likesCount: 6},
            {id: 3, message: "Wow! you are supercool!!", likesCount: 666},
        ]

  let dialogsData = [
        {id: 1, name: "Irina"},
        {id: 2, name: "Pavel"},
        {id: 3, name: "Olga"},
        {id: 4, name: "Petya"}
  ]

  let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "my friend"},
        {id: 3, message: "How do you feel"},
        {id: 4, message: "OK perfect"}
  ]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

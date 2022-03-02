import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';
// action ={type:'',payload:''}
// const reducer= (state,action)=>{

// }
// const store=createStore()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

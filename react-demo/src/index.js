import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Test1 from './test1'
import * as serviceWorker from './serviceWorker';
//JSX javascript和xml,虚拟dom
//<,当html运行
//{,当成script运行脚本
ReactDOM.render(
  <React.StrictMode>
    <Test1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ul className='menu'>
      <li className='menuItem'>
        <a href='react.com'>React</a>
      </li>
      <li className='menuItem'>
        <a href='react.com'>React</a>
      </li>
      <li className='menuItem'>
        <a href='react.com'>React</a>
      </li>
      <li className='menuItem'>
        <a href='react.com'>React</a>
      </li>
  </ul>
);

reportWebVitals();

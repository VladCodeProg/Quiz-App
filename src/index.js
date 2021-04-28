import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
</React.StrictMode>
)

render(app, document.getElementById('root'));

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import ShopContextProvider from './context/ShopContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
  document.getElementById( 'root' )
);

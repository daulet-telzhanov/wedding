import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Wedding from './Wedding';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes location={window.location.href.includes('wedding') ? '/wedding' : '/'}>
        <Route 
          path='/'
          Component={App}
        />

        <Route
          path='/wedding'
          Component={Wedding}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

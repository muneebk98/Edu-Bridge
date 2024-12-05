import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';
import {CookiesProvider} from 'react-cookie';
import { SocketContextProvider } from './context/SocketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>

      <App />

      </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  // </React.StrictMode>
);


reportWebVitals();

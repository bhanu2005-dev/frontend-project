
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {store} from "./redux/Store";
import { ToastContainer } from 'react-toastify';
import {Toaster} from "react-hot-toast";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>

    <App />
    <Toaster/>
    <ToastContainer/>
    </Provider>
  </BrowserRouter>
    
);
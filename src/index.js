import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/storecontext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter>
      <StoreContextProvider>   {/* ✅ wrap App with provider */}
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// This code initializes a React application by rendering the main App component into the root element of the HTML document. It uses BrowserRouter from 'react-router-dom' to enable client-side routing, allowing for navigation between different components without reloading the page. This setup is essential for building single-page applications (SPAs) in React, providing a smooth user experience.



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './DesignApp';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" media="screen" rel="stylesheet" type="text/css"></link>
    <App/>
  </React.StrictMode>
);



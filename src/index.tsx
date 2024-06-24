import React from 'react';
import createRoot  from 'react-dom';
import 'normalize.css';
import './index.css';
import Router from './routes';

createRoot.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

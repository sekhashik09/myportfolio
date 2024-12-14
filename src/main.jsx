import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing the root for React 18
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // i18n configuration

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root for React 18
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

const fs = require('fs-extra');
const path = require('path');

const mainCode = `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
`;

const generateMain = (dir) => {
  const filePath = path.join(dir, 'main.jsx');
  fs.writeFileSync(filePath, mainCode, 'utf8');
  console.log('main.jsx file has been generated in the current directory.');
};

module.exports = { generateMain };

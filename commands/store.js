const fs = require('fs-extra');
const path = require('path');

const storeCode = `import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
`;

const generateStore = (dir) => {
  const filePath = path.join(dir,'store.js');
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, storeCode, 'utf8');
  console.log('store.js file has been generated in the current directory.');
};

module.exports = { generateStore };

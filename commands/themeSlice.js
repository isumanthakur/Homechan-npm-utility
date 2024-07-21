const fs = require('fs-extra');
const path = require('path');

const themeSliceCode = `import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
`;

const generateThemeSlice = (dir) => {
  const filePath = path.join(dir, 'src', 'features', 'theme', 'themeSlice.js');
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, themeSliceCode, 'utf8');
  console.log('themeSlice.js file has been generated in the src/features/theme directory.');
};

module.exports = { generateThemeSlice };

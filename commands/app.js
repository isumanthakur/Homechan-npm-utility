const fs = require('fs-extra');
const path = require('path');

const appCode = `import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignIn />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

`;

const generateApp = (dir) => {
  const filePath = path.join(dir, 'App.jsx');
  fs.writeFileSync(filePath, appCode, 'utf8');
  console.log('App.jsx file has been generated in the current directory.');
};

module.exports = { generateApp };

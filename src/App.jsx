import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SignIn from './pages/Signin';
import Login from './pages/Login';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen dark:bg-neutral-950 dark:text-neutral-200 bg-neutral-200 text-neutral-800">
        <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

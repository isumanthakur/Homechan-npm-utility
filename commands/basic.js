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

const headerCode = `import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../features/theme/themeSlice';

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? 'bg-neutral-800 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-800 px-3 py-2 rounded-full'
      : 'hover:bg-neutral-800 hover:text-neutral-200 dark:hover:bg-neutral-200  dark:hover:text-neutral-800 px-3 py-2 rounded-full';

  return (
    <header className="top-0 left-0 w-full bg-transparent text-neutral-800 dark:text-neutral-200 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="text-2xl text-neutral-200 dark:text-neutral-800 font-bold">Logo</div>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="p-2 bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] rounded-full shadow-md hover:bg-[#dddddd] dark:hover:bg-[#333333]"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            )}
          </button>
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact Us
          </NavLink>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="p-2 bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] rounded-full shadow-md hover:bg-[#dddddd] dark:hover:bg-[#333333] mr-2"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            &#9776;
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#e0e0e0] dark:bg-[#1a1a1a] text-[#000000] dark:text-[#e0e0e0]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'block px-4 py-2 bg-[#1a1a1a] dark:bg-[#f0f0f0] rounded-full'
                : 'block px-4 py-2 hover:bg-[#1a1a1a] dark:hover:bg-[#f0f0f0] rounded-full'
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'block px-4 py-2 bg-[#1a1a1a] dark:bg-[#f0f0f0] rounded-full'
                : 'block px-4 py-2 hover:bg-[#1a1a1a] dark:hover:bg-[#f0f0f0] rounded-full'
            }
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'block px-4 py-2 bg-[#1a1a1a] dark:bg-[#f0f0f0] rounded-full'
                : 'block px-4 py-2 hover:bg-[#1a1a1a] dark:hover:bg-[#f0f0f0] rounded-full'
            }
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
`;

const footerCode = `import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full h-[50vh] bg-transparent">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between h-full px-8 py-12">
        {/* Left Part */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start space-y-4">
          <div className="text-2xl font-bold">Logo</div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-neutral-800 dark:text-neutral-200">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-neutral-800 dark:text-neutral-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-neutral-800 dark:text-neutral-200">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        
        {/* Right Part */}
        <div className="w-full md:w-2/3 flex justify-between mt-8 md:mt-0">
          {/* Resources */}
          <div className="w-full md:w-1/3 space-y-4">
            <h2 className="text-xl font-semibold">Docs</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-800 dark:text-neutral-200">Learn More</a></li>
              <li><a href="#" className="text-neutral-800 dark:text-neutral-200">Services</a></li>
              <li><a href="#" className="text-neutral-800 dark:text-neutral-200">Coonect</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full md:w-1/3 space-y-4">
            <h2 className="text-xl font-semibold">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-800 dark:text-neutral-200">Copyright</a></li>
              <li><a href="#" className="text-neutral-800 dark:text-neutral-200">Partners</a></li>
              <li><a href="#" className="text-neutral-800 dark:text-neutral-200">Our laws</a></li>
            </ul>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/3 space-y-4">
            <h2 className="text-xl font-semibold">Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-800 dark:text-neutral-200"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="#" className="text-neutral-800 dark:text-neutral-200"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#" className="text-neutral-800 dark:text-neutral-200"><i className="fab fa-facebook"></i> Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`;

const homeCode = `import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200">
      <section className="flex flex-col md:flex-row items-center justify-between h-screen">
  <div className="order-2 md:order-1 w-full h-1/2 md:w-3/5 md:h-full flex flex-col justify-center items-start p-6 md:p-16 bg-stone-300 dark:bg-neutral-800 space-y-6">
    <h3 className="text-3xl font-semibold text-[#000000] dark:text-[#e0e0e0]">Company Name</h3>
    <h1 className="text-4xl md:text-5xl font-bold text-[#000000] dark:text-[#e0e0e0]">Welcome to Our Company</h1>
    <p className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
      We are committed to delivering the best service with integrity and excellence.
    </p>
    <button className="mt-6 px-6 py-3 bg-[#000000] text-[#ffffff] font-semibold rounded-full shadow-md hover:bg-[#333333] dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#dddddd]">
      Get Started
    </button>
  </div>
  <div className="order-1 md:order-2 w-full h-1/2 md:w-2/5 md:h-full relative flex justify-center items-center bg-neutral-950 dark:bg-neutral-200">
    <div className="w-3/4 h-3/4 bg-cover bg-center rounded-md z-10" style={{ backgroundImage: 'url(placeholder.jpg)' }}>
      {/* Optional photo goes here */}
    </div>
  </div>
</section>

      <section className="flex flex-col items-center justify-center h-auto md:h-[50vh] px-6 md:px-20 py-12 bg-neutral-200 dark:bg-neutral-950">
        <div className="flex flex-row justify-center space-x-4 w-full">
          <div className="w-1/3 md:w-1/3 h-32 md:h-72 bg-neutral-950 dark:bg-neutral-200 bg-cover bg-center rounded-md" style={{ backgroundImage: 'url(pic1.jpg)' }}>
            {/* Placeholder content */}
          </div>
          <div className="w-1/3 md:w-1/3 h-32 md:h-72 bg-neutral-950 dark:bg-neutral-200 bg-cover bg-center rounded-md" style={{ backgroundImage: 'url(pic2.jpg)' }}>
            {/* Placeholder content */}
          </div>
          <div className="w-1/3 md:w-1/3 h-32 md:h-72 bg-neutral-950 dark:bg-neutral-200 bg-cover bg-center rounded-md" style={{ backgroundImage: 'url(pic3.jpg)' }}>
            {/* Placeholder content */}
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[66vh] py-12 bg-transparent">
        <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center mr-0 md:mr-20">
          <div className="w-3/4 h-full bg-neutral-950 dark:bg-neutral-200 bg-cover bg-center rounded-md" style={{ backgroundImage: 'url(pic4.jpg)' }}>
            {/* Placeholder content */}
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-6 md:mr-20 space-y-6">
          <h2 className="text-4xl mt-5 font-bold text-[#000000] dark:text-[#e0e0e0]">Our Mission</h2>
          <p className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
            We strive to provide the best solutions and services to our clients, ensuring their success and satisfaction.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="text-base md:text-lg font-semibold text-[#000000] dark:text-[#e0e0e0]">&#8226; Quality Service</span>
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg font-semibold text-[#000000] dark:text-[#e0e0e0]">&#8226; Customer Support</span>
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg font-semibold text-[#000000] dark:text-[#e0e0e0]">&#8226; Innovation</span>
            </div>
            <div className="flex items-center">
              <span className="text-base md:text-lg font-semibold text-[#000000] dark:text-[#e0e0e0]">&#8226; Integrity</span>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[66vh] px-6 md:px-10 py-12 bg-transparent">
        <div className="w-full md:ml-12 mb-12 md:w-1/2 h-full flex flex-col justify-center items-start space-y-6">
          <h2 className="text-4xl  mb-5 font-bold text-[#000000] dark:text-[#e0e0e0]">Our Vision</h2>
          <p className="text-base  md:text-lg text-[#000000] dark:text-[#e0e0e0]">
            Our vision is to be the leading provider of innovative solutions, making a significant impact in our industry.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center">
          <div className="w-3/4 h-full bg-neutral-950 dark:bg-neutral-200 bg-cover bg-center rounded-md" style={{ backgroundImage: 'url(pic5.jpg)' }}>
            {/* Placeholder content */}
          </div>
        </div>
      </section>

      <section className="relative w-full h-auto md:h-screen py-12">
        <div className="absolute inset-0 w-full h-full bg-cover bg-stone-200 dark:bg-neutral-900 bg-center z-0" style={{ backgroundImage: \`url('background-light.jpg')\` }}>
          {/* Background image for light mode */}
        </div>
        <div className="absolute inset-0 w-full h-full bg-cover bg-center hidden dark:block" style={{ backgroundImage: \`url('background-dark.jpg')\` }}>
          {/* Background image for dark mode */}
        </div>
        <div className="relative flex flex-col items-center justify-center space-y-12 px-8 py-8 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-800 dark:text-gray-200 mt-10">
            "It's easy, it's fun and it has got the charm"
          </h2>
          <div className="flex flex-col mt-10 md:flex-row justify-between w-full max-w-screen-lg space-y-6 md:space-y-0">
            <div className="w-full  md:w-1/3 p-6 bg-neutral-200 dark:bg-neutral-700 rounded-3xl shadow-lg">
              <p className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">"Testimonial 1 content goes here. It's a wonderful experience!"</p>
              <span className="block mt-4 text-right text-gray-600 dark:text-gray-400">- Customer 1</span>
            </div>
            <div className="w-full md:w-1/3 p-6 bg-neutral-200 dark:bg-neutral-700 rounded-3xl shadow-lg">
              <p className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">"Testimonial 2 content goes here. Really happy with the service!"</p>
              <span className="block mt-4 text-right text-gray-600 dark:text-gray-400">- Customer 2</span>
            </div>
          </div>
          <div className="w-full max-w-screen-md p-6 bg-neutral-200 dark:bg-neutral-700 rounded-3xl shadow-lg mt-6 md:mt-0">
            <p className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">"Testimonial 3 content goes here. Excellent support and quality!"</p>
            <span className="block mt-4 text-right text-gray-600 dark:text-gray-400">- Customer 3</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
`;

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

const indexCode = `import React from 'react';
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

const indexCssCode = `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200;
}
`;

const aboutCode = `import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200">
      
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center h-auto md:h-screen p-6 md:p-16 bg-stone-200 dark:bg-neutral-800">
        <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center items-start space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#000000] dark:text-[#e0e0e0]">About Us</h1>
          <p className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
            We are a team of passionate individuals dedicated to providing top-notch services and solutions. Our commitment to excellence drives us to continuously innovate and improve.
          </p>
          <p className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
            Founded in [Year], our company has grown from a small startup to a leading provider in our industry. We pride ourselves on our core values of integrity, quality, and customer satisfaction.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center bg-neutral-950 dark:bg-neutral-200">
          <div className="w-full h-full bg-cover bg-center rounded-md" style={{ backgroundImage: 'url(about-us-placeholder.jpg)' }}>
            {/* Optional photo goes here */}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[66vh] py-12 bg-neutral-200 dark:bg-neutral-950">
        <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center">
          <div className="w-3/4 h-full bg-neutral-950 dark:bg-neutral-200 bg-cover bg-center rounded-md" style={{ backgroundImage: 'url(mission-placeholder.jpg)' }}>
            {/* Mission image */}
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-6 md:p-16 space-y-6">
          <h2 className="text-4xl font-bold text-[#000000] dark:text-[#e0e0e0]">Our Mission</h2>
          <p className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
            Our mission is to provide the best solutions and services to our clients, ensuring their success and satisfaction. We aim to be the trusted partner that businesses can rely on for their growth and innovation.
          </p>
          <p className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
            We believe in the power of technology and its ability to transform industries. Our goal is to leverage our expertise to help our clients navigate the complexities of the modern business landscape.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="flex flex-col items-center justify-center h-auto md:h-[66vh] py-12 bg-transparent">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000] dark:text-[#e0e0e0] mb-6">Meet Our Team</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-8 w-full px-6">
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 md:w-48 md:h-48 bg-neutral-950 dark:bg-neutral-200 bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(team-member-1.jpg)' }}></div>
            <span className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Team Member 1</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 md:w-48 md:h-48 bg-neutral-950 dark:bg-neutral-200 bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(team-member-2.jpg)' }}></div>
            <span className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Team Member 2</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 md:w-48 md:h-48 bg-neutral-950 dark:bg-neutral-200 bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(team-member-3.jpg)' }}></div>
            <span className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Team Member 3</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 md:w-48 md:h-48 bg-neutral-950 dark:bg-neutral-200 bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(team-member-2.jpg)' }}></div>
            <span className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Team Member 4</span>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative w-full h-auto py-12">
        <div className="absolute inset-0 w-full h-full bg-cover bg-stone-200 dark:bg-neutral-900 bg-center z-0" style={{ backgroundImage: \`url('about-us-background-light.jpg')\` }}>
          {/* Background image for light mode */}
        </div>
        <div className="absolute inset-0 w-full h-full bg-cover bg-center hidden dark:block" style={{ backgroundImage: \`url('about-us-background-dark.jpg')\` }}>
          {/* Background image for dark mode */}
        </div>
        <div className="relative flex flex-col items-center justify-center space-y-12 px-8 py-12 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
            "Innovation, Integrity, and Excellence"
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-800 dark:text-gray-200 max-w-3xl">
            At [Company Name], we are driven by our core values. We believe that innovation leads to progress, integrity builds trust, and excellence ensures success. Join us on our journey as we strive to make a positive impact in our industry and beyond.
          </p>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="h-auto md:h-2/3 m-6 md:m-10 flex flex-col md:flex-row items-center justify-between p-5 mb-7 bg-neutral-950 text-neutral-200 dark:bg-neutral-200 dark:text-neutral-800">
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.</p>
          <p>Vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est.</p>
        </div>
        <div className="w-full md:w-2/5 mt-6 md:mt-0">
          <img src="join-our-team.jpg" alt="Join Our Team" className="w-full h-48 md:h-96 object-cover rounded-md" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
`;

const contactCode = `import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center h-auto md:h-screen p-6 md:p-16 bg-stone-200 dark:bg-neutral-800">
        <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center bg-neutral-950 dark:bg-neutral-200">
          <div className="w-full h-full bg-cover bg-center rounded-md" style={{ backgroundImage: 'url(contact-us-placeholder.jpg)' }}>
            {/* Optional photo goes here */}
          </div>
        </div>
        <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center items-start space-y-6 p-6 md:p-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#000000] dark:text-[#e0e0e0]">Contact Us</h1>
          <p className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
            We would love to hear from you! Whether you have a question about our services, need assistance, or just want to talk, we are here to help.
          </p>
          <p className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
            Fill out the form below, send us an email, or give us a call. Our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="flex  flex-col md:flex-row items-center justify-between h-auto py-12 bg-neutral-200 dark:bg-neutral-950 px-6 md:px-20">
        <div className="w-full mb-10 md:mr-20 h-96 md:w-1/2 flex justify-center md:justify-end">
          <form className="w-full max-w-lg space-y-6 bg-neutral-200 dark:bg-neutral-950 p-8 rounded-lg shadow-lg border border-gray-300 dark:border-neutral-700">
            <div className="flex flex-col">
             
              <input type="text" id="name" placeholder='name' className="p-3 rounded-md bg-gray-100 dark:bg-neutral-900 text-[#000000] dark:text-[#e0e0e0] border border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-300" />
            </div>
            <div className="flex flex-col">
              <input type="email" id="email" placeholder='email' className="p-3 rounded-md bg-gray-100 dark:bg-neutral-900 text-[#000000] dark:text-[#e0e0e0] border border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-300" />
            </div>
            <div className="flex flex-col">
              <textarea id="message" placeholder='message' rows="1" className="p-3 rounded-md bg-gray-100 dark:bg-neutral-900 text-[#000000] dark:text-[#e0e0e0] border border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-300"></textarea>
            </div>
            <button type="submit" className="w-full p-3 bg-[#000000] text-[#ffffff] font-semibold rounded-md shadow-md hover:bg-gray-800 dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-300">
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 mb-8 h-96 md:h-full flex justify-center items-center md:p-0">
          <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-neutral-700">
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097374!2d144.9556513153184!3d-37.817327979751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778f42cb29a99a!2sGoogle!5e0!3m2!1sen!2sau!4v1614251442936!5m2!1sen!2sau"
              style={{ filter: 'grayscale(100%)', height: '100%' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[66vh] py-12 bg-transparent px-6 md:px-20">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start space-y-6">
          <h2 className="text-4xl font-bold text-[#000000] dark:text-[#e0e0e0]">Contact Information</h2>
          <p className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
            Feel free to reach out to us through any of the following methods:
          </p>
          <ul className="space-y-4">
            <li className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
              <strong>Address:</strong> 1234 Street Name, City, Country
            </li>
            <li className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
              <strong>Phone:</strong> (123) 456-7890
            </li>
            <li className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
              <strong>Email:</strong> contact@company.com
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-full flex justify-center items-center bg-neutral-950 dark:bg-neutral-200">
          <div className="w-full h-full bg-cover bg-center rounded-md" style={{ backgroundImage: 'url(contact-info-placeholder.jpg)' }}>
            {/* Optional photo goes here */}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;

`;

const loginCode = `import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faApple } from '@fortawesome/free-brands-svg-icons';

function Login() {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Left Side */}
      <div className="w-full h-80 md:h-screen md:w-1/2">
        <img
          src=""
          alt=""
          className="object-cover bg-neutral-800 dark:bg-neutral-200 w-full h-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center h-auto md:h-screen p-8 w-full md:w-1/2 bg-neutral-300 dark:bg-neutral-800">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-center text-2xl font-bold leading-tight">Log in to your account</h2>
          <div className="flex justify-center mt-4 space-x-10">
            <FontAwesomeIcon icon={faGoogle} className="text-neutral-800 dark:text-neutral-200" size="2x" />
            <FontAwesomeIcon icon={faGithub} className="text-neutral-800 dark:text-neutral-200" size="2x" />
            <FontAwesomeIcon icon={faApple} className="text-neutral-800 dark:text-neutral-200" size="2x" />
          </div>
          <p className="mt-2 text-center text-base">
            Don't have an account?&nbsp;
            <Link
              to="/signup"
              className="font-medium transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div className="max-w-md mx-auto w-full mt-20">
          <form className='space-y-6'>
            <div className='mb-4'>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 border-neutral-900 border-2 p-2 block w-full bg-transparent text-neutral-800 placeholder-gray-500 rounded-md"
              />
            </div>
            <div className='mb-4'>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 p-2 block w-full bg-transparent border-neutral-900 border-2 text-neutral-800 placeholder-gray-500 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-full bg-neutral-800 dark:bg-neutral-200 dark:text-neutral-800 text-neutral-200 hover:bg-gray-800"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
`;

const signUpCode = `import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faApple } from '@fortawesome/free-brands-svg-icons';

function SignIn() {
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Left Side */}
      <div className="w-full h-80 md:h-screen md:w-1/2">
        <img
          src=""
          alt=""
          className="object-cover bg-neutral-800 dark:bg-neutral-200 w-full h-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center h-auto md:h-screen p-8 w-full md:w-1/2 bg-neutral-300 dark:bg-neutral-800">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
          <p className="mt-2 text-center text-base">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="font-medium transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <div className="flex justify-center mt-4 space-x-10">
            <FontAwesomeIcon icon={faGoogle} className="text-neutral-800 dark:text-neutral-200" size="2x" />
            <FontAwesomeIcon icon={faGithub} className="text-neutral-800 dark:text-neutral-200" size="2x" />
            <FontAwesomeIcon icon={faApple} className="text-neutral-800 dark:text-neutral-200" size="2x" />
          </div>
        </div>
        <div className="max-w-md mx-auto w-full mt-8">
          <form className='space-y-6'>
            <div className='mb-4'>
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-1 border-neutral-900 border-2 p-2 block w-full bg-transparent text-neutral-800 placeholder-gray-500 rounded-md"
              />
            </div>
            <div className='mb-4'>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 p-2 block w-full bg-transparent border-neutral-900 border-2 text-neutral-800 placeholder-gray-500 rounded-md"
              />
            </div>
            <div className='mb-4'>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 p-2 block w-full bg-transparent border-neutral-900 border-2 text-neutral-800 placeholder-gray-500 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-full bg-neutral-800 dark:bg-neutral-200 dark:text-neutral-800 text-neutral-200 hover:bg-gray-800"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
`;

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
const tailwindConfig = `// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for system preference
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

`;

const addBasicCode = (dir) => {
  // Ensure required directories exist
  const srcDir = path.join(dir, 'src');
  const appDir = path.join(srcDir, 'app');
  const componentsDir = path.join(srcDir, 'components');
  const featuresDir = path.join(srcDir, 'features', 'theme');
  const pagesDir = path.join(srcDir, 'pages');

  fs.ensureDirSync(appDir);
  fs.ensureDirSync(componentsDir);
  fs.ensureDirSync(featuresDir);
  fs.ensureDirSync(pagesDir);

  // Write files
  fs.writeFileSync(path.join(appDir, 'store.js'), storeCode);
  fs.writeFileSync(path.join(componentsDir, 'Header.jsx'), headerCode);
  fs.writeFileSync(path.join(componentsDir, 'Footer.jsx'), footerCode);
  fs.writeFileSync(path.join(pagesDir, 'Home.jsx'), homeCode);
  fs.writeFileSync(path.join(pagesDir, 'About.jsx'), aboutCode);
  fs.writeFileSync(path.join(pagesDir, 'Contact.jsx'), contactCode);
  fs.writeFileSync(path.join(pagesDir, 'Login.jsx'), loginCode);
  fs.writeFileSync(path.join(pagesDir, 'SignIn.jsx'), signUpCode);
  fs.writeFileSync(path.join(featuresDir, 'themeSlice.js'), themeSliceCode);

  // Overwrite App.jsx and main.jsx
  fs.writeFileSync(path.join(srcDir, 'App.jsx'), appCode);
  fs.writeFileSync(path.join(srcDir, 'main.jsx'), indexCode);
  fs.writeFileSync(path.join(srcDir, 'index.css'), indexCssCode);
  fs.writeFileSync(path.join(srcDir, 'tailwind.config.js'), tailwindConfig);

  console.log('Basic template added to your project.');
};

module.exports = addBasicCode;

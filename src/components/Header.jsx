import React, { useState } from 'react';
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
    <header className=" top-0 left-0 w-full bg-transparent text-neutral-800 dark:text-neutral-200 z-50">
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

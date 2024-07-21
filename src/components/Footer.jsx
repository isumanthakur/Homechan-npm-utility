import React from 'react';

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

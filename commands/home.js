const fs = require('fs-extra');
const path = require('path');

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

      <footer className="flex flex-col items-center justify-between h-auto md:h-[60vh] bg-neutral-300 dark:bg-neutral-800 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl px-6 md:px-20">
          <div className="flex flex-col items-center md:items-start md:w-1/3 mb-12 md:mb-0">
            <h3 className="text-2xl font-bold text-neutral-950 dark:text-neutral-200 mb-4">Company Name</h3>
            <p className="text-base md:text-lg text-neutral-950 dark:text-neutral-200">
              Dedicated to providing top-notch services and solutions to our valued clients.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start md:w-1/3 mb-12 md:mb-0">
            <h3 className="text-2xl font-bold text-neutral-950 dark:text-neutral-200 mb-4">Quick Links</h3>
            <ul className="flex flex-col items-center md:items-start space-y-2">
              <li>
                <a href="#" className="text-base md:text-lg text-neutral-950 dark:text-neutral-200 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-base md:text-lg text-neutral-950 dark:text-neutral-200 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-base md:text-lg text-neutral-950 dark:text-neutral-200 hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-base md:text-lg text-neutral-950 dark:text-neutral-200 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <h3 className="text-2xl font-bold text-neutral-950 dark:text-neutral-200 mb-4">Contact Us</h3>
            <p className="text-base md:text-lg text-neutral-950 dark:text-neutral-200">
              123 Street, City, State, 12345
            </p>
            <p className="text-base md:text-lg text-neutral-950 dark:text-neutral-200">
              Email: info@company.com
            </p>
            <p className="text-base md:text-lg text-neutral-950 dark:text-neutral-200">
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-center mt-8 md:mt-12">
          <p className="text-base md:text-lg text-neutral-950 dark:text-neutral-200">
            &copy; ${new Date().getFullYear()} Company Name. All rights reserved.
          </p>
          <p className="text-base md:text-lg text-neutral-950 dark:text-neutral-200">
            Made with <span className="text-red-500">&hearts;</span> by Your Company.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
`;

const generateHome = (dir) => {
  const filePath = path.join(dir,'Home.jsx');
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, homeCode, 'utf8');
  console.log('Home.jsx file has been generated in the current directory.');
};

module.exports = { generateHome };

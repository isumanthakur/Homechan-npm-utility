const fs = require('fs-extra');
const path = require('path');

const contactCode = `import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
      <section className="flex flex-col md:flex-row items-center justify-between h-screen">
        <div className="order-2 md:order-1 w-full h-1/2 md:w-3/5 md:h-full flex flex-col justify-center items-start p-6 md:p-16 bg-stone-300 dark:bg-neutral-800 space-y-6">
          <h3 className="text-3xl font-semibold text-[#000000] dark:text-[#e0e0e0]">Company Name</h3>
          <h1 className="text-4xl md:text-5xl font-bold text-[#000000] dark:text-[#e0e0e0]">Contact Us</h1>
          <p className="text-base md:text-lg text-[#000000] dark:text-[#e0e0e0]">
            We are here to help you with any questions or concerns you may have.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#000000] text-[#ffffff] font-semibold rounded-full shadow-md hover:bg-[#333333] dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#dddddd]">
            Get In Touch
          </button>
        </div>
        <div className="order-1 md:order-2 w-full h-1/2 md:w-2/5 md:h-full relative flex justify-center items-center bg-neutral-950 dark:bg-neutral-200">
          <div className="w-3/4 h-3/4 bg-cover bg-center rounded-md z-10" style={{ backgroundImage: 'url(placeholder.jpg)' }}>
            {/* Optional photo goes here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
`;

const generateContact = (dir) => {
  const filePath = path.join(dir, 'Contact.jsx');
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, contactCode, 'utf8');
  console.log('Contact.jsx file has been generated in the current directory.');
};

module.exports = { generateContact };

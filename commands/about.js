const fs = require('fs-extra');
const path = require('path');

const aboutCode = `
import React from 'react';

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

const generateAbout = (dir) => {
  const filePath = path.join(dir, 'about.jsx');
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, aboutCode, 'utf8');
  console.log('about.jsx file has been generated in the current directory.');
};

module.exports = { generateAbout };

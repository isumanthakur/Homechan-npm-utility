import React from 'react';

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

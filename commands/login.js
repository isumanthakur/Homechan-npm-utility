const fs = require('fs-extra');
const path = require('path');

const loginCode = `import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faApple } from '@fortawesome/free-brands-svg-icons';
import image from '../assets/image1.jpg';

function Login() {
    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            {/* Left Side */}
            <div className="w-full h-80 md:h-screen md:w-1/2">
                <img
                    src={image}
                    alt="Login Illustration"
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

const generateLogin = (dir) => {
  const filePath = path.join(dir,'Login.jsx');
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, loginCode, 'utf8');
  console.log('Login.jsx file has been generated in the current directory.');
};

module.exports = { generateLogin };

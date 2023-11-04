/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

function NavBar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            <img src="/your-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            My App
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-blue-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-blue-300">
            About
          </Link>
          <Link to="/profile" className="text-white hover:text-blue-300">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

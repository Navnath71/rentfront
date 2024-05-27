import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
        </li>
        <li>
          <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
        </li>
        <li>
          <Link to="/post-property" className="text-white hover:text-gray-200">Post Property</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

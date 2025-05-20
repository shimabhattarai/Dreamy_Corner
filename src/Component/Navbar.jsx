import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              DreamyCorner
            </Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
            </li>
            <li>
              <Link to="/cart" className="relative text-gray-700 hover:text-indigo-600 transition">
                Cart
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="text-gray-700 hover:text-indigo-600 transition">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

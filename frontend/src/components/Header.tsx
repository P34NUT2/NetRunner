import { FaRobot, FaCog } from 'react-icons/fa';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black border-b border-red-500/20 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <FaRobot className="text-black" />
          </div>
          <h1 className="text-xl font-bold text-red-500">
            Nexus<span className="text-white">AI</span>
          </h1>
        </div>
        <div className="flex space-x-4 items-center">
          <button className="text-gray-400 hover:text-red-500 transition">
            <FaCog />
          </button>
          <div className="flex space-x-2 ml-2">
            <button className="px-3 py-1 text-sm bg-transparent border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-black transition">
              Log In
            </button>
            <button className="px-3 py-1 text-sm bg-red-500 text-black rounded hover:bg-red-600 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className={`bg-gray-900 text-white shadow-lg ${darkMode ? 'dark' : ''} sticky top-0 z-50`}>
      <div className="container mx-auto max-w-7xl flex items-center justify-between p-4 md:px-8">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">MyStream</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block max-w-md w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/recent" className="hover:underline">Recent</Link>
          <Link href="/popular" className="hover:underline">Popular</Link>
          <Link href="/genre" className="hover:underline">Genre</Link>
          <Link href="/movies" className="hover:underline">Movies</Link>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
            {darkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 transition-transform transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center mt-12 space-y-4 px-4">
          <Link href="/" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/recent" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>Recent</Link>
          <Link href="/popular" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>Popular</Link>
          <Link href="/genre" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>Genre</Link>
          <Link href="/movies" className="text-white text-xl" onClick={() => setIsMenuOpen(false)}>Movies</Link>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700">
            {darkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

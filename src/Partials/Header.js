import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import resume from '../images/Devansh_Agrawal_CSE_GLAU.pdf';

function Header({ navbar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-transparent text-white shadow-lg p-4">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
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
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <ul className={`items-stretch space-x-6 lg:flex ${isMenuOpen ? "block" : "hidden"} lg:space-x-0 lg:items-center`}>
          {navbar.map((nav) => (
            <li className="flex" key={nav.title}>
              <Link
                to={nav.path}
                className="flex items-center text-2xl px-4 py-2 text-white hover:text-yellow-200 transition-colors duration-300"
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={resume}
          download="resume"
          className="transition-all duration-700 hover:scale-110 bg-gradient-to-t from-orange-600 to-yellow-600 hover:bg-emerald-30 text-lg font-semibold py-2 px-4 rounded-lg"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}

export default Header;

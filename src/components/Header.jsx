import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-primary">Digital Helper</a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="text-gray-600 hover:text-primary">Services</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-primary">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
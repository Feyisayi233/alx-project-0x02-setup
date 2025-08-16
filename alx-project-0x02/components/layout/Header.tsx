import React from "react";

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white p-4 flex flex-col sm:flex-row items-center justify-between">
    <h1 className="text-xl font-bold">ALX Project 2</h1>
    <nav className="mt-2 sm:mt-0">
      <ul className="flex gap-4">
        <li>
          <a href="/home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

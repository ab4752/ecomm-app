import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-8">
        <li><a href="#" className="hover:underline"><Link to="/">Home</Link></a></li>
        <li><a href="#" className="hover:underline"><Link to="/about">About</Link></a></li>
        <li><a href="#" className="hover:underline"><Link to="/contact">Contact</Link></a></li>
      </ul>
    </nav>
  );
}

export default NavMenu;

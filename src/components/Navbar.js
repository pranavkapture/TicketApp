import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="max-w-7xl mx-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-white text-2xl font-bold">
          <img src="/logo-sm.svg"  style={{width:"30px"}} />
          <span> &nbsp; Kapture Cx</span>
        </Link>

        {/* Nav Links - Example, adjust as needed */}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="flex items-center justify-end gap-10 font-semibold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <div className="rounded-full w-10 aspect-square bg-white cursor-pointer hidden"></div>
      </div>
    </nav>
  );
};

export default Navbar;

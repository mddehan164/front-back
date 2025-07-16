import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';

const Navbar = ({ user, setUser }) => {
  const [click, setClick] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false); // ✅ moved inside component

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [setUser]);

  const handleLogout = () => {
    setShowConfirm(true); // show confirmation modal
  };

  const confirmDelete = () => {
    localStorage.clear();
    setUser(null);
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="flex items-center justify-end gap-10 font-semibold">
        <Link to="/" className="hover:underline">Home</Link>

        {!user && (
          <Link to="/login" className="hover:underline">Login</Link>
        )}

        {user && (
          <div
            className="rounded-full w-10 aspect-square bg-white cursor-pointer relative"
            onClick={() => setClick(!click)}
          >
            <img
              src={`https://ui-avatars.com/api/?name=${user.name}&background=random&color=fff`}
              alt="User Avatar"
              className="rounded-full w-10 h-10"
            />
            <div
              className={`${
                click ? "absolute" : "hidden"
              } min-h-40 min-w-30 bg-white top-10 right-0 rounded-md text-center text-lg`}
            >
              <span
                onClick={handleLogout}
                className="text-black block w-full py-2 hover:bg-gray-300 rounded-md"
              >
                Logout
              </span>
            </div>
          </div>
        )}

        <ConfirmModal
          show={showConfirm}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          message="Are you sure you want to logout?"
        />
      </div>
    </nav>
  );
};

export default Navbar;

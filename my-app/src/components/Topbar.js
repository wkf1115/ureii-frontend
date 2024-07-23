import React from 'react';

const Topbar = () => {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-4">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="flex items-center">
        <button className="relative">
          <span className="material-icons">notifications</span>
        </button>
        <div className="ml-4 flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="user avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-2">Tom Cook</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
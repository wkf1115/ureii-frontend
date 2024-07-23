import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen bg-indigo-600 text-white w-64 flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-indigo-800">
        <span className="text-2xl">Logo</span>
      </div>
      <nav className="flex-grow">
        <ul>
          <li className="p-4 hover:bg-indigo-700">Dashboard</li>
          <li className="p-4 hover:bg-indigo-700">Team</li>
          <li className="p-4 hover:bg-indigo-700">Projects</li>
          <li className="p-4 hover:bg-indigo-700">Calendar</li>
          <li className="p-4 hover:bg-indigo-700">Documents</li>
          <li className="p-4 hover:bg-indigo-700">Reports</li>
        </ul>
      </nav>
      <div className="border-t border-indigo-800 p-4">
        <p className="text-sm mb-2">Your teams</p>
        <ul>
          <li className="p-2 hover:bg-indigo-700">Heroicons</li>
          <li className="p-2 hover:bg-indigo-700">Tailwind Labs</li>
          <li className="p-2 hover:bg-indigo-700">Workcation</li>
        </ul>
      </div>
      <div className="p-4 border-t border-indigo-800">
        <span className="hover:bg-indigo-700 p-2 rounded cursor-pointer">Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;

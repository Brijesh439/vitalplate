import React, { useState } from 'react';
import { Home, User, Settings, HelpCircle, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
  
const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // Updated navItems with provided paths and corresponding labels
  const navItems = [
    { icon: <Home />, label: 'Login', path: '/' }, // Assuming this is the Login Page
    { icon: <User />, label: 'Form Page', path: '/form' }, // Form Page
    { icon: <Settings />, label: 'Meal Planner', path: '/meal' }, // Meal Planner
    { icon: <HelpCircle />, label: 'Day Nutrition Plan', path: '/daynutritionplan' }, // Day Nutrition Plan
    { icon: <HelpCircle />, label: 'Nutrition Search', path: '/nutritionsearch' }, // Nutrition Search
  ];

  return (
    <div
      className={`h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-16'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {isExpanded && <h1 className="text-xl font-semibold text-gray-800">Menu</h1>}
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
          <Menu size={24} />
        </button>
      </div>
      <nav className="mt-6">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                isActive ? 'bg-gray-100 font-semibold' : ''
              }`
            }
          >
            <span className="text-gray-500">{item.icon}</span>
            {isExpanded && <span className="ml-4">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import dwlogo from "../assets/dw-logo.png";
import { FaBell } from "react-icons/fa";
import { IoMdMoon } from "react-icons/io";

const Navbar = () => {
  const [notificationCount, setNotificationCount] = useState(5); 

  return (
    <div>
      <nav className="bg-slate-800 flex items-center justify-between p-4 fixed w-full top-0 z-10">
        <div className="flex items-center">
          <a className="flex items-center space-x-2">
            <img src={dwlogo} alt="dwlogo" className="w-16 h-12" />
            <p className="text-indigo-300 text-2xl font-bold">Dashwind</p>
          </a>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex-shrink-0">
            <IoMdMoon className="text-indigo-300 text-2xl" />
          </div>

          <div className="relative">
            <FaBell className="text-indigo-100 text-2xl" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-fuchsia-700 text-white text-xs rounded-full px-1 ml-10">
                {notificationCount}
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaList, FaCog, FaBars } from "react-icons/fa";
import { useUser } from "@/app/contexts/UserContext";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { role } = useUser();

  return (
    <aside
      className={`bg-gray-900 text-white p-4 space-y-6 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-3">
        <FaBars className="text-blue-400 text-xl" />
        <h2
          className={`text-2xl font-semibold tracking-tight transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          Menu
        </h2>
      </div>
      <ul className="space-y-4">
        <li>
          <Link
            href="/list"
            className="flex items-center gap-3 hover:bg-gray-700 px-4 py-2 rounded-md transition"
          >
            <FaList className="text-blue-400" />
            <span
              className={`${
                isOpen ? "block" : "hidden"
              } transition-all duration-300`}
            >
              List
            </span>
          </Link>
        </li>
        {role === "admin" && ( // if user is admin shows admin button
          <li>
            <Link
              href="/settings"
              className="flex items-center gap-3 hover:bg-gray-700 px-4 py-2 rounded-md transition"
            >
              <FaCog className="text-blue-400" />
              <span
                className={`${
                  isOpen ? "block" : "hidden"
                } transition-all duration-300`}
              >
                Setting
              </span>
            </Link>
          </li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;

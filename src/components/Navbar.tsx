"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ConfirmSignOutModal from "./ConfirmSignOutModal";
import { useUser } from "@/app/contexts/UserContext";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { setRole } = useUser();

  const handleSignOut = () => {
    setIsModalOpen(true);
  };

  // handle sign out
  const confirmSignOut = () => {
    localStorage.clear();
    setRole(null);
    setIsModalOpen(false);
    router.push("/login");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md flex items-center justify-between">
      <h1 className="text-lg font-bold tracking-wide">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={handleSignOut}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Sign Out
        </button>
      </div>
      <ConfirmSignOutModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmSignOut}
      />
    </nav>
  );
};

export default Navbar;

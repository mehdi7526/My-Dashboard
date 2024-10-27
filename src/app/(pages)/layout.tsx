"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className={` flex-1 bg-white rounded-lg shadow-md p-4 h-screen overflow-auto no-scrollbar`}>
          {children}
        </main>
      </div>
    </>
  );
};

export default AuthenticatedLayout;

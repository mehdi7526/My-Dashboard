"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
}) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // check user is authenticated
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (!storedRole) {
      router.replace("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  return (
    <>
      {isAuthenticated && (
        <>
          <Navbar />
          <div className="flex">
            <Sidebar />
            <main
              className={` flex-1 bg-white rounded-lg shadow-md p-4 h-screen overflow-auto no-scrollbar`}
            >
              {children}
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default AuthenticatedLayout;

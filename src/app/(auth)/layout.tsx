
"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const router = useRouter();

  // check user is authenticated
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      router.replace("/list");
    } else {
      setIsAuthenticated(false);
    }
  }, [router]);

  return (
    <>{!isAuthenticated && <main className={` flex-1 px-3 lg:px-0`}>{children}</main>}</>
  );
};

export default AuthenticatedLayout;

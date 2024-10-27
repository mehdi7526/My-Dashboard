'use client'
import { redirect } from "next/navigation";
import { useUser } from "../../contexts/UserContext";
import { useEffect } from "react";

export default function SettingsPage() {
  const { role } = useUser();

  // check user role 
  useEffect(() => {
    if (role && role !== "admin") {
      redirect("/login");
    }
  }, [role]);

  return <h1 className=" p-4">Settings Page Just For Admin</h1>;
}

"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("role")) {
      router.push("/list");
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-400"></div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/contexts/UserContext";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("user");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { setRole } = useUser();

  // handle login with sample data
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin123" &&
      selectedRole === "admin"
    ) {
      localStorage.setItem("role", "admin");
      setRole("admin");
      router.push("/list");
    } else if (
      username === "user" &&
      password === "user123" &&
      selectedRole === "user"
    ) {
      localStorage.setItem("role", "user");
      setRole("user");
      router.push("/list");
    } else {
      setError("Username Or Password Is Incorrect!");
      setTimeout(() => {
        setError(null);
      }, 10000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

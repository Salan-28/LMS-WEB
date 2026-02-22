import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { user } = useAuth();

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar role={user?.role} />

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}

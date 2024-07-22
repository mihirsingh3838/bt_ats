// src/components/AdminHeader.jsx
import React from "react";

const AdminHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-500 text-white rounded-lg shadow-md w-full">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <button className="px-4 py-2 bg-red-500 rounded-lg">Logout</button>
    </header>
  );
};

export default AdminHeader;

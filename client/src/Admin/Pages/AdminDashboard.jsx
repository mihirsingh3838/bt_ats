import React from "react";
import AdminSidebar from "../Components/Sidebar_Admin";
import AdminHeader from "../Components/Header_Admin";
import AdminLineChart from "../Components/Chart_Admin";
import AdminCards from "../Components/Cards_Admin";
import WorldMap_Admin from "../Components/WorldMap_Admin";

const AdminDashboard = () => {
  return (
    <div className="md:flex">
      <AdminSidebar />
      <div className="flex flex-col w-full">
        <div className="mb-5 w-full">
          <AdminHeader />
        </div>
        <div className="mb-5 w-full">
          <AdminCards />
        </div>
        <div className="flex md:mx-5 space-x-5">
          <div className="md:w-1/3 lg:w-2/3 w-full mb-2">
            <AdminLineChart />
          </div>
          <div className="md:w-1/2 lg:w-1.2/3 w-full mb-2">
            <WorldMap_Admin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

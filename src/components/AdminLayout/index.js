import React, { useState, useEffect } from "react";
import DashboardDrawer from "../DashboardDrawer";
import DashboardHeader from "../DashboardHeader";
import "../../assets/css/globalStyles.css";
const AdminLayout = (props) => {
  return (
    <div>
      {/* <DashboardHeader /> */}
      <DashboardDrawer />
      {props?.children}
    </div>
  );
};
export default AdminLayout;

import React, { useEffect, useState } from "react";
import "./styles.css";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { useLocation, useNavigate } from "react-router-dom";
import useWindowDimensions from "../../utils/useWindowsDimension";

const DashboardDrawer = (props) => {
  const navigation = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  const [isOpen, setIsOpen] = useState(true);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width < 992) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [width]);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const renderAdminDrawer = () => {
    return (
      <aside className="sideNav">
        <ul className="nav_wrapper main-menu">
          <li className={`nav-item ${path == "/dashboard" && "active"}`}>
            <a
              onClick={() => navigation("/Admin/AdminDashboard")}
              className="nav_links"
            >
              <i className="fas fa-th "></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li
            className={`nav-item ${
              path == "/Admin/UserManagement" && "active"
            }`}
          >
            <a
              onClick={() => navigation("/Admin/UserManagement")}
              className="nav_links"
            >
              <i className="fas fa-user-cog"></i>
              <span>User Management</span>
            </a>
          </li>
          <li
            className={`nav-item ${path == "/Admin/UserDetails" && "active"}`}
          >
            <a
              onClick={() => navigation("/Admin/UserDetails")}
              className="nav_links"
            >
              <i className="fas fa-user-cog"></i>
              <span>User Details</span>
            </a>
          </li>
          {/* <li
            className={`nav-item ${path == "/Admin/OrderDetails" && "active"}`}
          >
            <a
              onClick={() => navigation("/Admin/OrderDetails")}
              className="nav_links"
            >
              <i className="fas fa-user-cog"></i>
              <span>Order Details</span>
            </a>
          </li> */}
          <li
            className={`nav-item ${
              path == "/Admin/BookingDetails" && "active"
            }`}
          >
            <a
              onClick={() => navigation("/Admin/BookingDetails")}
              className="nav_links"
            >
              <i className="fas fa-user-cog"></i>
              <span>Booking Details</span>
            </a>
          </li>
          <li
            className={`nav-item ${
              path == "/Admin/mechanic-management" && "active"
            }`}
          >
            <a
              onClick={() => navigation("/Admin/mechanic-management")}
              className="nav_links"
            >
              <i className="fas fa-cog"></i>
              <span>Mechanics Management</span>
            </a>
          </li>
          <li
            className={`nav-item ${path == "/Admin/CarCategories" && "active"}`}
          >
            <a
              className="nav_links"
              onClick={() => navigation("/Admin/CarCategories")}
            >
              <i className="fas fa-car"></i>
              <span>Car Categories Management</span>
            </a>
          </li>

          <li
            className={`nav-item ${
              path == "/Admin/sub-categories/:id" && "active"
            }`}
          >
            <a
              className="nav_links"
              onClick={() => navigation("/Admin/sub-categories/:id")}
            >
              <i className="fas fa-car"></i>
              <span>Sub Categories </span>
            </a>
          </li>
          <li
            className={`nav-item ${path == "/Admin/ad-management" && "active"}`}
          >
            <a
              onClick={() => navigation("/Admin/ad-management")}
              className="nav_links"
            >
              <i className="fas fa-volume-up"></i>
              <span>Ads Management</span>
            </a>
          </li>
          <li
            className={`nav-item ${
              path == "/Admin/FeaturedAdDetails" && "active"
            }`}
          >
            <a
              onClick={() => navigation("/Admin/FeaturedAdDetails")}
              className="nav_links"
            >
              <i className="fas fa-volume-up"></i>
              <span>Feature Ad Details</span>
            </a>
          </li>

          <li
            className={`nav-item ${
              path == "/Admin/InspectionReport" && "active"
            }`}
          >
            <a
              onClick={() => navigation("/Admin/InspectionReport")}
              className="nav_links"
            >
              <i className="fas fa-dollar-sign"></i>
              <span>Inspection Reports</span>
            </a>
          </li>

          <li
            className={`nav-item ${
              path == "/Admin/inspection-management" && "active"
            }`}
          >
            <a
              onClick={() => navigation("/Admin/inspection-management")}
              className="nav_links"
            >
              <i className="fas fa-dollar-sign"></i>
              <span>Inspection Management</span>
            </a>
          </li>
          <li
            className={`nav-item ${path == "/Admin/payment-logs" && "active"}`}
          >
            <a
              onClick={() => navigation("/Admin/payment-logs")}
              className="nav_links"
            >
              <i className="fas fa-credit-card"></i>
              <span>Payment Logs</span>
            </a>
          </li>
          <li
            className={`nav-item ${
              path == "/Admin/inventory-management" && "active"
            }`}
          >
            <a
              onClick={() => navigation("/Admin/inventory-management")}
              className="nav_links"
            >
              <i className="fas fa-warehouse"></i>
              <span>Inventory Management</span>
            </a>
          </li>
          <li
            className={`nav-item ${
              path == "/Admin/order-management" && "active"
            }`}
          >
            <a
              onClick={() => navigation("/Admin/order-management")}
              className="nav_links"
            >
              <i className="far fa-file-alt"></i>
              <span>Order Management</span>
            </a>
          </li>
          <li
            className={`nav-item ${
              path == "/Admin/queries-management" && "active"
            }`}
          >
            <a
              onClick={() => navigation("/Admin/queries-management")}
              className="nav_links"
            >
              <i className="fas fa-question-circle"></i>
              <span>Queries Management</span>
            </a>
          </li>
          <li
            className={`nav-item ${
              path == "/Admin/feature-ad-packages" && "active"
            }`}
          >
            <a
              onClick={() => navigation("/Admin/feature-ad-packages")}
              className="nav_links"
            >
              <i className="fas fa-tv"></i>
              <span>Feature Ad Packages</span>
            </a>
          </li>
          <li
            className={`nav-item ${
              path == "/Admin/ad-report-management" && "active"
            }`}
          >
            <a
              onClick={() => navigation("/Admin/ad-report-management")}
              className="nav_links"
            >
              <i className="fas fa-file-alt"></i>
              <span>Ads Report Management</span>
            </a>
          </li>
          <li
            className={`nav-item ${path == "/Admin/news-letter" && "acitve"}`}
          >
            <a
              onClick={() => navigation("/Admin/news-letter")}
              className="nav_links"
            >
              <i className="fas fa-file-alt"></i>
              <span>News Letter</span>
            </a>
          </li>
          <li className={`nav-item ${path == "/Admin/contents" && "acitve"}`}>
            <a
              onClick={() => navigation("/Admin/contents")}
              className="nav_links"
            >
              <i className="fas fa-file-alt"></i>
              <span>Web Content</span>
            </a>
          </li>
          <li className={`nav-item ${path == "/Admin/settings" && "acitve"}`}>
            <a
              onClick={() => navigation("/Admin/settings")}
              className="nav_links"
            >
              <i className="fas fa-file-alt"></i>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </aside>
    );
  };
  const renderMechanicDrawer = () => {
    return (
      <aside className="sideNav ">
        <ul className="nav_wrapper main-menu">
          <li className={`nav-item ${path == "/dashboard" && "active"}`}>
            <a onClick={() => navigation("/dashboard")} className="nav_links">
              <i className="fas fa-th "></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li
            className={`nav-item ${path == "/inspection-request" && "active"}`}
          >
            <a
              onClick={() => navigation("/inspection-request")}
              className="nav_links"
            >
              <i className="fas fa-dollar-sign"></i>
              <span>Inspection Request Management</span>
            </a>
          </li>
          <li className={`nav-item ${path == "/slot-screens" && "active"}`}>
            <a
              onClick={() => navigation("/slot-screens")}
              className="nav_links"
            >
              <i className="fas fa-cogs"></i>
              <span>Slot Management</span>
            </a>
          </li>
          {/* <li className="nav-item">
            <a onClick={() => navigation("/payment")} className="nav_links">
              <i className="fas fa-credit-card"></i>
              <span>Payment Logs</span>
            </a>
          </li> */}
          <li className={`nav-item ${path == "/contact" && "active"}`}>
            <a onClick={() => navigation("/contact")} className="nav_links">
              <i className="fas fa-file-contract"></i>
              <span>Contact Us</span>
            </a>
          </li>
        </ul>
      </aside>
    );
  };
  useEffect(() => {
    window.addEventListener("toogleDrawer", () => {
      toggleDrawer();
    });
  }, []);

  return (
    <Drawer
      open={isOpen}
      onClose={props?.setIsOpen}
      direction="left"
      enableOverlay={false}
      className="transparent-bg"
    >
      {props?.mechanic ? renderMechanicDrawer() : renderAdminDrawer()}
    </Drawer>
  );
};

export default DashboardDrawer;

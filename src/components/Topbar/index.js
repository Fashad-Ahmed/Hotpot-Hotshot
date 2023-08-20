import React from "react";
import { Link, useLocation } from "react-router-dom";
import brand from "../../assets/Group 75322241.png";
import vector from "../../assets/Vector 260.png";
import carrier from "../../assets/Vector 260.png";
import "../../styles/style.css";

const Topbar = () => {
  const location = useLocation();
  const arr = [
    "/BoxTruckForm",
    "/GeneralFreightForm",
    "/JunkHaulForm",
    "/MotorVehicleForm",
    "/Under2kForm",
  ];

  if (arr.includes(location.pathname)) {
  } else {
    return (
      <nav id="navigation" className="navbar navbar-expand-lg fixed-top">
        <div className="container align-items-stretch">
          <div className="logo d-none d-sm-none d-md-none d-lg-block">
            <a className="navbar-brand" href="/">
              <img src={brand} />
            </a>
          </div>
          <button
            style={{ float: "right" }}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i
              className="fa fa-bars"
              aria-hidden="true"
              style={{ color: "#000" }}
            />
            <p />
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="AboutsnavbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shipper
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <h1>When the fastest option is the only option.</h1>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="Dashboard-Preview.html">
                        Dashboard Preview
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="Vetting-Process.html">
                        Carrier vetting process
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="Tracking-Tech.html">
                        Hello- Hotshot Tracking Tech
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="AboutsnavbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Carrier
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <h1>When the fastest option is the only option.</h1>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="Carriers -App-Preview.html">
                        Carrier App Preview
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="CDL-School.html">
                        H-H CDL School for Hotshot
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="HH-Guide.html">
                        Hotshot Guide for Hotshotting
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="ServicesnavbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <h1>When the fastest option is the only option.</h1>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="Under_2k_Lbs.html">
                        Under 2k Lbs
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="General_Freight.html">
                        General Freight
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="Motor_Vehicle.html">
                        Vehicles
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-lg-12" />
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="Junk-Haul-off.html">
                        Junk Haul-Off
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="26’Box truck.html">
                        26’ Box Truck
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="AboutsnavbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <h1>When the fastest option is the only option.</h1>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="help.html">
                        Help
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="Faq.html">
                        FAQ’s
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="About.html">
                        About Us
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-lg-12" />
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="blog.html">
                        Blog
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <a className="" href="contact.html">
                        Contact
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <p style={{ textAlign: "right", marginTop: "1.5%" }}>
              <a
                href="#"
                className="nav-btn logo d-none d-sm-none d-md-none d-lg-block"
              >
                Sign In <img src={vector} />
              </a>{" "}
            </p>
          </div>
        </div>
      </nav>
    );
  }
};

export default Topbar;

// // fixed-top
// <nav class="navbar navbar-expand-lg navbar-light bg-light">
// <div class="container-fluid">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul class="navbar-nav">
//       <li class="nav-item">
//         <a class="nav-link active" aria-current="page" href="#">Home</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Features</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Pricing</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//           Dropdown link
//         </a>
//         <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//           <li><a class="dropdown-item" href="#">Action</a></li>
//           <li><a class="dropdown-item" href="#">Another action</a></li>
//           <li><a class="dropdown-item" href="#">Something else here</a></li>
//         </ul>
//       </li>
//     </ul>
//   </div>
// </div>
// </nav>

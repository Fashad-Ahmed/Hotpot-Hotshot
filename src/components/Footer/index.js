import React from "react";
import { Link, useLocation } from "react-router-dom";
import bannerImage from "../../assets/Group 75322139 - Copy.png";
import vector1 from "../../assets/Vector (1).png";
import vector2 from "../../assets/Vector (2).png";
import vector3 from "../../assets/Vector (3).png";
import vector4 from "../../assets/Vector (4).png";
import vector5 from "../../assets/Vector (5).png";
import bigImg from "../../assets/Group 75322245.png";
import "../../styles/style.css";

const Footer = () => {
  const location = useLocation();
  const arr = [
    "/BoxTruckForm",
    "/GeneralFreightForm",
    "/JunkHaulForm",
    "/MotorVehicleForm",
    "/Under2kForm",
    "/SignUp",
    "/JOne",
    "/Jtwo",
    "/JThree",
    "/JFour",
    "/JFive",
    "/JSix",
    "/JSeven",
  ];

  if (arr.includes(location.pathname)) {
  } else {
    return (
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <a href="#">
                <img src={bannerImage} />{" "}
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-6">
              <h1
                style={{
                  fontFamily: "serif",
                }}
              >
                Services
              </h1>
              <ul>
                <li>
                  <Link to="/Under2k">Under 2k lbs</Link>
                </li>
                <li>
                  <Link to="/GeneralFreight">General Freight</Link>
                </li>
                <li>
                  <Link to="/MotorVehicle">Motor Vehicle</Link>
                </li>
                <li>
                  <Link to="/JunkHaul">Junk Haul-off</Link>
                </li>
                <li>
                  <Link to="/BoxTruck">26’ box truck</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <h1
                style={{
                  fontFamily: "serif",
                }}
              >
                Resources
              </h1>
              <ul>
                <li>
                  <Link to="/About">About </Link>
                </li>
                <li>
                  <Link to="/FAQ">FAQ’s</Link>
                </li>
                <li>
                  <Link to="/Help">Help</Link>
                </li>
                <li>
                  <Link to="/Blog">Blogs</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <h1
                style={{
                  fontFamily: "serif",
                }}
              >
                Shipper
              </h1>
              <ul>
                <li>
                  <Link to="/Dashboard">Dashboard Preview</Link>
                </li>
                <li>
                  <Link to="/Vetting">Carrier Vetting Process</Link>
                </li>
                <li>
                  <Link to="/TrackingTech">Hello Hotshot Tracking Tech </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 col-6">
              <h1
                style={{
                  fontFamily: "serif",
                }}
              >
                Carrier
              </h1>
              <ul>
                <li>
                  <Link to="/CarriersApp">Carrier App Preview</Link>
                </li>
                <li>
                  <Link to="/CDLSchool">CDL School for Hotshot</Link>
                </li>
                <li>
                  <Link to="/HHGuide">Hotshot Guideline</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>
                  <a href="#">
                    <img src={vector5} style={{ display: "inline-block" }} />
                  </a>
                  <img src={vector1} style={{ display: "inline-block" }} />
                  <img src={vector2} style={{ display: "inline-block" }} />
                  <img src={vector3} style={{ display: "inline-block" }} />
                  <img src={vector4} style={{ display: "inline-block" }} />
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <p style={{ textAlign: "right" }}>
                <img
                  src={bigImg}
                  style={{ display: "inline-block" }}
                  width="50%"
                />
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;

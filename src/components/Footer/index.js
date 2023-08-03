import React from "react";
import bannerImage from "../../assets/Group 75322139 - Copy.png";
import vector1 from "../../assets/Vector (1).png";
import vector2 from "../../assets/Vector (2).png";
import vector3 from "../../assets/Vector (3).png";
import vector4 from "../../assets/Vector (4).png";
import vector5 from "../../assets/Vector (5).png";
import bigImg from "../../assets/Group 75322245.png";
import "../../styles/style.css";

const Footer = () => {
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
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6">
            <h1>Services</h1>
            <ul>
              <li>
                <a href="#">Under 2k lbs</a>
              </li>
              <li>
                <a href="#">General Freight</a>
              </li>
              <li>
                <a href="#">Motor Vehicle</a>
              </li>
              <li>
                <a href="#">Junk Haul-off</a>
              </li>
              <li>
                <a href="#">26’ box truck</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 col-6">
            <h1>Resources</h1>
            <ul>
              <li>
                <a href="#">About </a>
              </li>
              <li>
                <a href="#">FAQ’s</a>
              </li>
              <li>
                <a href="help.html">Help</a>
              </li>
              <li>
                <a href="blog.html">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 col-6">
            <h1>Shipper</h1>
            <ul>
              <li>
                <a href="Dashboard-Preview.html">Dashboard Preview</a>
              </li>
              <li>
                <a href="Vetting-Process.html">Carrier Vetting Process</a>
              </li>
              <li>
                <a href="Tracking-Tech.html">Hello Hotshot Tracking Tech </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 col-6">
            <h1>Carrier</h1>
            <ul>
              <li>
                <a href="Carriers -App-Preview.html">Carrier App Preview</a>
              </li>
              <li>
                <a href="CDL-School.html">CDL School for Hotshot</a>
              </li>
              <li>
                <a href="HH-Guide.html">Hotshot Guideline</a>
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
};

export default Footer;

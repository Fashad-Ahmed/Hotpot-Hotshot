import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/Vector 260.png";
import "../../styles/style.css";

const Header = () => {
  return (
    <section
      id="main"
      style={{
        background:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://drive.google.com/uc?id=1oVZLtUPY11QbMGL12sG3SBHj8Ihmah42)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
          paddingRight: "15px",
          paddingLeft: "15px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div className="row d-flex justify-content-start">
          <div
            className="col-lg-8"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <h1>
              Driving success
              <br />
              through next-gen logistics solutions
            </h1>
            <a className="btn-lig" href="#">
              Ship With Us
            </a>
            <Link className="btn-drk d-none d-sm-inline" to="/CarriersApp">
              Get Carrier app{" "}
              <img src={bgImage} style={{ display: "inline-block" }} />{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import bgImage from "../../assets/Vector 260.png";
import "../../styles/style.css";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("currentPath", currentPath);

  const arr1 = ["/Home"];
  const arr2 = ["/Dashboard", "/BoxTruck"];

  const backgroundImage =
    arr1.includes(currentPath) || currentPath == "/"
      ? "https://drive.google.com/uc?id=1oVZLtUPY11QbMGL12sG3SBHj8Ihmah42"
      : "https://drive.google.com/uc?id=1iIjTgJO03VZIHq9FewLXj4jd-s3jh2zz";

  return (
    <section
      id="main"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
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
        <div className="row px-0 container-fluid justify-content-start pt-4">
          <div
            className="col-lg-8"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-once="true"
          >
            {arr1.includes(currentPath) ? (
              <h1>
                Driving success
                <br />
                through next-gen logistics solutions
              </h1>
            ) : currentPath === "/BoxTruck" ? (
              <h1>
                Local 26' Box Truck (local only) <br />
                for Moving and Storage:{" "}
              </h1>
            ) : currentPath === "/About" ? (
              <h1>
                Simplify your shipping process
                <br />
                Discover the Power of about OpenAI and Artificial Intelligence
              </h1>
            ) : (
              <h1>
                Simplify your shipping process
                <br />
                with our Dashboard
              </h1>
            )}

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

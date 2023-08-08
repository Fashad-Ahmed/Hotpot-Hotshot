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
            ) : currentPath === "/Blog" ? (
              <h1>
                Our Tracking tech, we are
                <br />
                making everything easy for you
              </h1>
            ) : currentPath === "/CarriersApp" ? (
              <h1>
                Our Carrier App, we are making <br />
                making everything easy for you
              </h1>
            ) : currentPath === "/CDLSchool" ? (
              <h1>
                Welcome to Our Website: <br />
                Discover the Power of about OpenAI and Artificial Intelligence{" "}
              </h1>
            ) : currentPath === "/CDLNon" ||
              currentPath === "/ELD" ||
              currentPath === "/HHGuide" ||
              currentPath === "/Insurance" ? (
              <h1>Our Tracking tech, we are making everything easy for you</h1>
            ) : currentPath === "/Contact" ? (
              <h1>Get in Touch and Let's Connect with contact us.</h1>
            ) : currentPath === "/FAQ" ? (
              <h1>Common categories you can write an FAQ page for include.</h1>
            ) : currentPath === "/GeneralFreight" ? (
              <h1>
                Quick and efficient General freight door-to-door delivery for
                small parcels.
              </h1>
            ) : (
              <h1>
                Simplify your shipping process
                <br />
                with our Dashboard
              </h1>
            )}

            <a className="btn-lig" href="/Contact">
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

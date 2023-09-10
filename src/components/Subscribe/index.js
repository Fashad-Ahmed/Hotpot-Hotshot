import React from "react";
import mail from "../../assets/Group 75322247.png";
import "../../styles/style.css";
import { useLocation } from "react-router-dom";

const Subscribe = () => {
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
    "/BoxTruckFormLong",
  ];

  if (arr.includes(location.pathname)) {
  } else {
    return (
      <section id="Subscribe">
        <div className="container-fluid">
          <h1
            style={{
              fontFamily: "serif",
            }}
          >
            Subscribe
          </h1>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p>
                Seamlessly visualize quality intellectual ideal without
                collaboration superior montes soon maecenas capita idea
                listically
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <input id="enter" placeholder="Enter your email" type="text" />
              <a href="#" id="clear">
                <img src={mail} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Subscribe;

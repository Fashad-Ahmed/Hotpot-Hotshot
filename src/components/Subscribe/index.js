import React from "react";
import mail from "../../assets/Group 75322247.png";
import "../../styles/style.css";

const Subscribe = () => {
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
              collaboration superior montes soon maecenas capita idea listically
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
};

export default Subscribe;

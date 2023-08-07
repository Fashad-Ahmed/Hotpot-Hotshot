import React from "react";
import mapImg from "../../assets/Rectangle 20.png";
import "../../styles/style.css";
const Map = () => {
  return (
    <section id="Map">
      <div className="container">
        <h1 data-aos="zoom-in" data-aos-delay={200} data-aos-once="true">
          <b>Near or far, we got you covered.</b>
        </h1>
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <img src={mapImg} width="100%" />
          </div>
          <div className="col-lg-2" />
        </div>
      </div>
    </section>
  );
};

export default Map;

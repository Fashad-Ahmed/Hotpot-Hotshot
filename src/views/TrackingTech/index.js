import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import imgP from "../../assets/image 69.png";
import serImg from "../../assets/image 73.png";
import "../../styles/style.css";

const TrackingTech = () => {
  const ttOne = () => {
    return (
      <section id="tt1">
        <div
          style={{
            padding: "20px 30px 20px 30px",
          }}
        >
          <img src={imgP} width="100%" />
          <div className="row">
            <div className="col-lg-1 col-md-1" />
            <div className="col-lg-10 col-md-10">
              <h1 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                We provide to shipper, shipper can track his shipment with our
                premium addon, We will provide you Airtag Tracking Service for
                track your shipment{" "}
              </h1>
            </div>
            <div className="col-lg-1 col-md-1" />
          </div>
        </div>
      </section>
    );
  };

  const ttTwo = () => {
    return (
      <section id="tt2">
        <div
          style={{
            padding: "0px 30px 0px 30px",
          }}
        >
          <div className="row">
            <div className=" col-md-4 col-sm-2" />
            <div className="col-md-4 col-sm-8">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-3" />
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <img src={serImg} width="100%" />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-3" />
              </div>
              <h1 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                AirTag
              </h1>
              <h1 data-aos="zoom-in" data-aos-delay={300} data-aos-once="true">
                Lose your knack for losing&nbsp;things.
              </h1>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-2" />
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      <Header />
      {ttOne()}
      {ttTwo()}
    </>
  );
};

export default TrackingTech;

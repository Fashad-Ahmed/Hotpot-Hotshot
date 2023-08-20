import React, { useState } from "react";
import vectorImg from "../../assets/Group 75322139 - Copy.png";
import mainImg from "../../assets/Group 75322508.png";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/style.css";

const GeneralFreightForm = () => {
  const navigation = useNavigate();
  const handleGoBack = () => {
    navigation("/GeneralFreight");
  };

  return (
    <section id="LRF">
      <div
        style={{
          padding: "20px 30px 20px 30px",
        }}
      >
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-0">
            <div className="left-LRF">
              <div className="LRF-Logo">
                <Link to="/">
                  <img src={vectorImg} />{" "}
                </Link>
              </div>
              <div className="LRF-back">
                <button
                  onClick={() => {
                    handleGoBack();
                  }}
                >
                  <img src={mainImg} />
                </button>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-0">
            <div className="right-LRF">
              <h1>Load Request</h1>
              <h3>General Freight / Heavy Equipment</h3>
              <form style={{ marginTop: "6%" }}>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Pick-up Zip *
                    </h2>
                    <input
                      className="input"
                      type="text"
                      placeholder="Pick-up Zip"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-16 col-12">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Drop-off Zip *
                    </h2>
                    <input
                      className="input"
                      type="text"
                      placeholder="Drop-off Zip"
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Estimated Weight *
                    </h2>
                    <select>
                      <option selected="">100 - 1000 lbs</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Longest Dimension
                    </h2>
                    <input
                      className="input"
                      type="text"
                      placeholder="Longest Dimension"
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Load Method *
                    </h2>
                    <select>
                      <option selected="">Manual Load (ML)</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Ready for Pickup?
                    </h2>
                    <div className="form-check " style={{ display: "inline" }}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="option1"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check" style={{ display: "inline", marginLeft: "8px" }}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        defaultValue="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h2
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      Photos optional (suggested)
                    </h2>
                    <div className="upload-container">
                      <input type="file" id="file_upload" multiple="true" />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p style={{ textAlign: "left" }}>
                      {" "}
                      <button style={{
                        fontFamily: 'serif'
                      }} >Submit</button>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default GeneralFreightForm;

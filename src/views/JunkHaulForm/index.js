import React, { useState } from "react";
import vectorImg from "../../assets/Group 75322139 - Copy.png";
import mainImg from "../../assets/Group 75322508.png";
import "../../styles/style.css";
import { Link, useNavigate } from "react-router-dom";

const JunkHaulForm = () => {
  const navigation = useNavigate();
  const handleGoBack = () => {
    navigation("/JunkHaul");
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
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-0">
            <div className="right-LRF">
              <h1>Load Request</h1>
              <h3 style={{ fontFamily: "serif" }}>26’Box truck</h3>
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
                      Load Method *
                    </h2>
                    <select>
                      <option selected="">Select load method</option>
                      <option>...</option>
                    </select>
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
                      <input
                        style={{
                          fontFamily: "serif",
                        }}
                        type="file"
                        id="file_upload"
                        multiple="true"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <p style={{ textAlign: "left" }}>
                      {" "}
                      <button
                        style={{
                          fontFamily: "serif",
                        }}
                      >
                        Submit
                      </button>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default JunkHaulForm;

import React from "react";
import topImg from "../../../assets/hhs_logos_full_horizontal_lockup_red.png";
import intImg from "../../../assets/interrogation 1.png";
import profileImg from "../../../assets/settings 1.png";
import bellImg from "../../../assets/bell 1.png";
import userImg from "../../../assets/circle-user 1.png";
import "../../../styles/newStyles.css";
import { Link } from "react-router-dom";

import img from "../../../assets/image 46 (4).png";
const Four = () => {
  return (
    <>
      <header>
        <div
          className="row d-flex justify-content-center align-items-center justify-content-between flex-row"
          style={{ backgroundColor: "rgb(80, 73, 73)" }}
        >
          <div className="col-lg-3 col-md-3 col-sm-4 pic">
            <img src={topImg} alt="" />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-8 d-flex justify-content-center align-items-center justify-content-between">
            <button className="create_button">
              {" "}
              <b>Create New +</b>{" "}
            </button>
            <button className="QM-button">
              <img src={intImg} alt="" />{" "}
            </button>
            <button className="setting_buuton">
              <Link to="/Profile">
                <img src={profileImg} alt="" />
              </Link>
            </button>
            <button className="bell_button">
              <img src={bellImg} alt="" />
            </button>
            <img className="admin_img" src={userImg} alt="" />
            <i className="admin">
              <b>Show Admin</b>
            </i>
            <button style={{ border: "none" }}>
              <b> ∨ </b>
            </button>
          </div>
        </div>
      </header>
      <div className="main  justify-content-center ">
        <form action="" d-flex="">
          {/* Form */}
          <div id="main_body_1 pdtb" style={{ marginTop: 200 }}>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  {/* Names */}
                  <div className="row" style={{ padding: "100px 0px" }}>
                    <div className="col-12 pd-20">
                      <h2 className="form-label mgtb">
                        Please select your pick-up date
                        <span className="danger">*</span>
                      </h2>
                      <input
                        type="date"
                        className="form-control"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  {/* Names */}
                </div>
                {/* Cargo img */}
                <div className="col-6">
                  <img
                    src={img}
                    style={{ marginTop: 100 }}
                    width="100%"
                    alt=""
                  />
                </div>
                {/* Cargo img  */}
              </div>
            </div>
          </div>
          <div className="header container">
            {/* NB Button */}
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 pd-20">
                <Link to="/JFive">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ width: "100%" }}
                  >
                    Next
                  </button>
                </Link>
              </div>
            </div>
            {/* NB Button */}
          </div>
          {/* Form */}
        </form>
      </div>
    </>
  );
};

export default Four;

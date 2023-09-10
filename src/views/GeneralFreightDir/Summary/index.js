import React from "react";
import topImg from "../../../assets/hhs_logos_full_horizontal_lockup_red.png";
import intImg from "../../../assets/interrogation 1.png";
import profileImg from "../../../assets/settings 1.png";
import bellImg from "../../../assets/bell 1.png";
import userImg from "../../../assets/circle-user 1.png";
import "../../../styles/newStyles.css";
import { Link } from "react-router-dom";

const Summary = () => {
  return (
    <>
      <div className="container-fluid">
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
        <div className="row w-100 mt-5 mb-5 ml-5">
          <div className="col-12" style={{ marginLeft: "10%" }}>
            <p>Dashboard &gt; Summary</p>
          </div>
        </div>
        <div className="row w-75 d-flex justify-content-center align-items-center">
          <div className="col-10 mt-5 mb-5 ">
            <div>
              <h2>
                <b>Summary</b>
              </h2>
            </div>
          </div>
        </div>
        <div className="input row  d-flex justify-content-center align-items-center">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h2>Shipper Information</h2>
          </div>
          <div className="col-5">
            <input type="text" defaultValue="Alex" />
          </div>
          <div className="col-5">
            <input type="text" defaultValue="Hales" />
          </div>
          <div className="col-5">
            <input type="text" defaultValue={12346589} />
          </div>
          <div className="col-5">
            <input type="text" defaultValue="alexhales@hh.com" />
          </div>
          <div className="col-10">
            <input type="text" defaultValue="Hello hotshot" />
          </div>
          <div className="col-5">
            <input type="text" placeholder="Address line 1" />
          </div>
          <div className="col-5">
            <input type="text" placeholder="Address line 2" />
          </div>
          <div
            style={{
              width: "84%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="col-4">
              <input
                type="text"
                defaultValue="Austin"
                style={{ width: "98%" }}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                defaultValue="texas"
                style={{ width: "98%" }}
              />
            </div>
            <div className="col-4">
              <input
                type="text"
                defaultValue={73301}
                style={{ width: "98%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="input row mt-5 mb-3 d-flex justify-content-center align-items-center">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <h2>Receiver Information</h2>
        </div>
        <div className="col-5">
          <input type="text" defaultValue="Alex" />
        </div>
        <div className="col-5">
          <input type="text" defaultValue="Hales" />
        </div>
        <div className="col-5">
          <input type="text" defaultValue={12346589} />
        </div>
        <div className="col-5">
          <input type="text" defaultValue="alexhales@hh.com" />
        </div>
        <div className="col-10">
          <input type="text" defaultValue="Hello hotshot" />
        </div>
        <div className="col-5">
          <input type="text" placeholder="Address line 1" />
        </div>
        <div className="col-5">
          <input type="text" placeholder="Address line 2" />
        </div>
        <div
          style={{
            width: "84%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="col-4">
            <input type="text" defaultValue="Austin" style={{ width: "98%" }} />
          </div>
          <div className="col-4">
            <input type="text" defaultValue="texas" style={{ width: "98%" }} />
          </div>
          <div className="col-4">
            <input type="text" defaultValue={73301} style={{ width: "98%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;

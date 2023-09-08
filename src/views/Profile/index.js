import React from "react";
import "../../styles/newStyles.css";
// import '../../styles/style.css'
import topImg from "../../assets/hhs_logos_full_horizontal_lockup_red.png";
import intImg from "../../assets/interrogation 1.png";
import profileImg from "../../assets/settings 1.png";
import bellImg from "../../assets/bell 1.png";
import userImg from "../../assets/circle-user 1.png";
import { Link } from "react-router-dom";
const Profile = () => {
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
      </div>
      <div className="row w-100 mt-5 mb-5 ml-5">
        <div className="col-12" style={{ marginLeft: "10%" }}>
          <p>Dashboard &gt; profile</p>
        </div>
      </div>
      <div className="row w-75 d-flex justify-content-center align-items-center">
        <div className="col-10 mt-2 mb-2 ">
          <div>
            <h2>
              <b>Profile</b>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 d-flex justify-content-center align-items-center flex-column">
          <div>
            <img src={userImg} alt="" />
          </div>
          <div className="mt-4">
            <button>change</button>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 ">
          <div
            className=" input row w-100 d-flex justify-content-center align-items-center"
            style={{ border: "1px solid black" }}
          >
            <div className="col-10 mt-4 mb-4">
              <h1>Account Information</h1>
            </div>
            <div className="col-5 mt-2">
              First Name
              <input
                type="text"
                placeholder="First Name"
                style={{ margin: "0%" }}
              />
            </div>
            <div className="col-5 mt-2">
              Last Name
              <input
                type="text"
                placeholder="Last Name"
                style={{ margin: "0%" }}
              />
            </div>
            <div className="col-5 mt-2">
              Email
              <input type="text" placeholder="Email" style={{ margin: "0%" }} />
            </div>
            <div className="col-5 mt-2">
              Phone No.
              <input
                type="text"
                placeholder="Phone No."
                style={{ margin: "0%" }}
              />
            </div>
            <div className="col-10 mt-4 mb-4">Change Your Password</div>
            <div className="col-10 mt-2">
              Old Password
              <input
                type="text"
                placeholder="Old Password"
                style={{ margin: "0%" }}
              />
            </div>
            <br />
            <div className="col-5 mt-2">
              New Password
              <input
                type="text"
                placeholder="Old passwors"
                style={{ margin: "0%" }}
              />
            </div>
            <div className="col-5 mt-2">
              New Password
              <input
                type="text"
                placeholder="New Password"
                style={{ margin: "0%" }}
              />
            </div>
            <div className="col-10  mt-4">
              <button style={{ width: 150 }}>Change</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

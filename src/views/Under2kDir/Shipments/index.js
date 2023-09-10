import React from "react";
import topImg from "../../../assets/hhs_logos_full_horizontal_lockup_red.png";
import intImg from "../../../assets/interrogation 1.png";
import profileImg from "../../../assets/settings 1.png";
import bellImg from "../../../assets/bell 1.png";
import userImg from "../../../assets/circle-user 1.png";
import "../../../styles/newStyles.css";
import { Link } from "react-router-dom";

const Shipments = () => {
  return (
    <div className="conatiner">
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
          <p>Dashboard &gt; shippment</p>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-10 mt-5 mb-5 d-flex justify-content-between justify-content-center align-items-center ">
          <div>
            <h2>
              <b>Shipments</b>
            </h2>
          </div>
          <div style={{ right: 10 }}>
            <Link to="/JOne">
              <button>Get All Quote</button>
            </Link>
          </div>
        </div>
        <div className="col-10">
          <table style={{ width: "100%", overflowX: "scroll" }}>
            <tbody>
              <tr>
                <th>Carrier type</th>
                <th>Shipper Name</th>
                <th>Receiver Name</th>
                <th>Pick-up Zip</th>
                <th>Drop off Zip</th>
                <th>Request Date</th>
                <th>Quote Amount</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>Under 2k Lbs</td>
                <td>Shawn Adam</td>
                <td>Benjamen Jeo</td>
                <td>10001</td>
                <td>59453</td>
                <td>4-08-2023</td>
                <td>$5698</td>
                <td>
                  <Link to="/Summary">
                    <button>proceed</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>General freight</td>
                <td>Shawn Adam</td>
                <td>Andew phill</td>
                <td>50005</td>
                <td>59453</td>
                <td>4-08-2023</td>
                <td>$5698</td>
                <td>
                  <Link to="/Summary">
                    <button>proceed</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Junk Haul Off</td>
                <td>Shawn Adam</td>
                <td>Beyan Jhons</td>
                <td>80080</td>
                <td>59453</td>
                <td>4-08-2023</td>
                <td>$5698</td>
                <td>
                  <Link to="/Summary">
                    <button>proceed</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Motor Carrier</td>
                <td>Shawn Adam</td>
                <td>Jimmy Frenk</td>
                <td>95959</td>
                <td>59453</td>
                <td>4-08-2023</td>
                <td>$5698</td>
                <td>
                  <Link to="/Summary">
                    <button>proceed</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>General freight</td>
                <td>Shawn Adam</td>
                <td>Luna hazel</td>
                <td>75846</td>
                <td>59453</td>
                <td>4-08-2023</td>
                <td>$5698</td>
                <td>
                  <Link to="/Summary">
                    <button>proceed</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>General freight</td>
                <td>Shawn Adam</td>
                <td>Peter Bose</td>
                <td>555555</td>
                <td>59453</td>
                <td>4-08-2023</td>
                <td>$5698</td>
                <td>
                  <Link to="/Summary">
                    <button>proceed</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Shipments;

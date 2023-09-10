import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import TruckImage from "../../../assets/Box Truck.png";
import logo from "../../../assets/logo.png";
import truckImg from "../../../assets/image 46 (4).png";
import calendarImg from "../../../assets/calendar.png";
import "./styles.css";
import "../../../styles/style.css";
const LessThen2k = () => {
  const [steps, setSteps] = useState(1);

  const step1 = () => {
    return (
      <div
        className="main  justify-content-center "
        style={{ height: "100vh" }}
      >
        <form action="" d-flex="">
          {/* Logo */}
          <div className="container pdtb">
            <div className="row">
              <div className="col-5" />
              <div className="col-2">
                <img src={logo} width="100%" alt="" />
              </div>
              <div className="col-5" />
            </div>
          </div>
          {/* Logo */}
          {/* Quote Amount */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3" style={{ textAlign: "center" }}>
                <div className="alert alert-dark" role="alert">
                  Your quote amount is :{" "}
                  <button
                    type="button"
                    className="btn btn-dark h-n"
                    style={{ cursor: "text" }}
                  >
                    $8767
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Quote Amount */}
          {/* Navigation */}
          <div className="header pdtb">
            <div className="container one-con">
              <div className="row">
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <div
                      className="nav-link active"
                      onClick={() => {
                        handleSteps(1);
                      }}
                    >
                      Shipper Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(2);
                      }}
                    >
                      Reciever Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(3);
                      }}
                    >
                      Commodity Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(4);
                      }}
                    >
                      Equipment + Tools
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(5);
                      }}
                    >
                      Dates
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(6);
                      }}
                    >
                      Summary
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Navigation */}
          {/* Form */}
          <div id="main_body_1 pdtb">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Names */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Names */}
                  {/* Mobile Email */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobile"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Mobile Email */}
                  {/* Business Name */}
                  <div className="row">
                    <div className="col-12 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Business Name"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Business Name */}
                  {/* Address */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 1"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 2"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Address */}
                  {/* City State Zip */}
                  <div className="row">
                    <div className="col-4 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                    <div className="col-4 pd-20">
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                    <div className="col-4 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                      />
                    </div>
                  </div>
                  {/* City State Zip */}
                  {/* NB Button */}
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 pd-20">
                      <a href="reciever-info.html">
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                        >
                          Next
                        </button>
                      </a>
                    </div>
                    {/* <div class="col-2 pd-20">
                              <button type="submit" class="btn btn-secondary" style="width: 100%;">Submit</button>
                          </div> */}
                  </div>
                  {/* NB Button */}
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
        </form>
      </div>
    );
  };

  const step2 = () => {
    return (
      <div
        className="main  justify-content-center "
        style={{ height: "100vh" }}
      >
        <form action="" d-flex="">
          {/* Logo */}
          <div className="container pdtb">
            <div className="row">
              <div className="col-5">.</div>
              <div className="col-2">
                <img src={logo} width="100%" alt="" />
              </div>
              <div className="col-5">.</div>
            </div>
          </div>
          {/* Logo */}
          {/* Quote Amount */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3" style={{ textAlign: "center" }}>
                <div className="alert alert-dark" role="alert">
                  Your quote amount is :{" "}
                  <button
                    type="button"
                    className="btn btn-dark h-n"
                    style={{ cursor: "text" }}
                  >
                    $8767
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Quote Amount */}
          {/* Navigarion */}
          <div className="header pdtb">
            <div className="container one-con">
              <div className="row">
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(1);
                      }}
                    >
                      Shipper Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link active"
                      onClick={() => {
                        handleSteps(2);
                      }}
                    >
                      Reciever Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(3);
                      }}
                    >
                      Commodity Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(4);
                      }}
                    >
                      Equipment + Tools
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(5);
                      }}
                    >
                      Dates
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(6);
                      }}
                    >
                      Summary
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Navigarion */}
          {/* Form */}
          <div id="main_body_1 pdtb">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Names */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Names */}
                  {/* Mobile Email */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobile"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Mobile Email */}
                  {/* Business Name */}
                  <div className="row">
                    <div className="col-12 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Business Name"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Business Name */}
                  {/* Address */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 1"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 2"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Address */}
                  {/* City State Zip */}
                  <div className="row">
                    <div className="col-4 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                    <div className="col-4 pd-20">
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                    <div className="col-4 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                      />
                    </div>
                  </div>
                  {/* City State Zip */}
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 pd-20 ">
                      <a href="shipper-info.html">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          style={{ width: "100%" }}
                        >
                          Back
                        </button>
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 pd-20">
                      <a href="commodity-info.html">
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                        >
                          Next
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
        </form>
      </div>
    );
  };
  const step3 = () => {
    return (
      <div
        className="main  justify-content-center "
        style={{ height: "100vh" }}
      >
        <form action="" d-flex="">
          {/* Logo */}
          <div className="container pdtb">
            <div className="row">
              <div className="col-5" />
              <div className="col-2">
                <img src={logo} width="100%" alt="" />
              </div>
              <div className="col-5" />
            </div>
          </div>
          {/* Logo */}
          {/* Quote Amount */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3" style={{ textAlign: "center" }}>
                <div className="alert alert-dark" role="alert">
                  Your quote amount is :{" "}
                  <button
                    type="button"
                    className="btn btn-dark h-n"
                    style={{ cursor: "text" }}
                  >
                    $8767
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Quote Amount */}
          {/* Navigation */}
          <div className="header pdtb">
            <div className="container one-con">
              <div className="row">
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(1);
                      }}
                    >
                      Shipper Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(2);
                      }}
                    >
                      Reciever Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link active"
                      onClick={() => {
                        handleSteps(3);
                      }}
                    >
                      Commodity Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(4);
                      }}
                    >
                      Equipment + Tools
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(5);
                      }}
                    >
                      Dates
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(6);
                      }}
                    >
                      Summary
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Navigation */}
          {/* Form */}
          <div id="main_body_1 pdtb">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Length in ft "
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Weight in lbs"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pd-20">
                      <textarea
                        name=""
                        placeholder="Describe your cargo in detail"
                        className="form-control"
                        id=""
                        cols={30}
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pd-20">
                      <label htmlFor="formFileMultiple" className="form-label">
                        Upload your cargo images (30-60 second video min 6 / max
                        12 photos){" "}
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFileMultiple"
                        multiple=""
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 pd-20">
                      <a href="reciever-info.html">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          style={{ width: "100%" }}
                        >
                          Back
                        </button>
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 pd-20">
                      <a href="equipment-tool.html">
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                        >
                          Next
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
        </form>
      </div>
    );
  };
  const step4 = () => {
    return (
      <div
        className="main  justify-content-center "
        style={{ height: "100vh" }}
      >
        <form action="" d-flex="">
          {/* Logo */}
          <div className="container pdtb">
            <div className="row">
              <div className="col-5">.</div>
              <div className="col-2">
                <img src={logo} width="100%" alt="" />
              </div>
              <div className="col-5">.</div>
            </div>
          </div>
          {/* Logo */}
          {/* Quote Amount */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3" style={{ textAlign: "center" }}>
                <div className="alert alert-dark" role="alert">
                  Your quote amount is :{" "}
                  <button
                    type="button"
                    className="btn btn-dark h-n"
                    style={{ cursor: "text" }}
                  >
                    $8767
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Quote Amount */}
          {/* Navigation */}
          <div className="header pdtb">
            <div className="container one-con">
              <div className="row">
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(1);
                      }}
                    >
                      Shipper Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(2);
                      }}
                    >
                      Reciever Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(3);
                      }}
                    >
                      Commodity Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link active"
                      onClick={() => {
                        handleSteps(4);
                      }}
                    >
                      Equipment + Tools
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(5);
                      }}
                    >
                      Dates
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(6);
                      }}
                    >
                      Summary
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Form */}
          <div id="main_body_1 pdtb">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-3" />
                    <div className="col-6 pd-20">
                      <img src={truckImg} width="100%" alt="" />
                    </div>
                    <div className="col-3" />
                  </div>
                  <div className="row">
                    <div className="col-12 pd-20">
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected="">How will cargo be loaded</option>
                        <option value="manually by driver">
                          Manually by driver
                        </option>
                        <option value="manually by shipper, driver assisted">
                          Manually by shipper
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pd-20">
                      <p className="form-label">Tools Required</p>
                      <input
                        className="form-check-input  "
                        type="checkbox"
                        id="check1"
                        name="Tilt"
                        defaultValue="Tilt"
                      />
                      <label className="form-label pdr-20">Tilt Deck</label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check2"
                        name="Mega"
                        defaultValue="Mega"
                      />
                      <label className="form-label pdr-20">Mega Ramps</label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check3"
                        name="Winch"
                        defaultValue="Winch"
                      />
                      <label className="form-label pdr-20">Winch</label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check4"
                        name="Other"
                        defaultValue="Other"
                      />
                      <label className="form-label pdr-20">Other</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pd-20">
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected="">How will cargo be unloaded</option>
                        <option value="manually by driver">
                          Manually by driver
                        </option>
                        <option value="manually by shipper, driver assisted">
                          Manually by Reciever,{" "}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 pd-20">
                      <a href="commodity-info.html">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          style={{ width: "100%" }}
                        >
                          Back
                        </button>
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 pd-20">
                      <a href="dates.html">
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                        >
                          Next
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
        </form>
      </div>
    );
  };
  const step5 = () => {
    return (
      <div
        className="main  justify-content-center "
        style={{ height: "100vh" }}
      >
        <form action="" d-flex="">
          {/* Logo */}
          <div className="container pdtb">
            <div className="row">
              <div className="col-5" />
              <div className="col-2">
                <img src={logo} width="100%" alt="" />
              </div>
              <div className="col-5" />
            </div>
          </div>
          {/* Logo */}
          {/* Quote Amount */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3" style={{ textAlign: "center" }}>
                <div className="alert alert-dark" role="alert">
                  Your quote amount is :{" "}
                  <button
                    type="button"
                    className="btn btn-dark h-n"
                    style={{ cursor: "text" }}
                  >
                    $8767
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Quote Amount */}
          {/* Navigation */}
          <div className="header pdtb">
            <div className="container one-con">
              <div className="row">
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(1);
                      }}
                    >
                      Shipper Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(2);
                      }}
                    >
                      Reciever Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(3);
                      }}
                    >
                      Commodity Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(4);
                      }}
                    >
                      Equipment + Tools
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link active"
                      onClick={() => {
                        handleSteps(5);
                      }}
                    >
                      Dates
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(6);
                      }}
                    >
                      Summary
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Navigation */}
          {/* Form */}
          <div id="main_body_1 pdtb">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 pd-20">
                      <h3>Please salect pick-up date</h3>
                      <div className="row pd-20">
                        <div className="col-5">.</div>
                        <div className="col-2">
                          <img src={calendarImg} width="100%" alt="" />
                        </div>
                        <div className="col-5">.</div>
                      </div>
                      <input
                        type="date"
                        className="form-control"
                        id="myDate"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col12 pd-20">
                      <p className="form-label">
                        Would you like to edit the pick up date?
                      </p>
                      <div className="form-check">
                        <a href="">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Yes
                          </label>
                        </a>
                      </div>
                      <a href=""></a>
                      <div className="form-check">
                        <a href="">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            No
                          </label>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 pd-20">
                      <a href="equipment-tool.html">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          style={{ width: "100%" }}
                        >
                          Back
                        </button>
                      </a>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6 pd-20">
                      <a href="summary.html">
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                        >
                          Next
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
        </form>
      </div>
    );
  };

  const step6 = () => {
    return (
      <div
        className="main  justify-content-center "
        style={{ height: "100vh" }}
      >
        <form action="" d-flex="">
          {/* Logo */}
          {/* Logo */}
          <div className="container pdtb">
            <div className="row">
              <div className="col-5" />
              <div className="col-2">
                <img src={logo} width="100%" alt="" />
              </div>
              <div className="col-5" />
            </div>
          </div>
          {/* Logo */}
          {/* Quote Amount */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-3" style={{ textAlign: "center" }}>
                <div className="alert alert-dark" role="alert">
                  Your quote amount is :{" "}
                  <button
                    type="button"
                    className="btn btn-dark h-n"
                    style={{ cursor: "text" }}
                  >
                    $8767
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Quote Amount */}
          <div className="header pdtb">
            <div className="container one-con">
              <div className="row">
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(1);
                      }}
                    >
                      Shipper Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(2);
                      }}
                    >
                      Reciever Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(3);
                      }}
                    >
                      Commodity Information
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(4);
                      }}
                    >
                      Equipment + Tools
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link"
                      onClick={() => {
                        handleSteps(5);
                      }}
                    >
                      Dates
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className="nav-link active"
                      onClick={() => {
                        handleSteps(6);
                      }}
                    >
                      Summary
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Form */}
          <div id="main_body_1 pdtb">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Shipper Info */}
                  <h3>Shipper Informatio</h3>
                  {/* Names */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        defaultValue="Alex"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        defaultValue="Hales"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Names */}
                  {/* Mobile Email */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobile"
                        defaultValue={12346589}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        defaultValue="alexhales@hh.com"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Mobile Email */}
                  {/* Business Name */}
                  <div className="row">
                    <div className="col-12 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Business Name"
                        defaultValue="Hello Hotshot"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Business Name */}
                  {/* Address */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 1"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 2"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Address */}
                  {/* City State Zip */}
                  <div className="row">
                    <div className="col-4 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        defaultValue="Austin"
                      />
                    </div>
                    <div className="col-4 pd-20">
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX" selected="">
                          Texas
                        </option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                    <div className="col-4 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                        defaultValue={73301}
                      />
                    </div>
                  </div>
                  {/* City State Zip */}
                  {/* Shipper Info */}
                  {/* Reciever Info */}
                  <h3>Reciever Informatio</h3>
                  {/* Names */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        defaultValue="Adam"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        defaultValue="Smith"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Names */}
                  {/* Mobile Email */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobile"
                        defaultValue={45789862}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        defaultValue="adam@smith.com"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Mobile Email */}
                  {/* Business Name */}
                  <div className="row">
                    <div className="col-12 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Business Name"
                        defaultValue="Thinkssoft"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Business Name */}
                  {/* Address */}
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 1"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 2"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Address */}
                  {/* City State Zip */}
                  <div className="row">
                    <div className="col-4 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                        defaultValue="San Francisco"
                      />
                    </div>
                    <div className="col-4 pd-20">
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA" selected="">
                          Washington
                        </option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                    <div className="col-4 pd-20">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip"
                        defaultValue={94016}
                      />
                    </div>
                  </div>
                  {/* City State Zip */}
                  {/* Reciever Info */}
                  {/* Commodity Info */}
                  <h3>Commodity Info</h3>
                  <div className="row">
                    <div className="col-6 pd-20">
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={30}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-6 pd-20">
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={40}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pd-20">
                      <textarea
                        name=""
                        placeholder="Describe your cargo in detail"
                        className="form-control"
                        id=""
                        cols={30}
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pd-20">
                      <label htmlFor="formFileMultiple" className="form-label">
                        Upload your cargo images (upto 30-60){" "}
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFileMultiple"
                        multiple=""
                      />
                    </div>
                  </div>
                  {/* Commodity Info */}
                  {/* Equip Toool */}
                  <h3>Equipment + Tools</h3>
                  <div className="row">
                    <div className="col-12 pd-20">
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option selected="">How will cargo be loaded</option>
                        <option value="manually by driver">
                          Manually by driver
                        </option>
                        <option value="manually by shipper, driver assisted">
                          Manually by shipper
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pd-20">
                      <p className="form-label">Tools Required</p>
                      <input
                        className="form-check-input  "
                        type="checkbox"
                        id="check1"
                        name="Tilt"
                        defaultValue="Tilt"
                      />
                      <label className="form-label pdr-20">Tilt Deck</label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check2"
                        name="Mega"
                        defaultValue="Mega"
                      />
                      <label className="form-label pdr-20">Mega Ramps</label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check3"
                        name="Winch"
                        defaultValue="Winch"
                      />
                      <label className="form-label pdr-20">Winch</label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check4"
                        name="Other"
                        defaultValue="Other"
                      />
                      <label className="form-label pdr-20">Other</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pd-20">
                      <select
                        className="form-select form-control"
                        aria-label="Default select example"
                      >
                        <option>How will cargo be unloaded</option>
                        <option selected="" value="manually by driver">
                          Manually by driver
                        </option>
                        <option value="manually by shipper, driver assisted">
                          Manually by Reciever
                        </option>
                      </select>
                    </div>
                  </div>
                  {/* Equip Toool */}
                  {/* Dates */}
                  <h3>Dates</h3>
                  <div className="row">
                    <div className="col-12 pd-20">
                      <input
                        type="date"
                        className="form-control"
                        id="myDate"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* Dates */}
                  <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6 pd-20">
                      <a href="#">
                        <button
                          type="Submit"
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                        >
                          Submit
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };
  const handleSteps = (p) => {
    setSteps(p);
  };

  const renderSteps = () => {
    switch (steps) {
      case 1: {
        return step1();
      }
      case 2: {
        return step2();
      }
      case 3: {
        return step3();
      }
      case 4: {
        return step4();
      }
      case 5: {
        return step5();
      }
      case 6: {
        return step6();
      }

      default: {
        return step1();
      }
    }
  };
  return <>{renderSteps()}</>;
};

export default LessThen2k;

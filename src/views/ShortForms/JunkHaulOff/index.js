import React, { useState } from "react";
import { Link } from "react-router-dom";
import TruckImage from "../../../assets/Images/junkIcon.png";

import "./styles.css";

const JunkHaulOff = () => {
  const [steps, setSteps] = useState(1);
  const [readyToPick, setReadyToPick] = useState(true);
  const [getQuoteBy, setGetQuoteBy] = useState("text");
  const [errorPopup, setErrorPopup] = useState(false);
  const step1 = () => {
    return (
      <div class="main  justify-content-center ">
        <form action="" d-flex>
          {/* <!-- Form --> */}
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  {/* <!-- Names --> */}
                  <div class="row" style={{ padding: "100px 0px" }}>
                    <div class="col-12 pd-20">
                      <h2 class="form-label mgtb">
                        Pick-up Zip <span class="danger">*</span>
                      </h2>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Your Drop-off Zip"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  {/* <!-- Names --> */}
                </div>
                {/* <!-- Cargo img --> */}
                <div class="col-6">
                  <img
                    src={TruckImage}
                    style={{ marginTop: "100px" }}
                    width="100%"
                    alt=""
                  />
                </div>
                {/* <!-- Cargo img  --> */}
              </div>
            </div>
          </div>
          <div class="header container">
            {/* <!-- NB Button --> */}
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-6 pd-20">
                <a>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ width: "100%" }}
                    onClick={handleSteps}
                  >
                    Next
                  </button>
                </a>
              </div>
            </div>
            {/* <!-- NB Button --> */}
          </div>

          {/* <!-- Form --> */}
        </form>
      </div>
    );
  };
  const step2 = () => {
    return (
      <div class="main  justify-content-center ">
        <form action="" d-flex>
          {/* <!-- Form --> */}
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  {/* <!-- Names --> */}

                  <div class="row" style={{ padding: "100px 0px" }}>
                    <div class="col-12 pd-20">
                      <h2 class="form-label mgtb">
                        Please upload images or videos{" "}
                        <span class="danger">*</span>
                      </h2>
                      <p>
                        Please provide a video (under 30-seconds) or six photos
                        of your cargo
                      </p>
                      <input
                        id="myFileInput"
                        class="form-control"
                        type="file"
                        accept=""
                      />
                    </div>
                  </div>
                  {/* <!-- Names --> */}
                </div>
                {/* <!-- Cargo img --> */}

                <div class="col-6">
                  <img
                    src={TruckImage}
                    style={{ marginTop: "100px" }}
                    width="100%"
                    alt=""
                  />
                </div>

                {/* <!-- Cargo img  --> */}
              </div>
            </div>
          </div>
          <div class="header container">
            {/* <!-- NB Button --> */}
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-6 pd-20">
                <a>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ width: "100%" }}
                    onClick={handleSteps}
                  >
                    Next
                  </button>
                </a>
              </div>
            </div>
            {/* <!-- NB Button --> */}
          </div>

          {/* <!-- Form --> */}
        </form>
      </div>
    );
  };
  const step3 = () => {
    return (
      <div class="main  justify-content-center ">
        <form action="" d-flex>
          {/* <!-- Form --> */}
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  {/* <!-- Names --> */}

                  <div class="row" style={{ padding: "100px 0px" }}>
                    <div class="col-12 pd-20">
                      <h2 class="form-label mgtb">
                        Is your cargo ready for pick-up?{" "}
                        <span class="danger">*</span>
                      </h2>
                      <div style={{ padding: "0px 20px;" }}>
                        <a>
                          <button
                            type="button"
                            class="btn btn-primary"
                            style={{ width: "30%" }}
                            onClick={() => {
                              handleSteps(), setReadyToPick(true);
                            }}
                          >
                            Yes
                          </button>
                        </a>
                        <br />
                        <br />
                        <a>
                          <button
                            type="button"
                            class="btn btn-primary"
                            style={{ width: "30%" }}
                            onClick={() => {
                              handleSteps(), setReadyToPick(false);
                            }}
                          >
                            No
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Names --> */}
                </div>
                {/* <!-- Cargo img --> */}

                <div class="col-6">
                  <img
                    src={TruckImage}
                    style={{ marginTop: "100px" }}
                    width="100%"
                    alt=""
                  />
                </div>

                {/* <!-- Cargo img  --> */}
              </div>
            </div>
          </div>

          {/* <!-- Form --> */}
        </form>
      </div>
    );
  };
  const step4One = () => {
    return (
      <div class="main  justify-content-center ">
        <form action="" d-flex>
          {/* <!-- Form --> */}
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  {/* <!-- Names --> */}

                  <div class="row" style={{ padding: "100px 0px" }}>
                    <div class="col-12 pd-20">
                      <h2 class="form-label mgtb">
                        Please select your pick-up date
                        <span class="danger">*</span>
                      </h2>
                      <input type="date" class="form-control" name="" id="" />
                    </div>
                  </div>
                  {/* <!-- Names --> */}
                </div>
                {/* <!-- Cargo img --> */}

                <div class="col-6">
                  <img
                    src={TruckImage}
                    style={{ marginTop: "100px" }}
                    width="100%"
                    alt=""
                  />
                </div>

                {/* <!-- Cargo img  --> */}
              </div>
            </div>
          </div>
          <div class="header container">
            {/* <!-- NB Button --> */}
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-6 pd-20">
                <a>
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ width: "100%" }}
                    onClick={handleSteps}
                  >
                    Next
                  </button>
                </a>
              </div>
            </div>
            {/* <!-- NB Button --> */}
          </div>

          {/* <!-- Form --> */}
        </form>
      </div>
    );
  };
  const step4Two = () => {
    return (
      <div class="main  justify-content-center ">
        <form action="" d-flex>
          {/* <!-- Form --> */}
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  {/* <!-- Names --> */}

                  <div class="row" style={{ padding: "100px 0px" }}>
                    <div class="col-12 pd-20">
                      <h2 class="form-label mgtb">
                        How would you like your quote to be delivered?
                        <span class="danger">*</span>
                      </h2>
                      <div style={{ padding: "0px 20px;" }}>
                        <a>
                          <button
                            type="button"
                            class="btn btn-primary"
                            style={{ width: "30%" }}
                            onClick={() => {
                              handleSteps(), setGetQuoteBy("text");
                            }}
                          >
                            Text
                          </button>
                        </a>
                        <br />
                        <br />
                        <a>
                          <button
                            type="button"
                            class="btn btn-primary"
                            style={{ width: "30%" }}
                            onClick={() => {
                              handleSteps(), setGetQuoteBy("email");
                            }}
                          >
                            Email
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Names --> */}
                </div>
                {/* <!-- Cargo img --> */}

                <div class="col-6">
                  <img
                    src={TruckImage}
                    style={{ marginTop: "100px" }}
                    width="100%"
                    alt=""
                  />
                </div>

                {/* <!-- Cargo img  --> */}
              </div>
            </div>
          </div>

          {/* <!-- Form --> */}
        </form>
      </div>
    );
  };

  const step5One = () => {
    return (
      <div class="main  justify-content-center ">
        <form action="" d-flex>
          {/* <!-- Form --> */}
          <div id="main_body_1 pdtb" style={{ marginTop: "100px;" }}>
            <div class="container">
              <div class="row">
                {/* <!-- Cargo img --> */}

                <div class="col-12">
                  <img src={TruckImage} width="100%" alt="" />
                </div>

                {/* <!-- Cargo img  --> */}
              </div>
              <div class="row">
                <div class="col-12">
                  {/* <!-- Names --> */}

                  <div class="row">
                    <div class="col-12 pd-20">
                      <h2 class="form-label mgtb">
                        Please enter your Mobile No.
                        <span class="danger">*</span>
                      </h2>
                      <input
                        type="number"
                        class="form-control"
                        name=""
                        id=""
                        placeholder="1232568945"
                      />
                    </div>
                  </div>
                  {/* <!-- Names --> */}
                </div>
              </div>
            </div>
          </div>
          <div class="header container">
            {/* <!-- NB Button --> */}
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-6 pd-20">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={handleSteps}
                >
                  Submit
                </button>
              </div>
            </div>
            {/* <!-- NB Button --> */}
          </div>

          {/* <!-- Form --> */}
        </form>
      </div>
    );
  };
  const step5Two = () => {
    return (
      <div class="main  justify-content-center ">
        <form action="" d-flex>
          {/* <!-- Form --> */}
          <div id="main_body_1 pdtb" style={{ marginTop: "100px;" }}>
            <div class="container">
              <div class="row">
                {/* <!-- Cargo img --> */}

                <div class="col-12">
                  <img src={TruckImage} width="100%" alt="" />
                </div>

                {/* <!-- Cargo img  --> */}
              </div>
              <div class="row">
                <div class="col-12">
                  {/* <!-- Names --> */}

                  <div class="row">
                    <div class="col-12 pd-20">
                      <h2 class="form-label mgtb">
                        Please enter your email address
                        <span class="danger">*</span>
                      </h2>
                      <input
                        type="email"
                        class="form-control"
                        name=""
                        id=""
                        placeholder="jhon@gmail.com"
                      />
                    </div>
                  </div>
                  {/* <!-- Names --> */}
                </div>
              </div>
            </div>
          </div>
          <div class="header container">
            {/* <!-- NB Button --> */}
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-6 pd-20">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={handleSteps}
                >
                  Submit
                </button>
              </div>
            </div>
            {/* <!-- NB Button --> */}
          </div>

          {/* <!-- Form --> */}
        </form>
      </div>
    );
  };

  const handleSteps = () => {
    if (steps < 5) {
      setSteps(steps + 1);
    }
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
        if (readyToPick) {
          return step4Two();
        } else {
          return step4One();
        }
      }
      case 5: {
        if (getQuoteBy == "email") {
          return step5Two();
        } else {
          return step5One();
        }
      }
      default: {
        return step1();
      }
    }
  };
  return <>{renderSteps()}</>;
};

export default JunkHaulOff;

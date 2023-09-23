import React, { useState } from "react";
import "./styles.css";
import TruckImage from "../../../assets/Images/generalIcon.png";

import { images } from "../../../assets/index";

const GeneralFreight = () => {
  const [steps, setSteps] = useState(1);
  const [readyToPick, setReadyToPick] = useState(true);
  const [getQuoteBy, setGetQuoteBy] = useState("text");
  const [errorPopup, setErrorPopup] = useState(false);
  const step1 = () => {
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
                        Drop-off Zip <span class="danger">*</span>
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
                        What is the longest dimension of your cargo?{" "}
                        <span class="danger">*</span>
                      </h2>
                      <input
                        type="number"
                        name=""
                        id=""
                        class="form-control"
                        placeholder="Please enter longest dimension"
                      />
                    </div>
                  </div>
                  {/* <!-- Names --> */}
                </div>
              </div>
            </div>
          </div>
          <div class="header container">
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
          </div>

          {/* <!-- Form --> */}
        </form>
      </div>
    );
  };
  const step4 = () => {
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
                        Estimated weight of your cargo?{" "}
                        <span class="danger">*</span>
                      </h2>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked=""
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Less than 200 lbs
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          201 - 500
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                        <label class="form-check-label" for="flexRadioDefault3">
                          501 - 1,000
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                        />
                        <label class="form-check-label" for="flexRadioDefault4">
                          1,001 - 2,000
                        </label>
                      </div>
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
  const step5 = () => {
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
                        Description of cargo <span class="danger">*</span>
                      </h2>
                      <textarea
                        name=""
                        id=""
                        class="form-control"
                        cols="30"
                        rows="5"
                        placeholder="Write detailed description of your cargo"
                      ></textarea>
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
  const step6 = () => {
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
  const step7 = () => {
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
                        How will your cargo be loaded?
                        <span class="danger">*</span>
                      </h2>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked=""
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Manually by driver
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Manually by shipper
                        </label>
                      </div>
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
  const step8 = () => {
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
                        How will your cargo be unloaded?
                        <span class="danger">*</span>
                      </h2>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked=""
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Manually by driver
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Manually by reciever
                        </label>
                      </div>
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
  const step9One = () => {
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
                        Is your cargo ready for pick-up?{" "}
                        <span class="danger">*</span>
                      </h2>
                      <div style={{ padding: "0px 20px" }}>
                        <a>
                          <button
                            type="button"
                            class="btn btn-primary"
                            style={{ width: "15%" }}
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
                            style={{ width: "15%" }}
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
              </div>
            </div>
          </div>

          {/* <!-- Form --> */}
        </form>
      </div>
    );
  };
  const step9Two = () => {
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
                        Please select your pick-up date
                        <span class="danger">*</span>
                      </h2>
                      <input type="date" class="form-control" name="" id="" />
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

  const step10 = () => {
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
              <div class="col-12">
                {/* <!-- Names --> */}

                <div class="row">
                  <div class="col-12 pd-20">
                    <h2 class="form-label mgtb">
                      How would you like your quote to be delivered?
                      <span class="danger">*</span>
                    </h2>
                    <div style={{ padding: "0px 20px" }}>
                      <a>
                        <button
                          type="button"
                          class="btn btn-primary"
                          style={{ width: "15%" }}
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
                          style={{ width: "15%" }}
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
            </div>
          </div>

          {/* <!-- Form --> */}
        </form>
      </div>
    );
  };
  const step11One = () => {
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
  const step11Two = () => {
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
    if (steps < 11) {
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
        return step4();
      }
      case 5: {
        return step5();
      }
      case 6: {
        return step6();
      }
      case 7: {
        return step7();
      }
      case 8: {
        return step8();
      }
      case 9: {
        return step9One();
      }
      case 10: {
        if (readyToPick) {
          return step10();
        } else {
          return step9Two();
        }
      }
      case 11: {
        if (getQuoteBy == "email") {
          return step11Two();
        } else {
          return step11One();
        }
      }
      default: {
        return step1();
      }
    }
  };
  return <>{renderSteps()}</>;
};

export default GeneralFreight;

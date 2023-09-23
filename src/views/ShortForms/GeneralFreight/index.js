import React, { useState } from "react";
import TruckImage from "../../../assets/Box Truck.png";
import "./styles.css";
import { errorToast } from "../../../utils/toast";
import { useCreateQuote } from "../../../hook/useCreateQuote";

const GeneralFreight = () => {
  const [steps, setSteps] = useState(1);
  const [readyToPick, setReadyToPick] = useState(true);
  const [errorPopup, setErrorPopup] = useState(false);
  const [pickupZip, setPickupZip] = useState();
  const [dropOffZip, setDropOffZip] = useState();
  const [dimensionUnder896, setDimensionUnder896] = useState();
  const [longestDimesntionOfCargo, setLongestDimesntionOfCargo] = useState();
  const [cargoDescription, setcargoDescription] = useState();
  const [cargoLoadedBy, setCargoLoadedBy] = useState();
  const [cargoUnloadBy, setcargoUnloadBy] = useState();
  const [estimatedWeight, setestimatedWeight] = useState();
  const [vehicleOperable, setvehicleOperable] = useState();
  const [vehicleDetails, setvehicleDetails] = useState({
    year: "2022",
    make: "Honda",
    model: "ADA",
  });
  const [media, setMedia] = useState([]);
  const [cargoReadyForPickup, setCargoReadyForPickup] = useState(true);
  const [quotationVia, setQuotationVia] = useState("");
  const [email, setEmail] = useState("");
  const [createQuoteFunc] = useCreateQuote();

  const handleQuotationViaChange = (value) => {
    setQuotationVia(value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleCargoReadyChange = (value) => {
    setCargoReadyForPickup(value);
  };
  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const fileNames = Array.from(files).map((file) => file.name);
    setMedia(fileNames);
  };
  const handleCargoLoadedByChange = (event) => {
    setCargoLoadedBy(event.target.value);
  };

  const handleSubmit = () => {
    let data = {
      pickupZip,
      dropOffZip,
      type: "generalFreight",
      dimensionUnder896,
      longestDimesntionOfCargo,
      cargoDescription,
      cargoLoadedBy,
      cargoUnloadBy,
      estimatedWeight: "lessThan200",
      vehicleOperable: false,
      vehicleDetails,
      media,
      cargoReadyForPickup,
      quotationVia,
      email,
    };
    console.log(data);
    createQuoteFunc(data);
  };
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
                        value={pickupZip}
                        onChange={(e) => setPickupZip(e.target.value)}
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
                        Drop-off Zip <span class="danger">*</span>
                      </h2>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Your Drop-off Zip"
                        style={{ width: "100%" }}
                        value={dropOffZip}
                        onChange={(e) => setDropOffZip(e.target.value)}
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
                        Is the longest dimension under 8’ (96”)?{" "}
                        <span class="danger">*</span>
                      </h2>
                      <div style={{ padding: "0px 20px" }}>
                        <a>
                          <button
                            type="button"
                            class="btn btn-primary"
                            style={{ width: "30%" }}
                            onClick={() => {
                              setDimensionUnder896("true");
                              handleSteps();
                            }}
                          >
                            Yes
                          </button>
                        </a>
                        <br />
                        <br />
                        <button
                          type="button"
                          // onclick="myFunction()"
                          class="btn btn-primary"
                          style={{ width: "30%" }}
                          onClick={() => setErrorPopup(true)}
                        >
                          No
                        </button>
                        {errorPopup && (
                          <div
                            id="myDIV"
                            style={{
                              // display: "none",
                              width: "100%",
                              backgroundColor: "#ced4da",
                              padding: "20px",
                              margin: "20px 0px",
                              borderLeft: "1px solid black",
                            }}
                          >
                            “ Your cargo may be too large for this vehicle.
                            Please select the <a> “General Freight” </a>option
                            above to obtain a quote for your shipment. “
                          </div>
                        )}
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
  const step4 = () => {
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
                          value={"Less than 200 lbs"}
                          onChange={(e) =>
                            setLongestDimesntionOfCargo(e.target.value)
                          }
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
                          id="flexRadioDefault1"
                          checked=""
                          value={"201 - 500"}
                          onChange={(e) =>
                            setLongestDimesntionOfCargo(e.target.value)
                          }
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
                          id="flexRadioDefault1"
                          checked=""
                          value={"501 - 1,00"}
                          onChange={(e) =>
                            setLongestDimesntionOfCargo(e.target.value)
                          }
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
                          id="flexRadioDefault1"
                          checked=""
                          value={"1,001 - 2,000"}
                          onChange={(e) =>
                            setLongestDimesntionOfCargo(e.target.value)
                          }
                        />

                        <label class="form-check-label" for="flexRadioDefault4">
                          1,001 - 2,000
                        </label>
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
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  {/* <!-- Names --> */}
                  <div class="row" style={{ padding: "100px 0px " }}>
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
                        value={cargoDescription}
                        onChange={(e) => setcargoDescription(e.target.value)}
                      ></textarea>
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
  const step6 = () => {
    return (
      <div class="main justify-content-center">
        <form action="" d-flex>
          {/* Form */}
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  {/* Names */}
                  <div class="row" style={{ padding: "100px 0px " }}>
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
                        onChange={handleFileInputChange}
                        multiple
                      />
                    </div>
                  </div>
                  {/* Names */}
                </div>
                {/* Cargo img */}
                <div class="col-6">
                  <img
                    src={TruckImage}
                    style={{ marginTop: "100px" }}
                    width="100%"
                    alt=""
                  />
                </div>
                {/* Cargo img */}
              </div>
            </div>
          </div>
          <div class="header container">
            {/* NB Button */}
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
            {/* NB Button */}
          </div>
          {/* Form */}
        </form>
      </div>
    );
  };
  const step7 = () => {
    return (
      <div class="main justify-content-center">
        <form action="" d-flex>
          {/* Form */}
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  {/* Names */}
                  <div class="row" style={{ padding: "100px 0px " }}>
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
                          value="manuallyByDriver"
                          onChange={handleCargoLoadedByChange}
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
                          value="manuallyByShipper"
                          onChange={handleCargoLoadedByChange}
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Manually by shipper
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Names */}
                </div>
                {/* Cargo img */}
                <div class="col-6">
                  <img
                    src={TruckImage}
                    style={{ marginTop: "100px" }}
                    width="100%"
                    alt=""
                  />
                </div>
                {/* Cargo img */}
              </div>
            </div>
          </div>
          <div class="header container">
            {/* NB Button */}
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
            {/* NB Button */}
          </div>
          {/* Form */}
        </form>
      </div>
    );
  };
  const step8 = () => {
    return (
      <div class="main  justify-content-center ">
        <form action="" d-flex>
          {/* <!-- Form --> */}
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  {/* <!-- Names --> */}

                  <div class="row" style={{ padding: "100px 0px " }}>
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
                          value="manuallyByDriver"
                          onChange={(e) => setcargoUnloadBy(e.target.value)}
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
                          value="manuallyByReciever"
                          onChange={(e) => setcargoUnloadBy(e.target.value)}
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Manually by reciever
                        </label>
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
      <div className="main justify-content-center">
        <form action="" className="d-flex">
          {/* <!-- Form --> */}
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  {/* <!-- Names --> */}
                  <div className="row" style={{ padding: "100px 0px" }}>
                    <div className="col-12 pd-20">
                      <h2 className="form-label mgtb">
                        Is your cargo ready for pick-up?{" "}
                        <span className="danger">*</span>
                      </h2>
                      <div style={{ padding: "0px 20px" }}>
                        <button
                          type="button"
                          className={`btn btn-primary ${
                            cargoReadyForPickup ? "active" : ""
                          }`}
                          style={{ width: "30%" }}
                          onClick={() => {
                            handleSteps();
                            handleCargoReadyChange(true); // Set cargoReadyForPickup to true
                          }}
                        >
                          Yes
                        </button>
                        <br />
                        <br />
                        <button
                          type="button"
                          className={`btn btn-primary ${
                            !cargoReadyForPickup ? "active" : ""
                          }`}
                          style={{ width: "30%" }}
                          onClick={() => {
                            handleSteps();
                            handleCargoReadyChange(false); // Set cargoReadyForPickup to false
                          }}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Names --> */}
                </div>
                {/* <!-- Cargo img --> */}
                <div className="col-6">
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
  const step9Two = () => {
    return (
      <div class="main  justify-content-center ">
        <form action="" d-flex>
          {/* <!-- Form --> */}
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  {/* <!-- Names --> */}

                  <div class="row" style={{ padding: "100px 0px " }}>
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

  const step10 = () => {
    return (
      <div className="main justify-content-center">
        <form action="" className="d-flex">
          {/* <!-- Form --> */}
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  {/* <!-- Names --> */}
                  <div className="row" style={{ padding: "100px 0px" }}>
                    <div className="col-12 pd-20">
                      <h2 className="form-label mgtb">
                        How would you like your quote to be delivered?
                        <span className="danger">*</span>
                      </h2>
                      <div style={{ padding: "0px 20px" }}>
                        <a>
                          <button
                            type="button"
                            className={`btn btn-primary ${
                              quotationVia === "text" ? "active" : ""
                            }`}
                            style={{ width: "30%" }}
                            onClick={() => {
                              handleSteps();
                              handleQuotationViaChange("text");
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
                            className={`btn btn-primary ${
                              quotationVia === "email" ? "active" : ""
                            }`}
                            style={{ width: "30%" }}
                            onClick={() => {
                              handleSteps();
                              handleQuotationViaChange("email");
                            }}
                          >
                            Email
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Names --> */}
                  {/* {quotationVia === "email" && (
                    <div className="row" style={{ padding: "20px 0px" }}>
                      <div className="col-12 pd-20">
                        <h2 className="form-label mgtb">Email Address</h2>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </div>
                    </div>
                  )} */}
                </div>
                {/* <!-- Cargo img --> */}
                <div className="col-6">
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
  const step11One = () => {
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
          <div id="main_body_1 pdtb" style={{ marginTop: "200px" }}>
            <div class="container">
              <div class="row">
                <div class="col-6">
                  {/* <!-- Names --> */}

                  <div class="row" style={{ padding: "100px 0px" }}>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jhon@gmail.com"
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
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={() => {
                    handleSubmit();
                  }}
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
      if (steps == 1) {
        if (!pickupZip) {
          errorToast("Please fill it");
          return;
        }
        setSteps(steps + 1);
      } else if (steps == 2) {
        if (!dropOffZip) {
          errorToast("Please fill it");
          return;
        }
        setSteps(steps + 1);
      } else if (steps == 3) {
        if (!dimensionUnder896) {
          return;
        }
        setSteps(steps + 1);
      } else if (steps == 4) {
        console.log(longestDimesntionOfCargo);
        if (!longestDimesntionOfCargo) {
          errorToast("Please select it");

          return;
        }
        setSteps(steps + 1);
      } else if (steps == 5) {
        if (!cargoDescription) {
          errorToast("Please fill it");
          return;
        }
        setSteps(steps + 1);
      } else if (steps == 6) {
        if (media?.length < 1) {
          errorToast("Please upload");
          return;
        }
        setSteps(steps + 1);
      } else if (steps == 7) {
        if (!cargoLoadedBy) {
          errorToast("Please fill it");
          return;
        }
        setSteps(steps + 1);
      } else if (steps == 8) {
        if (!cargoUnloadBy) {
          errorToast("Please fill it");
          return;
        }
        setSteps(steps + 1);
      } else if (steps == 8) {
        if (!cargoUnloadBy) {
          errorToast("Please fill it");
          return;
        }
        setSteps(steps + 1);
      } else if (steps == 9) {
        if (!cargoReadyForPickup) {
          return;
        }
        setSteps(steps + 1);
      } else if (steps == 10) {
        if (!quotationVia) {
          return;
        }
        setSteps(steps + 1);
      }
    }
  };

  const renderSteps = () => {
    if (steps === 1) {
      return step1();
    } else if (steps === 2) {
      return step2();
    } else if (steps === 3) {
      return step3();
    } else if (steps === 4) {
      return step4();
    } else if (steps === 5) {
      return step5();
    } else if (steps === 6) {
      return step6();
    } else if (steps === 7) {
      return step7();
    } else if (steps === 8) {
      return step8();
    } else if (steps === 9) {
      return step9One();
    } else if (steps === 10) {
      if (readyToPick) {
        return step10();
      } else {
        return step9Two();
      }
    } else if (steps === 11) {
      if (quotationVia === "text") {
        // return step11One();
        return step11Two();
      } else {
        return step11Two();
      }
    }
  };

  return <>{renderSteps()}</>;
};

export default GeneralFreight;

import React, { useState } from "react";
import "./styles.css";
import { images } from "../../../assets";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
// import MainTable from "../../../Components/Tables/MainTable";

const InspectionReport = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className="configuration">
        <div className="container-fluid">
          <div className="box my-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center my-3 section-heading">
                <span className="backLink" onClick={() => navigate(-1)}>
                  <i className="fas fa-arrow-left go-back-icon"></i>
                </span>
                <h6 className="section-heading mb-0">View Report</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-9 col-xl-11">
                <div className="row">
                  <div className="col-xl-6 col-lg-10">
                    <div className="progressWrap my-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p>Engine/Transmission/Clutch</p>
                        <p className="cGray">75%</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar pBlue"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div className="progressWrap my-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p>Brakes</p>
                        <p className="cGray">75%</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar pBlue"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div className="progressWrap my-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p>Suspension / Streering</p>
                        <p className="cGray">95%</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar pBlue"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div className="progressWrap my-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p>Interior</p>
                        <p className="cGray">95%</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar pBlue"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div className="progressWrap my-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p>AC/Heater</p>
                        <p className="cGray">70%</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar pBlue"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div className="progressWrap my-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p>Electrical & Electronics</p>
                        <p className="cGray">70%</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar pBlue"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div className="progressWrap my-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p>Exterior And Body</p>
                        <p className="cGray">100%</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar pGreen"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div className="progressWrap my-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <p>Tyres</p>
                        <p className="cGray">100%</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar pGreen"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <h5 className="secTitle my-5">Car Inspection Detail</h5>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div
                      className="accordion customAccordion my-4"
                      id="accordionExample"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="accDiv1">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span className="d-flex align-items-center justify-content-between w-100 px-1">
                              <p className="mb-0">
                                {" "}
                                Body Frame Accident Checklist
                              </p>
                              <p className="mb-0">75%</p>
                            </span>
                          </button>
                          <div className="progressWrap">
                            <div className="progress">
                              <div
                                className="progress-bar pBlue"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="75"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="accDiv1"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Radiator Core Support</p>
                              <p className="mb-0 colGreen">Not Accidented</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Cowl Panel Firewall</p>
                              <p className="mb-0 text-danger">Accidented</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div
                      className="accordion customAccordion my-4"
                      id="accordionExample2"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="accDiv2">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsetwo"
                            aria-expanded="true"
                            aria-controls="collapsetwo"
                          >
                            <span className="d-flex align-items-center justify-content-between w-100 px-1">
                              <p className="mb-0"> Engine </p>
                              <p className="mb-0">100%</p>
                            </span>
                          </button>
                          <div className="progressWrap">
                            <div className="progress">
                              <div
                                className="progress-bar pGreen"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="75"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapsetwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="accDiv2"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Engine Oil Leakage</p>
                              <p className="mb-0 colGreen">No Leakage</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Coolant Leakage</p>
                              <p className="mb-0 colGreen">No Leakage</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Radiator</p>
                              <p className="mb-0 colGreen">Ok</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Suction Fan</p>
                              <p className="mb-0 colGreen">Working</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div
                      className="accordion customAccordion my-4"
                      id="accordionExample"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="accDiv3">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            <span className="d-flex align-items-center justify-content-between w-100 px-1">
                              <p className="mb-0"> Mechanical Check</p>
                              <p className="mb-0">75%</p>
                            </span>
                          </button>
                          <div className="progressWrap">
                            <div className="progress">
                              <div
                                className="progress-bar pBlue"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="75"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="accDiv3"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Belts (Fan0)</p>
                              <p className="mb-0 colGreen">Ok</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Wires</p>
                              <p className="mb-0 colGreen">Ok</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div
                      className="accordion customAccordion my-4"
                      id="accordionExample2"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="accDiv2">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefour"
                            aria-expanded="true"
                            aria-controls="collapsefour"
                          >
                            <span className="d-flex align-items-center justify-content-between w-100 px-1">
                              <p className="mb-0"> Brakes </p>
                              <p className="mb-0">100%</p>
                            </span>
                          </button>
                          <div className="progressWrap">
                            <div className="progress">
                              <div
                                className="progress-bar pGreen"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="75"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapsefour"
                          className="accordion-collapse collapse"
                          aria-labelledby="accDiv2"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Front Rigth Disc </p>
                              <p className="mb-0 colGreen">Smooth</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Front Left Disc </p>
                              <p className="mb-0 colGreen">Smooth</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div
                      className="accordion customAccordion my-4"
                      id="accordionExample2"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="accDiv2">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefive"
                            aria-expanded="true"
                            aria-controls="collapsefive"
                          >
                            <span className="d-flex align-items-center justify-content-between w-100 px-1">
                              <p className="mb-0"> Interior </p>
                              <p className="mb-0">100%</p>
                            </span>
                          </button>
                          <div className="progressWrap">
                            <div className="progress">
                              <div
                                className="progress-bar pGreen"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="75"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapsefive"
                          className="accordion-collapse collapse"
                          aria-labelledby="accDiv2"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Horn </p>
                              <p className="mb-0 colGreen">Working</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Wiper </p>
                              <p className="mb-0 text-danger">Not Working </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Right Side Miror </p>
                              <p className="mb-0 colGreen">Working</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Left Side Miror </p>
                              <p className="mb-0 colGreen">Working</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div
                      className="accordion customAccordion my-4"
                      id="accordionExample2"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="accDiv2">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="true"
                            aria-controls="collapseSix"
                          >
                            <span className="d-flex align-items-center justify-content-between w-100 px-1">
                              <p className="mb-0"> Ac / Heater Check Up </p>
                              <p className="mb-0">100%</p>
                            </span>
                          </button>
                          <div className="progressWrap">
                            <div className="progress">
                              <div
                                className="progress-bar pGreen"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="75"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="accDiv2"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Blower </p>
                              <p className="mb-0 colGreen">
                                Excellent Air Throw{" "}
                              </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Ac Operational </p>
                              <p className="mb-0 colGreen">Yes </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div
                      className="accordion customAccordion my-4"
                      id="accordionExample2"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="accDiv2">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="true"
                            aria-controls="collapseSeven"
                          >
                            <span className="d-flex align-items-center justify-content-between w-100 px-1">
                              <p className="mb-0"> Electrical & Electronics </p>
                              <p className="mb-0">100%</p>
                            </span>
                          </button>
                          <div className="progressWrap">
                            <div className="progress">
                              <div
                                className="progress-bar pGreen"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="75"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse"
                          aria-labelledby="accDiv2"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Battery Warning Light </p>
                              <p className="mb-0 text-danger"> Not Present </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0"> Air Bag Warning Light </p>
                              <p className="mb-0 text-danger"> Not Present </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div
                      className="accordion customAccordion my-4"
                      id="accordionExample2"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="accDiv2">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="true"
                            aria-controls="collapseEight"
                          >
                            <span className="d-flex align-items-center justify-content-between w-100 px-1">
                              <p className="mb-0"> Exterior </p>
                              <p className="mb-0">100%</p>
                            </span>
                          </button>
                          <div className="progressWrap">
                            <div className="progress">
                              <div
                                className="progress-bar pGreen"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="75"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse"
                          aria-labelledby="accDiv2"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Turn Lock </p>
                              <p className="mb-0 colGreen">Ok </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0"> Sun Roof Glass </p>
                              <p className="mb-0 colGreen"> Ok </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-10">
                    <div
                      className="accordion customAccordion my-4"
                      id="accordionExample2"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="accDiv2">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseNine"
                            aria-expanded="true"
                            aria-controls="collapseNine"
                          >
                            <span className="d-flex align-items-center justify-content-between w-100 px-1">
                              <p className="mb-0"> Tyres </p>
                              <p className="mb-0">100%</p>
                            </span>
                          </button>
                          <div className="progressWrap">
                            <div className="progress">
                              <div
                                className="progress-bar pGreen"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="75"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseNine"
                          className="accordion-collapse collapse"
                          aria-labelledby="accDiv2"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0">Rims </p>
                              <p className="mb-0 colGreen"> Alloy </p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between border accordionContent">
                              <p className="mb-0"> Wheel Caps </p>
                              <p className="mb-0 colGreen"> Present </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default InspectionReport;

import React from "react";
import "./styles.css";

const AdminDashboard = () => {
  const returnDropDown = () => {
    // let temp = [];
    // for (let i = new Date().getFullYear(); i >= 2022; i--) {
    //   temp.push(<option value={i}>{i}</option>);
    // }
    // return temp;
  };

  return (
    <div className="configuration">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="boxDetails my-3 d-flex mb-1">
              <div className="box-icon me-3">
                <i className="fas fa-users"></i>
              </div>
              <div className="d-flex w-100 justify-content-between flex-wrap align-items-center">
                <div className="mapwrap">
                  <h6 className="analytics-text fw-500">5000</h6>
                  <h6 className="cGray fw-400">TOTAL USERS</h6>
                </div>
                {/* <h6 className="colRed analytics-values fw-400">
                    <i className="fas fa-arrow-up"></i> 100%
                  </h6> */}
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="boxDetails my-3 d-flex mb-1">
              <div className="box-icon me-3">
                <i className="fas fa-car"></i>
              </div>
              <div className="d-flex w-100 justify-content-between flex-wrap align-items-center">
                <div className="mapwrap">
                  <h6 className="analytics-text fw-500">210</h6>
                  <h6 className="cGray fw-400">TOTAL CARS</h6>
                </div>
                {/* <h6 className="colRed analytics-values fw-400">
                    <i className="fas fa-arrow-up"></i> 100%
                  </h6> */}
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="boxDetails my-3 d-flex mb-1">
              <div className="box-icon me-3">
                <i className="fas fa-percent"></i>
              </div>
              <div className="d-flex w-100 justify-content-between flex-wrap align-items-center">
                <div className="mapwrap">
                  <h6 className="analytics-text fw-500">500</h6>
                  <h6 className="cGray fw-400">TOTAL SALES</h6>
                </div>
                {/* <h6 className="colRed analytics-values fw-400">
                    <i className="fas fa-arrow-up"></i> 100%
                  </h6> */}
              </div>
            </div>
          </div>
        </div>

        <div className="box my-3">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="secTitle">Sales Analytics</h5>
            <select
              name=""
              id=""
              className="primSelect"
              onChange={() => {}}
              value={"salesYear"}
            >
              <option value="Select year" disabled>
                Select year
              </option>
              {returnDropDown()}
            </select>
          </div>
          {/* <Chart options={salesOption} /> */}
        </div>
        <div className="box my-3">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="secTitle">Subscription Analytics</h5>
            {/* <select
              name=""
              id=""
              className="primSelect"
              onChange={() => {}}
              value={"planYear"}
            >
              <option value="Select year" disabled>
                Select year{" "}
              </option>
              {returnDropDown()}
            </select> */}
          </div>
          {/* <Chart options={subscriptionOption} /> */}
        </div>
        <div className="box my-3">
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="secTitle">Inspection Analytics</h5>
            <select
              name=""
              id=""
              className="primSelect"
              onChange={() => {}}
              value={"inspectionYear"}
            >
              <option value="Select year" disabled>
                Select year
              </option>
              {/* {returnDropDown()} */}
            </select>
          </div>
          {/* <Chart options={inspectionOption} /> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

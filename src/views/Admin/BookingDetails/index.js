import React from "react";
import "./styles.css";
import "../../../assets/css/globalStyles.css";
import { images } from "../../../assets";

import "bootstrap/dist/css/bootstrap.min.css";
// import TransparentTextInput from "../../../Components/TextInputs/TransparentTextInput";
// import MainButton from "../../../Components/Buttons/MainButton";
// import TextButton from "../../../Components/Buttons/TextButton";
import { useNavigate } from "react-router-dom";
// import { DashboardHeader } from "../../../Components/Headers/DashboardHeader";
// import DashboardDrawer from "../../../Components/DashboardDrawer";
import AdminLayout from "../../../components/AdminLayout";
// import ListTable from "../../../Components/Tables/ListTable";

const BookingDetails = () => {
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
                <h6 className="section-heading mb-0">Details</h6>
              </div>
              <div className="text-end show_status my-3">
                <label htmlFor="" className="me-4">
                  Status:
                </label>
                <p className="mb-0 colGreen">Active</p>
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-end my-3">
              <label htmlFor="" className="me-4">
                Status:
              </label>
              <select name="" className="customSelect" id="">
                <option value="Approved">Approved</option>
                <option value="Reject">Reject</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="user_profile mb-4">
                  <img
                    src={images.avatar}
                    className="img-fluid"
                    alt="userProfile"
                  />
                </div>
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="">Name</label>
                  <p className="mb-0">Elsa Robert</p>
                </div>
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="">Email</label>
                  <p className="mb-0">abc@gmail.com</p>
                </div>
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="">Phone</label>
                  <p className="mb-0">123123</p>
                </div>
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="">Certificates</label>
                  <div className="d-flex certificates flex-wrap">
                    <img src={images.pdfIcon} className="m-2" alt="pdf" />
                    <img src={images.pdfIcon} className="m-2" alt="pdf" />
                    <img src={images.pdfIcon} className="m-2" alt="pdf" />
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
export default BookingDetails;

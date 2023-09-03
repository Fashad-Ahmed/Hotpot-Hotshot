import React, { useState } from "react";
import "./styles.css";
import "../../../assets/css/globalStyles.css";
import { images } from "../../../assets";

import "bootstrap/dist/css/bootstrap.min.css";
import TransparentTextInput from "../../../components/TextInputs/TransparentTextInput";
import MainButton from "../../../components/Buttons/MainButton";
// import TextButton from "../../../Components/Buttons/TextButton";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { DashboardHeader } from "../../../Components/Headers/DashboardHeader";
// import DashboardDrawer from "../../../Components/DashboardDrawer";
import AdminLayout from "../../../components/AdminLayout";
// import ListTable from "../../../Components/Tables/ListTable";
// import useAds from "../../../Hooks/useAds";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { updateFeaturedPackageRequest } from "../../../Redux/slices/adsSlice";
const FeaturedAdDetails = () => {
  // const dispatch = useDispatch();
  const { state } = useLocation();
  // const { updateFeaturedPackage } = useAds();
  const packageId = state?.item?._id;
  const [name, setName] = useState(state?.item?.name);
  const [days, setDays] = useState(state?.item?.days);
  const [price, setPrice] = useState(state?.item?.price);
  const [status, setStatus] = useState(state?.item?.status);

  // const { id } = useParams();
  // const { getFeaturePackagesDetails } = useAds();

  const navigate = useNavigate();
  const [selectRender, setSelectRender] = useState(true);

  // useEffect(() => {
  //   getFeaturePackagesDetails(id).then((res) => {
  //     console.log(res, "resultssssssssssssssssssss");
  //   });
  // }, []);

  const handleUpdatePackageDetails = async () => {
    const data = {
      name,
      days,
      price,
      status,
    };

    // updateFeaturedPackage(packageId, data).then((res) => {
    //   if (res) {
    //     navigate(-1);
    //   }
    // });
  };
  const renderDetails = () => {
    return (
      <div className="configuration">
        <div className="container-fluid">
          <div className="box my-4">
            <div className="d-flex align-items-center section-heading">
              <span className="backLink" onClick={() => navigate(-1)}>
                <i className="fas fa-arrow-left go-back-icon"></i>
              </span>
              <h6 className="section-heading mb-0">
                Feature Ad Package Details
              </h6>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-end">
              <label htmlFor="" className="me-4">
                Request Status:
              </label>
              <select
                name=""
                className="customSelect"
                id=""
                disabled
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="row my-4">
              <div className="col-xxl-5 col-xl-6 col-md-8">
                <div className="mb-4">
                  <label
                    className="d-block prime-label mb-3"
                    htmlFor="subCatName"
                  >
                    Plan Name{" "}
                  </label>
                  <input
                    type="text"
                    id="subCatName"
                    className="primary-inputs secInp py-0 disableInputs"
                    placeholder="Silver"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="d-block prime-label mb-3"
                    htmlFor="subCatName"
                  >
                    Days{" "}
                  </label>
                  <input
                    type="text"
                    id="subCatName"
                    className="primary-inputs secInp py-0 disableInputs"
                    placeholder="Enter Days"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="d-block prime-label mb-3"
                    htmlFor="subCatName"
                  >
                    Price{" "}
                  </label>
                  <input
                    type="number"
                    id="subCatName"
                    className="primary-inputs secInp py-0 disableInputs"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    disabled
                  />
                </div>
                <MainButton
                  className={"mt-3"}
                  text={"Edit"}
                  onClick={() => setSelectRender(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderEditDetails = () => {
    return (
      <div className="configuration">
        <div className="container-fluid">
          <div className="box my-4">
            <div className="d-flex align-items-center section-heading">
              <span className="backLink" onClick={() => setSelectRender(true)}>
                <i className="fas fa-arrow-left go-back-icon"></i>
              </span>
              <h6 className="section-heading mb-0">
                Feature Ad Package Details
              </h6>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-end">
              <label htmlFor="" className="me-4">
                Request Status:
              </label>
              <select
                name=""
                className="customSelect"
                id=""
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="row my-4">
              <div className="col-xxl-5 col-xl-6 col-md-8">
                <TransparentTextInput
                  labelText="Plan Name"
                  type="text"
                  id="subCatName"
                  className="primary-inputs secInp"
                  placeholder="Silver"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <TransparentTextInput
                  labelText="Days"
                  type="text"
                  id="subCatName"
                  className="primary-inputs secInp"
                  placeholder="Enter Days"
                  value={days}
                  // onChange={(e) => setDays(e.target.value)}
                  required
                  maxLength={2}
                  pattern="[0-9]*"
                  onlyValue={days}
                  onChange={(e) =>
                    setDays((v) =>
                      e.target.validity.valid ? e.target.value : v
                    )
                  }
                />
                <TransparentTextInput
                  labelText="Price"
                  type="number"
                  id="subCatName"
                  className="primary-inputs secInp"
                  placeholder="Enter Price"
                  value={price}
                  // onChange={(e) => setPrice(e.target.value)}
                  required
                  maxLength={4}
                  pattern="[0-9]*"
                  onlyValue={price}
                  onChange={(e) =>
                    setPrice((v) =>
                      e.target.validity.valid ? e.target.value : v
                    )
                  }
                />

                <MainButton
                  className={"mt-3"}
                  text={"Update"}
                  onClick={() => handleUpdatePackageDetails()}
                  // onClick={() => setSelectRender(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AdminLayout>
      {selectRender ? renderDetails() : renderEditDetails()}
    </AdminLayout>
  );
};
export default FeaturedAdDetails;

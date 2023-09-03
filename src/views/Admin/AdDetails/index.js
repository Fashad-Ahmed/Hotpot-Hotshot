import React, { useEffect, useState } from "react";
import "./styles.css";
import "../../../assets/css/globalStyles.css";

import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
import ImageSlider from "../../../components/ImageSlider";
import { icons } from "../../../utils/tableUtils";
// import useAds from "../../../Hooks/useAds";
// import { editAd } from "../../../Redux/slices/adsSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { selectSettings } from "../../../Redux/slices/generalSlice";
import FieldAddModal from "../../../components/Popups/FieldAddModal";
import InputField from "../../../components/TextInputs/InputField";
import { useRef } from "react";
// import { showErrorToast } from "../../../API/HelperFunction";
import ConfirmationModal from "../../../components/Popups/ConfirmationModal";
// import TableListLoader from "../../../Components/ContentLoaders/tableListLoader";
import AdDetailsLoader from "../../../components/ContentLoaders/adDetailsLoader";
import { url } from "../../../API/config";

const AdDetails = () => {
  const addRef = useRef();
  const conRef = useRef();

  // const { constants } = useSelector(selectSettings);
  const constants = null;
  const navigate = useNavigate();
  // const dispatach = useDispatch();
  const { id } = useParams();
  const { state } = useLocation();
  // const { getAdDetal, getReportAdDetal } = useAds();
  const [ad, setAd] = useState({});
  const [status, setStatus] = useState(null);
  const [reason, setReason] = useState(null);
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);

  const tempStatus = { ...constants?.status };
  delete tempStatus["pending"];

  const handleStatus = () => {
    if (status == "editRequest") {
      return tempStatus;
    } else {
      return constants?.status;
    }
  };

  useEffect(() => {
    if (state?.adsReports) {
      handleGetReportAdDetails();
    } else {
      handleGetAdDetails(id);
    }
  }, []);

  const handleGetAdDetails = (id) => {
    // getAdDetal(id).then((res) => {
    //   if (res) {
    //     setAd(res.ad);
    //     setStatus(res.ad.status);
    //   }
    //   setLoading(false);
    // });
  };

  const handleGetReportAdDetails = () => {
    // getReportAdDetal(id).then((res) => {
    //   if (res) {
    //     handleGetAdDetails(res?.spamReport?.ad);
    //     console.log(res, "resresresresres");
    //     setComment(res?.spamReport?.comment);
    //     // setAd(res?.spamReport?.ad);
    //     setStatus(res.spamReport.status);
    //   }
    //   setLoading(false);
    // });
  };

  console.log(status, "statussssssssssss");

  function markCertified() {
    // dispatach(editAd({ isCertified: true, id: id }))
    //   .unwrap()
    //   .then((res) => {
    //     setAd(res.ad);
    //   });
  }

  const handleEditAd = (value) => {
    // setStatus(value);
    if (status == "rejected") {
      addRef.current.show();
      return;
    }
    if (state?.item?.status == "editRequest") {
      // dispatach(
      //   editAd({ id: id, ...ad?.editValues, status: status, reason: null })
      // )
      //   .unwrap()
      //   .then((res) => {
      //     handleGetAdDetails(id);
      //   });
    } else {
      // dispatach(editAd({ id: id, status: status, reason: null }))
      //   .unwrap()
      //   .then((res) => {
      //     handleGetAdDetails(id);
      //   });
    }
  };

  const handleRejectWithReason = () => {
    // dispatach(
    //   editAd({
    //     id: id,
    //     status: "rejected",
    //     reason: reason,
    //   })
    // )
    //   .unwrap()
    //   .then((res) => {
    //     handleGetAdDetails(id);
    //   });
  };

  return (
    <AdminLayout>
      <div className="configuration">
        <div className="container-fluid">
          <div className="box">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center my-3 section-heading">
                <span className="backLink" onClick={() => navigate(-1)}>
                  <i className="fas fa-arrow-left go-back-icon"></i>
                </span>
                <h6 className="section-heading mb-0">Ad Details</h6>
              </div>
              {!loading && (
                <>
                  {" "}
                  <div className="d-flex flex-wrap align-items-center justify-content-end">
                    <label htmlFor="" className="me-4">
                      Request Status:
                    </label>
                    <select
                      name=""
                      className="customSelect"
                      id=""
                      value={ad?.status}
                      style={{
                        textTransform: "capitalize",
                      }}
                      onChange={(e) => {
                        conRef.current.show();
                        setStatus(e.target.value);
                      }}
                    >
                      {handleStatus() &&
                        Object.entries(handleStatus())?.map((item) => {
                          return (
                            <option value={constants?.status[item[1]]}>
                              {/* {constants.status[item[0]]} */}
                              {constants?.status[item[0]]
                                ?.charAt(0)
                                .toUpperCase() +
                                constants?.status[item[0]]
                                  ?.slice(1)
                                  ?.replace(/([A-Z])/g, " $1")
                                  .trim()}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="d-flex align-items-center flex-wrap">
                    {ad?.inspection && (
                      <a
                        onClick={() =>
                          navigate(`/inspection-ad-detail/${ad?.inspection}`)
                        }
                        className="text-danger text-decoration-underline me-4"
                      >
                        Inspection Report
                      </a>
                    )}

                    {state?.adsReports ? null : !ad?.isCertified &&
                      ad?.status !== "rejected" ? (
                      <button
                        data-bs-target="#certifyAdd"
                        type="button"
                        data-bs-toggle="modal"
                        className="main-btn my-3"
                        onClick={() => {
                          markCertified();
                        }}
                      >
                        Mark this ad Certified
                      </button>
                    ) : null}
                  </div>
                </>
              )}
            </div>

            {!loading ? (
              <div>
                <ImageSlider images={ad?.images} />
                <div class="row">
                  <div class="col-xxl-8 col-xl-10">
                    {ad?.reason && (
                      <div class="row my-3">
                        <div class="col-12  mb-3">
                          <h6 class="secTitle fw600 mb-0 my-2">
                            Rejection Reason
                          </h6>
                        </div>
                        <div class="col-lg-4 col-md-6">
                          <div class="descBox my-3">
                            <p class="mb-0">
                              <span>{ad?.reason}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div class="d-flex align-items-center justify-content-between flex-wrap my-4">
                      <h6 class="secTitle fw600 mb-0 my-2">
                        {ad?.editValues ? ad?.editValues?.name : ad?.name}{" "}
                        {ad?.editValues ? ad?.editValues.model : ad?.model}
                        <sub class="fw400 text-danger">
                          <i>{ad?.brand?.name}</i>
                        </sub>{" "}
                      </h6>
                      <h6 class="secTitle mb-0 fw600 my-2 text-danger">
                        {" "}
                        <sup class="fw400">$</sup>{" "}
                        {ad?.price?.toLocaleString("en-US")}
                      </h6>
                    </div>
                    <div class="row features_wrap">
                      <div class="col-lg-3 col-md-6 text-center cutom_border">
                        <div class="features_box">
                          <img src={icons.calendar} alt="calendar" />
                          <p class="mb-0">{ad?.model}</p>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 text-center cutom_border">
                        <div class="features_box">
                          <img src={icons.km} alt="Speed" />
                          <p class="mb-0">
                            {ad?.mileage?.toLocaleString("en-US")} km
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 text-center cutom_border">
                        <div class="features_box">
                          <img src={icons.Hybrid} alt="hybrid" />
                          <p class="mb-0">{ad?.engineType}</p>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-6 text-center cutom_border">
                        <div class="features_box">
                          <img src={icons.automatic} alt="automatic" />
                          <p class="mb-0">{ad?.transmission}</p>
                        </div>
                      </div>
                    </div>
                    <div class="row my-3">
                      <div class="col-12  mb-3">
                        <h6 class="secTitle fw600 mb-0 my-2">Descriptions</h6>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="descBox my-3">
                          <img src={icons.car} alt="car" />
                          <p class="mb-0">
                            Model: <span>{ad?.model}</span>
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="descBox my-3">
                          <img src={icons.pencil} alt="pencil" />
                          <p class="mb-0">
                            Ad Ref: <span>{ad?._id?.slice(0, 6)}</span>
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="descBox my-3">
                          <img src={icons.palette} alt="palette" />
                          <p class="mb-0">
                            Color: <span>{ad?.color}</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="descBox my-3">
                          <img src={icons.pencil} alt="pencil" />
                          <p class="mb-0">
                            Registration: <span>{ad?.registration}</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="descBox my-3">
                          <img src={icons.engine} alt="engine" />
                          <p class="mb-0">
                            Engine:{" "}
                            <span>{ad?.engineOwn ? "Own" : "Change"}</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6">
                        <div class="descBox my-3">
                          <img src={icons.car} alt="car" />
                          <p class="mb-0">
                            Car Category:<span> {ad?.category?.name}</span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="row my-3">
                      <div class="col-12 mb-3">
                        <h6 class="secTitle fw600 mb-0 my-2">Car Features</h6>
                      </div>
                      {ad?.features?.map((item, index) => {
                        return (
                          <div class="col-lg-4 col-md-6">
                            <div class="descBox my-3">
                              <img
                                src={url + item?.image?.thumbnailPath}
                                alt={item?.name}
                              />
                              <p class="mb-0">{item?.name}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {state?.adsReports && (
                      <div class="row my-3">
                        <div class="col-12  mb-3">
                          <h6 class="secTitle fw600 mb-0 my-2">Reason</h6>
                        </div>
                        <div class="col-lg-4 col-md-6">
                          <div class="descBox my-3">
                            <p class="mb-0">
                              <span>{comment}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="custom_table table-responsive">
                <AdDetailsLoader />
              </div>
            )}
          </div>
        </div>
      </div>

      <ConfirmationModal
        reference={conRef}
        title={status}
        message={`Are you sure you want to update the status to ${status}?`}
        onBtnPress={handleEditAd}
      />

      <FieldAddModal
        title="Add Rejection Reason"
        btnText="Add Rejection Reason"
        reference={addRef}
        onBtnPress={handleRejectWithReason}
        value={reason}
      >
        <InputField
          rows
          label={"Rejection Reason"}
          placeholder="Enter Reason"
          onChange={(e) => setReason(e.target.value)}
        />
      </FieldAddModal>
    </AdminLayout>
  );
};
export default AdDetails;

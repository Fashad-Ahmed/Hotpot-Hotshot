import React, { useEffect, useState } from "react";
import "./styles.css";
import { images } from "../../../assets";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
import MainTable from "../../../components/MainTable";
import {
  orderLabel,
  bookingLabel,
  adLabel,
  featureAdLabel,
  orderValues,
  bookingValues,
  adValues,
  featureValues,
  tableValuesAdmin,
} from "../../../utils/tableUtils";
// import { useDispatch } from "react-redux";
// import { getUsers, updateStatus } from "../../../Redux/slices/userSlice";
// import useAds from "../../../Hooks/useAds";
// import useShop from "../../../Hooks/useShop";
// import { getInspectionReports } from "../../../Redux/slices/adsSlice";
import { url } from "../../../API/config";

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //   const { getAds } = useAds();
  //   const { getOrders } = useShop();
  //   const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [selectedLog, setSelectedLog] = useState(1);
  const [adsList, setAdsList] = useState([]);
  const [bookingLogs, setBookingsLogs] = useState([]);
  const [featuredLogs, setFeaturedLogs] = useState([]);
  const [ordersList, setOrdersList] = useState([]);
  const [totalDocs, setTotalDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);

  const tabLogsButton = [
    {
      id: 1,
      name: "Order Logs",
      onClick: () => {
        setSelectedLog(1);
      },
    },
    {
      id: 2,
      name: "Booking Logs",
      onClick: () => {
        setSelectedLog(2);
      },
    },
    {
      id: 3,
      name: "Ad Logs",
      onClick: () => {
        setSelectedLog(3);
      },
    },
    {
      id: 4,
      name: "Featured Ad Logs",
      onClick: () => {
        setSelectedLog(4);
      },
    },
  ];

  function handleGetOrders(page = 1, limit = 10) {
    // { user: id }
    // getOrders({ user: id }).then((res) => {
    //   console.log(res, "ressssssssssssss");
    //   setOrdersList(res?.orders);
    //   setLoading(false);
    // });
  }

  function getData(page = 1, limit = 10) {
    // setLoading(true);
    // getAds({ user: id, page: page, limit: limit }).then((res) => {
    //   setAdsList(res?.ads);
    //   setLoading(false);
    // });
  }

  const getBookingData = (page = 1, limit = 10) => {
    // setLoading(true);
    // dispatch(getInspectionReports({ user: id, page, limit }))
    //   .unwrap()
    //   .then((res) => {
    //     setBookingsLogs(res?.reports);
    //     setTotalDocs(res?.totalDocs);
    //     setLoading(false);
    //   });
  };

  const handleFeaturedAdsLogs = () => {
    // setLoading(true);
    // getAds({
    //   user: id,
    //   isFeatured: true,
    // }).then((res) => {
    //   setFeaturedLogs(res?.ads);
    //   setLoading(false);
    // });
  };

  useEffect(() => {
    handleGetOrders();
    getData();
    getBookingData();
    handleFeaturedAdsLogs();
    // dispatch(getUsers({ _id: id }))
    //   .unwrap()
    //   .then((res) => {
    //     console.log("user: ", res?.users[0]);
    //     if (res?.users && res?.users.length > 0) {
    //       setUser(res?.users[0]);
    //       setStatus(res?.users[0]?.status);
    //     }
    //   });
  }, []);

  function updateUserStatus(status) {
    setStatus(status);
    // dispatch(updateStatus({ userId: user._id, status: status }))
    //   .unwrap()
    //   .then((res) => {
    //     getData();
    //   });
  }

  const returnTableHeading = () => {
    switch (selectedLog) {
      case 1: {
        return "Order Logs";
      }
      case 2: {
        return "Booking Logs";
      }
      case 3: {
        return "Ad Logs";
      }
      case 4: {
        return "Featured Ad Logs";
      }
      default: {
        return "Order Logs";
      }
    }
  };
  const returnTableLabel = () => {
    switch (selectedLog) {
      case 1: {
        return orderLabel;
      }
      case 2: {
        return bookingLabel;
      }
      case 3: {
        return adLabel;
      }
      case 4: {
        return featureAdLabel;
      }
      default: {
        return orderLabel;
      }
    }
  };
  const returnTableValue = () => {
    switch (selectedLog) {
      case 1: {
        return orderValues;
      }
      case 2: {
        return bookingValues;
      }
      case 3: {
        return adValues;
      }
      case 4: {
        return featureValues;
      }
      default: {
        return orderValues;
      }
    }
  };
  const returnTableData = () => {
    switch (selectedLog) {
      case 1: {
        return ordersList;
      }
      case 2: {
        return bookingLogs;
      }
      case 3: {
        return adsList;
      }
      case 4: {
        return featuredLogs;
      }
      default: {
        return [];
      }
    }
  };

  const returnEmptyTableData = () => {
    switch (selectedLog) {
      case 1: {
        return "No Order Logs Found";
      }
      case 2: {
        return "No Booking Logs Found";
      }
      case 3: {
        return "No Ad Logs Found";
      }
      case 4: {
        return "No featured ads Logs Found";
      }
      default: {
        return [];
      }
    }
  };
  const returnTableKeys = () => {
    switch (selectedLog) {
      case 1: {
        return tableValuesAdmin["orderLogs"];
      }
      case 2: {
        return tableValuesAdmin["bookingLogs"];
      }
      case 3: {
        return tableValuesAdmin["userAds"];
      }
      case 4: {
        return tableValuesAdmin["featuredAdsLogs"];
      }
      default: {
        return [];
      }
    }
  };
  const returnRoute = () => {
    switch (selectedLog) {
      case 1: {
        return "/order-details";
      }
      case 2: {
        return "/inspection-ad-detail";
      }
      case 3: {
        return "/ad-details";
      }
      case 4: {
        return "/ad-details";
      }
    }
  };

  const returnStatus = () => {
    switch (selectedLog) {
      case 1: {
        return "order";
      }
      case 2: {
        return "booking";
      }
      case 3: {
        return "ads";
      }
      case 4: {
        return "featured";
      }
    }
  };

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
                <h6 className="section-heading mb-0">Users Management</h6>
              </div>
              {/* <div className="text-end show_status my-3">
                <label htmlFor="">Status:</label>
                <p className="mb-0 text-green">
                  {user?.status == "active" ? "Active" : ""}
                </p>
              </div> */}
              <div className="d-flex flex-wrap align-items-center justify-content-end">
                <label htmlFor="" className="me-4">
                  Status:
                </label>
                <select
                  name=""
                  className="customSelect"
                  id=""
                  value={status}
                  // onChange={(e) => setStatus(e.target.value)}
                  onChange={(e) => updateUserStatus(e.target.value)}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="user_profile mb-4">
                  <img
                    src={
                      user?.image?.thumbnailPath
                        ? url + user?.image?.thumbnailPath
                        : images.defaultProfile
                    }
                    className="img-fluid"
                    alt="userProfile"
                  />
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-md-8">
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="Name">Name</label>
                  {/* <p className="mb-0">{user?.firstName + " " + user?.lastName}</p> */}
                  <p className="mb-0">{user?.firstName}</p>
                </div>
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="Name">Email</label>
                  <p className="mb-0">{user?.email}</p>
                </div>
                <div className="details_wrap my-4 contflexBox">
                  <label htmlFor="Name">Phone</label>
                  <p className="mb-0">{user?.phone}</p>
                </div>
              </div>
            </div>
            <div className="custom_tabs">
              <div className="text-center mb-3">
                <span className="d-inline-block ul_tabs_wrapper">
                  <ul
                    className="nav nav-pills justify-content-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    {tabLogsButton.map((val) => {
                      return (
                        <li className="nav-item" role="presentation">
                          <button
                            className={`nav-link ${
                              selectedLog == val?.id && "active"
                            }`}
                            onClick={val.onClick}
                          >
                            {val?.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </span>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <MainTable
                  heading={returnTableHeading()}
                  tableLabel={returnTableLabel()}
                  tableValue={returnTableValue()}
                  tableKeys={returnTableKeys()}
                  data={returnTableData()}
                  emptyTitle={returnEmptyTableData()}
                  clickOnView={(id, item) =>
                    navigate(returnRoute() + "/" + id, {
                      state: {
                        status: returnStatus(),
                        item: item,
                      },
                    })
                  }
                  className={"tab-pane fade show active"}
                  // filter
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default UserDetails;

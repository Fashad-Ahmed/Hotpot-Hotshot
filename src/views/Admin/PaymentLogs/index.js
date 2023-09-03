import React, { useEffect, useState } from "react";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
import MainTable from "../../../components/MainTable";
// import useGeneral from "../../../Hooks/useGeneral";
import {
  bookingLabel,
  featureAdLabel,
  orderLabel,
  tableValuesAdmin,
} from "../../../utils/tableUtils";

const SubscriptionLog = () => {
  const navigate = useNavigate();
  const [subscriptionLog, setSubscriptionLog] = useState([]);
  const [shoppingLogs, setShoppingLogs] = useState([]);
  const [mechanicLogs, setMechanicLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalDocsShop, setTotalDocsShop] = useState(null);
  const [totalDocsSub, setTotalDocsSub] = useState(null);
  const [totalDocsBooking, setTotalDocsBooking] = useState(null);

  const [selectedLog, setSelectedLog] = useState(3);

  // const { getPaymentlog, getFeaturedAdsLogs } = useGeneral();

  // general: "general",
  // subscription: "subscription",
  // shopping: "shopping",
  // mechanicBooking: "mechanicBooking",

  useEffect(() => {
    handleGetData();
  }, [selectedLog]);

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
      name: "Featured Ad Payment Logs",
      onClick: () => {
        setSelectedLog(3);
      },
    },
  ];

  const returnTableHeading = () => {
    switch (selectedLog) {
      case 1: {
        return "Order Logs";
      }
      case 2: {
        return "Booking Logs";
      }
      case 3: {
        return "Featured Ad Payment Logs";
      }
      default: {
        return "Order Logs";
      }
    }
  };

  const returnTotalDoc = () => {
    switch (selectedLog) {
      case 1: {
        return totalDocsShop;
      }
      case 2: {
        return totalDocsBooking;
      }
      case 3: {
        return totalDocsSub;
      }
      default: {
        return totalDocsShop;
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
        return tableValuesAdmin["shoppingLogs"];
      }
      case 2: {
        return tableValuesAdmin["bookingLogs"];
      }
      case 3: {
        return tableValuesAdmin["subscriptionLogs"];
      }
      default: {
        return tableValuesAdmin["shoppingLogs"];
      }
    }
  };
  const returnRoute = (id) => {
    switch (selectedLog) {
      case 1: {
        return "/order-details/" + id;
      }
      case 2: {
        return "/booking-details/" + id;
      }
      case 3: {
        return "/featured-details/" + id;
      }
    }
  };

  const returnData = () => {
    switch (selectedLog) {
      case 1: {
        return shoppingLogs;
      }
      case 2: {
        return mechanicLogs;
      }
      case 3: {
        return subscriptionLog;
      }
    }
  };

  const handleGetData = (page = 1, limit = 10) => {
    setLoading(true);
    // if (selectedLog == 1) {
    //   getPaymentlog("shopping", { page, limit }).then((res) => {
    //     setShoppingLogs(res?.logs);
    //     setTotalDocsShop();
    //     setLoading(false);
    //   });
    // }
    // if (selectedLog == 2) {
    //   getPaymentlog("mechanicBooking", { page, limit }).then((res) => {
    //     setMechanicLogs(res?.logs);
    //     setTotalDocsSub();
    //     setLoading(false);
    //   });
    // }
    if (selectedLog == 3) {
      //   getFeaturedAdsLogs({ page, limit }).then((res) => {
      //     setSubscriptionLog(res?.subscription);
      //     setTotalDocsSub(res?.totalDocs);
      //     setTotalDocsBooking();
      //     setLoading(false);
      //   });
    }
  };

  return (
    <AdminLayout>
      <div className="configuration">
        <div className="container-fluid">
          <div className="box my-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center my-3 section-heading">
                <h6 className="section-heading mb-0">{returnTableHeading()}</h6>
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
                    {/* {tabLogsButton.map((val) => {
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
                    })} */}
                  </ul>
                </span>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <MainTable
                  // heading={returnTableHeading()}
                  tableLabel={returnTableLabel()}
                  // tableValue={returnTableValue()}
                  tableKeys={returnTableValue()}
                  data={returnData()}
                  clickOnView={
                    selectedLog == 3
                      ? false
                      : (id, val) => navigate(returnRoute(val?.entityId))
                  }
                  className={"tab-pane fade show active"}
                  totalDocs={returnTotalDoc()}
                  onClickPagination={(page, limit) =>
                    handleGetData(page, limit)
                  }
                  pagination
                  loading={loading}
                  hideStatus
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default SubscriptionLog;

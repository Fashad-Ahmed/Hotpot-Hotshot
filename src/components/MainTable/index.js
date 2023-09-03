import React, { useRef, useState, useEffect } from "react";
import moment from "moment";
import TableListLoader from "../TableListLoader";
import "./styles.css";
import "../AdminLayout/style.css";
import MainButton from "../Buttons/MainButton";
import FilterModal from "../Modals/FilterModal";
import { url } from "../../API/config";
import ConfirmationModal from "../Popups/ConfirmationModal";
import EmptyCard from '../Cards/EmptyCard';

const getStatusClass = (value) => {
  switch (value?.toLowerCase()) {
    case "approved":
    case "completed":
    case "delivered": {
      return "colGreen";
    }
    case "inprocess": {
      return "colBlue";
    }
    case "pending":
    case "paymentPending":
    case "upcoming": {
      return "colYellow";
    }
    case "rejected": {
      return "text-danger";
    }
    default: {
      return "colGreen";
    }
  }
};
const tableStatusLabel = ["STATUS", "AD STATUS"];
const MainTable = (props) => {
  const conRef = useRef();
  const filterModal = useRef();
  const [activePage, setActivePage] = useState(1);
  const [entries, setEntries] = useState(10);
  const [filterStatusArray, setFilterStatusArray] = useState([
    "active",
    "inactive",
  ]);
  const [selectStatusIndex, setSelectStatusIndex] = useState(null);
  const [statusIndex, setStatusIndex] = useState(-1);
  const [viewIndex, setViewIndex] = useState(-1);

  const renderPagination = () => {
    let rows = [];
    for (let i = 0; i < Math.ceil(props?.totalDocs / entries); i++) {
      rows.push(
        <li className={`page-item ${i + 1 == activePage && "active"}`}>
          <a
            className="page-link"
            aria-current="page"
            onClick={() => setActivePage(i + 1)}
          >
            {i + 1}
          </a>
        </li>
      );
    }
    return rows;
  };
  const handleEntries = (e) => {
    // setEntries(e.target.value);
    // props?.onClickPagination(activePage, e.target.value);
  };
  const handleViewPopup = (index) => {
    if (viewIndex > -1) {
      setViewIndex(-1);
    } else {
      setViewIndex(index);
    }
  };
  const handleStatusPopup = (index) => {
    if (statusIndex != index) {
      setStatusIndex(index);
    } else {
      setStatusIndex(-1);
    }
  };
  const handleDirectPagination = (state) => {
    if (state == "prev") {
      if (activePage > 1) setActivePage(activePage - 1);
    } else {
      if (Math.ceil(props?.totalDocs / entries) != activePage)
        setActivePage(activePage + 1);
    }
  };
  const renderBody = () => {
    return (
      <>
        {props?.addButton ? (
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <h5 className="secTitle">{props?.heading}</h5>
            <MainButton
              text={props?.addButton}
              className="main-btn my-3"
              onClick={props?.onAddButtonClick}
            />
          </div>
        ) : (
          <h1 className="section-heading font-commons my-2">
            {props?.heading}
          </h1>
        )}
        {props?.search && (
          <div className="d-flex align-items-end justify-content-between mb-xl-1 customfilters flex-wrap">
            <div className="align-items-center d-flex mb-3 me-3">
              <label className="d-inline-block mb-1 me-2">Show</label>
              <select
                className="d-inline-block  sm-dropdown me-2"
                onChange={(e) => handleEntries(e)}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <label className="d-inline-block mb-1 ms-1">Entries</label>
            </div>
            <div className="d-flex align-items-center">
              <div className="filter_search my-3 me-2">
                <input
                  type="search"
                  onChange={(e) =>
                    props?.onSearch(activePage, entries, e.target.value)
                  }
                  placeholder="Search"
                />
                <i className="fas fa-search searchIcon"></i>
              </div>
              {props?.filter && (
                <div className="custom_canvas my-3">
                  <button
                    className="notBtn filterBtn me-2"
                    type="button"
                    onClick={() => filterModal.current.show()}
                  >
                    <i className="fas fa-filter"></i>
                  </button>
                  <FilterModal
                    reference={filterModal}
                    // onClose={() => filterModal.current.show()}
                    onPressApply={(filters) =>
                      props?.onApplyFilter(activePage, entries, filters)
                    }
                    filterStatus={filterStatusArray}
                  />
                </div>
              )}
            </div>
          </div>
        )}
        {!props?.loading ? (
          <div className="custom_table table-responsive">
            <table className="table table-borderless w-100">
              <thead>
                <tr key={"header"}>
                  {props?.tableLabel?.map((val) => (
                    <th>{val}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {typeof props?.data?.length == "number"
                  ? props?.data?.map((val, index) => (
                      <tr key={val?._id + index}>
                        {props?.tableKeys?.map((item, i) => {
                          if (i == 0) {
                            return (
                              <td>{(activePage - 1) * entries + index + 1}</td>
                            );
                          }
                          if (item?.key != "status")
                            return (
                              <td
                                className={`${
                                  item?.key == "email" && "text-lowercase"
                                } `}
                              >
                                {item?.key == "createdAt" ||
                                item?.key == "dateTime" ? (
                                  moment(val[item?.key]).format("DD-MMM-YYYY")
                                ) : item?.key == "expiresAt" ? (
                                  moment()
                                    .utc()
                                    .add(val[item?.key], "millisecond")
                                    .local()
                                    .format("DD-MMM-YYYY")
                                ) : typeof val[item?.key] == "object" &&
                                  val[item?.key] != null ? (
                                  item?.key == "image" ? (
                                    <img
                                      src={url + val[item?.key][item?.subKey]}
                                      className="table-image"
                                    />
                                  ) : typeof val[item?.key][item?.subKey] ==
                                    "object" ? (
                                    val[item?.key][item?.subKey][
                                      item?.innerSubKey
                                    ]
                                  ) : (
                                    val[item?.key][item?.subKey]
                                  )
                                ) : typeof val[item?.key] == "number" ? (
                                  val[item?.key]?.toFixed(0, 2)
                                ) : (
                                  val[item?.key] ?? ""
                                )}
                              </td>
                            );
                        })}
                        {props?.tableLabel.some((ai) =>
                          tableStatusLabel.includes(ai)
                        ) && props?.tableLabel.includes("STATUS") ? (
                          <td>
                            <button
                              type="button"
                              className={`btn dropdown-toggle transparent-btn ${
                                val["status"]?.toLowerCase() == "active"
                                  ? "colGreen"
                                  : "colRed"
                              }`}
                              onClick={() => {
                                handleStatusPopup(index);
                                setSelectStatusIndex(index);
                              }}
                            >
                              {val["status"]?.charAt(0).toUpperCase() +
                                val["status"]
                                  ?.slice(1)
                                  ?.replace(/([A-Z])/g, " $1")
                                  .trim()}
                            </button>
                            {statusIndex == index && (
                              <div className="text-left custom-dropdown">
                                <button
                                  className={`dropdown-item  ${
                                    val["status"]?.toLowerCase() == "active"
                                      ? "red_Btn"
                                      : "notBtn"
                                  } drop_btn`}
                                  data-bs-toggle="modal"
                                  data-bs-target="#inactivateModal"
                                  onClick={() => {
                                    conRef?.current.show();
                                    handleStatusPopup(index);
                                  }}
                                >
                                  <i
                                    className={`fas ${
                                      val["status"]?.toLowerCase() == "active"
                                        ? "fa-times"
                                        : "fa-check"
                                    } me-2`}
                                  ></i>
                                  {val["status"]?.toLowerCase() == "active"
                                    ? "Inactive"
                                    : "Active"}
                                </button>
                              </div>
                            )}
                          </td>
                        ) : (
                          !props?.hideStatus && (
                            <td className={getStatusClass(val["status"])}>
                              {/* {val["status"]?.charAt(0).toUpperCase() +
                                val["status"]?.slice(1)} */}

                              {val["status"]?.charAt(0).toUpperCase() +
                                val["status"]
                                  ?.slice(1)
                                  ?.replace(/([A-Z])/g, " $1")
                                  .trim()}
                            </td>
                          )
                        )}
                        {props?.clickOnView && (
                          <td>
                            <button
                              type="button"
                              className="notBtn"
                              data-bs-toggle="dropdown"
                              onClick={() => {
                                handleViewPopup(index);
                              }}
                            >
                              <i className="fa fa-ellipsis-v opt_icon"></i>
                            </button>
                            {viewIndex == index && (
                              <div
                                onClick={() => {
                                  handleViewPopup(index);
                                }}
                                className="tdDropDown"
                              >
                                {!props?.withoutView && (
                                  <a
                                    className="dropdown-item"
                                    onClick={() =>
                                      props?.clickOnView(val?._id, val)
                                    }
                                    // onClick={() => props?.clickOnView(val)}
                                  >
                                    <i className="far fa-eye "></i>View
                                  </a>
                                )}
                                {props?.onClickEdit && (
                                  <a
                                    className="dropdown-item"
                                    onClick={() =>
                                      props?.onClickEdit(val?._id, val)
                                    }
                                    // onClick={() => props?.clickOnView(val)}
                                  >
                                    <i className="fas fa-pencil-alt"></i>Edit
                                  </a>
                                )}
                              </div>
                            )}
                          </td>
                        )}
                        <ConfirmationModal
                          reference={conRef}
                          title={
                            props?.data[
                              selectStatusIndex
                            ]?.status?.toLowerCase() == "active"
                              ? "Inactive"
                              : "Active"
                          }
                          message={
                            props?.data[
                              selectStatusIndex
                            ]?.status?.toLowerCase() == "active"
                              ? "Are you sure you want to inactive?"
                              : "Are you sure you want to active?"
                          }
                          onBtnPress={() => {
                            props?.onChangeStatus(
                              props?.data[selectStatusIndex]?._id,
                              props?.data[
                                selectStatusIndex
                              ].status?.toLowerCase() == "active"
                                ? "inactive"
                                : "active"
                            );
                          }}
                        />
                      </tr>
                    ))
                  : props?.data &&
                    Object?.values(props?.data)?.map((val, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td> <td>{val}</td>
                          {props?.clickOnView && (
                            <td>
                              <button
                                type="button"
                                className="notBtn"
                                data-bs-toggle="dropdown"
                                onClick={() => {
                                  handleViewPopup(index);
                                }}
                              >
                                <i className="fa fa-ellipsis-v opt_icon"></i>
                              </button>
                              {viewIndex == index && (
                                <div
                                  onClick={() => {
                                    handleViewPopup(index);
                                  }}
                                  className="tdDropDown"
                                >
                                  <a
                                    className="dropdown-item"
                                    onClick={() =>
                                      props?.clickOnView(val?._id, val)
                                    }
                                    // onClick={() => props?.clickOnView(val)}
                                  >
                                    <i className="far fa-eye "></i>View
                                  </a>
                                  {props?.onClickEdit && (
                                    <a
                                      className="dropdown-item"
                                      onClick={() =>
                                        props?.onClickEdit(val?._id, val)
                                      }
                                      // onClick={() => props?.clickOnView(val)}
                                    >
                                      <i className="far fa-eye "></i>Edit
                                    </a>
                                  )}
                                </div>
                              )}
                            </td>
                          )}
                        </tr>
                      );
                    })}
              </tbody>
            </table>
            {props?.data?.length < 1 && <EmptyCard title={props?.emptyTitle} />}
            {props?.pagination && (
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <h6 className="pagination-details mb-3">
                  Showing {(activePage - 1) * entries + 1} {"- "}
                  {props?.totalDocs < entries * activePage
                    ? props?.totalDocs
                    : entries * activePage}{" "}
                  {/* {props?.data.length < entries ? props?.data.length : entries} */}
                  out of {props?.totalDocs} records
                </h6>
                <div className="custom_pagination mb-3">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li
                        className="page-item"
                        onClick={() => handleDirectPagination("prev")}
                      >
                        <a className="page-link">Previous</a>
                      </li>
                      {renderPagination()}
                      <li
                        className="page-item"
                        onClick={() => handleDirectPagination("next")}
                      >
                        <a className="page-link">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="custom_table table-responsive">
            <TableListLoader />
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {props?.withShadow ? (
        <div className={props?.className ?? "configuration"}>
          <div className="container-fluid">
            <div className="box">{renderBody()}</div>
          </div>
        </div>
      ) : (
        <div className={props?.className ?? "configuration"}>
          <div className="container-fluid">{renderBody()}</div>
        </div>
      )}
    </>
  );
};
export default MainTable;

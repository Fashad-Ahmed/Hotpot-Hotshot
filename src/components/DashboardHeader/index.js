import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { images } from "../../assets";
import LogoutPopup from "../Popups/LogoutPopup";
import "./styles.css";
// import { useDispatch, useSelector } from "react-redux";
import { url } from "../../API/config";
// import { getActorRole, getReduxKey } from "../../../Utility";
// import useGeneral from "../../../Hooks/useGeneral";
// import { unreadNotifications } from "../../../Redux/slices/generalSlice";
import moment from "moment";

export const DashboardHeader = (props) => {
  // const unreadNotification = useSelector(unreadNotifications);
  // const userData = useSelector((state) => state.auth.userData);
  // const token = useSelector((state) => state.auth.token);
  // const dispatch = useDispatch();
  const navigation = useNavigate();
  const logoutModal = useRef();
  // const { getUnreadNotifications } = useGeneral();
  // const actorName = getReduxKey();
  var session = null;
  var actorName = "actor";
  const userData = null;
  const unreadNotification = [];
  if (localStorage.getItem(`persist:storage-auth-${actorName}`) != null) {
    session = JSON.parse(
      localStorage.getItem(`persist:storage-auth-${actorName}`)
    );
  }
  useEffect(() => {
    // if (JSON.parse(session?.token)) {
    //   // getUnreadNotifications();
    // }
  }, []);

  const clickOnToggle = () => {
    window.dispatchEvent(new Event("toogleDrawer"));
  };

  return (
    <header>
      <div className="row">
        <div className="col-12">
          <div className="topBar">
            <div className="d-none smBlock">
              <button className="notBtn toggleMobNav">
                <i className="fas fa-ellipsis-v hamburger"></i>
              </button>
            </div>
            <div className="LogoWrapper">
              <a onClick={() => navigation("/dashboard")}>
                <img
                  src={images.headerLogo}
                  alt="Logo"
                  className="headerLogo"
                />
              </a>
            </div>
            <ul className="sideMenu">
              <li className="md_none">
                <div className="dropdown">
                  {unreadNotification?.length > 0 ? (
                    <button
                      className="btn customDropDown dropdown-toggle afterNone"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      // onClick={() => navigation("/notifications")}
                      aria-expanded="false"
                    >
                      <span className="header_notif_icon">
                        <i className="far fa-bell"></i>
                        {unreadNotification?.length > 0 && (
                          <span className="header_notif_count">
                            {unreadNotification?.length}
                          </span>
                        )}
                      </span>
                    </button>
                  ) : (
                    <button
                      className="btn customDropDown dropdown-toggle afterNone"
                      type="button"
                      id="dropdownMenuButton1"
                      onClick={() => navigation("/notifications")}
                      aria-expanded="false"
                    >
                      <span className="header_notif_icon">
                        <i className="far fa-bell"></i>
                        {unreadNotification?.length > 0 && (
                          <span className="header_notif_count">
                            {unreadNotification?.length}
                          </span>
                        )}
                      </span>
                    </button>
                  )}
                  <div
                    className="dropdown-menu notifBox w_md_100"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div className="notifBox_wrap">
                      <div className="notif_header">
                        <h6>Notifications</h6>
                        <div className="notf_count">
                          <h5>5 New</h5>
                        </div>
                      </div>
                      <div className="notif_body">
                        {unreadNotification &&
                          unreadNotification?.slice(0, 5)?.map((item) => {
                            return (
                              <a className="media d-flex gap-3">
                                <div className="media-left flex-shrink-0 align-self-top">
                                  <i className="far fa-bell notificationIcon"></i>
                                </div>
                                <div className="media-body flex-grow-1">
                                  <h6 className="notificationHeading">
                                    {item?.notification?.title}
                                  </h6>
                                  <p className="notificationText">
                                    {item?.notification?.body}
                                  </p>
                                  <small>
                                    <time>
                                      {moment(
                                        item?.notification?.created_At
                                      ).fromNow()}
                                    </time>
                                  </small>
                                </div>
                              </a>
                            );
                          })}
                      </div>
                      <div className="notif_footer">
                        <a
                          onClick={() => navigation("/notifications")}
                          className="primColor text-decoration-underline"
                        >
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="md_none">
                <div className="dropdown option_dropDown">
                  <button
                    className="btn customDropDown  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="userName d-inline-block">
                      <img
                        src={
                          url + userData?.image?.thumbnailPath ??
                          images.defaultProfile
                        }
                        onError={(e) => (e.target.src = images.defaultProfile)}
                        alt="avatar"
                        className="avatar"
                      />
                      <span>
                        {userData?.firstName + " " + userData?.lastName}
                      </span>
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu prfile_top_menu p-0"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => navigation("/view-profile")}
                      >
                        <i className="fas fa-eye"></i> My Profile
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => logoutModal.current.show()}
                        className="dropdown-item"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt"></i> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="d-lg-none d-block">
                <button className="notBtn toggleNavBtn" onClick={clickOnToggle}>
                  <i className="fas fa-bars"></i>
                </button>
              </li>
            </ul>
          </div>
          <ul className="mobileMenu d-none">
            <li>
              <div className="dropdown">
                <button
                  className="btn customDropDown dropdown-toggle afterNone"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="header_notif_icon">
                    <i className="far fa-bell"></i>
                    {unreadNotification?.length > 0 && (
                      <span className="header_notif_count">
                        {unreadNotification?.length}
                      </span>
                    )}
                  </span>
                </button>
                <div
                  className="dropdown-menu notifBox w_md_100"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <div className="notifBox_wrap">
                    <div className="notif_header">
                      <h6>Notifications</h6>
                      <div className="notf_count">
                        <h5>5 New</h5>
                      </div>
                    </div>
                    <div className="notif_body">
                      {unreadNotification &&
                        unreadNotification?.slice(0, 5)?.map((item) => {
                          return (
                            <a
                              href="./../profile/notifications.php"
                              className="media d-flex gap-3"
                            >
                              <div className="media-left flex-shrink-0 align-self-top">
                                <i className="far fa-bell notificationIcon"></i>
                              </div>
                              <div className="media-body flex-grow-1">
                                <h6 className="notificationHeading">
                                  {item?.notification?.title}
                                </h6>
                                <p className="notificationText">
                                  {item?.notification?.body}
                                </p>
                                <small>
                                  <time>
                                    {" "}
                                    {moment(
                                      item?.notification?.created_At
                                    ).fromNow()}
                                  </time>
                                </small>
                              </div>
                            </a>
                          );
                        })}
                    </div>
                    <div className="notif_footer">
                      <a
                        onClick={() => navigation("/notifications")}
                        className="primColor text-decoration-underline"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown option_dropDown">
                <button
                  className="btn customDropDown  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="userName d-inline-block">
                    <img src={images.avatar} alt="avatar" className="avatar" />
                    <span>Marson Albert</span>
                  </span>
                </button>
                <ul
                  className="dropdown-menu prfile_top_menu p-0"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item">
                      <i className="fas fa-eye"></i> My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt"></i> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <LogoutPopup reference={logoutModal} />
        </div>
      </div>
    </header>
  );
};
export default DashboardHeader;

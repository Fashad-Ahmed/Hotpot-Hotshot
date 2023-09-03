import React, { useImperativeHandle, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets";
import MainButton from "../Buttons/MainButton";
import "./styles.css";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../../Redux/slices/authSlice";
const LogoutPopup = (props) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const hide = () => {
    setVisible(false);
  };
  const show = () => {
    setVisible(true);
  };

  return (
    <Modal show={visible} onHide={hide} centered>
      <div
        className="customModal"
        id="profileUpdated"
        tabIndex="-1"
        aria-labelledby="profileUpdatedLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close modal_close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => hide()}
              ></button>
            </div>
            <div className="modal-body">
              <div className="modal_img_wrap">
                <img
                  src={images.question}
                  className="img-fluid"
                  alt="Modal Image"
                />
              </div>
              <h4>Logout</h4>
              <p>Are you sure you want to logout?</p>
            </div>
            <div className="modal-footer">
              <MainButton
                text="Yes"
                onClick={() => {
                  hide();
                  //  dispatch(logoutUser());
                }}
              />
              <MainButton
                className="shadow btn borderBtn"
                text="No"
                onClick={hide}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutPopup;

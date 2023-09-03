import React, { useImperativeHandle, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { images } from "../../assets";
import MainButton from "../Buttons/MainButton";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const GeneralModal = (props) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

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

  const handleOkClick = () => {
    hide();
    if (props?.onClick) {
      props?.onClick();
    } else {
      navigate(-1);
    }
  };


  return (
    <Modal show={visible} onHide={hide} centered backdrop="static">
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
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setVisible(false);
                }}
            
              ></button>
            </div>
            <div className="modal-body">
              <div className="modal_img_wrap">
                <img
                  src={props?.image ?? images.tickMark}
                  className="img-fluid"
                  alt="Modal Image"
                />
              </div>
              <h4>{props?.title}</h4>
              <p>{props?.message}</p>
            </div>
            <div className="modal-footer">
              <MainButton text="Ok" onClick={handleOkClick} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GeneralModal;

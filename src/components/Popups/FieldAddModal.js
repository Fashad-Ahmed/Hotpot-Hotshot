import React, { useImperativeHandle, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import MainButton from "../Buttons/MainButton";
// import InputField from "../TextInputs/InputField";
import "./styles.css";
const FieldAddModal = (props) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));
  console.log(props?.value, "VALUE");
  const hide = () => {
    // setVisible(false);
    // if (props?.onBtnPress) {
    //   props?.onBtnPress();
    // }
    if (props?.value) {
      setVisible(false);
      if (props?.onBtnPress) {
        props?.onBtnPress();
      }
    } else {
      if (props?.onBtnPress) {
        props?.onBtnPress();
      }
    }
  };
  const show = () => {
    setVisible(true);
  };

  return (
    <Modal
      show={visible}
      onHide={() => {
        setVisible(false);
        props?.onClickCross();
      }}
      centered
    >
      <div
        className="customModal"
        id="profileUpdated"
        tabIndex="-1"
        aria-labelledby="profileUpdatedLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div>
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close modal_close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setVisible(false);
                    props?.onClickCross();
                  }}
                ></button>
                {/* <InputField
                  label={"Category Name"}
                  placeholder="Enter Category Name"
                /> */}
                <h4 className="mt-4">{props.title}</h4>
              </div>
              <div className="text-start mt-2 fieldview">{props.children}</div>
              {/* <div className="modal-body text-start mt-2">
                <h6>Category Name</h6>
                <input
                  className="primary-inputs secInp"
                  placeholder="Enter Category Name"
                />
              </div> */}
              <div className="modal-footer">
                <MainButton text={props.btnText} onClick={hide} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FieldAddModal;

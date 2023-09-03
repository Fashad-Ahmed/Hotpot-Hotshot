import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React, { useImperativeHandle, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import MainButton from "../Buttons/MainButton";
import HTMLEditor from "../HTMLEditor";
import TransparentTextInput from "../TextInputs/TransparentTextInput";
import "./styles.css";
const NewsLetterModal = (props) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));
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
    }
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
                  }}
                ></button>
                <h4 className="px-4 mt-4">Send New News Letter</h4>
              </div>
              <div className="text-start mt-2 ">
                <TransparentTextInput
                  key={19}
                  labelText="First Link"
                  required
                  className="primary-inputs secInp w-20"
                  placeholder="Enter First Link"
                  type="text"
                  onChange={(e) => {
                    props?.onChangeSubject(e.target.value);
                  }}
                />
                <HTMLEditor
                  labelText={"Content"}
                  required
                  editorStates={""}
                  onEditorStateChange={(val) =>
                    props?.onChangeMessage(
                      draftToHtml(convertToRaw(val.getCurrentContent()))
                    )
                  }
                />
              </div>
              {/* <div className="modal-body text-start mt-2">
                <h6>Category Name</h6>
                <input
                  className="primary-inputs secInp"
                  placeholder="Enter Category Name"
                />
              </div> */}
              <div className="modal-footer">
                <MainButton text={"Send"} onClick={hide} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NewsLetterModal;

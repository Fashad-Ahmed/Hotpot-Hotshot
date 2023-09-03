import React, { useImperativeHandle, useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showSuccessToast } from "../../API/HelperFunction";
import { updatePassword } from "../../Redux/slices/authSlice";
import { handleChangePassword } from "../../Utility/validation";
import MainButton from "../Buttons/MainButton";
import InputField from "../TextInputs/InputField";
import TransparentTextInput from "../TextInputs/TransparentTextInput";
import GeneralModal from "./GeneralModal";
import "./styles.css";

const ChangePasswordModal = (props) => {
  const popupRef = useRef();
  const [visible, setVisible] = useState(false);
  const [passwords, setPasswords] = useState({});
  const [loading, setLoading] = useState(false);
  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const hide = () => {
    setVisible(false);
    if (props?.onBtnPress) {
      props?.onBtnPress();
    }
  };
  const show = () => {
    setVisible(true);
  };

  const dispatch = useDispatch();
  const handleChange = async () => {
    const validation = await handleChangePassword(passwords);
    if (validation) {
      const data = {
        password: passwords.password,
        newPassword: passwords.newPassword,
      };
      setLoading(true);
      dispatch(updatePassword(data))
        .unwrap()
        .then((res) => {
          showSuccessToast(res?.message);
          // popupRef.current.show();
          setVisible(false);
        });
      setLoading(false);
    }
  };

  return (
    <Modal show={visible} onHide={hide} centered>
      <div
        className="customModal"
        id="changePassword"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="changePasswordTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content loginPopup">
            <div className="closebtn">
              <div
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setVisible(false)}
              >
                <span aria-hidden="true">&times;</span>
              </div>
            </div>
            <div className="pop-up-content px-md-4 px-3">
              <h4 className="mb-3 text-center">Change Password</h4>
              <div>
                <TransparentTextInput
                  labelText="Current Password"
                  required
                  type="password"
                  placeholder="Enter Current Password"
                  className="form-control rounded-pill"
                  id="password"
                  secureText
                  onChange={(e) =>
                    setPasswords({
                      ...passwords,
                      password: e.target.value,
                    })
                  }
                />
                <TransparentTextInput
                  labelText="New Password"
                  required
                  type="password"
                  placeholder="Enter New Password"
                  className="form-control rounded-pill"
                  id="comfirmPassword"
                  secureText
                  onChange={(e) =>
                    setPasswords({
                      ...passwords,
                      newPassword: e.target.value,
                    })
                  }
                  maxLength={16}
                />
                <TransparentTextInput
                  labelText="Confirm Password"
                  required
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control rounded-pill"
                  id="comfirmPassword"
                  secureText
                  onChange={(e) =>
                    setPasswords({
                      ...passwords,
                      confirmPassword: e.target.value,
                    })
                  }
                  maxLength={16}
                />

                <div className="loginBtn text-center my-4">
                  <MainButton
                    className="secondary-theme-button shadow btn bg-brown py-2"
                    text="Update"
                    onClick={handleChange}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GeneralModal
        reference={popupRef}
        title="Successfully"
        message="Password has been updated"
      />
    </Modal>
  );
};

export default ChangePasswordModal;

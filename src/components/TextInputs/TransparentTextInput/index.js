import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const TransparentTextInput = (props) => {
  const [secure, setSecure] = useState(true);
  return (
    <>
      {props?.id == "phone" ? (
        <div className="mb-4">
          {props?.labelText && (
            <label className="d-block prime-label mb-3 mx-md-3">
              {props?.labelText}
              {props?.required && <span className="text-danger">*</span>}
            </label>
          )}
          <div className="position-relative passwordWrapper mb-2">
            <PhoneInput
              international
              defaultCountry="US"
              value={props?.value}
              onChange={props.onChange}
              className={props?.className}
              countryCallingCodeEditable={false}
              limitMaxLength={true}
            />
          </div>
        </div>
      ) : props?.secureText ? (
        <div className="mb-4">
          {props?.labelText && (
            <label className="d-block prime-label mb-3 mx-md-3">
              {props?.labelText}
              {props?.required && <span className="text-danger">*</span>}
            </label>
          )}
          <div className="position-relative passwordWrapper mb-2">
            <input
              key={props?.key}
              type={secure ? "password" : "text"}
              id={props?.id}
              contentEditable={props?.editable ?? "true"}
              className={props?.className}
              placeholder={props?.placeholder}
              onChange={props?.onChange}
              max={props?.max}
              min={props?.min}
              maxLength={props?.maxLength}
              pattern={props?.pattern}
              onInput={props?.onInput}
              autoComplete={props?.autoComplete}
            />
            <button
              type="button"
              className="not_btn passDisplay"
              onClick={() => setSecure(!secure)}
            >
              <i
                className={`fa ${secure ? "fa-eye" : "fa-eye-slash"}`}
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      ) : props?.rows ? (
        <div className="mb-4">
          <label className="d-block prime-label mb-3 mx-md-3" htmlFor="email">
            {props?.labelText}
            {props?.required && <span className="text-danger">*</span>}
          </label>
          <textarea
            key={props?.key}
            id={props?.id}
            className={props?.className}
            rows={props?.rows}
            onChange={props?.onChange}
            placeholder={props?.placeholder}
            value={props?.value}
          ></textarea>
        </div>
      ) : (
        <div className="mb-4">
          <label className="d-block prime-label mb-3 mx-md-3" htmlFor="email">
            {props?.labelText}
            {props?.required && <span className="text-danger">*</span>}
          </label>
          <input
            key={props?.key}
            type={props?.type}
            id={props?.id}
            pattern={props?.pattern}
            contentEditable={props?.editable ?? true}
            className={props?.className}
            placeholder={props?.placeholder}
            defaultValue={props?.value}
            value={props?.onlyValue}
            onChange={props?.onChange}
            disabled={props?.disabled ?? false}
            max={props?.max}
            min={props?.min}
            maxLength={props?.maxLength}
            onInput={props?.onInput}
            step={props?.step}
            autoComplete={props?.autoComplete}
          />
        </div>
      )}
    </>
  );
};
export default TransparentTextInput;

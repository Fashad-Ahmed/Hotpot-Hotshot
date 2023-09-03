import "./styles.css";
import React from "react";

const InputField = ({
  id,
  required,
  label,
  type,
  placeholder,
  onChange,
  rows,
  value,
  onlyValue,
  pattern,
}) => {
  return (
    <div className="row">
      <div className="">
        <div className="mb-4">
          <label className="d-block prime-label mb-3 mx-md-3" htmlFor="name">
            {label}
            <span className="text-danger">{required && "*"}</span>
          </label>
          {rows ? (
            <textarea
              id={id}
              className="primary-inputs secInp"
              rows={rows}
              onChange={onChange}
              placeholder={placeholder}
            ></textarea>
          ) : (
            <input
              type={type || "text"}
              className="primary-inputs secInp"
              placeholder={placeholder}
              onChange={onChange}
              defaultValue={value}
              value={onlyValue ? onlyValue : value}
              pattern={pattern}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField;

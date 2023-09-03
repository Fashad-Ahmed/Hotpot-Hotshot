import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingSpinner from "../../Spinner/LoadigSpinner";

const MainButton = (props) => {
  return (
    <button
      {...props}
      className={`main-btn ${props?.className}`}
      onClick={props?.onClick}
      type={props?.type}
    >
      {Boolean(props?.loading) ? <LoadingSpinner /> : props?.text}
    </button>
  );
};
export default MainButton;

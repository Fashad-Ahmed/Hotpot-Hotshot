import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TextButton = (props) => {
  return (
    <a
      href={props?.href}
      onClick={props?.onClick}
      className={props?.className ?? "primColor text-decoration-underline mx-2"}
      target={props?.target}
      style={props?.style}
    >
      <u>{props?.text}</u>
    </a>
  );
};
export default TextButton;

import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div
        className="alert alert-secondary"
        style={{ background: "powderblue" }}
        role="alert"
      >
        {props.message}
      </div>
    </div>
  );
};

export default Alert;

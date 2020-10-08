import React from "react";
import "./index.scss";

const Message = (props) => {
  const { message, isCreated, created } = props;
  return (
    <div className={`${isCreated ? "my-message" : ""} message`}>
      <div className="message-box">{message}</div>
      <p className="time">{created}</p>
    </div>
  );
};

export default Message;

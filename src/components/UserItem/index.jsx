import React from "react";
import "./index.scss";

const UserItem = (props) => {
  const {
    index,
    activeUser,
    avatar,
    name,
    lastMessage,
    lastMessageTimeStamp,
    onShowContent,
  } = props;
console.log(props)
  return (
    <div
      className={`user-item ${activeUser === index ? "active" : ""}`}
      onClick={() => onShowContent(index)}
    >
      <div className="user-avt">
        <img src={avatar} alt="" />
      </div>
      <div className="user-info">
        <h3>{name}</h3>
        <p>
          {lastMessage} <span>{lastMessageTimeStamp}</span>
        </p>
      </div>
    </div>
  );
};

export default UserItem;

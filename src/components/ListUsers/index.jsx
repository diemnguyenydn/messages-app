import React, { useState, useEffect } from "react";
import "./index.scss";

import UserItem from "../UserItem";
import Message from "../Message";

const ListUsers = (props) => {
  const { data } = props;

  const [messageContent, setMessageContent] = useState(data[0].messages);
  const [indexMessage, setIndexMessage] = useState(0);

  const onShowContent = (index) => {
    console.log("index; ", index);
    setIndexMessage(index)
    setMessageContent(data[index].messages)
  };

  return (
    <div className="list-users">
      <div className="sideBar">
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <UserItem
              key={index}
              index={index}
              name={item.name}
              avatar={item.avatar}
              lastMessage={item.lastMessage}
              lastMessageTimeStamp={item.lastMessageTimeStamp}
              onShowContent={onShowContent}
              activeUser={indexMessage}
            />
          ))}
      </div>
      <div className="messages">
        {messageContent &&
          messageContent.length > 0 &&
          messageContent.map((msg, k) => (
            <Message key={k} {...msg} />
          ))}
      </div>
    </div>
  );
};

export default ListUsers;

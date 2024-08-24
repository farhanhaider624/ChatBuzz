import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return <div>
    chatPage
  </div>;
};

export default ChatPage;

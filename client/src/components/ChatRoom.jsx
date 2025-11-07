// src/components/ChatRoom.jsx
import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { useAuth } from "../context/AuthContext";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import OnlineUsers from "./OnlineUsers";
import RoomSelector from "./RoomSelector";
import "../styles/ChatRoom.css";

const ChatRoom = () => {
  const { user, logout } = useAuth();
  const [room, setRoom] = useState("General");
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [typingUser, setTypingUser] = useState("");
  const socketRef = useRef(null);

  const SOCKET_URL = import.meta.env.REACT_APP_BACKEND_URL; // ← backend URL

  useEffect(() => {
    if (!user) return;

    // 🔌 Connect to socket.io chat namespace
    socketRef.current = io(`${import.meta.env.VITE_BACKEND_URL}/chat`);

    socketRef.current.emit("joinRoom", { username: user.username, room });

    socketRef.current.on("previousMessages", (history) => setMessages(history));
    socketRef.current.on("receiveMessage", (msg) =>
      setMessages((prev) => [...prev, msg])
    );
    socketRef.current.on("updateUsers", (users) => setOnlineUsers(users));
    socketRef.current.on("typing", (username) => setTypingUser(username));
    socketRef.current.on("stopTyping", () => setTypingUser(""));

    return () => {
      socketRef.current.disconnect();
    };
  }, [user, room, SOCKET_URL]);

  // 💬 Send message
  const sendMessage = (text) => {
    if (text.trim()) {
      const msgData = {
        username: user.username,
        text,
        room,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      socketRef.current.emit("sendMessage", msgData);
    }
  };

  // 🧠 Handle typing indicator
  const handleTyping = () => {
    socketRef.current.emit("typing", user.username);
    setTimeout(() => socketRef.current.emit("stopTyping"), 2000);
  };

  return (
    <div className="chat-container">
      <div className="header">
        <h2>Room: {room}</h2>
        <button onClick={logout}>Logout</button>
      </div>

      <RoomSelector setRoom={setRoom} />

      <OnlineUsers users={onlineUsers} />
      <MessageList messages={messages} currentUser={user.username} />
      {typingUser && <p className="typing">{typingUser} is typing...</p>}

      <MessageInput onSend={sendMessage} onTyping={handleTyping} />
    </div>
  );
};

export default ChatRoom;

// src/socket.js
import { io } from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_BACKEND_URL;

const socket = io(`${SOCKET_URL}/chat`, {
  transports: ["websocket"],
  reconnection: true,
});

export default socket;

# 💬 Realtime Chat App

A full-stack **Realtime Chat Application** built with the **MERN stack** (MongoDB, Express, React, Node.js) and **Socket.IO** — supporting multiple chat rooms, online/offline indicators, and typing notifications.  

---

## 🚀 Features

✅ **User Authentication** (Login & Register with JWT)  
✅ **Realtime Messaging** using Socket.IO  
✅ **Multiple Chat Rooms** (Create or Join any room)  
✅ **User Presence** (Online/Offline indicators)  
✅ **Typing Status** (See when users are typing)  
✅ **Timestamps** for each message  
✅ **Auto Scroll & Pagination** for messages  
✅ **Responsive UI** built with modern CSS styling  
✅ **Smooth UI Transitions** for Auth ↔ Chat screens  

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React (Vite) |
| Backend | Node.js + Express |
| Database | MongoDB |
| Realtime Engine | Socket.IO |
| Authentication | JWT (JSON Web Token) |
| Styling | Custom CSS / Tailwind-ready |
| Deployment | Render / Vercel / MongoDB Atlas |

---

## ⚙️ Project Setup

### 🔧 Backend Setup

```bash
cd server
npm install
npm start
```

Create a `.env` file inside the `server` directory:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

### 🖥️ Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🧠 Folder Structure

```
client/
│── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ChatRoom.jsx
│   │   ├── ChatRoomList.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── styles/
│   │   └── ChatRoom.css
│   └── App.jsx
│
server/
│── models/
│── routes/
│── socket.js
│── server.js
│── .env
│── package.json
```

---

## 🌐 Realtime Features

| Feature | Description |
|----------|--------------|
| **Join Room** | Users can join multiple rooms dynamically |
| **Send Message** | Realtime broadcasting with timestamps |
| **Online Users** | Track and display connected users |
| **Typing Indicator** | Displays when someone is typing |
| **Pagination** | Loads older messages on scroll |

---

## 🧾 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login and get token |
| GET | `/api/messages/:roomId` | Fetch messages by room |

---

## 📸 Screenshots

### Login Page  
> ![Login Page](./screenshots/login-page.jpg)

### Chat Room  
> ![Chat Room](./screenshots/chat-room.jpg)

---

## 🔐 Environment Variables

| Variable | Description |
|-----------|-------------|
| `PORT` | Server Port |
| `MONGO_URI` | MongoDB connection URI |
| `JWT_SECRET` | Token secret key |

---

## 🌟 Future Enhancements

- 📱 Mobile app version with React Native  
- 🖼️ Image / File Sharing support  
- 🔔 Push Notifications  
- 💾 Message encryption  
- 👥 Group Admin Roles  

---

## 👨‍💻 Author

**Joseph Chege (KyUCOMRADE)**  
> Passionate about full-stack development and realtime systems.  
> 📧 Email: [chegejoseph5006@gmail.com](mailto:chegejoseph5006@gmail.com)  
> 🐙 GitHub: [@KyUCOMRADE](https://github.com/KyUCOMRADE)  

---

## 🏁 License

MIT © 2025 Joseph Chege  
Feel free to fork, improve, and star ⭐ this project.

// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // ✅ Login & set user instantly
  const login = async (username, password) => {
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    try {
      const API_URL = import.meta.env.REACT_APP_BACKEND_URL;

      const res = await axios.post(`${API_URL}/api/auth/login`, {
        username,
        password,
      });

      console.log("✅ Login successful:", res.data);

      const loggedUser = res.data.user || { username: res.data.username };
      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));
      setError("");

      return loggedUser; // ⬅️ return for redirect
    } catch (err) {
      console.error("❌ Login failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed");
      return null;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setError("");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

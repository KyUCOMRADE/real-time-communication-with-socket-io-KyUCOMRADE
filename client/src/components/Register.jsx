import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.REACT_APP_BACKEND_URL; // ← backend URL

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/auth/register`, formData);
      setMessage(res.data.message);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
          autoComplete="username"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
          autoComplete="new-password"
        />
        <button
          type="submit"
          style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}
        >
          Register
        </button>
      </form>
      {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
    </div>
  );
};

export default Register;

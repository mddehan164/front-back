import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import api from "../../api/axiosInstance"

const RegisterForm = () => {
  const navigate = useNavigate()
  const [msg, setMsg] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
});

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.password.length < 6){
      alert("Password must be 6 charecters");
      return;
    }
    
    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match");
      return;
    }
    

    else{
      setMsg("Registering...");
    }

    try {
      // First get CSRF cookie (only needed once per session)
      await api.get("/sanctum/csrf-cookie");

      // Then call your register API
      const res = await api.post("/api/auth/register", formData);

      if (res.status === 201 || res.status === 200) {
        setMsg(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      if (err.response?.data?.message) {
        setMsg("❌ " + err.response.data.message);
      } else {
        setMsg("❌ Registration failed");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      {msg && <p className="mb-2 text-lg text-green-500 font-semibold">{msg}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" required
          className="w-full border p-2 rounded"
          value={formData.name} onChange={handleChange} />
        
        <input name="email" placeholder="Email" type="email" required
          className="w-full border p-2 rounded"
          value={formData.email} onChange={handleChange} />
        
        <input name="password" type="password" placeholder="Password" required
          className="w-full border p-2 rounded"
          value={formData.password} onChange={handleChange} />

        <input name="password_confirmation" type="password" placeholder="Confirm Password" required
          className="w-full border p-2 rounded"
          value={formData.password_confirmation} onChange={handleChange} />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
        <small>already have an account? <Link to="/login" className='text-blue-500 hover:underline'>Login</Link></small>
      </form>
    </div>
  );
};

export default RegisterForm;

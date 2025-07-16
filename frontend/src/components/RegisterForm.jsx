import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("❌ " + (err.response?.data?.error?.sqlMessage || "Registration failed"));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" required
          className="w-full border p-2 rounded"
          value={formData.name} onChange={handleChange} />
        
        <input name="email" placeholder="Email" type="email" required
          className="w-full border p-2 rounded"
          value={formData.email} onChange={handleChange} />

        <input name="mobile" placeholder="Mobile" required
          className="w-full border p-2 rounded"
          value={formData.mobile} onChange={handleChange} />
        
        <input name="password" type="password" placeholder="Password" required
          className="w-full border p-2 rounded"
          value={formData.password} onChange={handleChange} />

        <input name="confirmPassword" type="password" placeholder="Confirm Password" required
          className="w-full border p-2 rounded"
          value={formData.confirmPassword} onChange={handleChange} />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Register</button>
        <small>already have an account? <Link to="/login" className='text-blue-500 hover:underline'>Login</Link></small>
      </form>
    </div>
  );
};

export default RegisterForm;

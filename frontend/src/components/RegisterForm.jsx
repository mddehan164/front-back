import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(`Registered: ${formData.name}`);
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
      </form>
    </div>
  );
};

export default RegisterForm;

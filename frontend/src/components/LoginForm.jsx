import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with mobile: ${mobile}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Mobile" required
          className="w-full border p-2 rounded"
          value={mobile} onChange={(e) => setMobile(e.target.value)} />
        
        <input type="password" placeholder="Password" required
          className="w-full border p-2 rounded"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
        <p>Haven't any account? <span><Link to="/register">Register</Link></span></p>
      </form>
    </div>
  );
};

export default LoginForm;

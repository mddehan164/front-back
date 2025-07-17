import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../../api/axiosInstance"

const LoginForm = ({setUser}) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("")
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/auth/login", form);
  //     alert(res.data.message);
  //     localStorage.setItem("token", res.data.token);
  //     localStorage.setItem("user", JSON.stringify(res.data.user));
  //     setUser(res.data.user);

  //     navigate("/");
  //   } catch (err) {
  //     alert("❌ Login failed");
  //     console.log(err)
  //   }
  // };
  const handleLogin = async (e) => {
  e.preventDefault();
  setMsg("Logging in...");

  try {
    await api.get("/sanctum/csrf-cookie");
    const res = await api.post('/api/auth/login', form);

    if (res.status === 200 || res.status === 201) {
     const msg = res.data.message;
     setMsg(msg || "Login Successful")

      // save user/token if returned
      if (res.data.data.user) setUser(res.data.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.access_token));
     setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  } catch (error) {
    console.error(error);
    alert('Login failed');
  }
};


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded relative">
      <p className={`absolute top-[-30px] text-lg text-blue-600 left-2 font-semibold`}>{msg}</p>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="E-mail" required
          className="w-full border p-2 rounded"
          onChange={handleChange} name='email'/>
        
        <input type="password" placeholder="Password" required
          className="w-full border p-2 rounded"
          onChange={handleChange} name='password'/>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
        <p>Haven't any account? <span><Link to="/register" className='text-blue-500 hover:underline'>Register</Link></span></p>
      </form>
    </div>
  );
};

export default LoginForm;

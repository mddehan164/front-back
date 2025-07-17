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
    // JWT হলে CSRF দরকার হয় না, তাহলে নিচের লাইন বাদ দাও
    // await api.get("/sanctum/csrf-cookie");

    const res = await api.post('/login', form);
    console.log(res)

    if (res.status === 200 || res.status === 201) {
      const user = res.data.data?.user;
      const accessToken = res.data.data?.access_token ;
      const refreshToken = res.data.data?.refresh_token;

      setMsg(res.data.message || "Login Successful");

      if (user) setUser(user);
      if (accessToken) localStorage.setItem("access_token", accessToken);
      if (refreshToken) localStorage.setItem("refresh_token", refreshToken);
      if (user) localStorage.setItem("user", JSON.stringify(user));

      setTimeout(() => navigate("/"), 2000);
    }
  } catch (error) {
    console.error(error);
    setMsg("❌ Login failed. Try again.");
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../compontent/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulating login with fixed credentials
    if ([username === "admin" && password === "1234"],[username === "anil" && password === "123"]) {
      login(); // Calling the login function from context
      navigate("/Home"); // Navigate to the Home page after successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5 rounded-pill ms-auto p-5  card-login">
     <center><h1>----Login-----</h1></center> 
      <form onSubmit={handleLogin} className="mx-5">
        <div className=" mx-auto">
          <label>Username</label>
          <input 
            type="text" 
            className="form-control w-50" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3 ">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control w-50" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-success mt-3 ">Login</button>
      </form>
    </div>
  );
};

export default Login;

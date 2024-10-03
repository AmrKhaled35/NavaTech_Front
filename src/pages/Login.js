import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    // try {
    //   const response = await fetch('http://localhost:8000/api/login/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //     }),
    //   });

    //   const data = await response.json();
    //   if (response.ok) {
    //     console.log('Login successful:', data);
        login(email);
        navigate('/');
    //   } else {
    //     setError('Invalid credentials. Please register if you don\'t have an account.');
    //   }
    // } catch (err) {
    //   setError('An error occurred. Please try again.');
    // }
  };

  return (
    <div className="container" style={{ fontFamily: "Arial" }}>
      <div className="box" style={{ fontFamily: "Arial" }}>
        <h2 className="titleL" style={{ fontFamily: "Arial" }}>Welcome back!</h2>
        <p className="subtitle" style={{ fontFamily: "Arial" }}>
          Sign in to your account to continue.
          <Link  to = '/SignUp' style= {{textDecoration :"none"}}><span className="signup-link" style={{ fontFamily: "Arial" }}> Sign up.</span></Link>
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            className="input"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="input"
            value={password}
            onChange={handlePasswordChange} 
          />
          <button type="submit" className="button">Sign in</button>
        </form>

        <p className="forgot-password">
          Forgot your password? <span className="reset-link">Reset password.</span>
        </p>
        {error && (
          <p style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;

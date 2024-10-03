import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    year: '',
    month: '',
    day: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const { Rejester } = useAuth(); 
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 1950; year <= currentYear; year++) {
    years.push(year);
  }
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = [];
  for (let day = 1; day <= 31; day++) {
    days.push(day);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (name === 'email') {
      setErrorMessage(''); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { year, month, day, ...rest } = formData;

    const birthDate = `${year}-${months.indexOf(month) + 1}-${day}`;
    
    // try {
    //   const response = await fetch('http://localhost:8000/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ ...rest, birth_date: birthDate }),
    //   });

      // if (response.ok) {
      //   const data = await response.json();
        Rejester(formData.firstName , formData.lastName)
        navigate('/Login');
    //     console.log('User registered successfully:', data);
    //     setSuccessMessage('Registered successfully');
    //     setTimeout(() => {
    //       navigate('/Login');
    //     }, 2000);
    //   } else {
    //     const errorData = await response.json();
    //     if (errorData.email) {
    //       setErrorMessage('Email already exists'); 
    //     }
    //     console.error('Error:', errorData);
    //   }
    // } catch (error) {
    //   console.error('Network error:', error);
    // }
  };

  return (
    <div className="signup-container">
      <form className="signup-box" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create a new account</h2>

        <div className="signup-row">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="signup-input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Second name"
            value={formData.lastName}
            onChange={handleChange}
            className="signup-input"
          />
        </div>

        <div className="signup-row">
          <select name="year" value={formData.year} onChange={handleChange} className="signup-select">
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <select name="month" value={formData.month} onChange={handleChange} className="signup-select">
            <option value="">Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
          <select name="day" value={formData.day} onChange={handleChange} className="signup-select">
            <option value="">Day</option>
            {days.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="signup-input"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="signup-input"
        />

        <button type="submit" className="signup-button">Sign up</button>

        {successMessage && (
          <p style={{ color: 'green', fontSize: '15px', marginTop: '8px' }}>{successMessage}</p>
        )}
        {errorMessage && (
          <p style={{ color: 'red', marginTop: '8px',  fontSize: '15px' }}>{errorMessage}</p> 
        )}
      </form>
    </div>
  );
};

export default SignUp;

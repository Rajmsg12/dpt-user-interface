import React, { useState } from 'react';
import InnerHeader from '../common/InnerHeader';
import Footer from '../common/Footer';
import './Style/login.css';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const Register = () => {
  // Define state variables to hold user input
  const [first_name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const navigate =useNavigate()
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a data object to send in the request body
    const data = {
      first_name,
      email,
      password,
      confirm_password: confirm_password,
    };

    try {
      // Send a POST request to the backend API
      const response = await fetch(`${config.baseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Registration successful - you can handle the success scenario here
        // For example, you can redirect the user to a success page or display a success message.
        console.log('Registration successful');
        navigate('/login')
      } else {
        // Registration failed - handle the error scenario here
        // For example, you can display an error message to the user.
        setError('Registration failed');
      }
    } catch (error) {
      setError('An error occurred:', error);
    }
  };

  return (
    <div>
      <InnerHeader />
      <div className="loginForm">
        <div className="container">
          <div className="FormWrapper">
            <div className="FormTopText">
              <h1>Create Account</h1>
              <p>Explore a world of Dubai with DPT</p>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3 formGroup">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  required
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-3 formGroup">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 formGroup">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 formGroup">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  required
                  value={confirm_password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <div className="error-message" style={{color:"green"}}>{error}</div>}
              <div className="CheckBoxrow">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    I agree to all Terms and Conditions*
                  </label>
                </div>
              </div>
              <div className="formGroup">
                <button type="submit" className="btn">Create Account</button>
              </div>
              <div className="formGroup">
                <Link to="/login" className="CreateAccountLabel">Or Sign in instead</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;

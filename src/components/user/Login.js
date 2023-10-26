import React, { useState } from 'react';
import InnerHeader from '../common/InnerHeader';
import Footer from '../common/Footer';
import './Style/login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8800/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Login was successful, you can redirect the user to another page or take any necessary action.
                navigate('/');
            } else {
                // Login failed, show an error message.
                setError('Invalid email or password. Please try again.');
            }
        } catch (error) {
            // Handle network or other errors here.
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            {/* INNER HEADER */}
            <InnerHeader />
            <div className="loginForm">
                <div className="container">
                    <div className="FormWrapper">
                        <div className="FormTopText">
                            <h1>Login to your Account</h1>
                            <p>Explore a world of Dubai with DPT</p>
                        </div>
                        <form onSubmit={handleLogin}>
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
                            <div className="formGroup">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="CheckBoxrow">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Remember Me
                                    </label>
                                </div>
                                <Link to="/forget-password" className="forgotepassword">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="formGroup">
                                <button type="submit" className="btn">
                                    Login
                                </button>
                            </div>
                            {error && <div className="error-message">{error}</div>}
                            <div className="formGroup">
                                <div className="CreateAccountLabel">
                                    New User? <Link to="/register">Create an account</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
        </div>
    );
};

export default Login;

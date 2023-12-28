import React, { useState , useEffect } from 'react';
import InnerHeader from '../common/InnerHeader';
import Footer from '../common/Footer';
import './Style/login.css';
import { Link } from 'react-router-dom';
import config from '../../config';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked); 
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${config.baseUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);

                // Save login details if Remember Me is checked
                if (rememberMe) {
                    localStorage.setItem('rememberedEmail', email);
                    localStorage.setItem('rememberedPassword', password);
                } else {
                    // If not checked, clear remembered details
                    localStorage.removeItem('rememberedEmail');
                    localStorage.removeItem('rememberedPassword');
                }

                // navigate('/user-dashboard');
                navigate(-1)
            } else {
                setError('Invalid email or password. Please try again.');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    // Fetch remembered login details if present
    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        const rememberedPassword = localStorage.getItem('rememberedPassword');

        if (rememberedEmail && rememberedPassword) {
            setEmail(rememberedEmail);
            setPassword(rememberedPassword);
            setRememberMe(true);
        }
    }, []);

    return (
        <div>
            {/* INNER HEADER */}
            <InnerHeader />
            <div className="loginForm">
                <div className="container">
                    <div className="FormWrapper">
                        <div className="FormTopText">
                            <h1>Reset Password</h1>
                            {/* <p>Explore a world of Dubai with DPT</p> */}
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3 formGroup">
                                <label>New Password</label>
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
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <div className="error-message" style={{ color: "red" }}>{error}</div>}
                          
                            <div className="formGroup">
                                <button type="submit" className="btn">
                                    Login
                                </button>
                            </div>

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

export default ResetPassword;

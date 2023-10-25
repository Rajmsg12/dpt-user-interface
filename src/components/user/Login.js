import React from 'react'
import InnerHeader from '../common/InnerHeader'
import Footer from '../common/Footer'
import './Style/login.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const loginButton = () =>{
        navigate('/')
    }
    return (
        <div>
          {/*INNER HEADER */}
            <InnerHeader />
            <div class="loginForm">
            <div class="container">
                <div class="FormWrapper">
                  <div class="FormTopText">
                    <h1>Login to your Account</h1>
                    <p>Explore a world of Dubai with DPT</p>
                  </div>
                    <form>
                      <div class="mb-3 formGroup">
                        <label>Email Address</label>
                        <input type="email" class="form-control" placeholder="mail@abc.com" required=""/>
                      </div>
                      <div class="formGroup">
                        <label>Password</label>
                        <input type="text" class="form-control" placeholder="*****************" required=""/>
                      </div>
                      <div class="CheckBoxrow">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                          <label class="form-check-label" for="flexCheckChecked">
                            Remember Me
                          </label>
                        </div>
                        <Link to="/forget-password" class="forgotepassword">Forgot Password?</Link>
                      </div>
                      <div class="formGroup">
                        <button onClick={loginButton} type="submit" class="btn">Login</button>
                      </div>
                      <div class="formGroup">
                      <div class="CreateAccountLabel">
                        New User? <Link to="/register">Create an account</Link>
                      </div>
                    </div>
                      
                    </form>
                 
                </div>
            </div>
          </div>
            {/*FOOTER */}
            <Footer />
        </div>
    )
}

export default Login

import React from 'react'
import InnerHeader from '../common/InnerHeader'
import Footer from '../common/Footer'
import './Style/login.css'

const Forget = () => {
  return (
    <div>
      <InnerHeader/>
      <div class="loginForm">
      <div class="container">
          <div class="FormWrapper">
            <div class="FormTopText">
              <h1>Forgot Password</h1>
              <p>To reset your password, please enter the email address associated with your account</p>
            </div>
              <form>
                <div class="mb-3 formGroup">
                  <label>Email Address</label>
                  <input type="email" class="form-control" placeholder="mail@abc.com" required=""/>
                </div>
                <div class="formGroup">
                  <button type="submit" class="btn">Reset Password</button>
                </div>
                <div class="formGroup">
                <div class="CreateAccountLabel">
                  Or Sign in instead
                </div>
              </div>
                
              </form>
           
          </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Forget

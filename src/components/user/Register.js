import React from 'react'
import InnerHeader from '../common/InnerHeader'
import Footer from '../common/Footer'
import './Style/login.css'

const Register = () => {
    return (
        <div>
            <InnerHeader />
            <div class="loginForm">
                <div class="container">
                    <div class="FormWrapper">
                        <div class="FormTopText">
                            <h1>Create Account</h1>
                            <p>Explore a world of Dubai with DPT</p>
                        </div>
                        <form>
                            <div class="mb-3 formGroup">
                                <label>Full Name</label>
                                <input type="email" class="form-control" placeholder="John Doe" required="" />
                            </div>
                            <div class="mb-3 formGroup">
                                <label>Email Address</label>
                                <input type="email" class="form-control" placeholder="mail@abc.com" required="" />
                            </div>
                            <div class="mb-3 formGroup">
                                <label>Password</label>
                                <input type="text" class="form-control" placeholder="*****************" required="" />
                            </div>
                            <div class="mb-3 formGroup">
                                <label>Confirm Password</label>
                                <input type="text" class="form-control" placeholder="*****************" required="" />
                            </div>
                            <div class="CheckBoxrow">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        I agree to all Terms and Conditions*
                                    </label>
                                </div>

                            </div>
                            <div class="formGroup">
                                <button type="submit" class="btn">Create Account</button>
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
            <Footer />

        </div>
    )
}

export default Register

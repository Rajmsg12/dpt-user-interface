import React, { useState, useEffect } from 'react';
import './style/billing.css';
import { getUserPrice } from '../cart/PriceUtlis';
import { useNavigate } from 'react-router-dom';
import config from '../../config'

const PersonDetail = () => {
    let cartdata = localStorage.getItem("cartdata");
    const MyCartDetail = cartdata ? JSON.parse(cartdata) : [];
    const totalPrice = MyCartDetail.map(item => item.tourPriceAed).reduce((acc, price) => acc + price, 0);
    const navigate = useNavigate()
    console.log(cartdata)
const calculateTotal = () => {
    const taxPercentage = 0.18; // 18% tax
    const total = totalPrice * taxPercentage;
    const fullTotal = totalPrice - total
    return {
    totalPrice,
      taxPercentage,
      fullTotal,
      total
    };
  };
  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    email: '',
    confirm_email: '',
    nationality: '',
    discover_us: '',
    country: '',
    cell_no: '',
});
const validateForm = () => {
    let valid = true;
    const newErrors = {
        first_name: '',
        last_name: '',
        email: '',
        confirm_email: '',
        nationality: '',
        discover_us: '',
        country: '',
        cell_no: '',
    };

    // Validate first name
    if (!formData.first_name.trim()) {
        newErrors.first_name = 'First name is required';
        valid = false;
    }

    // Validate last name
    if (!formData.last_name.trim()) {
        newErrors.last_name = 'Last name is required';
        valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        newErrors.email = 'Valid email is required';
        valid = false;
    }

    // Validate confirm email
    if (formData.confirm_email.trim() !== formData.email.trim()) {
        newErrors.confirm_email = 'Emails do not match';
        valid = false;
    }

    // Validate other fields similarly...

    setErrors(newErrors);
    return valid;
};




    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        confirm_email: '',
        nationality: '',
        discover_us: '',
        country: '',
        cell_no: '',
        special_equest: '',
        cart_data: MyCartDetail,

        sub_total:calculateTotal().fullTotal,
        total:totalPrice,

    });


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const isFormValid = validateForm();
    
        if (isFormValid) {
            const token = localStorage.getItem("token");
    
            const headers = {
                'Content-Type': 'application/json',
            };
    
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
    
            try {
                const response = await fetch(`${config.baseUrl}/cart/add`, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(formData),
                });
    
                if (response.ok) {
                    console.log('Booking successful');
                    navigate('/thankyou');
                    localStorage.clear();
                } else {
                    console.error('Booking failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.log('Form has validation errors');
        }
    };
    
    
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="BillingDetailPage">
                    <div className="container">
                        <div className="BillingDetailWrapper">
                            <div className="BillingDetailLHS">
                                <div className="BillingDetailLHSInner">
                                    <div className="BookingDetailsHd">
                                        <span>Personal Details</span>
                                    </div>
                                    <div className="PersonalDetailForm">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="mb-3 formGroup">
                                                        <label>First Name*</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter First Name"
                                                            required=""
                                                            name="first_name" // Make sure the name attribute is correct
                                                            value={formData.first_name} // Ensure the value is controlled
                                                            onChange={handleChange}
                                                        />
                                                        {errors.first_name && <div className="error">{errors.first_name}</div>}
                                                    </div>
                                                    {/*formGroup*/}
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 formGroup">
                                                        <label>Last Name*</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Last Name"
                                                            required=""
                                                            name="last_name" // Make sure the name attribute is correct
                                                            value={formData.last_name} // Ensure the value is controlled
                                                            onChange={handleChange}
                                                        />
                                                        {errors.last_name && <div className="error">{errors.localStorage_name}</div>}

                                                    </div>
                                                    {/*formGroup*/}
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 formGroup">
                                                        <label>Email*</label>
                                                        <input
                                                            type="mail"
                                                            className="form-control"
                                                            placeholder="Enter Email"
                                                            required=""
                                                            name="email" // Make sure the name attribute is correct
                                                            value={formData.email} // Ensure the value is controlled
                                                            onChange={handleChange}
                                                        />
                                                        {errors.email && <div className="error">{errors.email}</div>}

                                                    </div>
                                                    {/*formGroup*/}
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 formGroup">
                                                        <label>Confirm Email*</label>
                                                        <input
                                                            type="mail"
                                                            className="form-control"
                                                            placeholder="Confirm Email"
                                                            required=""
                                                            name="confirm_email" // Make sure the name attribute is correct
                                                            value={formData.confirm_email} // Ensure the value is controlled
                                                            onChange={handleChange}
                                                        />
                                                         {errors.confirm_email && <div className="error">{errors.confirm_email}</div>}

                                                    </div>
                                                    {/*formGroup*/}
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 formGroup">
                                                        <label>Nationality*</label>
                                                        <select
                                                            className="form-select"
                                                            name="nationality"
                                                            value={formData.nationality}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">Select Nationality</option>
                                                            <option value="Afghanistan">Afghanistan</option>
                                                            <option value="Albania">Albania</option>
                                                            <option value="Algeria">Algeria</option>
                                                            <option value="American Samoa">American Samoa</option>
                                                            <option value="Andorra">Andorra</option>
                                                            <option value="Angola">Angola</option>
                                                            <option value="Anguilla">Anguilla</option>
                                                            <option value="Antigua and Barbuda">
                                                                Antigua and Barbuda
                                                            </option>
                                                            <option value="Argentina">Argentina</option>
                                                            <option value="Armenia">Armenia</option>
                                                            <option value="Aruba">Aruba</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Austria">Austria</option>
                                                            <option value="Azerbaijan">Azerbaijan</option>
                                                            <option value="Bahamas">Bahamas</option>
                                                            <option value="Bahrain">Bahrain</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                            <option value="Barbados">Barbados</option>
                                                            <option value="Belgium">Belgium</option>
                                                            <option value="Belize">Belize</option>
                                                            <option value="Benin">Benin</option>
                                                            <option value="Bermuda">Bermuda</option>
                                                            <option value="Bhutan">Bhutan</option>
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Bosnia">Bosnia</option>
                                                            <option value="Botswana">Botswana</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="Benin">Benin</option>
                                                            <option value="India">India</option>
                                                            <option value="Yemen">Yemen</option>
                                                            <option value="Yugoslavia ">Yugoslavia </option>
                                                            <option value="Zambia">Zambia</option>
                                                            <option value="Zimbabwe">Zimbabwe</option>
                                                        </select>
                                                        {errors.nationality && <div className="error">{errors.nationality}</div>}
                                                    </div>
                                                    {/*formGroup*/}
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="mb-3 formGroup">
                                                        <label>How Did You Discover Us* </label>
                                                        <select
                                                            className="form-select"
                                                            name="discover_us"
                                                            value={formData.discover_us}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">Select How Did You Discovered Us</option>
                                                            <option value="Google Search">Google Search</option>
                                                            <option value="Trip adviser">Trip adviser</option>
                                                            <option value="Recommended by friend/relatives">
                                                                Recommended by friend/relatives
                                                            </option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </div>
                                                    {/*formGroup*/}
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3 formGroup">
                                                        <label>Country Code*</label>
                                                        <select
                                                            className="form-select"
                                                            name="country"
                                                            value={formData.country}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">Select Code</option>
                                                            <option value={+93}> Afghanistan (+93) </option>
                                                            <option value={+355}> Albania (+355) </option>
                                                            <option value={+213}> Algeria (+213) </option>
                                                            <option value={+598}> Uruguay (+598) </option>
                                                            <option value={+340}> US Virgin Islands (+340) </option>
                                                            <option value={+998}> Uzbekistan (+998) </option>
                                                            <option value={+678}> Vanuatu (+678) </option>
                                                            <option value={+379}> Vatican City (+379) </option>
                                                            <option value={+58}> Venezuela (+58) </option>
                                                            <option value={+84}> Vietnam (+84) </option>
                                                            <option value={+681}> Wallis And Futuna (+681) </option>
                                                            <option value={+967}> Yemen (+967) </option>
                                                            <option value={+381}> Yugoslavia (+381) </option>
                                                            <option value={+967}> Zambia (+967) </option>
                                                            <option value={+91}> India (+91) </option>
                                                            <option value={+263}> Zimbabwe (+263) </option>
                                                        </select>
                                                    </div>
                                                    {/*formGroup*/}
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="mb-3 formGroup">
                                                        <label>Cell No*</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Cell No"
                                                            required=""
                                                            name="cell_no" // Make sure the name attribute is correct
                                                            value={formData.cell_no} // Ensure the value is controlled
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    {/*formGroup*/}
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="formGroup">
                                                        <label>Special Request</label>
                                                        <textarea
                                                            className="form-control"
                                                            placeholder="Special Request"
                                                            required=""
                                                            name="special_equest" // Make sure the name attribute is correct
                                                            value={formData.special_equest} // Ensure the value is controlled
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    {/*formGroup*/}
                                                </div>
                                            </div>
                                            {/*row*/}
                                        </form>

                                        {/*ProfileDetailsForm*/}
                                    </div>
                                    {/*PersonalDetailForm*/}
                                </div>
                                {/*BillingDetailLHSInner*/}
                            </div>
                            {/*BillingDetailLHS*/}
                                <div className="BillingDetailRHS">
                                    <div className="OrderSummaryDiv">
                                        <div className="heading">Order Summary</div>
                                        <div className="OrderSummaryTable">
                                            <div className="OrderSummaryTablebody">
                                                <div className="OrderSummaryTablerow">
                                                    <span>Subtotal</span>
                                                    <span>
                                                        AED <strong>{totalPrice}</strong>
                                                    </span>
                                                </div>
                                                {/*OrderSummaryTablerow*/}
                                                <div className="OrderSummaryTablerow">
                                                    <span>Tax</span>
                                                    <strong>18 %</strong>
                                                </div>
                                                {/*OrderSummaryTablerow*/}
                                                <div className="OrderSummaryTablerow">
                                                    <span>Order total</span>
                                                    AED <strong>{calculateTotal().fullTotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                </div>
                                                {/*OrderSummaryTablerow*/}
                                                <div className="ProceedCheckoutCta">
                                                    <button type="submit" className="cta">
                                                        Book Now
                                                    </button>
                                                </div>
                                                {/*ProceedCheckoutCta*/}
                                                {/*PaymentMethodGroup*/}
                                            </div>
                                            {/*OrderSummaryTablebody*/}
                                        </div>
                                        {/*OrderSummaryTable*/}
                                    </div>
                                </div>
                      
                            {/*BillingDetailRHS*/}
                        </div>
                        {/*BillingDetailWrapper*/}
                    </div>
                    {/*container*/}
                </div>
            </form>
        </div>
    )
}

export default PersonDetail

import React, { useState, useEffect } from 'react'
import Select from "react-select";
import Swal from 'sweetalert2';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import config from '../../config';


const customStyles = {
    control: base => ({
        ...base,
        height: 45,
        minHeight: 35
    })
};

const CountrySelect = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});

    useEffect(() => {
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.countries);
                setSelectedCountry(data.userSelectValue);
            });
    }, []);

    return (
        <Select
            options={countries}
            value={selectedCountry}
            onChange={(selectedOption) => setSelectedCountry(selectedOption)}
        // styles={customStyles}

        />
    );
};



const AskQuestion = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        nationality: '',
        discover_us: '',
        country_code: '',
        call_no: '',
        address: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleCountryChange = (selectedOption) => {
        setFormData({
            ...formData,
            nationality: selectedOption.value
        });
    };
    const handleDiscoverChange = (e) => {
        setFormData({
            ...formData,
            discover_us: e.target.value
        });
    };



    const handleSelectChange = (selectedOption, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: selectedOption.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${config.baseUrl}/ask/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Form data sent:', responseData);
                // Clear form fields and show success message
                setFormData({
                    name: '',
                    email: '',
                    nationality: '',
                    discover_us: '',
                    country_code: '',
                    call_no: '',
                    address: '',
                    subject: '',
                    message: ''
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Form submitted successfully!',
                    showConfirmButton: false,
                    timer: 2500 // You can adjust the timer to control how long the message is displayed
                });
            } else {
                console.error('Error submitting form:', response.statusText);
                // Optionally, handle error state here
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle fetch error
        }
    };

    const countries = [
        { label: "United States (+1)", value: "US" },
        { label: "Afghanistan (+93)", value: "AF" },
        { label: "Albania (+355)", value: "AL" },
        { label: "Algeria (+213)", value: "DZ" },
        { label: "American Samoa (+684)", value: "AS" },
        { label: "Andorra (+376)", value: "AD" },
        { label: "Angola (+244)", value: "AO" },
        { label: "Anguilla (+1)", value: "AI" },
        { label: "Antigua and Barbuda (+1)", value: "AG" },
        { label: "Argentina (+54)", value: "AR" },
        { label: "Armenia (+374)", value: "AM" },
        { label: "Aruba (+297)", value: "AW" },
        { label: "Australia (+61)", value: "AU" },
        { label: "Austria (+43)", value: "AT" },
        { label: "Azerbaijan (+994)", value: "AZ" },
        { label: "Bahamas (+1)", value: "BS" },
        { label: "Bahrain (+973)", value: "BH" },
        { label: "Bangladesh (+880)", value: "BD" },

        // Add more countries here
    ];


    return (
        <>
        
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3 formGroup">
                                        <label>First Name*</label>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Enter First Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required />
                                    </div>
                                    {/* formGroup */}
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 formGroup">
                                        <label>Last Name*</label>
                                        <input type="text" className="form-control" placeholder="Enter Last Name" required />
                                    </div>
                                    {/* formGroup */}
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 formGroup">
                                        <label>Email*</label>
                                        <input type="email"
                                            className="form-control"
                                            placeholder="Enter Email Address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required />
                                    </div>
                                    {/* formGroup */}
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 formGroup">
                                        <label>Confirm Email*</label>
                                        <input type="email" className="form-control" placeholder="Confirm Email Address" required />
                                    </div>
                                    {/* formGroup */}
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 formGroup ">
                                        <label>Nationality*</label>
                                        <Select
                                            options={countries}
                                            placeholder="Select Nationality"
                                            value={countries.find(country => country.value === formData.nationality)}
                                            onChange={(selectedOption) => handleCountryChange(selectedOption)}
                                            required
                                        />

                                    </div>
                                    {/* formGroup */}
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 formGroup">
                                        <label>How Did You Discover Us* </label>
                                        <select
                                            className="form-select"
                                            name="discover_us"
                                            value={formData.discover_us}
                                            onChange={handleDiscoverChange}
                                            required
                                        >

                                            <option value="">Select How Did You Discovered Us</option>
                                            <option value="Google Search">Google Search</option>
                                            <option value="Trip adviser">Trip adviser</option>
                                            <option value="Recommended by friend/relatives">Recommended by friend/relatives</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    {/* formGroup */}
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 formGroup">
                                        <label>Country Code*</label>
                                        <Select
                                            options={countries}
                                            placeholder="Select Country code"
                                            value={countries.find(country => country.value === formData.country_code)}
                                            onChange={(selectedOption) => handleSelectChange(selectedOption, 'country_code')}
                                            required
                                        />
                                    </div>
                                    {/* formGroup */}
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 formGroup">
                                        <label>Cell No*</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Cell No"
                                            name="call_no"
                                            value={formData.call_no}
                                            onChange={handleInputChange}
                                            pattern="[0-9]*" // Accepts only numerical values
                                            maxLength={13} // Restricts input to a maximum length of 13 characters
                                            required
                                        />

                                    </div>
                                    {/* formGroup */}
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3 formGroup">
                                        <label>Address</label>
                                        <textarea className="form-control"
                                            placeholder="Type Your Special Requests"
                                            rows="3"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required></textarea>
                                    </div>{/* formGroup */}
                                </div>

                                <div className="col-md-12">
                                    <div className="mb-3 formGroup">
                                        <label>Subject</label>
                                        <select className="form-select"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required>
                                            <option selected="">Select Your Subject</option>
                                            <option value="Enquiry">Enquiry</option>
                                            <option value="Feedback">Feedback</option>
                                        </select>
                                    </div>
                                    {/* formGroup */}
                                </div>

                                <div className="col-md-12">
                                    <div className="mb-3 formGroup">
                                        <label>Message</label>
                                        <textarea className="form-control"
                                            placeholder="Type Your Special Requests"
                                            rows="3"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required></textarea>
                                    </div>{/* formGroup */}
                                </div>

                                <div className="submitcta">
                                    <div className="btnGroup">
                                        <button type="submit" className="cta">Submit</button>
                                    </div>
                                    <div className="captcha">
                                        <div className="captchaimg">
                                            <img src="images/homepage/captcha.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>{/*row*/}
                        </form>
        </>
    )
}

export default AskQuestion


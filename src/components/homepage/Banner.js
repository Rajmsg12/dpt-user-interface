import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../../Style/header.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SearchableSelect = ({ options, placeholder, onSelect }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);





  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setSearchTerm(option);
    onSelect(option);
    setDropdownOpen(false); // Close the dropdown after selecting an option
  };

  const handleInputClick = () => {
    setDropdownOpen(true); // Open the dropdown when the input is clicked
  };

  // Modify the filteredOptions to limit the results to a maximum of 5 items
  const filteredOptions = options
    .filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 5);



  return (
    <div className="searchable-select">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={handleInputClick}
        style={{ width: '170px', border: 'none', position: 'relative' }}
      />
      {isDropdownOpen && (
        <ul className="options" style={{ width: '170px', position: 'absolute', background: 'white', top: '101%', padding: '5px', borderRadius: '5px' }}>
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className={option === selectedOption ? 'selected' : undefined}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};



const Banner = ({selectedCurrency}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [userType, setUserType] = useState(null);
  const [userDiscount, setUserDiscount] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState('');
  const [tours, setTours] = useState([]);
  const [privates, setPrivates] = useState([]);
  const [wedding, setWedding] = useState([]);
  const [luxury, setLuxury] = useState([]);
  const [attraction, setAttraction] = useState([]);
  const [chauffeur, setChauffeur] = useState([]);
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Add this line

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSearchTerm(country); // Set the search term to the selected country
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handlePersonSelect = (selectedPerson) => {
    const selectedText = `${selectedPerson} Travellers`;
    // Do something with the selectedText, such as displaying it or storing it in a state variable.
  };
  const handleSearchClick = () => {
    // const countryElement = document.querySelector('.countrySelect');
  
    // // Check if the selectedCountry is empty or null
    // if (!selectedCountry || selectedCountry.trim() === '') {
    //   // Add the class countryClassError if selectedCountry is empty or null
    //   countryElement?.classList.add('countryClassError');
    // } else {
    //   // Remove the class countryClassError if selectedCountry is not empty
    //   countryElement?.classList.remove('countryClassError');
    // }
  
    // if (selectedCountry) {
    //   const encodedCountry = encodeURIComponent(selectedCountry.replace(/\s+/g, '-').toLowerCase());
      navigate(`/tour/dubai`);
    // }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const tabSection = document.querySelector(".tabSection");
      const formobile = document.querySelector(".formobile");
      const homepageContent = document.querySelector(".homepageContent");

      if (window.scrollY > 568) {
        homepageContent.classList.add("ondesSticky");
      } else {
        homepageContent.classList.remove("ondesSticky");
      }

      if (window.scrollY > 300) {
        homepageContent.classList.add("searchSticky");
      } else {
        homepageContent.classList.remove("searchSticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const searchValue = () => {

  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:9900/cat/3');
        const data = await response.json();
        setTours(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:9900/cat/4');
        const data = await response.json();
        setLuxury(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:9900/cat/12');
        const data = await response.json();
        setWedding(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:9900/cat/15');
        const data = await response.json();
        setAttraction(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:9900/cat/16');
        const data = await response.json();
        setChauffeur(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:9900/cat/14');
        const data = await response.json();
        setPrivates(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch('http://127.0.0.1:9900/welcome', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          setUserType(data.data.user_type); // Set user type from login API
          setUserDiscount(data.data.discount); // Set user discount from login API
        })
        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://127.0.0.1:9900/destanition/list');
        const data = await response.json();
        if (data.status === 'success') {
          setDestinations(data.data);
        }
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div className={`homepageContent`}>
      <div >

        <div > {/* Changed class to className */}
          <div className="BannerTabSection"> {/* Changed class to className */}
            <div className="TabImg" style={{ backgroundImage: 'url(images/homepage/banner.png)' }}> {/* Used inline style with double curly braces */}
              <div className="container">
                <div className="BannerContent">
                  <span>Unforgateful!</span>
                  <h1>Dubai Memories</h1>
                  <p>Real travelers. Real stories. Real opinions to help you make the right choice.</p>
                  <div className="fordesktop">
                    <div className="bannerSearch">
                      <div className="bannerSearchWrapper">
                        <div className="whereto countrySelect">
                          <div className="wheretoIN ">
                            <div className="iconwithText">
                              <div className="icon">
                              </div>
                              <div className="Text">
                                <div className="toptext">Where to?</div>
                                <div className="bottomtext">
                                  <SearchableSelect
                                    options={destinations.map((destination) => destination.destination_name)}
                                    placeholder="Select Destination"
                                    onSelect={handleCountrySelect} // You may need to adjust the onSelect callback if needed
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="selectdate">
                          <div className="selectdateIN ">
                            <div className="iconwithText">
                              <div className="icon">
                              </div>
                              <div className="Text">
                                <div className="toptext">When to?</div>
                                <DatePicker
                                  selected={selectedDate}
                                  onChange={(date) => setSelectedDate(date)}
                                  minDate={new Date()}
                                  placeholderText="Select Date"
                                  customInput={
                                    <input
                                      style={{
                                        border: "none",
                                        outline: "none",
                                      }}
                                    />
                                  }
                                />


                              </div>
                            </div>
                          </div>
                        </div>

                        

                        {/* Replace the <button> with a <Link> */}
                        <div className="SearchBtn">
                          <button onClick={handleSearchClick} className="searchIcon"></button>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="formobile">
                    <div className="container">
                      <div className="searchFixedWrapper" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                        aria-controls="offcanvasTop">
                        <div className="searchinputformobile">
                          <button type="submit" className="SearchIconInput"> </button>
                          <input type="text" value="" onChange={searchValue} placeholder="Search for a place or activity" />
                        </div>
                      </div>

                      <div className="offcanvas offcanvas-top SearchPopupForMob" tabIndex="9" id="offcanvasTop"
                        aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                          <h5 id="offcanvasTopLabel">Change your search</h5>
                          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                          <div className="SearchPopupForMobInner">
                            <div className="searchinputformobile popupSearchbar">
                              <button type="submit" className="SearchIconInput"> </button>
                              <SearchableSelect
                                options={destinations.map((destination) => destination.destination_name)}
                                placeholder="Select Destination"
                                onSelect={handleCountrySelect} // You may need to adjust the onSelect callback if needed
                              />
                            </div>

                            <div className="SelectdateField">
                              <div className="calendarIcon"></div>
                              <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                minDate={new Date()}
                                placeholderText="Select Date"
                                customInput={
                                  <input
                                    style={{
                                      border: "none",
                                      outline: "none",
                                    }}
                                  />
                                }
                              />
                            </div>

                            

                            <div className="PopupSubmitBtn">

                              {/* Replace the <button> with a <Link> */}
                              <button onClick={handleSearchClick} className="searchIcon">Search</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tabSection">

        
      </div>
    </div>
  );

  function getUserPrice(tour) {
    let price = 0;

    if (userType === 2) {
        // Agent user type
        price =
            selectedCurrency === "AED"
                ? tour.tour_price_aed - (tour.tour_price_aed * userDiscount) / 100
                : tour.tour_price_usd - (tour.tour_price_usd * userDiscount) / 100;
    } else if (userType === 3) {
        // Normal user type
        price = selectedCurrency === "AED" ? tour.tour_price_aed : tour.tour_price_usd;
    } else {
        // Default case (handle other user types if needed)
        price = selectedCurrency === "AED" ? tour.tour_price_aed :  tour.tour_price_usd;
    }

    // Remove decimal part
    return Math.floor(price);
}

}
const mapStateToProps = (state) => ({
selectedCurrency: state.currency.selectedCurrency,
// ... (other state mappings)
});

export default connect(mapStateToProps)(Banner);

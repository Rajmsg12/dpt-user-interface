import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import '../TourPage/Style/TourPage.css'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Person } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed.svg";
import { ReactComponent as House } from "bootstrap-icons/icons/house.svg";
import config from '../../config';

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

  // Include the search term in filtered options
  const filteredOptions = [
    searchTerm,
    ...options
      .filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 4), // Adjust the number of options as needed
  ];

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


const InnerHeader = () => {
  const search = () => {

  }
  const navigate = useNavigate()
  const [first_name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchCountry, setSearchCountry] = useState('');
  const [userType, setUserType] = useState(null);
  const [userDiscount, setUserDiscount] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState('');
  const [destinations, setDestinations] = useState([]);

  const handleCountrySearch = (country) => {
    setSearchCountry(country);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handlePersonSelect = (selectedPerson) => {
    const selectedText = `${selectedPerson} Travellers`;
    // Do something with the selectedText, such as displaying it or storing it in a state variable.
  };
  const handleSearchClick = (e) => {
    e.preventDefault()
    // If you want the page to reload, do not prevent the default form submission behavior
    if (searchCountry) {
      const encodedCountry = encodeURIComponent(searchCountry.replace(/\s+/g, '-').toLowerCase());
      navigate(`/tour/${encodedCountry}`);
      window.location.reload();
    }
  };
  
  

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(`${config.baseUrl}/destanition/list`);
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const tabSection = document.querySelector(".tabSection");
  //     const formobile = document.querySelector(".formobile");
  //     const homepageContent = document.querySelector(".homepageContent");

  //     if (window.scrollY > 568) {
  //       homepageContent.classList.add("ondesSticky");
  //     } else {
  //       homepageContent.classList.remove("ondesSticky");
  //     }

  //     if (window.scrollY > 300) {
  //       homepageContent.classList.add("searchSticky");
  //     } else {
  //       homepageContent.classList.remove("searchSticky");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${config.baseUrl}/welcome`, {
        headers: {
          Authorization: `Bearer ${token}`
        }

      })

        .then(response => response.json())

        .then(data => {

          setUserName(data.data.first_name);
          setEmail(data.data.email);
          setIsLoggedIn(true);
        })

        .catch(error => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleLogout = () => {
    fetch(`${config.baseUrl}/logout`, {
      method: 'POST',
    })
      .then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('first_name');
        setIsLoggedIn(false);
      })
      .catch(error => {
        console.error('Logout failed', error);
      });
  };
  return (
    <div>
      <header className="innerpageHeader"> {/* Use className instead of class */}
        <div className="innerHeader"> {/* Use className instead of class */}
          <div className="container"> {/* Use className instead of class */}
            <div className="innerHeaderWrapper"> {/* Use className instead of class */}
              <div className="HeaderLHS"> {/* Use className instead of class */}
                <div className="Logo"> {/* Use className instead of class */}
                  <Link to="/">
                    <img src={"https://res.cloudinary.com/dqslvlm0d/image/upload/v1697702175/innerlogo_u1xrls.png"} alt="" />
                  </Link>
                </div>
                <div className="HeaderSearch"> {/* Use className instead of class */}
                  <form className="form"> {/* Use className instead of class */}
                    <SearchableSelect
                      options={destinations.map((destination) => destination.destination_name)}
                      placeholder="Search"
                      onSelect={handleCountrySearch} // You may need to adjust the onSelect callback if needed
                    />
                    <button onClick={(e) => handleSearchClick(e)} className="SearchIcon"></button>

                  </form>
                </div>
              </div>
              {/* HeaderLHS */}
              <div className="HeaderRHS"> {/* Use className instead of class */}
                <div className="Headerdropdownmenu"> {/* Use className instead of class */}
                  <div className="dropdown"> {/* Use className instead of class */}
                    <Link to="" className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> ENG </Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <Link to="" className="dropdown-item" href="#">Spanish</Link>
                      </li>
                      <li>
                        <Link to="" className="dropdown-item" href="#">French</Link>
                      </li>
                      <li>
                        <Link to="" className="dropdown-item" href="#">German</Link>
                      </li>
                    </ul>
                  </div>
               {/*  <div className="dropdown"> {/* Use className instead of class 
                    <Link to="" className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> AED </Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <Link to="" className="dropdown-item" href="#">USD $</Link>
                      </li>
                    </ul>
  </div> */}
                </div>
                {/* Headerdropdownmenu */}
                <div className="addtocart"> {/* Use className instead of class */}
                  <Link to="/cart" className="cart"></Link>
                  <Link to="/wishlist" className="wishlist"></Link>

                  <div className="dropdown userIcon">
                    <Link className="btn userIconTag dropdown-toggle" to="/" role="button" id="userIcon" data-bs-toggle="dropdown" aria-expanded="false"></Link>
                    <ul className="dropdown-menu" aria-labelledby="userIcon">

                      {isLoggedIn ? (
                        <div>
                          <Link to="/user-dashboard" className="dropdown-item">
                            <div >
                              <Person className="text-danger" />
                              <span className="userName" style={{ color: "black" }}>{first_name}</span>
                            </div>
                          </Link>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link to="/bookings" className="dropdown-item">
                              <House className="text-danger" /> Bookings
                            </Link>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <Link className="dropdown-item" onClick={handleLogout}>
                              <IconDoorClosedFill className="text-danger" /> Logout
                            </Link>
                          </li>
                        </div>

                      ) : (
                        <Link to="/login" className="dropdown-item">Login/SignUp</Link>
                      )}


                    </ul>
                  </div>
                </div>
                {/* addtocart */}
              </div>
              {/* HeaderRHS */}
            </div>
            {/* innerHeaderWrapper */}
          </div>
          {/* container */}
        </div>
        {/* innerHeader */}
      </header>
    </div>
  );
};

export default InnerHeader;

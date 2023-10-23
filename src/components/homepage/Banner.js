import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../../Style/header.css'
import { data } from '../../data/index'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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



const Banner = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');
  const navigate = useNavigate();

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handlePersonSelect = (selectedPerson) => {
    const selectedText = `${selectedPerson} Travellers`;
    // Do something with the selectedText, such as displaying it or storing it in a state variable.
  };
  const handleSearchClick = () => {
    const countryElement = document.querySelector('.countrySelect');
    const dateElement = document.querySelector('.datePicker');
    const personElement = document.querySelector('.personSelect');

    if (!selectedCountry) {
      countryElement?.classList.add('countryClassError');
    } else {
      countryElement?.classList.remove('countryClassError');
    }

    // if (!selectedDate) {
    //   dateElement?.classList.add('classDateError');
    // } else {
    //   dateElement?.classList.remove('classDateError');
    // }

    if (!selectedPerson) {
      personElement?.classList.add('classPersonError');
    } else {
      personElement?.classList.remove('classPersonError');
    }

    if (selectedCountry && selectedPerson) {
      // This condition should work for navigation.
      const lowerCaseSelectedCountry = selectedCountry.toLowerCase()
      // navigate(`/tours/${lowerCaseSelectedCountry}`);
      navigate(`/tours`);
    }
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
                                    options={data.bannerSearchCountry.map((item) => item.country)}
                                    placeholder="Select Country"
                                    onSelect={handleCountrySelect}
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

                        <div className="selectperson personSelect">
                          <div className="selectpersonIN ">
                            <div className="iconwithText">
                              <div className="icon">
                              </div>
                              <div className="Text">
                                <div className="toptext">Select Persons</div>
                                <div className="bottomtext">
                                  <SearchableSelect
                                    options={data.bannerSelectPerson.map((item) => item.person)}
                                    placeholder="1 Traveller"
                                    onSelect={(person) => {
                                      setSelectedPerson(person);
                                      handlePersonSelect(person);
                                    }}
                                  />
                                </div>
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
                              <input type="text" value="" onChange={searchValue} placeholder="Search for a place or activity" />
                            </div>

                            <div className="SelectdateField">
                              <div className="calendarIcon"></div>
                              <input type="text" placeholder="Select Dates" />
                            </div>

                            <div className="SelectpeopleField">
                              <div className="UserIcon"></div>
                              <input type="text" placeholder="Select Persons" />
                            </div>

                            <div className="PopupSubmitBtn">

                              {/* Replace the <button> with a <Link> */}
                              <Link to="/">Search</Link>
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

        <div className="tabstycky">
          <div className="container">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-privatejet-tab" data-bs-toggle="tab"
                  data-bs-target="#nav-privatejet" type="button" role="tab" aria-controls="nav-privatejet"
                  aria-selected="true"><img src="images/homepage/jet.png" alt="" />Private jet</button>
                <button className="nav-link" id="nav-weddingonyatch-tab" data-bs-toggle="tab"
                  data-bs-target="#nav-weddingonyatch" type="button" role="tab" aria-controls="nav-weddingonyatch"
                  aria-selected="false"><img src="images/homepage/yatch.png" alt="" />Wedding on yatch</button>
                <button className="nav-link" id="nav-luxurytour-tab" data-bs-toggle="tab" data-bs-target="#nav-luxurytour"
                  type="button" role="tab" aria-controls="nav-luxurytour" aria-selected="false"><img
                    src="images/diamond.png" alt="" />Luxury Tours</button>
                <button className="nav-link" id="nav-privatetour-tab" data-bs-toggle="tab" data-bs-target="#nav-privatetour"
                  type="button" role="tab" aria-controls="nav-privatetour" aria-selected="false"><img
                    src="images/tour-guide.png" alt="" />Private Tour</button>
                <button className="nav-link" id="nav-attractiontickets-tab" data-bs-toggle="tab"
                  data-bs-target="#nav-attractiontickets" type="button" role="tab" aria-controls="nav-attractiontickets"
                  aria-selected="false"><img src="images/homepage/ticket.png" alt="" />Attraction Tickets</button>
                <button className="nav-link" id="nav-chauffeur-tab" data-bs-toggle="tab" data-bs-target="#nav-chauffeur"
                  type="button" role="tab" aria-controls="nav-chauffeur" aria-selected="false"><img
                    src="images/taxi-driver.png" alt="" />Chauffeur</button>
              </div>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-privatejet" role="tabpanel"
              aria-labelledby="nav-privatejet-tab">

              <div className="Title">
                <h2>Private Jet</h2>
              </div>

              <div className="TabLayer">
                <div className="TabWrapper">
                  {data.privateJet.map((item, index) => {
                    const titleWithHyphens = decodeURIComponent(item.title).replace(/ /g, '-').toLowerCase(); // Declare it here

                    return (
                      <Link to={`/private-jet/${titleWithHyphens}`} className="TabBox" key={index}>
                        <div className="img">
                          <img src={item.imgSrc} alt="" />
                          <div className="discountrow">
                            <div className="discount">
                              <span>{item.discount}</span>
                            </div>
                            <div className="wishlistIcon">
                              {item.wishlistIcon}
                            </div>
                          </div>

                          <div className="imgBottomRow">
                            <div className="rhsimg">
                              <div>
                                <img src={item.imgBottomRow.rhsimg} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="TabBoxBody">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                          <div className="ReviewRow">
                            <span className="location">{item.location}</span>
                          </div>
                        </div>
                        <div className="TabBoxFooter">
                          <div className="aedLHS">
                            <span>Starting from</span>
                            <div className="aedtext">AED <strong>{item.money}</strong> Per {item.person} Person</div>
                          </div>
                          <div className="aedRHS">{item.duration}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>




            </div>
            <div className="tab-pane fade" id="nav-weddingonyatch" role="tabpanel" aria-labelledby="nav-weddingonyatch-tab">
              <div className="Title">
                <h2>Wedding on yatch</h2>
                <div className="TabLayer">
                  <div className="TabWrapper">
                    {data.weddingYatch.map((item, index) => {
                      const titleWithHyphens = decodeURIComponent(item.title).replace(/ /g, '-').toLowerCase();
                      return (
                        <Link to={`/wedding-on-yacht/${titleWithHyphens}`} className="TabBox" key={index}>
                          <div className="img">
                            <img src={item.imgSrc} alt="" />
                            <div className="discountrow">
                              <div className="discount">
                                <span>{item.discount}</span>
                              </div>
                              <div className="wishlistIcon">
                                {item.wishlistIcon}
                              </div>
                            </div>

                            <div className="imgBottomRow">
                              <div className="rhsimg">
                                <div>
                                  <img src={item.imgBottomRow.rhsimg} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="TabBoxBody">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className="ReviewRow">
                              <span className="location">{item.location}</span>
                            </div>
                          </div>
                          <div className="TabBoxFooter">
                            <div className="aedLHS">
                              <span>Starting from</span>
                              <div className="aedtext">AED <strong>{item.money}</strong> Per {item.person} Person</div>
                            </div>
                            <div className="aedRHS">{item.duration}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                </div>

              </div>
            </div>
            <div className="tab-pane fade" id="nav-luxurytour" role="tabpanel" aria-labelledby="nav-luxurytour-tab">
              <div className="Title">
                <h2>Luxury Tours</h2>
              </div>
              <div className="TabLayer">
                <div className="TabWrapper">
                  {data.privateJet.map((item, index) => {
                    const titleWithHyphens = decodeURIComponent(item.title).replace(/ /g, '-').toLowerCase();
                    return (
                      <Link to={`/luxury-tours/${titleWithHyphens}`} className="TabBox" key={index}>
                        <div className="img">
                          <img src={item.imgSrc} alt="" />
                          <div className="discountrow">
                            <div className="discount">
                              <span>{item.discount}</span>
                            </div>
                            <div className="wishlistIcon">
                              {item.wishlistIcon}
                            </div>
                          </div>

                          <div className="imgBottomRow">
                            <div className="rhsimg">
                              <div>
                                <img src={item.imgBottomRow.rhsimg} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="TabBoxBody">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                          <div className="ReviewRow">
                            <span className="location">{item.location}</span>
                          </div>
                        </div>
                        <div className="TabBoxFooter">
                          <div className="aedLHS">
                            <span>Starting from</span>
                            <div className="aedtext">AED <strong>{item.money}</strong> Per {item.person} Person</div>
                          </div>
                          <div className="aedRHS">{item.duration}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

              </div>

            </div>
            <div className="tab-pane fade" id="nav-privatetour" role="tabpanel" aria-labelledby="nav-privatetour-tab">
              <div className="Title">
                <h2>Private Tour</h2>
                <div className="TabLayer">
                  <div className="TabWrapper">
                    {data.privateJet.map((item, index) => {
                      const titleWithHyphens = decodeURIComponent(item.title).replace(/ /g, '-').toLowerCase();
                      return (
                        <Link to={`/private-tour/${titleWithHyphens}`} className="TabBox" key={index}>
                          <div className="img">
                            <img src={item.imgSrc} alt="" />
                            <div className="discountrow">
                              <div className="discount">
                                <span>{item.discount}</span>
                              </div>
                              <div className="wishlistIcon">
                                {item.wishlistIcon}
                              </div>
                            </div>

                            <div className="imgBottomRow">
                              <div className="rhsimg">
                                <div>
                                  <img src={item.imgBottomRow.rhsimg} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="TabBoxBody">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className="ReviewRow">
                              <span className="location">{item.location}</span>
                            </div>
                          </div>
                          <div className="TabBoxFooter">
                            <div className="aedLHS">
                              <span>Starting from</span>
                              <div className="aedtext">AED <strong>{item.money}</strong> Per {item.person} Person</div>
                            </div>
                            <div className="aedRHS">{item.duration}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-attractiontickets" role="tabpanel" aria-labelledby="nav-attractiontickets-tab">
              <div className="Title">
                <h2>Attraction Tickets</h2>
                <div className="TabLayer">
                  <div className="TabWrapper">
                    {data.privateJet.map((item, index) => {
                      // Move this line outside of the map function
                      const titleWithHyphens = decodeURIComponent(item.title).replace(/ /g, '-').toLowerCase();
                      return (
                        <Link to={`/attraction-tickets/${titleWithHyphens}`} className="TabBox" key={index}>
                          <div className="img">
                            <img src={item.imgSrc} alt="" />
                            <div className="discountrow">
                              <div className="discount">
                                <span>{item.discount}</span>
                              </div>
                              <div className="wishlistIcon">
                                {item.wishlistIcon}
                              </div>
                            </div>

                            <div className="imgBottomRow">
                              <div className="rhsimg">
                                <div>
                                  <img src={item.imgBottomRow.rhsimg} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="TabBoxBody">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className="ReviewRow">
                              <span className="location">{item.location}</span>
                            </div>
                          </div>
                          <div className="TabBoxFooter">
                            <div className="aedLHS">
                              <span>Starting from</span>
                              <div className="aedtext">AED <strong>{item.money}</strong> Per {item.person} Person</div>
                            </div>
                            <div className="aedRHS">{item.duration}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="nav-chauffeur" role="tabpanel" aria-labelledby="nav-chauffeur-tab">
              <div className="Title">
                <h2>Chauffeur</h2>
                <div className="TabLayer">
                  <div className="TabWrapper">
                    {data.privateJet.map((item, index) => {
                      const titleWithHyphens = decodeURIComponent(item.title).replace(/ /g, '-').toLowerCase();
                      return (
                        <Link to={`/chauffeur/${titleWithHyphens}`} className="TabBox" key={index}>
                          <div className="img">
                            <img src={item.imgSrc} alt="" />
                            <div className="discountrow">
                              <div className="discount">
                                <span>{item.discount}</span>
                              </div>
                              <div className="wishlistIcon">
                                {item.wishlistIcon}
                              </div>
                            </div>

                            <div className="imgBottomRow">
                              <div className="rhsimg">
                                <div>
                                  <img src={item.imgBottomRow.rhsimg} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="TabBoxBody">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className="ReviewRow">
                              <span className="location">{item.location}</span>
                            </div>
                          </div>
                          <div className="TabBoxFooter">
                            <div className="aedLHS">
                              <span>Starting from</span>
                              <div className="aedtext">AED <strong>{item.money}</strong> Per {item.person} Person</div>
                            </div>
                            <div className="aedRHS">{item.duration}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

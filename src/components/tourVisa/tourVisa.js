import React from 'react'
import './style/style.css'
import { Link } from 'react-router-dom'
import AskQuestion from './AskQuestion'
import VisaLHS from './visaLHS'

const tourVisa = () => {
    return (
        <div>
            <div className="TouristVisaPage">
                <div className="container">
                    <div className="TouristVisaPageWrapper">
                       <VisaLHS/>
                        {/*TouristVisaLhs*/}
                        <div className="TouristVisaRhs">
                            <div className="TouristVisaTabSection">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="pills-applyuaetouristvisa-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-applyuaetouristvisa"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-applyuaetouristvisa"
                                            aria-selected="true"
                                        >
                                            Apply UAE Tourist Visa
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-aboutuaetouristvisa-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-aboutuaetouristvisa"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-aboutuaetouristvisa"
                                            aria-selected="false"
                                        >
                                            About UAE tourist Visa
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-aboutuaeresidencevisa-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-aboutuaeresidencevisa"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-aboutuaeresidencevisa"
                                            aria-selected="false"
                                        >
                                            About UAE Residence visa
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="pills-qskquestions-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-qskquestions"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-qskquestions"
                                            aria-selected="false"
                                        >
                                            Ask Questions
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-applyuaetouristvisa"
                                        role="tabpanel"
                                        aria-labelledby="pills-applyuaetouristvisa-tab"
                                    >
                                        <div className="TouristVisaTabInner">
                                            <div className="TouristVisaForm">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup">
                                                                <label>Name*</label>
                                                                <input type="text" placeholder="Name" required="" />
                                                            </div>
                                                        </div>
                                                        {/*col-md-6*/}
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup">
                                                                <label>Email*</label>
                                                                <input type="text" placeholder="Email" required="" />
                                                            </div>
                                                        </div>
                                                        {/*col-md-6*/}
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup">
                                                                <label>Country Code*</label>
                                                                <select name="isd_code" data-bv-field="isd_code">
                                                                    {" "}
                                                                    <option value="">Select Code</option>{" "}
                                                                    <option value={+93}> Afghanistan (+93) </option>{" "}
                                                                    <option value={+355}> Albania (+355) </option>{" "}
                                                                    <option value={+213}> Algeria (+213) </option>{" "}
                                                                    <option value={+684}>
                                                                        {" "}
                                                                        American Samoa (+684){" "}
                                                                    </option>{" "}
                                                                    <option value={+376}> Andorra (+376) </option>{" "}
                                                                    <option value={+244}> Angola (+244) </option>{" "}
                                                                    <option value={+1}> Anguilla (+1) </option>{" "}
                                                                    <option value={+1}>
                                                                        {" "}
                                                                        Antigua and Barbuda (+1){" "}
                                                                    </option>{" "}
                                                                    <option value={+54}> Argentina (+54) </option>{" "}
                                                                    <option value={+374}> Armenia (+374) </option>{" "}
                                                                    <option value={+297}> Aruba (+297) </option>{" "}
                                                                    <option value={+61}> Australia (+61) </option>{" "}
                                                                    <option value={+43}> Austria (+43) </option>{" "}
                                                                    <option value={+994}> Azerbaijan (+994) </option>{" "}
                                                                    <option value={+1}> Bahamas (+1) </option>{" "}
                                                                    <option value={+973}> Bahrain (+973) </option>{" "}
                                                                    <option value={+880}> Bangladesh (+880) </option>{" "}
                                                                    <option value={+1}> Barbados (+1) </option>{" "}
                                                                    <option value={+32}> Belgium (+32) </option>{" "}
                                                                    <option value={+501}> Belize (+501) </option>{" "}
                                                                    <option value={+229}> Benin (+229) </option>{" "}
                                                                    <option value={+1}> Bermuda (+1) </option>{" "}
                                                                    <option value={+975}> Bhutan (+975) </option>{" "}
                                                                    <option value={+591}> Bolivia (+591) </option>{" "}
                                                                    <option value={+387}> Bosnia (+387) </option>{" "}
                                                                    <option value={+267}> Botswana (+267) </option>{" "}
                                                                    <option value={+55}> Brazil (+55) </option>{" "}
                                                                    <option value={+55}>
                                                                        {" "}
                                                                        British Virgin Islands (+55){" "}
                                                                    </option>{" "}
                                                                    <option value={+673}> Brunei (+673) </option>{" "}
                                                                    <option value={+359}> Bulgaria (+359) </option>{" "}
                                                                    <option value="+"> Burkina Faso (+) </option>{" "}
                                                                    <option value={+226}> Burundi (+226) </option>{" "}
                                                                    <option value={+855}> Cambodia (+855) </option>{" "}
                                                                    <option value={+237}> Cameroon (+237) </option>{" "}
                                                                    <option value={+1}> Canada (+1) </option>{" "}
                                                                    <option value={+238}> Cape Verde (+238) </option>{" "}
                                                                    <option value={+1}> Cayman Islands (+1) </option>{" "}
                                                                    <option value={+236}>
                                                                        {" "}
                                                                        Central African Republic (+236){" "}
                                                                    </option>{" "}
                                                                    <option value={+235}> Chad (+235) </option>{" "}
                                                                    <option value={+56}> Chile (+56) </option>{" "}
                                                                    <option value={+86}> China (+86) </option>{" "}
                                                                    <option value={+61}>
                                                                        {" "}
                                                                        Christmas Island (+61){" "}
                                                                    </option>{" "}
                                                                    <option value={+57}> Colombia (+57) </option>{" "}
                                                                    <option value={+269}> Comoros (+269) </option>{" "}
                                                                    <option value={+682}> Cook Islands (+682) </option>{" "}
                                                                    <option value={+506}> Costa Rica (+506) </option>{" "}
                                                                    <option value={+225}> Cote_d'Ivoire (+225) </option>{" "}
                                                                    <option value={+385}> Croatia (+385) </option>{" "}
                                                                    <option value={+53}> Cuba (+53) </option>{" "}
                                                                    <option value={+357}> Cyprus (+357) </option>{" "}
                                                                    <option value={+420}>
                                                                        {" "}
                                                                        Czech Republic (+420){" "}
                                                                    </option>{" "}
                                                                    <option value={+243}>
                                                                        {" "}
                                                                        Democratic Republic of the Congo (+243){" "}
                                                                    </option>{" "}
                                                                    <option value={+45}> Denmark (+45) </option>{" "}
                                                                    <option value={+253}> Djibouti (+253) </option>{" "}
                                                                    <option value={+1}> Dominica (+1) </option>{" "}
                                                                    <option value={+1}>
                                                                        {" "}
                                                                        Dominican Republic (+1){" "}
                                                                    </option>{" "}
                                                                    <option value={+593}> Ecuador (+593) </option>{" "}
                                                                    <option value={+20}> Egypt (+20) </option>{" "}
                                                                    <option value={+503}> El Salvador (+503) </option>{" "}
                                                                    <option value={+240}>
                                                                        {" "}
                                                                        Equatorial_Guinea (+240){" "}
                                                                    </option>{" "}
                                                                    <option value={+291}> Eritrea (+291) </option>{" "}
                                                                    <option value={+372}> Estonia (+372) </option>{" "}
                                                                    <option value={+251}> Ethiopia (+251) </option>{" "}
                                                                    <option value={+500}>
                                                                        {" "}
                                                                        Falkland Islands (+500){" "}
                                                                    </option>{" "}
                                                                    <option value={+298}>
                                                                        {" "}
                                                                        Faroe Islands (+298){" "}
                                                                    </option>{" "}
                                                                    <option value={+679}> Fiji (+679) </option>{" "}
                                                                    <option value={+358}> Finland (+358) </option>{" "}
                                                                    <option value={+33}> France (+33) </option>{" "}
                                                                    <option value={+689}>
                                                                        {" "}
                                                                        French Polynesi (+689){" "}
                                                                    </option>{" "}
                                                                    <option value={+241}> Gabon (+241) </option>{" "}
                                                                    <option value={+220}> Gambia (+220) </option>{" "}
                                                                    <option value={+995}> Georgia (+995) </option>{" "}
                                                                    <option value={+49}> Germany (+49) </option>{" "}
                                                                    <option value={+233}> Ghana (+233) </option>{" "}
                                                                    <option value={+350}> Gibraltar (+350) </option>{" "}
                                                                    <option value={+30}> Greece (+30) </option>{" "}
                                                                    <option value={+299}> Greenland (+299) </option>{" "}
                                                                    <option value={+1}> Grenada (+1) </option>{" "}
                                                                    <option value={+1}> Guam (+1) </option>{" "}
                                                                    <option value={+502}> Guatemala (+502) </option>{" "}
                                                                    <option value={+224}> Guinea (+224) </option>{" "}
                                                                    <option value={+245}> Guinea Bissau (+245) </option>{" "}
                                                                    <option value={+592}> Guyana (+592) </option>{" "}
                                                                    <option value={+509}> Haiti (+509) </option>{" "}
                                                                    <option value={+504}> Honduras (+504) </option>{" "}
                                                                    <option value={+852}> Hong Kong (+852) </option>{" "}
                                                                    <option value={+36}> Hungary (+36) </option>{" "}
                                                                    <option value={+354}> Iceland (+354) </option>{" "}
                                                                    <option value={+91}> India (+91) </option>{" "}
                                                                    <option value={+62}> Indonesia (+62) </option>{" "}
                                                                    <option value={+98}> Iran (+98) </option>{" "}
                                                                    <option value={+964}> Iraq (+964) </option>{" "}
                                                                    <option value={+353}> Ireland (+353) </option>{" "}
                                                                    <option value={+972}> Israel (+972) </option>{" "}
                                                                    <option value={+39}> Italy (+39) </option>{" "}
                                                                    <option value={+1}> Jamaica (+1) </option>{" "}
                                                                    <option value={+81}> Japan (+81) </option>{" "}
                                                                    <option value={+962}> Jordan (+962) </option>{" "}
                                                                    <option value={+7}> Kazakhstan (+7) </option>{" "}
                                                                    <option value={+254}> Kenya (+254) </option>{" "}
                                                                    <option value={+686}> Kiribati (+686) </option>{" "}
                                                                    <option value={+965}> Kuwait (+965) </option>{" "}
                                                                    <option value={+996}> Kyrgyzstan (+996) </option>{" "}
                                                                    <option value={+856}> Laos (+856) </option>{" "}
                                                                    <option value={+371}> Latvia (+371) </option>{" "}
                                                                    <option value={+961}> Lebanon (+961) </option>{" "}
                                                                    <option value={+266}> Lesotho (+266) </option>{" "}
                                                                    <option value={+231}> Liberia (+231) </option>{" "}
                                                                    <option value={+218}> Libya (+218) </option>{" "}
                                                                    <option value={+423}> Liechtenstein (+423) </option>{" "}
                                                                    <option value={+370}> Lithuania (+370) </option>{" "}
                                                                    <option value={+352}> Luxembourg (+352) </option>{" "}
                                                                    <option value={+853}> Macao (+853) </option>{" "}
                                                                    <option value={+389}> Macedonia (+389) </option>{" "}
                                                                    <option value={+261}> Madagascar (+261) </option>{" "}
                                                                    <option value={+265}> Malawi (+265) </option>{" "}
                                                                    <option value={+60}> Malaysia (+60) </option>{" "}
                                                                    <option value={+960}> Maldives (+960) </option>{" "}
                                                                    <option value={+223}> Mali (+223) </option>{" "}
                                                                    <option value={+356}> Malta (+356) </option>{" "}
                                                                    <option value={+692}>
                                                                        {" "}
                                                                        Marshall_Islands (+692){" "}
                                                                    </option>{" "}
                                                                    <option value={+596}>
                                                                        {" "}
                                                                        Martinique (+596){" "}
                                                                    </option>{" "}
                                                                    <option value={+222}>
                                                                        {" "}
                                                                        Mauritania (+222){" "}
                                                                    </option>{" "}
                                                                    <option value={+230}>
                                                                        {" "}
                                                                        Mauritius (+230){" "}
                                                                    </option>{" "}
                                                                    <option value={+52}> Mexico (+52) </option>{" "}
                                                                    <option value={+691}> Micronesia (+691) </option>{" "}
                                                                    <option value={+373}> Moldova (+373) </option>{" "}
                                                                    <option value={+377}> Monaco (+377) </option>{" "}
                                                                    <option value={+976}> Mongolia (+976) </option>{" "}
                                                                    <option value={+1}> Montserrat (+1) </option>{" "}
                                                                    <option value={+212}> Morocco (+212) </option>{" "}
                                                                    <option value={+258}> Mozambique (+258) </option>{" "}
                                                                    <option value={+95}> Myanmar (+95) </option>{" "}
                                                                    <option value={+264}> Namibia (+264) </option>{" "}
                                                                    <option value={+674}> Nauru (+674) </option>{" "}
                                                                    <option value={+977}> Nepal (+977) </option>{" "}
                                                                    <option value={+31}> Netherlands (+31) </option>{" "}
                                                                    <option value={+599}>
                                                                        {" "}
                                                                        Netherlands Antilles (+599){" "}
                                                                    </option>{" "}
                                                                    <option value={+64}>
                                                                        {" "}
                                                                        New Zealand (+64){" "}
                                                                    </option>{" "}
                                                                    <option value={+505}>
                                                                        {" "}
                                                                        Nicaragua (+505){" "}
                                                                    </option>{" "}
                                                                    <option value={+227}> Niger (+227) </option>{" "}
                                                                    <option value={+234}> Nigeria (+234) </option>{" "}
                                                                    <option value={+683}> Niue (+683) </option>{" "}
                                                                    <option value={+672}>
                                                                        {" "}
                                                                        Norfolk Island (+672){" "}
                                                                    </option>{" "}
                                                                    <option value={+850}>
                                                                        {" "}
                                                                        North Korea (+850){" "}
                                                                    </option>{" "}
                                                                    <option value={+47}> Norway (+47) </option>{" "}
                                                                    <option value={+968}> Oman (+968) </option>{" "}
                                                                    <option value={+92}> Pakistan (+92) </option>{" "}
                                                                    <option value={+680}> Palau (+680) </option>{" "}
                                                                    <option value={+507}> Panama (+507) </option>{" "}
                                                                    <option value={+675}>
                                                                        {" "}
                                                                        Papua New Guinea (+675){" "}
                                                                    </option>{" "}
                                                                    <option value={+595}> Paraguay (+595) </option>{" "}
                                                                    <option value={+51}> Peru (+51) </option>{" "}
                                                                    <option value={+63}> Philippines (+63) </option>{" "}
                                                                    <option value={+649}>
                                                                        {" "}
                                                                        Pitcairn Islands (+649){" "}
                                                                    </option>{" "}
                                                                    <option value={+48}> Poland (+48) </option>{" "}
                                                                    <option value={+351}> Portugal (+351) </option>{" "}
                                                                    <option value={+1}> Puerto Rico (+1) </option>{" "}
                                                                    <option value={+974}> Qatar (+974) </option>{" "}
                                                                    <option value={+243}>
                                                                        {" "}
                                                                        Republic of the Congo (+243){" "}
                                                                    </option>{" "}
                                                                    <option value={+40}> Romania (+40) </option>{" "}
                                                                    <option value={+7}>
                                                                        {" "}
                                                                        Russian Federation (+7){" "}
                                                                    </option>{" "}
                                                                    <option value={+250}> Rwanda (+250) </option>{" "}
                                                                    <option value={+1}>
                                                                        {" "}
                                                                        Saint Kitts and Nevis (+1){" "}
                                                                    </option>{" "}
                                                                    <option value={+1}> Saint Lucia (+1) </option>{" "}
                                                                    <option value={+508}> Saint Pierre (+508) </option>{" "}
                                                                    <option value="+1-784">
                                                                        {" "}
                                                                        Saint Vicent and the Grenadines (+1-784){" "}
                                                                    </option>{" "}
                                                                    <option value={+685}> Samoa (+685) </option>{" "}
                                                                    <option value={+378}> San Marino (+378) </option>{" "}
                                                                    <option value={+239}>
                                                                        {" "}
                                                                        Sao Tom? and Pr?ncipe (+239){" "}
                                                                    </option>{" "}
                                                                    <option value={+966}>
                                                                        {" "}
                                                                        Saudi Arabia (+966){" "}
                                                                    </option>{" "}
                                                                    <option value={+221}> Senegal (+221) </option>{" "}
                                                                    <option value={+381}>
                                                                        {" "}
                                                                        Serbia and Montenegro (+381){" "}
                                                                    </option>{" "}
                                                                    <option value={+248}>
                                                                        {" "}
                                                                        Seychelles (+248){" "}
                                                                    </option>{" "}
                                                                    <option value={+232}>
                                                                        {" "}
                                                                        Sierra Leone (+232){" "}
                                                                    </option>{" "}
                                                                    <option value={+65}> Singapore (+65) </option>{" "}
                                                                    <option value={+421}> Slovakia (+421) </option>{" "}
                                                                    <option value={+386}> Slovenia (+386) </option>{" "}
                                                                    <option value={+677}>
                                                                        {" "}
                                                                        Soloman Islands (+677){" "}
                                                                    </option>{" "}
                                                                    <option value={+252}> Somalia (+252) </option>{" "}
                                                                    <option value={+27}> South Africa (+27) </option>{" "}
                                                                    <option value={+44}> South Georgia (+44) </option>{" "}
                                                                    <option value={+82}> South Korea (+82) </option>{" "}
                                                                    <option value="+ 7"> Soviet Union (+ 7) </option>{" "}
                                                                    <option value={+34}> Spain (+34) </option>{" "}
                                                                    <option value={+94}> Sri Lanka (+94) </option>{" "}
                                                                    <option value={+249}> Sudan (+249) </option>{" "}
                                                                    <option value={+597}> Suriname (+597) </option>{" "}
                                                                    <option value={+268}> Swaziland (+268) </option>{" "}
                                                                    <option value={+46}> Sweden (+46) </option>{" "}
                                                                    <option value={+41}> Switzerland (+41) </option>{" "}
                                                                    <option value={+963}> Syria (+963) </option>{" "}
                                                                    <option value={+886}> Taiwan (+886) </option>{" "}
                                                                    <option value={+992}> Tajikistan (+992) </option>{" "}
                                                                    <option value={+255}> Tanzania (+255) </option>{" "}
                                                                    <option value={+66}> Thailand (+66) </option>{" "}
                                                                    <option value={+670}> Timor Leste (+670) </option>{" "}
                                                                    <option value={+228}> Togo (+228) </option>{" "}
                                                                    <option value={+676}> Tonga (+676) </option>{" "}
                                                                    <option value={+1}>
                                                                        {" "}
                                                                        Trinidad and Tobago (+1){" "}
                                                                    </option>{" "}
                                                                    <option value={+216}> Tunisia (+216) </option>{" "}
                                                                    <option value={+90}> Turkey (+90) </option>{" "}
                                                                    <option value={+993}> Turkmenistan (+993) </option>{" "}
                                                                    <option value={+1}>
                                                                        {" "}
                                                                        Turks and Caicos Islands (+1){" "}
                                                                    </option>{" "}
                                                                    <option value={+688}> Tuvalu (+688) </option>{" "}
                                                                    <option value={+256}> Uganda (+256) </option>{" "}
                                                                    <option value={+380}> Ukraine (+380) </option>{" "}
                                                                    <option value={+971}>
                                                                        {" "}
                                                                        United Arab Emirates (+971){" "}
                                                                    </option>{" "}
                                                                    <option value={+44}>
                                                                        {" "}
                                                                        United Kingdom (+44){" "}
                                                                    </option>{" "}
                                                                    <option value={+1}>
                                                                        {" "}
                                                                        United States Of America (+1){" "}
                                                                    </option>{" "}
                                                                    <option value={+598}> Uruguay (+598) </option>{" "}
                                                                    <option value={+340}>
                                                                        {" "}
                                                                        US Virgin Islands (+340){" "}
                                                                    </option>{" "}
                                                                    <option value={+998}>
                                                                        {" "}
                                                                        Uzbekistan (+998){" "}
                                                                    </option>{" "}
                                                                    <option value={+678}> Vanuatu (+678) </option>{" "}
                                                                    <option value={+379}> Vatican City (+379) </option>{" "}
                                                                    <option value={+58}> Venezuela (+58) </option>{" "}
                                                                    <option value={+84}> Vietnam (+84) </option>{" "}
                                                                    <option value={+681}>
                                                                        {" "}
                                                                        Wallis And Futuna (+681){" "}
                                                                    </option>{" "}
                                                                    <option value={+967}> Yemen (+967) </option>{" "}
                                                                    <option value={+381}> Yugoslavia (+381) </option>{" "}
                                                                    <option value={+967}> Zambia (+967) </option>{" "}
                                                                    <option value={+263}> Zimbabwe (+263) </option>{" "}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        {/*col-md-6*/}
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup">
                                                                <label>Cell No*</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Contact Number"
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                        {/*col-md-6*/}
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup">
                                                                <label>Nationality*</label>
                                                                <select
                                                                    name="nationality"
                                                                    id="nat"
                                                                    data-bv-field="nationality"
                                                                    required=""
                                                                >
                                                                    {" "}
                                                                    <option value="">Select</option>{" "}
                                                                    <option value="Afghanistan">Afghanistan</option>{" "}
                                                                    <option value="Albania">Albania</option>{" "}
                                                                    <option value="Algeria">Algeria</option>{" "}
                                                                    <option value="American Samoa">
                                                                        American Samoa
                                                                    </option>{" "}
                                                                    <option value="Andorra">Andorra</option>{" "}
                                                                    <option value="Angola">Angola</option>{" "}
                                                                    <option value="Anguilla">Anguilla</option>{" "}
                                                                    <option value="Antigua and Barbuda">
                                                                        Antigua and Barbuda
                                                                    </option>{" "}
                                                                    <option value="Argentina">Argentina</option>{" "}
                                                                    <option value="Armenia">Armenia</option>{" "}
                                                                    <option value="Aruba">Aruba</option>{" "}
                                                                    <option value="Australia">Australia</option>{" "}
                                                                    <option value="Austria">Austria</option>{" "}
                                                                    <option value="Azerbaijan">Azerbaijan</option>{" "}
                                                                    <option value="Bahamas">Bahamas</option>{" "}
                                                                    <option value="Bahrain">Bahrain</option>{" "}
                                                                    <option value="Bangladesh">Bangladesh</option>{" "}
                                                                    <option value="Barbados">Barbados</option>{" "}
                                                                    <option value="Belgium">Belgium</option>{" "}
                                                                    <option value="Belize">Belize</option>{" "}
                                                                    <option value="Benin">Benin</option>{" "}
                                                                    <option value="Bermuda">Bermuda</option>{" "}
                                                                    <option value="Bhutan">Bhutan</option>{" "}
                                                                    <option value="Bolivia">Bolivia</option>{" "}
                                                                    <option value="Bosnia">Bosnia</option>{" "}
                                                                    <option value="Botswana">Botswana</option>{" "}
                                                                    <option value="Brazil">Brazil</option>{" "}
                                                                    <option value="British Virgin Islands">
                                                                        British Virgin Islands
                                                                    </option>{" "}
                                                                    <option value="Brunei">Brunei</option>{" "}
                                                                    <option value="Bulgaria">Bulgaria</option>{" "}
                                                                    <option value="Burkina Faso">Burkina Faso</option>{" "}
                                                                    <option value="Burundi">Burundi</option>{" "}
                                                                    <option value="Cambodia">Cambodia</option>{" "}
                                                                    <option value="Cameroon">Cameroon</option>{" "}
                                                                    <option value="Canada">Canada</option>{" "}
                                                                    <option value="Cape Verde">Cape Verde</option>{" "}
                                                                    <option value="Cayman Islands">
                                                                        Cayman Islands
                                                                    </option>{" "}
                                                                    <option value="Central African Republic">
                                                                        Central African Republic
                                                                    </option>{" "}
                                                                    <option value="Chad">Chad</option>{" "}
                                                                    <option value="Chile">Chile</option>{" "}
                                                                    <option value="China">China</option>{" "}
                                                                    <option value="Christmas Island">
                                                                        Christmas Island
                                                                    </option>{" "}
                                                                    <option value="Colombia">Colombia</option>{" "}
                                                                    <option value="Comoros">Comoros</option>{" "}
                                                                    <option value="Cook Islands">Cook Islands</option>{" "}
                                                                    <option value="Costa Rica">Costa Rica</option>{" "}
                                                                    <option value="Cote_d'Ivoire">Cote_d'Ivoire</option>{" "}
                                                                    <option value="Croatia">Croatia</option>{" "}
                                                                    <option value="Cuba">Cuba</option>{" "}
                                                                    <option value="Cyprus">Cyprus</option>{" "}
                                                                    <option value="Czech Republic">
                                                                        Czech Republic
                                                                    </option>{" "}
                                                                    <option value="Democratic Republic of the Congo">
                                                                        Democratic Republic of the Congo
                                                                    </option>{" "}
                                                                    <option value="Denmark">Denmark</option>{" "}
                                                                    <option value="Djibouti">Djibouti</option>{" "}
                                                                    <option value="Dominica">Dominica</option>{" "}
                                                                    <option value="Dominican Republic">
                                                                        Dominican Republic
                                                                    </option>{" "}
                                                                    <option value="Ecuador">Ecuador</option>{" "}
                                                                    <option value="Egypt">Egypt</option>{" "}
                                                                    <option value="El Salvador">El Salvador</option>{" "}
                                                                    <option value="Equatorial_Guinea">
                                                                        Equatorial_Guinea
                                                                    </option>{" "}
                                                                    <option value="Eritrea">Eritrea</option>{" "}
                                                                    <option value="Estonia">Estonia</option>{" "}
                                                                    <option value="Ethiopia">Ethiopia</option>{" "}
                                                                    <option value="Falkland Islands">
                                                                        Falkland Islands
                                                                    </option>{" "}
                                                                    <option value="Faroe Islands">Faroe Islands</option>{" "}
                                                                    <option value="Fiji">Fiji</option>{" "}
                                                                    <option value="Finland">Finland</option>{" "}
                                                                    <option value="France">France</option>{" "}
                                                                    <option value="French Polynesi">
                                                                        French Polynesi
                                                                    </option>{" "}
                                                                    <option value="Gabon">Gabon</option>{" "}
                                                                    <option value="Gambia">Gambia</option>{" "}
                                                                    <option value="Georgia">Georgia</option>{" "}
                                                                    <option value="Germany">Germany</option>{" "}
                                                                    <option value="Ghana">Ghana</option>{" "}
                                                                    <option value="Gibraltar">Gibraltar</option>{" "}
                                                                    <option value="Greece">Greece</option>{" "}
                                                                    <option value="Greenland">Greenland</option>{" "}
                                                                    <option value="Grenada">Grenada</option>{" "}
                                                                    <option value="Guam">Guam</option>{" "}
                                                                    <option value="Guatemala">Guatemala</option>{" "}
                                                                    <option value="Guinea">Guinea</option>{" "}
                                                                    <option value="Guinea Bissau">Guinea Bissau</option>{" "}
                                                                    <option value="Guyana">Guyana</option>{" "}
                                                                    <option value="Haiti">Haiti</option>{" "}
                                                                    <option value="Honduras">Honduras</option>{" "}
                                                                    <option value="Hong Kong">Hong Kong</option>{" "}
                                                                    <option value="Hungary">Hungary</option>{" "}
                                                                    <option value="Iceland">Iceland</option>{" "}
                                                                    <option value="India">India</option>{" "}
                                                                    <option value="Indonesia">Indonesia</option>{" "}
                                                                    <option value="Iran">Iran</option>{" "}
                                                                    <option value="Iraq">Iraq</option>{" "}
                                                                    <option value="Ireland">Ireland</option>{" "}
                                                                    <option value="Israel">Israel</option>{" "}
                                                                    <option value="Italy">Italy</option>{" "}
                                                                    <option value="Jamaica">Jamaica</option>{" "}
                                                                    <option value="Japan">Japan</option>{" "}
                                                                    <option value="Jordan">Jordan</option>{" "}
                                                                    <option value="Kazakhstan">Kazakhstan</option>{" "}
                                                                    <option value="Kenya">Kenya</option>{" "}
                                                                    <option value="Kiribati">Kiribati</option>{" "}
                                                                    <option value="Kuwait">Kuwait</option>{" "}
                                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>{" "}
                                                                    <option value="Laos">Laos</option>{" "}
                                                                    <option value="Latvia">Latvia</option>{" "}
                                                                    <option value="Lebanon">Lebanon</option>{" "}
                                                                    <option value="Lesotho">Lesotho</option>{" "}
                                                                    <option value="Liberia">Liberia</option>{" "}
                                                                    <option value="Libya">Libya</option>{" "}
                                                                    <option value="Liechtenstein">Liechtenstein</option>{" "}
                                                                    <option value="Lithuania">Lithuania</option>{" "}
                                                                    <option value="Luxembourg">Luxembourg</option>{" "}
                                                                    <option value="Macao">Macao</option>{" "}
                                                                    <option value="Macedonia">Macedonia</option>{" "}
                                                                    <option value="Madagascar">Madagascar</option>{" "}
                                                                    <option value="Malawi">Malawi</option>{" "}
                                                                    <option value="Malaysia">Malaysia</option>{" "}
                                                                    <option value="Maldives">Maldives</option>{" "}
                                                                    <option value="Mali">Mali</option>{" "}
                                                                    <option value="Malta">Malta</option>{" "}
                                                                    <option value="Marshall_Islands">
                                                                        Marshall_Islands
                                                                    </option>{" "}
                                                                    <option value="Martinique">Martinique</option>{" "}
                                                                    <option value="Mauritania">Mauritania</option>{" "}
                                                                    <option value="Mauritius">Mauritius</option>{" "}
                                                                    <option value="Mexico">Mexico</option>{" "}
                                                                    <option value="Micronesia">Micronesia</option>{" "}
                                                                    <option value="Moldova">Moldova</option>{" "}
                                                                    <option value="Monaco">Monaco</option>{" "}
                                                                    <option value="Mongolia">Mongolia</option>{" "}
                                                                    <option value="Montserrat">Montserrat</option>{" "}
                                                                    <option value="Morocco">Morocco</option>{" "}
                                                                    <option value="Mozambique">Mozambique</option>{" "}
                                                                    <option value="Myanmar">Myanmar</option>{" "}
                                                                    <option value="Namibia">Namibia</option>{" "}
                                                                    <option value="Nauru">Nauru</option>{" "}
                                                                    <option value="Nepal">Nepal</option>{" "}
                                                                    <option value="Netherlands">Netherlands</option>{" "}
                                                                    <option value="Netherlands Antilles">
                                                                        Netherlands Antilles
                                                                    </option>{" "}
                                                                    <option value="New Zealand">New Zealand</option>{" "}
                                                                    <option value="Nicaragua">Nicaragua</option>{" "}
                                                                    <option value="Niger">Niger</option>{" "}
                                                                    <option value="Nigeria">Nigeria</option>{" "}
                                                                    <option value="Niue">Niue</option>{" "}
                                                                    <option value="Norfolk Island">
                                                                        Norfolk Island
                                                                    </option>{" "}
                                                                    <option value="North Korea">North Korea</option>{" "}
                                                                    <option value="Norway">Norway</option>{" "}
                                                                    <option value="Oman">Oman</option>{" "}
                                                                    <option value="Pakistan">Pakistan</option>{" "}
                                                                    <option value="Palau">Palau</option>{" "}
                                                                    <option value="Panama">Panama</option>{" "}
                                                                    <option value="Papua New Guinea">
                                                                        Papua New Guinea
                                                                    </option>{" "}
                                                                    <option value="Paraguay">Paraguay</option>{" "}
                                                                    <option value="Peru">Peru</option>{" "}
                                                                    <option value="Philippines">Philippines</option>{" "}
                                                                    <option value="Pitcairn Islands">
                                                                        Pitcairn Islands
                                                                    </option>{" "}
                                                                    <option value="Poland">Poland</option>{" "}
                                                                    <option value="Portugal">Portugal</option>{" "}
                                                                    <option value="Puerto Rico">Puerto Rico</option>{" "}
                                                                    <option value="Qatar">Qatar</option>{" "}
                                                                    <option value="Republic of the Congo">
                                                                        Republic of the Congo
                                                                    </option>{" "}
                                                                    <option value="Romania">Romania</option>{" "}
                                                                    <option value="Russian Federation">
                                                                        Russian Federation
                                                                    </option>{" "}
                                                                    <option value="Rwanda">Rwanda</option>{" "}
                                                                    <option value="Saint Kitts and Nevis">
                                                                        Saint Kitts and Nevis
                                                                    </option>{" "}
                                                                    <option value="Saint Lucia">Saint Lucia</option>{" "}
                                                                    <option value="Saint Pierre">Saint Pierre</option>{" "}
                                                                    <option value="Saint Vicent and the Grenadines">
                                                                        Saint Vicent and the Grenadines
                                                                    </option>{" "}
                                                                    <option value="Samoa">Samoa</option>{" "}
                                                                    <option value="San Marino">San Marino</option>{" "}
                                                                    <option value="Sao Tom? and Pr?ncipe">
                                                                        Sao Tom? and Pr?ncipe
                                                                    </option>{" "}
                                                                    <option value="Saudi Arabia">Saudi Arabia</option>{" "}
                                                                    <option value="Senegal">Senegal</option>{" "}
                                                                    <option value="Serbia and Montenegro">
                                                                        Serbia and Montenegro
                                                                    </option>{" "}
                                                                    <option value="Seychelles">Seychelles</option>{" "}
                                                                    <option value="Sierra Leone">Sierra Leone</option>{" "}
                                                                    <option value="Singapore">Singapore</option>{" "}
                                                                    <option value="Slovakia">Slovakia</option>{" "}
                                                                    <option value="Slovenia">Slovenia</option>{" "}
                                                                    <option value="Soloman Islands">
                                                                        Soloman Islands
                                                                    </option>{" "}
                                                                    <option value="Somalia">Somalia</option>{" "}
                                                                    <option value="South Africa">South Africa</option>{" "}
                                                                    <option value="South Georgia">South Georgia</option>{" "}
                                                                    <option value="South Korea">South Korea</option>{" "}
                                                                    <option value="Soviet Union">Soviet Union</option>{" "}
                                                                    <option value="Spain">Spain</option>{" "}
                                                                    <option value="Sri Lanka">Sri Lanka</option>{" "}
                                                                    <option value="Sudan">Sudan</option>{" "}
                                                                    <option value="Suriname">Suriname</option>{" "}
                                                                    <option value="Swaziland">Swaziland</option>{" "}
                                                                    <option value="Sweden">Sweden</option>{" "}
                                                                    <option value="Switzerland">Switzerland</option>{" "}
                                                                    <option value="Syria">Syria</option>{" "}
                                                                    <option value="Taiwan">Taiwan</option>{" "}
                                                                    <option value="Tajikistan">Tajikistan</option>{" "}
                                                                    <option value="Tanzania">Tanzania</option>{" "}
                                                                    <option value="Thailand">Thailand</option>{" "}
                                                                    <option value="Timor Leste">Timor Leste</option>{" "}
                                                                    <option value="Togo">Togo</option>{" "}
                                                                    <option value="Tonga">Tonga</option>{" "}
                                                                    <option value="Trinidad and Tobago">
                                                                        Trinidad and Tobago
                                                                    </option>{" "}
                                                                    <option value="Tunisia">Tunisia</option>{" "}
                                                                    <option value="Turkey">Turkey</option>{" "}
                                                                    <option value="Turkmenistan">Turkmenistan</option>{" "}
                                                                    <option value="Turks and Caicos Islands">
                                                                        Turks and Caicos Islands
                                                                    </option>{" "}
                                                                    <option value="Tuvalu">Tuvalu</option>{" "}
                                                                    <option value="Uganda">Uganda</option>{" "}
                                                                    <option value="Ukraine">Ukraine</option>{" "}
                                                                    <option value="United Arab Emirates">
                                                                        United Arab Emirates
                                                                    </option>{" "}
                                                                    <option value="United Kingdom">
                                                                        United Kingdom
                                                                    </option>{" "}
                                                                    <option value="United States Of America">
                                                                        United States Of America
                                                                    </option>{" "}
                                                                    <option value="Uruguay">Uruguay</option>{" "}
                                                                    <option value="US Virgin Islands">
                                                                        US Virgin Islands
                                                                    </option>{" "}
                                                                    <option value="Uzbekistan">Uzbekistan</option>{" "}
                                                                    <option value="Vanuatu">Vanuatu</option>{" "}
                                                                    <option value="Vatican City">Vatican City</option>{" "}
                                                                    <option value="Venezuela">Venezuela</option>{" "}
                                                                    <option value="Vietnam">Vietnam</option>{" "}
                                                                    <option value="Wallis And Futuna">
                                                                        Wallis And Futuna
                                                                    </option>{" "}
                                                                    <option value="Yemen">Yemen</option>{" "}
                                                                    <option value="Yugoslavia ">Yugoslavia </option>{" "}
                                                                    <option value="Zambia">Zambia</option>{" "}
                                                                    <option value="Zimbabwe">Zimbabwe</option>{" "}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        {/*col-md-6*/}
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup">
                                                                <label>Nationality*</label>
                                                                <select
                                                                    name="nationality"
                                                                    id="nat"
                                                                    data-bv-field="nationality"
                                                                    required=""
                                                                >
                                                                    {" "}
                                                                    <option value="">Select</option>{" "}
                                                                    <option value="Afghanistan">Afghanistan</option>{" "}
                                                                    <option value="Albania">Albania</option>{" "}
                                                                    <option value="Algeria">Algeria</option>{" "}
                                                                    <option value="American Samoa">
                                                                        American Samoa
                                                                    </option>{" "}
                                                                    <option value="Andorra">Andorra</option>{" "}
                                                                    <option value="Angola">Angola</option>{" "}
                                                                    <option value="Anguilla">Anguilla</option>{" "}
                                                                    <option value="Antigua and Barbuda">
                                                                        Antigua and Barbuda
                                                                    </option>{" "}
                                                                    <option value="Argentina">Argentina</option>{" "}
                                                                    <option value="Armenia">Armenia</option>{" "}
                                                                    <option value="Aruba">Aruba</option>{" "}
                                                                    <option value="Australia">Australia</option>{" "}
                                                                    <option value="Austria">Austria</option>{" "}
                                                                    <option value="Azerbaijan">Azerbaijan</option>{" "}
                                                                    <option value="Bahamas">Bahamas</option>{" "}
                                                                    <option value="Bahrain">Bahrain</option>{" "}
                                                                    <option value="Bangladesh">Bangladesh</option>{" "}
                                                                    <option value="Barbados">Barbados</option>{" "}
                                                                    <option value="Belgium">Belgium</option>{" "}
                                                                    <option value="Belize">Belize</option>{" "}
                                                                    <option value="Benin">Benin</option>{" "}
                                                                    <option value="Bermuda">Bermuda</option>{" "}
                                                                    <option value="Bhutan">Bhutan</option>{" "}
                                                                    <option value="Bolivia">Bolivia</option>{" "}
                                                                    <option value="Bosnia">Bosnia</option>{" "}
                                                                    <option value="Botswana">Botswana</option>{" "}
                                                                    <option value="Brazil">Brazil</option>{" "}
                                                                    <option value="British Virgin Islands">
                                                                        British Virgin Islands
                                                                    </option>{" "}
                                                                    <option value="Brunei">Brunei</option>{" "}
                                                                    <option value="Bulgaria">Bulgaria</option>{" "}
                                                                    <option value="Burkina Faso">Burkina Faso</option>{" "}
                                                                    <option value="Burundi">Burundi</option>{" "}
                                                                    <option value="Cambodia">Cambodia</option>{" "}
                                                                    <option value="Cameroon">Cameroon</option>{" "}
                                                                    <option value="Canada">Canada</option>{" "}
                                                                    <option value="Cape Verde">Cape Verde</option>{" "}
                                                                    <option value="Cayman Islands">
                                                                        Cayman Islands
                                                                    </option>{" "}
                                                                    <option value="Central African Republic">
                                                                        Central African Republic
                                                                    </option>{" "}
                                                                    <option value="Chad">Chad</option>{" "}
                                                                    <option value="Chile">Chile</option>{" "}
                                                                    <option value="China">China</option>{" "}
                                                                    <option value="Christmas Island">
                                                                        Christmas Island
                                                                    </option>{" "}
                                                                    <option value="Colombia">Colombia</option>{" "}
                                                                    <option value="Comoros">Comoros</option>{" "}
                                                                    <option value="Cook Islands">Cook Islands</option>{" "}
                                                                    <option value="Costa Rica">Costa Rica</option>{" "}
                                                                    <option value="Cote_d'Ivoire">Cote_d'Ivoire</option>{" "}
                                                                    <option value="Croatia">Croatia</option>{" "}
                                                                    <option value="Cuba">Cuba</option>{" "}
                                                                    <option value="Cyprus">Cyprus</option>{" "}
                                                                    <option value="Czech Republic">
                                                                        Czech Republic
                                                                    </option>{" "}
                                                                    <option value="Democratic Republic of the Congo">
                                                                        Democratic Republic of the Congo
                                                                    </option>{" "}
                                                                    <option value="Denmark">Denmark</option>{" "}
                                                                    <option value="Djibouti">Djibouti</option>{" "}
                                                                    <option value="Dominica">Dominica</option>{" "}
                                                                    <option value="Dominican Republic">
                                                                        Dominican Republic
                                                                    </option>{" "}
                                                                    <option value="Ecuador">Ecuador</option>{" "}
                                                                    <option value="Egypt">Egypt</option>{" "}
                                                                    <option value="El Salvador">El Salvador</option>{" "}
                                                                    <option value="Equatorial_Guinea">
                                                                        Equatorial_Guinea
                                                                    </option>{" "}
                                                                    <option value="Eritrea">Eritrea</option>{" "}
                                                                    <option value="Estonia">Estonia</option>{" "}
                                                                    <option value="Ethiopia">Ethiopia</option>{" "}
                                                                    <option value="Falkland Islands">
                                                                        Falkland Islands
                                                                    </option>{" "}
                                                                    <option value="Faroe Islands">Faroe Islands</option>{" "}
                                                                    <option value="Fiji">Fiji</option>{" "}
                                                                    <option value="Finland">Finland</option>{" "}
                                                                    <option value="France">France</option>{" "}
                                                                    <option value="French Polynesi">
                                                                        French Polynesi
                                                                    </option>{" "}
                                                                    <option value="Gabon">Gabon</option>{" "}
                                                                    <option value="Gambia">Gambia</option>{" "}
                                                                    <option value="Georgia">Georgia</option>{" "}
                                                                    <option value="Germany">Germany</option>{" "}
                                                                    <option value="Ghana">Ghana</option>{" "}
                                                                    <option value="Gibraltar">Gibraltar</option>{" "}
                                                                    <option value="Greece">Greece</option>{" "}
                                                                    <option value="Greenland">Greenland</option>{" "}
                                                                    <option value="Grenada">Grenada</option>{" "}
                                                                    <option value="Guam">Guam</option>{" "}
                                                                    <option value="Guatemala">Guatemala</option>{" "}
                                                                    <option value="Guinea">Guinea</option>{" "}
                                                                    <option value="Guinea Bissau">Guinea Bissau</option>{" "}
                                                                    <option value="Guyana">Guyana</option>{" "}
                                                                    <option value="Haiti">Haiti</option>{" "}
                                                                    <option value="Honduras">Honduras</option>{" "}
                                                                    <option value="Hong Kong">Hong Kong</option>{" "}
                                                                    <option value="Hungary">Hungary</option>{" "}
                                                                    <option value="Iceland">Iceland</option>{" "}
                                                                    <option value="India">India</option>{" "}
                                                                    <option value="Indonesia">Indonesia</option>{" "}
                                                                    <option value="Iran">Iran</option>{" "}
                                                                    <option value="Iraq">Iraq</option>{" "}
                                                                    <option value="Ireland">Ireland</option>{" "}
                                                                    <option value="Israel">Israel</option>{" "}
                                                                    <option value="Italy">Italy</option>{" "}
                                                                    <option value="Jamaica">Jamaica</option>{" "}
                                                                    <option value="Japan">Japan</option>{" "}
                                                                    <option value="Jordan">Jordan</option>{" "}
                                                                    <option value="Kazakhstan">Kazakhstan</option>{" "}
                                                                    <option value="Kenya">Kenya</option>{" "}
                                                                    <option value="Kiribati">Kiribati</option>{" "}
                                                                    <option value="Kuwait">Kuwait</option>{" "}
                                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>{" "}
                                                                    <option value="Laos">Laos</option>{" "}
                                                                    <option value="Latvia">Latvia</option>{" "}
                                                                    <option value="Lebanon">Lebanon</option>{" "}
                                                                    <option value="Lesotho">Lesotho</option>{" "}
                                                                    <option value="Liberia">Liberia</option>{" "}
                                                                    <option value="Libya">Libya</option>{" "}
                                                                    <option value="Liechtenstein">Liechtenstein</option>{" "}
                                                                    <option value="Lithuania">Lithuania</option>{" "}
                                                                    <option value="Luxembourg">Luxembourg</option>{" "}
                                                                    <option value="Macao">Macao</option>{" "}
                                                                    <option value="Macedonia">Macedonia</option>{" "}
                                                                    <option value="Madagascar">Madagascar</option>{" "}
                                                                    <option value="Malawi">Malawi</option>{" "}
                                                                    <option value="Malaysia">Malaysia</option>{" "}
                                                                    <option value="Maldives">Maldives</option>{" "}
                                                                    <option value="Mali">Mali</option>{" "}
                                                                    <option value="Malta">Malta</option>{" "}
                                                                    <option value="Marshall_Islands">
                                                                        Marshall_Islands
                                                                    </option>{" "}
                                                                    <option value="Martinique">Martinique</option>{" "}
                                                                    <option value="Mauritania">Mauritania</option>{" "}
                                                                    <option value="Mauritius">Mauritius</option>{" "}
                                                                    <option value="Mexico">Mexico</option>{" "}
                                                                    <option value="Micronesia">Micronesia</option>{" "}
                                                                    <option value="Moldova">Moldova</option>{" "}
                                                                    <option value="Monaco">Monaco</option>{" "}
                                                                    <option value="Mongolia">Mongolia</option>{" "}
                                                                    <option value="Montserrat">Montserrat</option>{" "}
                                                                    <option value="Morocco">Morocco</option>{" "}
                                                                    <option value="Mozambique">Mozambique</option>{" "}
                                                                    <option value="Myanmar">Myanmar</option>{" "}
                                                                    <option value="Namibia">Namibia</option>{" "}
                                                                    <option value="Nauru">Nauru</option>{" "}
                                                                    <option value="Nepal">Nepal</option>{" "}
                                                                    <option value="Netherlands">Netherlands</option>{" "}
                                                                    <option value="Netherlands Antilles">
                                                                        Netherlands Antilles
                                                                    </option>{" "}
                                                                    <option value="New Zealand">New Zealand</option>{" "}
                                                                    <option value="Nicaragua">Nicaragua</option>{" "}
                                                                    <option value="Niger">Niger</option>{" "}
                                                                    <option value="Nigeria">Nigeria</option>{" "}
                                                                    <option value="Niue">Niue</option>{" "}
                                                                    <option value="Norfolk Island">
                                                                        Norfolk Island
                                                                    </option>{" "}
                                                                    <option value="North Korea">North Korea</option>{" "}
                                                                    <option value="Norway">Norway</option>{" "}
                                                                    <option value="Oman">Oman</option>{" "}
                                                                    <option value="Pakistan">Pakistan</option>{" "}
                                                                    <option value="Palau">Palau</option>{" "}
                                                                    <option value="Panama">Panama</option>{" "}
                                                                    <option value="Papua New Guinea">
                                                                        Papua New Guinea
                                                                    </option>{" "}
                                                                    <option value="Paraguay">Paraguay</option>{" "}
                                                                    <option value="Peru">Peru</option>{" "}
                                                                    <option value="Philippines">Philippines</option>{" "}
                                                                    <option value="Pitcairn Islands">
                                                                        Pitcairn Islands
                                                                    </option>{" "}
                                                                    <option value="Poland">Poland</option>{" "}
                                                                    <option value="Portugal">Portugal</option>{" "}
                                                                    <option value="Puerto Rico">Puerto Rico</option>{" "}
                                                                    <option value="Qatar">Qatar</option>{" "}
                                                                    <option value="Republic of the Congo">
                                                                        Republic of the Congo
                                                                    </option>{" "}
                                                                    <option value="Romania">Romania</option>{" "}
                                                                    <option value="Russian Federation">
                                                                        Russian Federation
                                                                    </option>{" "}
                                                                    <option value="Rwanda">Rwanda</option>{" "}
                                                                    <option value="Saint Kitts and Nevis">
                                                                        Saint Kitts and Nevis
                                                                    </option>{" "}
                                                                    <option value="Saint Lucia">Saint Lucia</option>{" "}
                                                                    <option value="Saint Pierre">Saint Pierre</option>{" "}
                                                                    <option value="Saint Vicent and the Grenadines">
                                                                        Saint Vicent and the Grenadines
                                                                    </option>{" "}
                                                                    <option value="Samoa">Samoa</option>{" "}
                                                                    <option value="San Marino">San Marino</option>{" "}
                                                                    <option value="Sao Tom? and Pr?ncipe">
                                                                        Sao Tom? and Pr?ncipe
                                                                    </option>{" "}
                                                                    <option value="Saudi Arabia">Saudi Arabia</option>{" "}
                                                                    <option value="Senegal">Senegal</option>{" "}
                                                                    <option value="Serbia and Montenegro">
                                                                        Serbia and Montenegro
                                                                    </option>{" "}
                                                                    <option value="Seychelles">Seychelles</option>{" "}
                                                                    <option value="Sierra Leone">Sierra Leone</option>{" "}
                                                                    <option value="Singapore">Singapore</option>{" "}
                                                                    <option value="Slovakia">Slovakia</option>{" "}
                                                                    <option value="Slovenia">Slovenia</option>{" "}
                                                                    <option value="Soloman Islands">
                                                                        Soloman Islands
                                                                    </option>{" "}
                                                                    <option value="Somalia">Somalia</option>{" "}
                                                                    <option value="South Africa">South Africa</option>{" "}
                                                                    <option value="South Georgia">South Georgia</option>{" "}
                                                                    <option value="South Korea">South Korea</option>{" "}
                                                                    <option value="Soviet Union">Soviet Union</option>{" "}
                                                                    <option value="Spain">Spain</option>{" "}
                                                                    <option value="Sri Lanka">Sri Lanka</option>{" "}
                                                                    <option value="Sudan">Sudan</option>{" "}
                                                                    <option value="Suriname">Suriname</option>{" "}
                                                                    <option value="Swaziland">Swaziland</option>{" "}
                                                                    <option value="Sweden">Sweden</option>{" "}
                                                                    <option value="Switzerland">Switzerland</option>{" "}
                                                                    <option value="Syria">Syria</option>{" "}
                                                                    <option value="Taiwan">Taiwan</option>{" "}
                                                                    <option value="Tajikistan">Tajikistan</option>{" "}
                                                                    <option value="Tanzania">Tanzania</option>{" "}
                                                                    <option value="Thailand">Thailand</option>{" "}
                                                                    <option value="Timor Leste">Timor Leste</option>{" "}
                                                                    <option value="Togo">Togo</option>{" "}
                                                                    <option value="Tonga">Tonga</option>{" "}
                                                                    <option value="Trinidad and Tobago">
                                                                        Trinidad and Tobago
                                                                    </option>{" "}
                                                                    <option value="Tunisia">Tunisia</option>{" "}
                                                                    <option value="Turkey">Turkey</option>{" "}
                                                                    <option value="Turkmenistan">Turkmenistan</option>{" "}
                                                                    <option value="Turks and Caicos Islands">
                                                                        Turks and Caicos Islands
                                                                    </option>{" "}
                                                                    <option value="Tuvalu">Tuvalu</option>{" "}
                                                                    <option value="Uganda">Uganda</option>{" "}
                                                                    <option value="Ukraine">Ukraine</option>{" "}
                                                                    <option value="United Arab Emirates">
                                                                        United Arab Emirates
                                                                    </option>{" "}
                                                                    <option value="United Kingdom">
                                                                        United Kingdom
                                                                    </option>{" "}
                                                                    <option value="United States Of America">
                                                                        United States Of America
                                                                    </option>{" "}
                                                                    <option value="Uruguay">Uruguay</option>{" "}
                                                                    <option value="US Virgin Islands">
                                                                        US Virgin Islands
                                                                    </option>{" "}
                                                                    <option value="Uzbekistan">Uzbekistan</option>{" "}
                                                                    <option value="Vanuatu">Vanuatu</option>{" "}
                                                                    <option value="Vatican City">Vatican City</option>{" "}
                                                                    <option value="Venezuela">Venezuela</option>{" "}
                                                                    <option value="Vietnam">Vietnam</option>{" "}
                                                                    <option value="Wallis And Futuna">
                                                                        Wallis And Futuna
                                                                    </option>{" "}
                                                                    <option value="Yemen">Yemen</option>{" "}
                                                                    <option value="Yugoslavia ">Yugoslavia </option>{" "}
                                                                    <option value="Zambia">Zambia</option>{" "}
                                                                    <option value="Zimbabwe">Zimbabwe</option>{" "}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        {/*col-md-6*/}
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup">
                                                                <label>Arrival Date*</label>
                                                                <input
                                                                    type="date"
                                                                    placeholder="Arrival Date"
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                        {/*col-md-6*/}
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup">
                                                                <label>Departure Date*</label>
                                                                <input
                                                                    type="date"
                                                                    placeholder="Departure Date"
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                        {/*col-md-6*/}
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup">
                                                                <label>No of People*</label>
                                                                <input
                                                                    type="text"
                                                                    placeholder="No. of People*"
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                        {/*col-md-6*/}
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup">
                                                                <label>How Did You Discover Us*</label>
                                                                <select
                                                                    id="hdu"
                                                                    name="how_discover_us"
                                                                    data-bv-field="how_discover_us"
                                                                    required=""
                                                                >
                                                                    {" "}
                                                                    <option value="">Select</option>{" "}
                                                                    <option value="Google Search">Google Search</option>{" "}
                                                                    <option value="Trip adviser">Trip adviser</option>{" "}
                                                                    <option value="Recommended by friend/relatives">
                                                                        Recommended by friend/relatives
                                                                    </option>{" "}
                                                                    <option value="Other">Other</option>{" "}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        {/*col-md-6*/}
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup fileattach">
                                                                <label>
                                                                    Upload Hotel Booking*{" "}
                                                                    <small>(You can choose multiple files here)</small>
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    multiple=""
                                                                    data-bv-field="hotel_booking[]"
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3 formGroup fileattach">
                                                                <label>
                                                                    Upload Your Flight Ticket*{" "}
                                                                    <small>(You can choose multiple files here)</small>
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    name="flight_ticket[]"
                                                                    multiple=""
                                                                    data-bv-field="flight_ticket[]"
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3 formGroup fileattach">
                                                                <label>
                                                                    Upload Passport Copy{" "}
                                                                    <small>(You can choose multiple files here)</small>
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    name="passport_copy[]"
                                                                    multiple=""
                                                                    data-bv-field="passport_copy[]"
                                                                    required=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="BtnGroupTouristVisa">
                                                                <button type="submit" className="cta">
                                                                    Apply
                                                                </button>
                                                                <button type="button" className="cta">
                                                                    Clear
                                                                </button>
                                                            </div>
                                                            {/*BtnGroupTouristVisa*/}
                                                        </div>
                                                    </div>
                                                    {/*row*/}
                                                </form>
                                            </div>
                                            {/*TouristVisaForm*/}
                                        </div>
                                        {/*TouristVisaTabInner*/}
                                    </div>
                                    {/*panel*/}
                                    <div
                                        className="tab-pane fade"
                                        id="pills-aboutuaetouristvisa"
                                        role="tabpanel"
                                        aria-labelledby="pills-aboutuaetouristvisa-tab"
                                    >
                                        <div className="TouristVisaTabInner">
                                            <h2>TOURIST VISA</h2>
                                            <p>
                                                We can assist you with acquiring UAE Tourist visa. Tourist
                                                visa, can be used to travel in all 7 emirates of UAE. No
                                                matter if you arrive and depart at / from Dubai / Abu Dhabi /
                                                Sharjah / Ajman / Ras Al Khaimah / Umm Al Quain / Fujairah.
                                            </p>
                                            <p>
                                                <strong>
                                                    We require clear SCANNED PASSPORT copies + hotel booking
                                                    confirmations OR Flight tickets copy 30 days prior to your
                                                    arrival date to apply for Tourist Visa.
                                                </strong>
                                            </p>
                                            <p>
                                                <strong>Cost for Single Entry Visa is</strong>
                                            </p>
                                            <p>
                                                <strong>
                                                    USD 105 / AED 380 <span>per person. (14 days)</span>
                                                </strong>
                                            </p>
                                            <p>
                                                <strong>
                                                    USD 129 / AED 470 <span>per person. (30 days)</span>
                                                </strong>
                                            </p>
                                            <p>
                                                <strong>
                                                    USD 399 / AED 1455 <span>per person. (90 days)</span>
                                                </strong>
                                            </p>
                                            <p>
                                                <strong>Cost for Multiple entry visa is</strong>
                                            </p>
                                            <p>
                                                <strong>
                                                    USD 384 / AED 1400 <span> per person. (30 days)</span>
                                                </strong>
                                            </p>
                                            <p>
                                                <strong>
                                                    USD 699 / AED 2550 <span> per person. (90 days) </span>
                                                </strong>
                                            </p>
                                            <p>
                                                <strong>Do I need to apply for visa to come to UAE?</strong>
                                            </p>
                                            <p>The Below nationalities can get visas on arrival:</p>
                                            <div className="table-responsive">
                                                <table
                                                    className="table"
                                                    border={1}
                                                    cellSpacing={0}
                                                    cellPadding={0}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>Andorra</strong>
                                                            </td>
                                                            <td>
                                                                <strong>France</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Lithuania</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Singapore</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Australia</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Denmark</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Luxembourg</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Slovakia</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Austria</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Germany</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Malaysia</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Slovenia</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Belgium</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Greece</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Malta</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Spain</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Brune</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Holland (Netherlands)</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Monaco</strong>
                                                            </td>
                                                            <td>
                                                                <strong>South Korea</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Bulgaria</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Hong Kong</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Netherlands (Holland)</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Sweden</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Canada</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Hungary</strong>
                                                            </td>
                                                            <td>
                                                                <strong>New Zealand</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Switzerland</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Croatia</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Iceland</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Norway</strong>
                                                            </td>
                                                            <td>
                                                                <strong>United Kingdom</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Czech Republic</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Ireland</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Poland</strong>
                                                            </td>
                                                            <td>
                                                                <strong>United States&nbsp;&nbsp;</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Cyprus</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Italy</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Liechtenstein</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Vatican City</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Denmark</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Japan</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Portugal</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Russia&nbsp;</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Estonia</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Latvia</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Romania</strong>
                                                            </td>
                                                            <td>
                                                                <strong>China</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Finland</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Liechtenstein</strong>
                                                            </td>
                                                            <td>
                                                                <strong>San Marino</strong>
                                                            </td>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p>
                                                <strong>
                                                    Do I need to make a security deposit for visa processing.?
                                                </strong>
                                                No we do not require security deposit. However for certain
                                                African countries passport holders, yes, you will need to make
                                                a security deposit as per emigration rule.
                                            </p>
                                            <p>
                                                <strong>
                                                    I’m visiting Dubai for less than 7 days. How many days visa
                                                    I require.?
                                                </strong>
                                                You may kindly apply for 14 days visa
                                            </p>
                                            <p>
                                                <strong>
                                                    I have USA / UK Visa on my passport. Do I still need to
                                                    apply visa for UAE.?
                                                </strong>
                                                Yes, you will still require a visa to enter UAE
                                            </p>
                                            <p>
                                                <strong>
                                                    My travel dates are 3 months ahead from now. Do I need to
                                                    apply for visa now?
                                                </strong>
                                                Every tourist visa is issued with a validity of 2 months. If
                                                we apply for your visa now, it will be expired in 2 months.
                                                You may kindly send your documents 30 days before your travel
                                                date and we can get your visa issued in 3 working days
                                            </p>
                                            <p>
                                                <strong>
                                                    My travel dates are in next 2 days. Can I get an express
                                                    visa / entry.?
                                                </strong>
                                                We require minimum of 3 working days to get visa issued.
                                                Emigration remains closed on Friday and Saturday and no visas
                                                will be issued in these 2 days. However we can for express
                                                entry in 2 days’ time for which an additional amount of USD
                                                200 will be applicable on top of above visa cost
                                            </p>
                                            <p>
                                                <strong>
                                                    How long / in how many days’ time I can get my visa.?
                                                </strong>
                                                We can get your visas in 3 working days’ time. Emigration
                                                remains closed on Friday and Saturday. Hence visa processing
                                                will not be possible on these 2 days.
                                            </p>
                                            <p>
                                                <strong>How should I apply for my Tourist visa.?</strong>
                                                Kindly visit our website and upload your documents. Our
                                                customer support team shall get in touch with you with payment
                                                options.
                                            </p>
                                            <p>
                                                <strong>
                                                    I will be staying with my friend. Hence do not have hotel
                                                    booking. Can I still get a visa?
                                                </strong>
                                                Yes, you can. You may kindly forward us with your Flight
                                                tickets copy OR your friends Emirates ID as a proof instead of
                                                Hotel booking
                                            </p>
                                            <p>
                                                <strong>
                                                    Do I need to book any of your tours to get visa.?
                                                </strong>
                                                No. you need not book any tours with us to apply and get your
                                                visa. However we do have many tours matching short layover
                                                guest and packages tours. Kindly contact us for further
                                                details{" "}
                                            </p>
                                            <p>
                                                <strong>How do I make the payment.?</strong>Once we receive
                                                your documents, we shall send you the invoice number and
                                                payment link http://www.milantoursdubai.com/pay.php to pay
                                                using (VISA / MASTERCARD) In case you payment gets denied,
                                                kindly contact your bank along with the card you used and they
                                                shall help you resolve the issue and make the payment again
                                                using the same invoice number
                                            </p>
                                            <p>
                                                <strong>Do you accept PayPal or AMEX.?</strong>We are sorry.
                                                Unfortunately for online payment we do not accept AMEX and we
                                                do not have PayPal account
                                            </p>
                                            <p>
                                                <strong>
                                                    My visa has been issued. What is the next step.?
                                                </strong>
                                                Kindly cross check your visa with your passport and verify
                                                your name, DOB and passport number are correct.
                                            </p>
                                            <p>
                                                <strong>Is there any age limit for visa processing.?</strong>
                                                Generally, there is no age limit to get Tourist visa. However
                                                for certain African countries, yes, there is age limit &amp;
                                                gender restriction to get visa . Kindly cross check with our
                                                customer support team for more information
                                            </p>
                                            <p>
                                                <strong>
                                                    How can I check or get to know the status of my visa.?
                                                </strong>
                                                Once the payment is made, to get update on your visa status,
                                                kindly Whatsapp / SMS us on +971552501818
                                            </p>
                                            <p>
                                                <strong>
                                                    Do I need original visa or how the visa will be sent to me.?
                                                </strong>
                                                You do not require original visa. You will be issued with an
                                                e-visa from UAE emigration. You may kindly print the same and
                                                present this at emigration upon your arrival. They shall stamp
                                                your entry on it.
                                            </p>
                                            <p>
                                                <strong>
                                                    My visa has been issued. My travel plan has changed. Can I
                                                    cancel and get refund?
                                                </strong>
                                                Once we submit your documents at emigration, we will not be
                                                able to cancel your application and refund the amount. If
                                                would like to cancel your application once after we apply, an
                                                additional USD 30 / AED 110 will be applicable for same
                                            </p>
                                            <p>
                                                <strong>Do you wish to live in Dubai.? </strong>Yes, we can
                                                arrange for residence visa. Kindly contact us for further
                                                details{" "}
                                            </p>
                                            <p>
                                                <strong>
                                                    Do you wish to do business / invest in Dubai.?
                                                </strong>
                                                Yes, we can assist you set up business including local
                                                sponsor. Kindly contact us for further details{" "}
                                            </p>
                                        </div>
                                        {/*TouristVisaTabInner*/}
                                    </div>
                                    {/*panel*/}
                                    <div
                                        className="tab-pane fade"
                                        id="pills-aboutuaeresidencevisa"
                                        role="tabpanel"
                                        aria-labelledby="pills-aboutuaeresidencevisa-tab"
                                    >
                                        <div className="TouristVisaTabInner">
                                            <h2>UAE RESIDENCE VISA</h2>
                                            <div className="uaeresidancevisadiv">
                                                <p>
                                                    <strong>Do you wish to live in Dubai.?</strong>
                                                    Yes, we can arrange for residence visa. Kindly contact us
                                                    for further details{" "}
                                                </p>
                                                <p>
                                                    <strong>
                                                        Do you wish to do business / invest in Dubai.?
                                                    </strong>
                                                    Yes, we can assist you set up business including local
                                                    sponsor. Kindly contact us for further details
                                                </p>
                                            </div>
                                        </div>
                                        {/*TouristVisaTabInner*/}
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-qskquestions"
                                        role="tabpanel"
                                        aria-labelledby="pills-qskquestions-tab"
                                    >
                                        <div className="TouristVisaTabInner">
                                            <div className="TouristVisaForm">
                                               <AskQuestion/>
                                            </div>
                                            {/*TouristVisaForm*/}
                                        </div>
                                        {/*TouristVisaTabInne*/}
                                    </div>
                                </div>
                            </div>
                            {/*TouristVisaTabSection*/}
                        </div>
                        {/*TouristVisaRhs*/}
                    </div>
                    {/*TouristVisaPageWrapper*/}
                </div>
                {/*container*/}
            </div>

        </div>
    )
}

export default tourVisa

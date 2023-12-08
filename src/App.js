import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import TopMenu from "./components/TopMenu";
import DetailSection from "./components/pages/TourSection";
import Homepage from "./components/pages/Homepage";
import DetailPage from './components/pages/TourSection'
import DestinationPage from './components/pages/DestinationDetail'
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate here
import TourListing from './components/pages/TourListingMain'
import Login from './components/user/Login';
import Register from "./components/user/Register";
import Forget from "./components/user/Forget";
import UserProfile from './components/user/UserDashboard'
import Category from './components/pages/cateory'
import Cart from './components/pages/cart'
import TrendingPlaces from "./components/pages/trendingPlaces";
import SearchListing from './components/pages/SearchListingMain'
import TrendingDetails from './components/pages/TrendingDetail'
import Attraction from './components/pages/attraction'
import BillingDetails from "./components/pages/billingDetails";
import TermCondition from "./components/pages/termCondition";
import CancellationPolicy from "./components/pages/cancellationPolicy";
import PrivacyPolicy from './components/privacyPolicy/privacyPolicy'
import ContactUs from './components/conatctUs/contactUs'
import AboutUs from "./components/aboutUs/about";
import ThankyouPage from "./components/thankyouPage/thankyouPage";
import NotFound from './components/404/notFound'
// import Wishlist from "./components/pages/wishlist";
import Booking from "./components/user/myBooking";
import Wishlist from "./components/user/wishlist";
import EditProfile from "./components/user/editProfile";
import ChangePassword from "./components/user/changePassword";
import Review from "./components/user/review";
import ViewDetail from "./components/user/viewDetail";

const App = () => {
  return (
    <Router basename={'/'}>
      
      <React.Fragment>
        
        <Routes>
        <Route exact path='/' element={<Homepage/>} /> 
        <Route exact path='/login' element={<Login/>} /> 
        <Route exact path='/register' element={<Register/>} /> 
        <Route exact path='/forget-password' element={<Forget/>} /> 
        <Route exact path='/user-dashboard' element={<UserProfile/>} /> 
        <Route exact path="/desert-safari/:title" element={<DetailPage/>} />
        <Route exact path="/private-jet/:title" element={<DetailPage/>} />
        <Route exact path="/wedding-on-yacht/:title" element={<DetailPage/>} />
        <Route exact path="/luxury-tours/:title" element={<DetailPage/>} />
        <Route exact path="/private-tour/:title" element={<DetailPage/>} />
        <Route exact path="/attraction-tickets/:title" element={<DetailPage/>} />
        <Route exact path="/chauffeur/:title" element={<DetailPage/>} />
        <Route exact path='/destination/:country' element={<TourListing/>} /> 
        <Route exact path='/destination/:country/:title' element={<DestinationPage/>} /> 
        <Route exact path='trending-tour/:title' element={<TrendingPlaces/>} /> 
        <Route exact path='/trending-tour/:location/:title' element={<TrendingDetails/>} />

        <Route exact path='tour/:title' element={<SearchListing/>} /> 
        <Route exact path='/tour/:country/:title' element={<TrendingDetails/>} /> 
         {/*    <Route exact path='/plan' element={<Category/>} /> */}
       <Route exact path='/:categoryName' element={<Category/>} />
       <Route exact path='/:categoryName/:title' element={<DetailPage/>} />
       <Route exact path='/attraction/:attractionName' element={<Attraction/>} />
       <Route exact path='/billing-detail' element={<BillingDetails/>} />
       <Route exact path='/cancellation-policy' element={<CancellationPolicy/>} />
       <Route exact path='/term-condition' element={<TermCondition/>} />
       <Route exact path='/privacy-policy' element={<PrivacyPolicy/>} />
       <Route exact path='/contact-us' element={<ContactUs/>} />
       <Route exact path='/about-us' element={<AboutUs/>} />
       <Route exact path='/thankyou' element={<ThankyouPage/>} />
       <Route exact path='/wishlist' element={<Wishlist/>} />
       <Route exact path='/cart' element={<Cart/>} />
       <Route exact path='/booking' element={<Booking/>} />
       <Route exact path='/editProfile' element={<EditProfile/>} />
       <Route exact path='/changepassword' element={<ChangePassword/>} />
       <Route exact path='/review/:id' element={<Review/>} />
       <Route exact path='/view-detail/:id' element={<ViewDetail/>} />
       <Route path="*" element={<NotFound/>} />

        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import TopMenu from "./components/TopMenu";
import DetailSection from "./components/pages/TourSection";
import Homepage from "./components/pages/Homepage";
import DetailPage from './components/pages/TourSection'
import DestinationPage from './components/pages/DestinationDetail'
import { useParams } from 'react-router-dom';
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


function App() {

  return (
    <Router basename={'/'}>
      <React.Fragment>
        
        <Routes>
        <Route exact path='/' element={<Homepage/>} /> 
        <Route exact path='/login' element={<Login/>} /> 
        <Route exact path='/register' element={<Register/>} /> 
        <Route exact path='/forget-password' element={<Forget/>} /> 
        <Route exact path='/user-dashboard' element={<UserProfile/>} /> 
        <Route exact path="/private-jet/:title" element={<DetailPage/>} />
        <Route exact path="/wedding-on-yacht/:title" element={<DetailPage/>} />
        <Route exact path="/luxury-tours/:title" element={<DetailPage/>} />
        <Route exact path="/private-tour/:title" element={<DetailPage/>} />
        <Route exact path="/attraction-tickets/:title" element={<DetailPage/>} />
        <Route exact path="/chauffeur/:title" element={<DetailPage/>} />
        <Route exact path='/destination/:country' element={<TourListing/>} /> 
        <Route exact path='/destination/:country/:title' element={<DestinationPage/>} /> 
        <Route exact path='trending-tour/:title' element={<TrendingPlaces/>} /> 
        <Route exact path='/trending-tour/:country/:title' element={<TrendingDetails/>} /> 
        <Route exact path='tour/:title' element={<SearchListing/>} /> 
        <Route exact path='/tour/:country/:title' element={<TrendingDetails/>} /> 
         {/*    <Route exact path='/plan' element={<Category/>} /> */}
       <Route exact path='/:categoryName' element={<Category/>} />
       <Route exact path='/:categoryName/:title' element={<DetailPage/>} />
       <Route exact path='/attraction/:attractionName' element={<Attraction/>} />
       <Route exact path='/billing-detail' element={<BillingDetails/>} />
       
       <Route exact path='/cart' element={<Cart/>} />

        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
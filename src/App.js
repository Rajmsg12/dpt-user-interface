import React, { Suspense, lazy , useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { I18nextProvider } from 'react-i18next';
import i18n from './components/i18n'; // Path to your i18n.js file
import TrendingPlaces from "./components/pages/trendingPlaces";
import TrendingDetails from './components/pages/trendingPlaces'



//const Header = lazy(() => import("./components/Header"));
//const TopMenu = lazy(() => import("./components/TopMenu"));
// const HomeView = lazy(() => import("./views/Home"));
// const SignInView = lazy(() => import("./views/account/SignIn"));
// const SignUpView = lazy(() => import("./views/account/SignUp"));
// const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
// const OrdersView = lazy(() => import("./views/account/Orders"));
// const WishlistView = lazy(() => import("./views/account/Wishlist"));
// const NotificationView = lazy(() => import("./views/account/Notification"));
// const MyProfileView = lazy(() => import("./views/account/MyProfile"));
// const ProductListView = lazy(() => import("./views/product/List"));
// const ProductDetailView = lazy(() => import("./views/product/Detail"));
// const StarZoneView = lazy(() => import("./views/product/StarZone"));
// const CartView = lazy(() => import("./views/cart/Cart"));
// const CheckoutView = lazy(() => import("./views/cart/Checkout"));
// const InvoiceView = lazy(() => import("./views/cart/Invoice"));
// const DocumentationView = lazy(() => import("./views/Documentation"));
// const NotFoundView = lazy(() => import("./views/pages/404"));
// const InternalServerErrorView = lazy(() => import("./views/pages/500"));
// const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
// const SupportView = lazy(() => import("./views/pages/Support"));
// const BlogView = lazy(() => import("./views/blog/Blog"));
// const BlogDetailView = lazy(() => import("./views/blog/Detail"));

function App() {
  useEffect(() => {
    // Wait for i18n initialization
    i18n.init({
      // Your i18n configuration
    }, (err, t) => {
      if (err) return console.log('something went wrong loading', err);

      // Check if there's a selected language in local storage
      const selectedLanguage = localStorage.getItem('selectedLanguage');

      // If there is, set it as the initial language
      if (selectedLanguage) {
        i18n.changeLanguage(selectedLanguage);
      }
    });
  }, []);
  return (
    <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <React.Fragment>
        
        <Routes>
        <Route exact path='/login' element={<Login/>} /> 
        <Route exact path='/register' element={<Register/>} /> 
        <Route exact path='/forget-password' element={<Forget/>} /> 
        <Route exact path='/user-dashboard' element={<UserProfile/>} /> 
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/private-jet/:title" element={<DetailPage/>} />
        <Route exact path="/wedding-on-yacht/:title" element={<DetailPage/>} />
        <Route exact path="/luxury-tours/:title" element={<DetailPage/>} />
        <Route exact path="/private-tour/:title" element={<DetailPage/>} />
        <Route exact path="/attraction-tickets/:title" element={<DetailPage/>} />
        <Route exact path="/chauffeur/:title" element={<DetailPage/>} />
        <Route exact path='/tour/:country' element={<TourListing/>} /> 
        <Route exact path='/tour/:country/:title' element={<DestinationPage/>} /> 
        <Route exact path='trending-tour/dubai-private-tour' element={<TrendingPlaces/>} /> 
        <Route exact path='/trendingtour/:country/:title' element={<TrendingDetails/>} /> 
         {/*    <Route exact path='/plan' element={<Category/>} /> */}
       <Route exact path='/:categoryName' element={<Category/>} />
       <Route exact path='/:categoryName/:title' element={<DetailPage/>} />
       <Route exact path='/cart' element={<Cart/>} />

        </Routes>
      </React.Fragment>
    </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;

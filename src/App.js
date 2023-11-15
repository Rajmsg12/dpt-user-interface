import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import TopMenu from "./components/TopMenu";
import DetailSection from "./components/pages/TourSection";
import Homepage from "./components/pages/Homepage";
import DetailPage from './components/pages/TourSection'
import { useParams } from 'react-router-dom';
import TourListing from './components/pages/TourListingMain'
import Login from './components/user/Login';
import Register from "./components/user/Register";
import Forget from "./components/user/Forget";
import UserProfile from './components/user/UserDashboard'
import Category from './components/pages/cateory'
import Cart from './components/pages/cart'



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
  return (
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
        <Route exact path='/tours/:country' element={<TourListing/>} /> 
        <Route exact path='/tours/:country/:title' element={<DetailPage/>} /> 
         {/*    <Route exact path='/plan' element={<Category/>} /> */}
       <Route exact path='/:categoryName' element={<Category/>} />
       <Route exact path='/:categoryName/:title' element={<DetailPage/>} />
       <Route exact path='/cart' element={<Cart/>} />

        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

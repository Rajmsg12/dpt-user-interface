import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import TopMenu from "./components/TopMenu";
import Header from "./components/homepage/Header";
import PopularTour from "./components/homepage/PopularTour";
import PopularAttraction from "./components/homepage/PopularAttraction";
import Faq from "./components/homepage/Faq";
import Footer from "./components/homepage/Footer";
import Banner from './components/homepage/Banner'
import Memories from './components/homepage/memories'
import TabSection from './components/homepage/TabSection'
import TopDestination from "./components/homepage/TopDestination";
import ChooseDpt from './components/homepage/ChooseDpt'
import CustomerSay from './components/homepage/CustomerSay'
import TrendingPlaces from './components/homepage/TrendingPlaces'

import "./App.min.css";
//const Header = lazy(() => import("./components/Header"));
//const TopMenu = lazy(() => import("./components/TopMenu"));
const HomeView = lazy(() => import("./views/Home"));
const SignInView = lazy(() => import("./views/account/SignIn"));
const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const OrdersView = lazy(() => import("./views/account/Orders"));
const WishlistView = lazy(() => import("./views/account/Wishlist"));
const NotificationView = lazy(() => import("./views/account/Notification"));
const MyProfileView = lazy(() => import("./views/account/MyProfile"));
const ProductListView = lazy(() => import("./views/product/List"));
const ProductDetailView = lazy(() => import("./views/product/Detail"));
const StarZoneView = lazy(() => import("./views/product/StarZone"));
const CartView = lazy(() => import("./views/cart/Cart"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));
const InvoiceView = lazy(() => import("./views/cart/Invoice"));
const DocumentationView = lazy(() => import("./views/Documentation"));
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));
const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
const SupportView = lazy(() => import("./views/pages/Support"));
const BlogView = lazy(() => import("./views/blog/Blog"));
const BlogDetailView = lazy(() => import("./views/blog/Detail"));

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
       
       <Banner/>
       <TabSection/>
       <TopDestination/>
       <PopularTour/>
       <ChooseDpt/>
       <CustomerSay/>
       <TrendingPlaces/>
        <PopularAttraction/>
        
        <Faq/>
        <Memories/>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

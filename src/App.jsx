import Hero from "./components/screen/hero";
import Logopartner from "./components/constant/content/logopartner";
import AboutUs from "./components/screen/aboutus";
import Product from "./components/screen/product";
import BuyerReview from "./components/constant/content/buyerreview";
import QualityDetails from "./components/constant/content/qualitydetails";
import Footer from "./components/website/footer";

import LoginPage from "./dashboard/login-page/login-page";
import SignupPage from "./dashboard/user/signup-page";
import Model from "./dashboard/model/model";


import Topbar from "./dashboard1/layout/topbar";
import Dashboard from "./dashboard1/layout/Dashboard";
import Frame from "./components/frame/frame";
import { Routes, Route, Link } from 'react-router-dom';
import DashboardLayout from "./layout/DashboardLayout";
import Layout from "./dashboard/Plot-management/Layout";
import Sidebar from "./customer/sidebar";

import Purchaseproperty from "./dashboard/Purchase-page/Purchaseproperty";
import Faqcontent from "./dashboard/FAQ/Faqcontent";
import Chatsupport from "./dashboard/Chat-support/Chatsupport";
import Details from "./dashboard/Details/Details";





function App() {
  return (
    <>
      {/* <Hero />
      <Logopartner />
      <QualityDetails />

      <AboutUs />
      <Product />
      <BuyerReview /> */}
      <Routes>
   
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<SignupPage/>} />
        <Route path="/dashboard" element={<DashboardLayout screen={<Dashboard/>}/>} />
        
        
        
        
      </Routes>   

      
      {/* <SignupPage />

      
      <Model />

      <Footer />
      <Sidebar/>
      <Topbar/>
      <Dashboard/>
      <Frame/> */}
      
     {/* <Layout/>
      <Purchaseproperty/>
     {/* <Faqcontent/>*/}
      {/* <Chatsupport/>*/}
      <Details/>
      
      
      
      
    </>
  );
}


export default App;
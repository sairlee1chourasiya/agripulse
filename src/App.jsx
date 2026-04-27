import Hero from "./components/screen/hero";
import Logopartner from "./components/constant/content/logopartner";
import AboutUs from "./components/screen/aboutus";
import Product from "./components/screen/product";
import BuyerReview from "./components/constant/content/buyerreview";
import QualityDetails from "./components/constant/content/qualitydetails";
import Foooter from "./components/website/foooter";
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
import Purchase from "./dashboard/Purchase/Purchase";

import AdminPropertyPage from "./dashboard/AdminPropertyPage/AdminPropertyPage";
import Plot from "./dashboard/Plot/Plot";
import KycPage from "./dashboard/KYC/KycPage";
import Property from "./dashboard/Property/Property";
import GeneralDetails from "./dashboard/General-Details/GeneralDetails";
import BankDetails from "./dashboard/Bank-Details/BankDetails";
import Mainpage from "./dashboard/Main-page/Mainpage";
import Property1 from "./dashboard/Property/Property1";
import VenderList from "./dashboard/VenderList/VenderList";
import Banner from "./dashboard/Banner/Banner";


import Sidepart from "./dashboard/VenderList/Sidepart";
import Sidebar1 from "./dashboard/FAQ/Sidebar1";
import CustomerFirmLand from "./dashboard/CustomerFirmLand/CustomerFirmLand";
import FaqContent from "./dashboard/FAQ/Faqcontent";
import DashboardLayout1 from "./layout/DashboardLayout1";
import LoginPage2 from "./dashboard/user/signup-page";
import Welcomepage from "./components/screen/Welcomepage";
import LandDetails from "./dashboard/Details/LandDetails";






  

function App() {
  return (
    <>


    
     
      <Routes>
   
        
        
       
        
      
       

  





      





      


<Route path="/hero" element={<Hero/>}/>
<Route path="/welcomepage" element={<Welcomepage/>}/>
<Route path="/model" element={<Model/>}/>
<Route path="/frame" element={<Frame/>}/>
<Route path="/loginpage" element={<LoginPage/>}/>
<Route path="/plot" element={<Plot/>}/>
<Route path="/adminpropertypage" element={<AdminPropertyPage/>}/>
<Route path="/SignupPage" element={<SignupPage/>}/>
<Route path="/chatsupport" element={<Chatsupport />}/>
<Route path="/landdetails" element={<LandDetails />}/>






<Route path="/dashboard" element={<DashboardLayout screen={<Dashboard />} />} />
<Route path="/dashboard1" element={<DashboardLayout screen={<Dashboard/>}/>} />
  <Route path="/" element={<DashboardLayout screen={<Dashboard />} />} />
  <Route path="/dashboard" element={<DashboardLayout screen={<Dashboard />} />} />
  <Route path="/banner" element={<DashboardLayout screen={<Banner />} />} />
  <Route path="/venderlist" element={<DashboardLayout screen={<VenderList />} />} />
  <Route path="/property1" element={<DashboardLayout screen={<Property1 />} />} />
  <Route path="/chatsupportold" element={<DashboardLayout screen={<Chatsupport />} />} />





  <Route path="/" element={<DashboardLayout1 screen={<Mainpage />} />} />
<Route path="/mainpage" element={<DashboardLayout1 screen={<Mainpage />} />} />
<Route path="/purchase" element={<DashboardLayout1 screen={<Purchase />} />} />
<Route path="/details" element={<DashboardLayout1 screen={<Details/>} />} />
<Route path="/chatsupportnew" element={<DashboardLayout1 screen={<Chatsupport />} />} />
<Route path="/purchaseproperty" element={<DashboardLayout1 screen={<Purchaseproperty />} />} />
<Route path="/generaldetails" element={<DashboardLayout1 screen={<GeneralDetails />} />} />
<Route path="/faqcontent" element={<DashboardLayout1 screen={<Faqcontent />} />} />

  

        
       
       

        
        
        
        
        
      </Routes>   

      
     
     
      

     

        
      
      
      
       


     
        
        
      

      
      
       

      


        
        
    

    
      
      
       
    
       
       
     
      
      
         
        
    
       
       
      
       
      
       
     
        
      
      
      
      
      
    </>
  );
}


export default App;
import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";

import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import Home from "./Components/Home/Home";
import BeforHome from "./Components/Home/BeforHome";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword"
import ResetPassword from "./Components/ResetPassword/ResetPasswprd"

//Booking
import CreateBooking from './Components/Booking/CreateBooking';
import Bookings from './Components/Booking/Bookings';
import UpdateBooking from './Components/Booking/UpdateBooking';
import BookingDetails from './Components/Booking/BookingDetails';
import AdminTab from "./pages/AdminTab/AdminTab";
import MemoryReportPage from "./pages/AdminTab/memory_report_page";
import CustomerPage from './pages/AdminTab/CustomerView';

//accomodation
import PackagesComponent from "./Components/Admin/ReviewManagement";

import Users from "./Components/UserDetails/Users";
import UpdateUsers from "./Components/UpdateUser/UpdateUser";

import AddItem from "./Components/Renatal System/Admin/Add Item/AddItem";
import AdminItems from "./Components/Renatal System/Admin/Item/Items";
import UpdateItem from "./Components/Renatal System/Admin/Item/UpdateItem";

import UserItems from "./Components/Renatal System/User/ViewGuides/Items";
import AddTransport from "./Components/Guide/Admin/Add Item/AddTransport";
import AdminGuide from "./Components/Guide/Admin/Item/AdminGuide";
import UpdateGuide from "./Components/Guide/Admin/Item/UpdateGuide";


import AdminLpage from "./Components/AdminLPage/AdminLpage";


import ContSALive from "./Components/Support/ContSALive/ContSALive";
import ATickets from "./Components/Support/AdminTAnswer/ATicketDetails/ATickets";
import ACrudApp from "./Components/Support/AdminTAnswer/ATicketList/ACrudApp";
import AUpdateTicket from "./Components/Support/AdminTAnswer/AUpdateTicket/AUpdateTicket";
import SendPdf from "./Components/Support/SendPDF/SendPdf";
import UTickets from "./Components/Support/UserDo/UTicketDetails/UTickets";
import UAddTicket from "./Components/Support/UserDo/UAddTicket/UAddTicket";
import UUpdateTicket from "./Components/Support/UserDo/UUpdateTicket/UUpdateTicket";
import UserLPage from "./Components/Support/UserDo/UserLPage";
import Landingpage from "./Components/Support/Landingpage";
import UTicketF from "./Components/Support/UserDo/UTicketF/UTicketF";
import AddFAQs from "./Components/Support/FAQ/AddFAQs";
import UpdateFAQs from "./Components/Support/FAQ/UpdateFAQs";
import Faqs from "./Components/Support/FAQ/Faqs";
import Faq from "./Components/Support/FAQ/Faq";
import UFaqs from "./Components/Support/FAQ/UFaqs";
import AdminLPage from "./Components/Support/AdminLPage/AdminLpage";
import ATicket from "./Components/AdminTAnswer/ATicket/ATicket";

import Header from './Components/Tourist/Header';
import Addtourists from './Components/Tourist/Addtourists';
import Insurancefirst from './Components/Tourist/Insurancefirst';
import Displaytourist from './Components/Tourist/Displaytourist';
import Updatetourist from './Components/Tourist/Updatetourist';
import PricingCard from './Components/Tourist/PricingCard';
import Calculation from './Components/Tourist/Calculation';
import InsuranceManager from './Components/Tourist/InsuranceManager';
import Admin from "./pages/Admin";
import Items from "./Components/Renatal System/User/ViewGuides/Items";
import ViewGuides from "./Components/Service/User/Item/Items";
import CustomerView from "./pages/AdminTab/CustomerView";
import AUser from "./Components/Admin/AUser";
import ReviewManagement from "./Components/Admin/ReviewManagement";

import UserDashboard from "./pages/UserDashboard";
import AddReview from "./Components/Reviews/AddUser/AddReview";
import SeeReviews from "./Components/Reviews/UserDetails/SeeReviews";
import UpdateReview from "./Components/Reviews/UpdateUser/UpdateReview";
import BookingsAdmin from "./Components/Booking/BookingsAdmin";
import AddUser from "./Components/AddUser/AddUser";
import AddGuide from "./Components/Service/Add Item/AddGuide";
import Guides from "./Components/Service/Item/Guides";






function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<BeforHome />} />
          <Route path="/log" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Adduser" element={<AddUser />} />
          <Route path="/userdetails" element={<Users />} />
          <Route path="/regi" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<UpdateProfile />} />
          <Route path="/userdetails/:id" element={<UpdateUsers />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword />} />

          
          <Route path="/create-booking" element={<CreateBooking />} />
          <Route path="/booking-details/:id" element={<BookingDetails />} />
          <Route path="/update-booking/:id" element={<UpdateBooking />} />

          
          {/* <Route path="/admin" element={<AdminTab />} /> */}
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/memory_report_page" element={<MemoryReportPage/>} />
        
        
          
          

          <Route exact path="/add-items" element={<AddItem />} />
          <Route exact path="/admin-items" element={<AdminItems />} />
          <Route path="/update-item/:id" element={<UpdateItem />} />

          {/* User-Item Display  */}
          <Route exact path="/items" element={<UserItems />} />

          {/* <Route exact path="/add-guides" element={<AddGuide />} /> */}
          <Route exact path="/admin-guides" element={<AdminGuide />} />
          <Route path="/update-guide/:id" element={<UpdateGuide />} />
          

          {/* User-Item Display  */}
          <Route exact path="/guides" element={<ViewGuides />} />
          user-info


          <Route path="/ContSALive" element={<ContSALive />} />
    
          
          <Route path="/ATicket" element={<ATicket />} />
          <Route path="/ATicketDetails" element={<ATickets />} />
          <Route path="/ATicketDetails/:id" element={<AUpdateTicket />} />
          <Route path="/ACrudApp" element={<ACrudApp />} />

          <Route path="/UTicketF" element={<UTicketF />} />
          <Route path="/UTicketDetails/:id" element={<UUpdateTicket />} />
          <Route path="/UTicketDetails" element={<UTickets />} />
          <Route path="/UAddTicket" element={<UAddTicket />} />
          <Route path="/UTicketDetails/:id" element={<UUpdateTicket />} />

          <Route path="/AddFAQs" element={<AddFAQs />} />
          <Route path="/FAQdetails/:id" element={<UpdateFAQs />} />
          <Route path="/FAQdetails" element={<Faqs />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/UFAQdetails" element={<UFaqs />} />

          <Route path="/" element={<Landingpage />} />
          <Route path="/AdminLpage" element={<AdminLPage />} />
          <Route path="/UserLpage" element={<UserLPage />} />

          <Route path="/SendPdf" element={<SendPdf />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<UserDashboard />} />

          <Route path="/rental" element={<Items />} />
          <Route path="/insurance" element={<Insurancefirst />} />
          <Route path="/booking" element={<Bookings />} />
          <Route path="/bookingAdmin" element={<BookingsAdmin />} />
          <Route path="/pricing" element={<PricingCard />} />

          <Route path='/first' element={<Insurancefirst/>}/>
          <Route path='/add' element={<Addtourists />} />
          <Route path='/dis' element={<Displaytourist/>}/>
          <Route path='/update/:id' element={<Updatetourist/>}/>
          <Route path='/cal' element={<Calculation />} />
          
          <Route path='/gallery' element={<CustomerView />} />
          
          <Route path='/contact' element={<UFaqs/>} />
          {/* <Route path='/guide' element={<ViewGuides/>} /> */}

          <Route path='/reviews' element={<ReviewManagement />} />
          <Route path="/packages" element={<PackagesComponent />} />
          <Route path="/addreviews" element={<AddReview />} />
          <Route path="/seereviews/:id" element={<UpdateReview />} />
          <Route path="/adminseereviews" element={<PackagesComponent />} />
          <Route path="/adminseereviews/:id" element={<UpdateUsers />} />
          <Route path="/seereviews" element={<SeeReviews />} />


          <Route exact path="/add-guide" element={<AddGuide />} />
          <Route exact path="/admin-guide" element={<Guides />} />
          <Route path="/update-guide/:id" element={<UpdateGuide />} />
          

          {/* User-Item Display  */}
          <Route exact path="/" element={<UserItems />} />


          
          

          {/* User-Item Display  */}
          <Route exact path="/" element={<UserItems />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

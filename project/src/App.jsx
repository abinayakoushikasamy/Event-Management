import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Welcome from './components/welcome';
import Admin from './components/admin';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import Payment from './components/payment';
import Feedback from './components/feedback';
import About from './components/about';
import Invitation from './components/invitation';
import Home1 from './components/home1';
import EventCalender from './components/event calender';
import EventForm from './components/eventform';
import Profile from './components/profile';
import Contact from './components/contact';
import EventForm1 from './components/eventform1';
import EventCalendars from './components/eventcalen';
import Venue from './components/venue';
function App() {

  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/feedback" element={<Feedback/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/invitation" element={<Invitation/>}></Route>
      <Route path="/home1" element={<Home1/>}></Route> 
      <Route path="/event calender" element={<EventCalender/>}></Route>
      <Route path="/eventform" element={<EventForm/>}></Route> 
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/eventform1" element={<EventForm1/>}></Route>
      <Route path="/eventcalen" element={<EventCalendars/>}></Route>
      <Route path="/venue" element={<Venue/>}></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App
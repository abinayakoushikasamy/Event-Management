import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Login from './components/login';
import Feedback from './components/feedback';

function App() {

  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/feedback" element={<Feedback/>}></Route>
      

    


 
    </Routes>
    </BrowserRouter>
  );
}

export default App

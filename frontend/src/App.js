import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import Landing from "./Pages/Landing/Landing";
import NavBar from "./Pages/P_Home/Navbar";
import Sidebar from "./Pages/P_Home/Sidebar";
import Personal from "./Pages/P_Home/Personal_details";
import Appointment from "./Pages/P_Home/Appointment";
import Laboratory from "./Pages/P_Home/Laborartory";
// import Chat from "./components/Chat";


function App() {
  return (
    
    <Router>
      
      <Routes>
        
        <Route path="/" element = {<Landing />} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<SignUp />} />
        <Route path="/navbar" element = {<NavBar />} />
        <Route path="/sidebar" element = {<Sidebar />} />
        <Route path="/personal" element = {<Personal />} />
        <Route path="/appointment" element = {<Appointment />} />
        <Route path="/lab" element = {<Laboratory />} />
      </Routes>
    </Router>
    
  );
}

export default App;

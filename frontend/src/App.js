import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import Landing from "./Pages/Landing/Landing";
import NavBar from "./Pages/P_Home/Navbar";
import Sidebar from "./Pages/P_Home/Sidebar";
import Personal from "./Pages/P_Home/Personal";
import Appointment from "./Pages/P_Home/Appointment";
import Reports from "./Pages/P_Home/Reports";
import Chat from "./components/Chat";
<<<<<<< HEAD
import Graph from "./Pages/P_Home/Graph";
=======
import Laborartory from "./Pages/P_Home/Laborartory";
>>>>>>> 9ee0dbcce0aa2d5539f41cb07b3325bda71df88c


function App() {
  return (
    
    <Router>
      
      <Routes>
        
        <Route path="/" element = {<Landing />} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<SignUp />} />
        <Route path="/navbar" element = {<NavBar />}></Route>
        <Route path="/sidebar" element = {<Sidebar />}></Route>
        <Route path="/personal" element = {<Personal />}></Route>
        <Route path="/appointment" element = {<Appointment />}></Route>
<<<<<<< HEAD
        <Route path="/Graph" element = {<Graph />}></Route>
=======
        <Route path="/reports" element = {<Reports />}></Route>
        <Route path="/labo" element = {<Laborartory />} />
>>>>>>> 9ee0dbcce0aa2d5539f41cb07b3325bda71df88c
      </Routes>
    </Router>
    
  );
}

export default App;

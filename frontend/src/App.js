import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import Landing from "./Pages/Landing/Landing";
import NavBar from "./Pages/P_Home/Navbar";
import Sidebar from "./Pages/P_Home/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    
    <Router>
      
      <Routes>
        
        <Route path="/" element = {<Landing />} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<SignUp />} />
        <Route path="/navbar" element = {<NavBar />}></Route>
        <Route path="/sidebar" element = {<Sidebar />}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;

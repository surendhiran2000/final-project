import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BookTickets from "./Pages/bookTickets.jsx";
import Login from "./Pages/login.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import Home from "./Pages/home.jsx";
import SideNavigation from "./Pages/sideNav.jsx";
import ViewTickets from "./Pages/viewTickets.jsx";
import CancelTickets from "./Pages/cancelTickets.jsx";
import About from "./Pages/About.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import offer from "./Pages/offer.js";
function App() {
  return (
    <div className="App">
      <Router>
        <SideNavigation />
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route exact path="/register" Component={RegisterPage} />
          <Route path="/home" Component={Home} />
          <Route path="/bookTickets" Component={BookTickets} />
          <Route path="/viewTickets" Component={ViewTickets} />
          <Route path="/cancelTickets" Component={CancelTickets} />
          <Route path="/ContactUs" Component={ContactUs} />
          <Route path="/About" Component={About} />
          <Route path="/offer" Component={offer} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

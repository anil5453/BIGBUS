import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import Ncover from './Ncover';
import { useAuth } from '../compontent/AuthContext.jsx'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../pics/bus.logo.jpg';

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  

  // Simulate login state (replace with actual auth logic)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  // Simulate login on app load (for demo)
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "false";
    
  }, []);

  

  const handleServicesClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      navigate("/Login");
    }
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
        <div className="container-fluid bg-gradient bg-success bg-opacity-75 rounded-pill">
          <div className="d-flex">
            <img
  src={logo}
  alt="Logo"
  style={{ width: "80px", height: "80px" }}
  className="rounded-5 ms-3"
/>
            <Link className="navbar-brand" to="/">
              <h1><b>BIGBUS </b></h1>
            </Link>
            <div className="text-white pt-4 ps-3" style={{ overflow: 'hidden' }}>
  <div className="scrolling-text">
    <strong>...Let's Begin Our Journey</strong>
  </div>
</div>

          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item hover-shadow rounded-pill">
                <Link className="nav-link active" to="/Home">Home</Link>
              </li>
              <li className="nav-item hover-shadow rounded-pill">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to="/Navbar">gani</Link>
              </li> */}

              <li className="nav-item hover-shadow rounded-pill">
                <Link className="nav-link active" to="/Serv">Services</Link>
              </li>
              
              
              
              

              <li className="nav-item dropdown hover-shadow rounded-pill">
                <a
                  className="nav-link dropdown-toggle active ms-2 bi-person-fill "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle={isLoggedIn ? "dropdown" : ""}
                  aria-expanded="false"
                  onClick={handleServicesClick}
                >
                  Profile
                </a>

                {isLoggedIn && (
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/BookingList">Booking</Link></li>
                    <li><Link className="dropdown-item" to="/Rout">Travel History</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/Wallet">Wallet</Link></li>
                    
                  </ul>
                )}
              </li>
            </ul>

            <div className="row">
              <div className="ms-auto d-flex">
                <ul className="d-flex gap-2 list-unstyled mt-3">
                  <a href="#"><li className="bi bi-facebook text-white fs-4"></li></a>
                  <a href="#"><li className="bi bi-twitter text-white fs-4"></li></a>
                  <a href="#"><li className="bi bi-instagram text-white fs-4 me-3"></li></a>
                </ul>

                <div>
                  {isLoggedIn ? (
                    <button
                    className="btn btn-danger"
                    onClick={() => {
                      logout();             // ✅ This updates both localStorage & state
                      navigate("/Home");   // ✅ Redirects to login page after logout
                    }}
                  >
                    <i className="bi bi-box-arrow-right me-2 mt-0"></i>LOGOUT
                  </button>
                  
                  ) : (
                    <Link className="btn btn-success m-3 hover-shadow rounded-pill" to="/Login">
                      <i className="bi bi-person-fill-up me-2  "></i>LOGIN
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
   

        {location.pathname === '/Ncover' && <Ncover />}
    </div>
  );
};

export default Nav;

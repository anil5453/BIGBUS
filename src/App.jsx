import './App.css';
import Nav from './compontent/Nav';
import About from './compontent/about';
import Wallet from './compontent/Wallet';
import Home from './compontent/Home';
import Login from './compontent/Login';
import Booking from './compontent/Booking';
import Rout from './compontent/Rout';
import Footer from './compontent/Footer';
import Ncover from './compontent/Ncover';
import Serv from './compontent/Serv';
import GovernmentBuses from './compontent/GovernmentBuses';
import NavBar from './compontent/NavBar';
import Reservation from './compontent/Reservation';
import DashBoard from './compontent/DashBoard';

import { ReservationProvider } from './compontent/ReaservationContext';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import BusBookingServices from './compontent/BusBookingServices';
import BookingList from './compontent/BookingList';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <ReservationProvider>
          <Nav />

          <div className="flex ">
            <div className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/about" element={<About />} />
                <Route path="/Wallet" element={<Wallet />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Booking" element={<Booking />} />
                <Route path="/Rout" element={<Rout />} />
                <Route path="/Ncover" element={<Ncover />} />
                <Route path="/Serv" element={<Serv />} />
                <Route path="/GovernmentBuses" element={<GovernmentBuses />} />
                <Route path="/NavBar" element={<NavBar />} />
                <Route path="/BusBookingReactApp" element={<DashBoard />} />
                <Route path="/BusBookingReactApp/reservation" element={<Reservation />} />
                <Route path="/BusBookingServices" element={<BusBookingServices />} />
               <Route path="/BookingList" element={<BookingList />} />


               
              </Routes>
            </div>
          </div>

          <Footer />
        </ReservationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Services from "./Services";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState(false);
  const [searched, setSearched] = useState(false);

  const busRoutes = [
    { busId: "101", from: "Mahabubnagar", to: "Hyderabad", seats: 5 },
    { busId: "102", from: "Bengaluru", to: "Warangal", seats: 10 },
    { busId: "103", from: "Chennai", to: "Mumbai", seats: 7 },
    { busId: "104", from: "Karimnagar", to: "Devarakonda", seats: 12 },
    { busId: "105", from: "Mumbai", to: "Chennai", seats: 8 }
  ];

  const handleSearch = () => {
    const routeExists = busRoutes.some(
      (bus) =>
        bus.from.toLowerCase() === from.toLowerCase() &&
        bus.to.toLowerCase() === to.toLowerCase()
    );
    setResult(routeExists);
    setSearched(true);
  };

  return (
    <div className="container-fluid dp1 min-vh-100 py- px-3">
      {/* Animated Search Card */}
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="bg-dark bg-opacity-25 shadow-lg rounded-4 p-4 p-md-5 mx-auto"
          style={{ maxWidth: "1000px" }}
        >
          <div className="text-center mb-4">
            <h3 className="fw-bold text-success">
              <i className="bi bi-bus-front-fill me-2 fs-1 fw-bold"></i>Search Bus Route
            </h3>
          </div>
          <div className="row g-3 align-items-center justify-content-center text-danger">
            <div className="col-4 col-md-4">
              <label className="form-label fw-semibold ">From</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter departure city"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>

            <div className="col-4 col-md-4">
              <label className="form-label fw-semibold">To</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter destination city"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>

            <div className="col-4 col-md-4">
              <label className="form-label fw-semibold">Date</label>
              <input
                type="date"
                className="form-control form-control-lg"
                value=""
                
              />
            </div>

            <div className="col-12 col-md-2 d-grid mt-2 mt-md-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-success btn-lg rounded-pill"
                onClick={handleSearch}
              >
                Search
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Animated Result Display */}
      <div className="container mt-5">
        <AnimatePresence>
          {searched && (
            result ? (
              <motion.div
                key="services"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Services />
              </motion.div>
            ) : (
              <motion.div
                key="notfound"
                className="text-center mt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="text-danger fw-semibold">Route not found 😢</h4>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>

      {/* Animated Promo Section */}
      <AnimatePresence>
        {(!searched || !result) && (
          <motion.div
            className="container mt-5 text-center bg-black bg-opacity-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="fw-bold text-primary mt-5 pt-5 ">BIGBUSS Service Provides</h1>
            <p className="lead text-muted">Hurry up! Limited time offer</p>
            <h4>
              <del className="text-danger">$59.00</del>{" "}
              <span className="text-success">$39.00</span>
            </h4>
            <motion.div whileHover={{ scale: 1.05 }} className="mt-3">
              <Link to="/BusBookingServices">
                <button className="btn btn-success btn-lg rounded-pill">
                  Check It
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

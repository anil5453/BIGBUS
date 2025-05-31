import React from "react";
import { Link } from "react-router-dom";
import Timely from "../pics/people-at-bus.jpg"
import summer from "../pics/OV6UCV0-summer.jpg"
import safety from "../pics/8794567-blue.jpg"

const about = () => {
  return (
    <div className="container">
      {/* Carousel Section */}
      <div className="row mb-5">
        <div className="col-md-12 ">
          <div id="busCarousel" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner rounded-5 overflow-hidden">
              <div className="carousel-item active">
                <img
                  src={Timely}
                  className="d-block w-100 img-fluid"
                  style={{ height: "500px", objectFit: "cover" }}
                  alt="Timely"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="text-white">Timely Buses</h1>
                  <p>Always on time, every time.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={summer}
                  className="d-block w-100 img-fluid"
                  style={{ height: "500px" }}
                  alt="Summer Offers"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="text-white m-5">Summer Bonanza</h1>
                  <p>Exciting deals for your summer trips!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={safety}
                  className="d-block w-100 img-fluid"
                  style={{ height: "500px",  }}
                  alt="Safety"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="text-white">Safety First</h1>
                  <p>Your journey, our responsibility.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#busCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#busCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Help & Support</h5>
              <p className="card-text">
                Need assistance? Our team is here to help with bookings, cancellations, and inquiries.
              </p>
              <Link to="/BusbookingServices" className="btn btn-outline-primary">
                Get Help
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">24hr Contact Us</h5>
              <p className="card-text">
                Reach out to us anytime via phone or email. We're available 24/7 for your convenience.
              </p>
              <a href="tel:+919390979128" className="btn btn-outline-success">
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Book Your Bus</h5>
              <p className="card-text">
                Explore multiple routes and book your preferred seats instantly.
              </p>
              <Link to="/Serv" className="btn btn-outline-danger">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

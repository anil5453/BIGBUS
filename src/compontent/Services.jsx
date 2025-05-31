import React from 'react';
import { Link } from 'react-router-dom';
import GovernmentBuses from '../compontent/GovernmentBuses';

// ✅ Import images from the "../pics" folder
import img1 from '../pics/13252.jpg';
import img2 from '../pics/7827298.jpg';
import img3 from '../pics/bus3.jpg';
import img4 from '../pics/bus-shed.jpg';

const Services = () => {
  const buses = [
    {
      title: 'RED BUSS',
      img: img1,
      discount: '20% off',
      link: 'https://www.redbus.in/',
    },
    {
      title: 'GO BUS',
      img: img2,
    },
    {
      title: 'YATRA BUS',
      img: img1,
    },
    {
      title: 'UBER BUS',
      img: img2,
    },
    {
      title: 'DELUXE BUSES',
      img: img3,
    },
    {
      title: 'AC BUSES',
      img: img2,
    },
    {
      title: 'TGRTC BUSES',
      img: img4,
    },
    {
      title: 'BUS 3',
      img: img3,
    },
  ];

  return (
    <div className="container my-5 ">
      <div className="d-flex gap-5 ms-auto">
        <GovernmentBuses />
      </div>
      <h2 className="text-center mb-4 text-danger">Our Bus Services</h2>
      <div className="row g-4">
        {buses.map((bus, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card h-100 shadow-sm hover-shadow text-center">
              {bus.link ? (
                <a href={bus.link} target="_blank" rel="noreferrer">
                  <img src={bus.img} className="card-img-top" alt={bus.title} />
                </a>
              ) : (
                <img src={bus.img} className="card-img-top" alt={bus.title} />
              )}
              <div className="card-body">
                <h5 className="card-title">{bus.title}</h5>
                <p className="card-text">Prices start from $1200 - $2500.</p>
                
                  <Link to="/NavBar" className="btn btn-success w-100">
                    BOOK TICKET
                  </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

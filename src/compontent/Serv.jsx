import React from 'react';
import { Link } from 'react-router-dom';
import GovernmentBuses from '../compontent/GovernmentBuses';
 // Add custom styles here if needed

const Serv = () => {
  const buses = [
    {
      title: 'RED BUSS',
      img: './pics/13252.jpg',
      discount: '20% off',
      link: 'https://www.redbus.in/',
    },
    {
      title: 'GO BUS',
      img: './pics/7827298.jpg',
    },
    {
      title: 'YATRA BUS',
      img: './pics/13252.jpg',
    },
    {
      title: 'UBER BUS',
      img: './pics/7827298.jpg',
    },
    {
      title: 'DELUXE BUSES',
      img: './pics/bus3.jpg',
    },
    {
      title: 'AC BUSES',
      img: './pics/7827298.jpg',
    },
    {
      title: 'TGRTC BUSES',
      img: './pics/bus-shed.jpg',
    },
    {
      title: 'BUS 3',
      img: './pics/bus3.jpg',
    },
  ];

  return (
    <div className="container my-5 bg-black">
        <div className='d-flex gap-5 ms-auto'>
        <GovernmentBuses/>
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
              <div className="card-body ">
                <h5 className="card-title">{bus.title}</h5>
                <p className="card-text ">Prices start from $1200 - $2500.</p>
               
                {bus.link ? (
                  <Link to="/Booking" className="btn btn-success w-100">
                    BOOK TICKET
                  </Link>
                ) : (
                  <Link to="/NavBar" className="btn btn-success w-100">
                    BOOK TICKET
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serv;

import React from 'react';




const BusBookingServices = () => {
  return (
    <div className="bus-container">
      <h2 className="section-title"><u className="bi-headset fs-1 fw-bold">Help-line Services</u></h2>

      

      <div className="contact-form">
        <h3>Contact Us 24/7</h3>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="number" placeholder="Your Phone number" />
          <textarea placeholder="write here" rows="4"></textarea>

          <select
          name="priority"
         
          
          className="w-full border p-2 rounded-5 bg-info"
        >
          <option>Low</option>
          <option className='bg-secondary'>Medium</option>
          <option className='bg-danger'>High</option>
        </select>
          <button type="submit" className="btn btn-primary">Raise ticket</button>
        </form>
      </div>
    </div>
  );
};

export default BusBookingServices;

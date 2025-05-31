import React from 'react'
import booking from "../pics/People waiting for bus at bus stop.jpg"

const Booking = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div class="col-6">
                <img src={booking}alt="" class="img-fluid " />
                
            </div>
            <div className="col-6">
                 <h5 class="mt-5 pt-5">YOUR BOOKING FROM</h5> <h1>HYDERABAD TO MAHABUBNAGAR DONE</h1>
                <p>happy journer</p>
                
                <button onClick={() => window.print()}>PRINT TICKET</button>
                </div>
                
                <hr />

                
        </div>
      </div>
  










</div>












)
}
export default Booking

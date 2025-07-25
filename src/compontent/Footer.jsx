import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer  className='bg-dark footer position-static ' style={{height:"56px"}}>
  <p className= " text-white  mt-5 mb-5ms-auto align-content-center justify-content-center d-flex  "> &copy; {new Date().getFullYear()} BIGBUSS Company. All rights reserved. </p>
 
</footer>
    </div>
  )
}

export default Footer

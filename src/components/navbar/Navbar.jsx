import React from 'react'
import './Navbar.css'
import vectorImg from '../../assests/Vector.png'
import igStudioImg from '../../assests/Igstudio.png'

const Navbar = () => {
  return (
    <nav className='d-flex justify-content-between align-items-centre mt-5 header'>
        <div className='logo'>
            <img src={vectorImg} alt=''/>
             <img src={igStudioImg} alt=''/>
       </div>
        <div className='d-flex justify-content-evenly' style={{width:'50%'}}>
            <div>Home</div>
            <div>Attorneys</div>
            <div>Practice Areas</div>
            <div>About Us</div>
        </div>
        <div ><button type="button" className="btn btn-outline-light Contactbtn">Contact Now</button></div>
    </nav>
  )
}

export default Navbar

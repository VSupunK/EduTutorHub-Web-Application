import React from 'react'
import LogoImg from '../assets/EduTutor Hub.png';
import ProfileImg from '../assets/ProfileIMG.png';

const NavBar = () => {
  return (
    <div className='nav-container flex justify-between items-center p-5'>
      <div className="logo">
        <img className="h-[70px]" src={LogoImg} alt="Logo" />
      </div>
      <div className="navItems">
        <ul className='flex gap-5 text-xl text-white flex-wrap'>
          <li className="nav-item active">
          <a href="#">Home</a></li>
          <li className='nav-item'>Tutorials</li>
          <li className='nav-item'>e-Library</li>
          <li className='nav-item'>Enrollment</li>
          <li className='nav-item'>Events</li>
          <li className='nav-item'>About Us</li>
          <li className='nav-item'>Login</li>
        </ul>

        {/* <button className='nav-btn'>Home</button>
        <button className='nav-btn'>Tutorials</button>
        <button className='nav-btn'>e-Library</button>
        <button className='nav-btn'>Enrollment</button>
        <button className='nav-btn'>Events</button>
        <button className='nav-btn'>About Us</button>
        <button className='nav-btn'>Login</button> */}
      </div>

      <div className="searchBar">
        <input type="search" placeholder='Search'/>
      </div>

      <div className="profile">
        <img src={ProfileImg} alt="" />
      </div>
    </div>
  )
}

export default NavBar;
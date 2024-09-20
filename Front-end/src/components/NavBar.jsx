import React from 'react'
import LogoImg from '../assets/EduTutor Hub.png';
import ProfileImg from '../assets/ProfileIMG.png';

const NavBar = () => {
  return (
    <div className='nav-container flex bg-slate-300 justify-between items-center p-5'>
      <div className="logo">
        <img className="h-[70px]" src={LogoImg} alt="Logo" />
      </div>
      <div className="navItems">
        <ul className='flex gap-5 text-xl'>
          <li>Home</li>
          <li>Tutorials</li>
          <li>e-Library</li>
          <li>Enrollment</li>
          <li>Events</li>
          <li>About Us</li>
          <li>Login</li>
        </ul>
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
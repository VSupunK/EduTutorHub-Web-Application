import React, { useState } from "react";
import LogoImg from "../assets/EduTutor Hub.png";
import ProfileImg from "../assets/ProfileIMG.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="nav-container fixed top-0 left-0 w-full z-50 flex justify-between items-center h-[80px] px-5 py-2 bg-gradient-to-r from-[#883d80e1] to-[#4415ca99]">
      <div className="logo">
        <img className="h-[50px]" src={LogoImg} alt="Logo" />
      </div>

      <div className="navItems">
        <ul className="flex gap-5 text-xl text-white flex-wrap">
          <li className="nav-item active">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/tutorials">Tutorials</Link>
          </li>
          <li className="nav-item">
            <Link to="/elibrary">e-Library</Link>
          </li>
          <li className="nav-item">
            <Link to="/enrollment">Enrollment</Link>
          </li>
          <li className="nav-item">
            <Link to="/events">Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>

      <div className="  ">
        <input
          type="search"
          placeholder="Search"
          className=" border-2
      bg-slate-50 bg-transparent outline-none text-white
      px-2 py-1 w-auto rounded-full disabled:opacity-75
      focus:bg-white focus:text-black focus:shadow-md
    "
        />
      </div>

      <div
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Profile Icon (Hover Target) */}
        <img
          src={ProfileImg}
          alt="Profile"
          className="h-10 rounded-full cursor-pointer"
        />

        {/* Dropdown Menu */}
        {isHovered && (
          <div className="absolute -right-1 -top-2.5 mt-2 w-56 rounded-lg shadow-lg bg-[#883D80] text-white p-4 z-10">
            <div className="flex items-top gap-2 mb-2">
              <div className="w-3/4">
                <div className="font-bold">Souly Amanda</div>
                <div className="text-sm">soulyamanda@gmail.com</div>
                <div className="text-xs">Enrolled as a student</div>
              </div>
              <div className="w-1/4"><img
                src={ProfileImg}
                alt="Profile"
                className="h-12 rounded-full"
              /></div>
              
            </div>
            <ul className="space-y-2">
              <li className="bg-[#6E3696] hover:bg-purple-700 rounded-lg px-2 py-1">
                Dashboard
              </li>
              <li className="hover:bg-purple-700 rounded-lg px-2 py-1">
                Profile
              </li>
              <li className="hover:bg-purple-700 rounded-lg px-2 py-1">
                Setting
              </li>
              <li className="hover:bg-purple-700 rounded-lg px-2 py-1">
                Help Center
              </li>
              <li className="hover:bg-purple-700 rounded-lg px-2 py-1">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

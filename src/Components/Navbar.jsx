import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="home" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <a>Motocycle</a>
              <ul className="p-2">
                <li>
                  <a>Honda</a>
                </li>
                <li>
                  <a>Yamaha</a>
                </li>
                <li>
                  <a>Suzuki</a>
                </li>
                <li>
                  <a>Kawasaki</a>
                </li>
                <li>
                  <a>BMW</a>
                </li>
                <li>
                  <a>Ducati</a>
                </li>
                <li>
                  <a>Harley - Davidson</a>
                </li>
                <li>
                  <a>KTM</a>
                </li>
                <li>
                  <a>Triumph</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="new" spy={true} smooth={true} duration={500}>
                New Bike
              </Link>
            </li>
            <li>
              <Link to="rent" spy={true} smooth={true} duration={500}>
                Rent
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">MotorRental</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <details>
              <summary>Motocycle</summary>
              <ul className="p-2">
                <li>
                  <a>Honda</a>
                </li>
                <li>
                  <a>Yamaha</a>
                </li>
                <li>
                  <a>Suzuki</a>
                </li>
                <li>
                  <a>Kawasaki</a>
                </li>
                <li>
                  <a>BMW</a>
                </li>
                <li>
                  <a>Ducati</a>
                </li>
                <li>
                  <a>Harley - Davidson</a>
                </li>
                <li>
                  <a>KTM</a>
                </li>
                <li>
                  <a>Triumph</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="new" spy={true} smooth={true} duration={500}>
              New Bike
            </Link>
          </li>
          <li>
            <Link to="rent" spy={true} smooth={true} duration={500}>
              Rent
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn">Login</button>
      
      </div>
    </div>
  );
}
export default Navbar;

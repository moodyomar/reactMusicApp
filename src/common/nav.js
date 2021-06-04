import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

function Nav(props) {

  let [showMobileNav, setShowMobileNav] = useState(false);

  const hideNavMobile = () => {
    setShowMobileNav(false);
  }

  return (
    <div className="container-fluid shadow nav_top">
      <div className="row align-items-center">
        <div className="logo col-lg-3 d-flex mt-2 justify-content-between align-items-center">
          <h2 className="text-white ">Moodify <i className="fa fa-headphones fs-1 " aria-hidden="true"></i>
          </h2>
          <div className="burger" onClick={() => {
            setShowMobileNav(!showMobileNav);
          }}>
            <i className="fa fa-bars fs-2 text-white" aria-hidden="true"></i>
        </div>
          </div>
        {/* style -> with condition */}
        <nav className="col-lg-9 text-end" style={{ display: showMobileNav && "block" }}>
          <Link to="/">Home</Link>
          <Link to="/songs">Songs</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default Nav
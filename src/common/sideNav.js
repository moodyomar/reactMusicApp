import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sideNav.css';

function SideNav(props) {
  return (
    <div className="sideNav">
      <ul className="navLinks">
        <li><Link to="/" className="hoverable">Home</Link></li>
        <li><Link to="/songs" className="hoverable">Songs</Link></li>
        <li><Link to="/about" className="hoverable">About</Link></li>
        <li><Link to="/contact" className="hoverable">Contact</Link></li>
      </ul>
      
      <div className="player">
        <div className="controls">
        <div className="play"><i className="fa fa-play fs-4 shadow hoverable" aria-hidden="true"></i>
</div>
        <div className="pause"><i className="fa fa-pause fs-4 shadow hoverable" aria-hidden="true"></i>
</div>
        <div className="stop"><i className="fa fa-stop fs-4 shadow hoverable" aria-hidden="true"></i>
</div>
        </div>
      </div>
    </div>
  )
}

export default SideNav
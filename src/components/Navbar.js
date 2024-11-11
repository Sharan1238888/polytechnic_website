import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/1672074078.jpg';
import '../styles/Department.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bglight">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={Logo} alt="React Logo" style={{ width: '350px', height: 'auto' }} className="navbar-logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item">


                        <div className="dropdown">
        <span className="nav-link">Departments ▼</span>
        <div className="dropdown-content">
          <Link to="/Civil">Department of Civil Engineering</Link>
          <Link to="/Ec">Department of Electronics and Communication Engineering</Link>
          <Link to="/Humanities">Department of Humanities</Link>
          <Link to="/Pharmacy">Department of Pharmacy</Link>
          <Link to="/Physical">Department of Physical Education</Link>
        </div>
      </div>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/students">Students</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/staff">Staff</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

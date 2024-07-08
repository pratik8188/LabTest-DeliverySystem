import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Delivery System</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/add">Add Delivery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/view">View Deliveries</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

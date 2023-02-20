import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#" ><img src={Logo} alt="Little Lemon logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse main-menu" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="booking">Reservations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="order">Order-Online</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="booking">Login</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </header >
  )
}

export default Header
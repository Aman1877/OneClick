import React from "react";
import "../styles/HeaderStyle.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo-oneclick">
            <img src="/images/logo.png" alt="OneClick" className="image-icon" />
            <span className="text-wrapper-1">One</span>
            <span className="text-wrapper-2">Click</span>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins-SemiBold, Helvetica",
                    fontSize: "18px",
                    fontWeight: 500,
                    letterSpacing: 0,
                    marginRight: "10px",
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins-SemiBold, Helvetica",
                    fontSize: "18px",
                    fontWeight: 500,
                    letterSpacing: 0,
                    marginRight: "10px",
                  }}
                >
                  Free Listing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins-SemiBold, Helvetica",
                    fontSize: "18px",
                    fontWeight: 500,
                    letterSpacing: 0,
                    marginRight: "10px",
                  }}
                >
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins-SemiBold, Helvetica",
                    fontSize: "18px",
                    fontWeight: 500,
                    letterSpacing: 0,
                    marginRight: "10px",
                  }}
                >
                  Contact US
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{
                    color: "#000000",
                    fontFamily: "Poppins-SemiBold, Helvetica",
                    fontSize: "18px",
                    fontWeight: 500,
                    letterSpacing: 0,
                  }}
                >
                  Login/Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import * as React from "react"
import '../components/styles/Header.css';
import flower from '../images/FH.svg';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-left">
          <div className="name">
            Emmanuel Ogunjirin
            <img src={flower} alt="Flower" />
          </div>
          <div className="subheader">
            <span className="normal-text">Currently </span>
            <span className="dot-container">
              <span className="dot big-dot"></span>
              <span className="dot small-dot"></span>
            </span>
            <span className="normal-text"> Designing AI recruiting tools at </span>
            <span className="highlight">
              HiPeople
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="#E5E73B"
                strokeWidth="1.1"
                className="arrow-icon"
                viewBox="0 0 16 16"
              >
                <path fillRule="evenodd" d="M11.3 8.3a.5.5 0 0 1 0 .7l-4 4a.5.5 0 0 1-.7-.7L9.5 8H1.5a.5.5 0 0 1 0-1h8L6.6 4.7a.5.5 0 1 1 .7-.7l4 4z" />
              </svg>
            </span>
            <br />
            <span className="normal-text">Past - </span>
            <span className="past-companies">Shopify,</span>
            <span className="past-companies">Gorillas,</span>
            <span className="past-companies">Personio</span>
          </div>
        </div>
        <div className="links">
          <a href="#" className="link">Email</a>
          <a href="#" className="link">LinkedIn</a>
          <a href="#" className="link">Read.Cv</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
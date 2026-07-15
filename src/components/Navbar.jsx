import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import logo from "../assets/logo/SAP_Logo_Exact.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">

      <div className="nav-container">

        <a
          href="#"
          className="logo-area"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="SAP Engineering Works"
          />

          <div>
            <h2>SAP Engineering Works</h2>

            <p>
              Industrial Engineering Solutions
            </p>
          </div>

        </a>

        <nav
          className={`nav-links ${
            menuOpen ? "mobile-open" : ""
          }`}
        >

          <a
            href="#about"
            className="nav-link"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#services"
            className="nav-link"
            onClick={closeMenu}
          >
            Services
          </a>

          <a
            href="#products"
            className="nav-link"
            onClick={closeMenu}
          >
            Products
          </a>

          <a
            href="#gallery"
            className="nav-link"
            onClick={closeMenu}
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="nav-link"
            onClick={closeMenu}
          >
            Contact
          </a>

          <a
  href="tel:+918919923633"
  className="btn btn-outline"
  onClick={closeMenu}
>
  <FaPhoneAlt />
  Call
</a>

<a
  href="https://wa.me/918919923633"
  target="_blank"
  rel="noreferrer"
  className="btn btn-primary"
  onClick={closeMenu}
>
  <FaWhatsapp />
  WhatsApp
</a>

        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </header>
  );
}
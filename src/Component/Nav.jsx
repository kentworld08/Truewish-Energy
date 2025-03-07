import React from "react";
import { useState, useEffect } from "react";
import "@/App.css";

import logo from "../assets/images/logo.png";
import { Link, useLocation, NavLink } from "react-router-dom";
import phone from "../assets/images/phone-icon.png";

function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isHome, setIsHome] = useState(location.pathname === "/");
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      setClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
      }, 300); // Match the animation duration
    } else {
      setIsOpen(true);
    }
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, 300); // Matches animation duration
  };

  useEffect(() => {
    setIsHome(location.pathname === "/"); // Update state when route changes

    if (location.pathname === "/") {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true); // Navbar takes full width
        } else {
          setScrolled(false); // Navbar stays centered
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(true); // On other pages, navbar is always full-width
    }
  }, [location]);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        isHome ? "home" : "other"
      }`}
    >
      <div className="container">
        <Link to="/">
          <img
            src={logo}
            style={{ width: "7.03em", height: "3.4375em" }}
            loading="lazy"
            alt="true-wish-energy-logo"
          />
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        {(isOpen || closing || isLargeScreen) && (
          <div className={`nav-links ${closing ? "closed" : "open"}`}>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `home-link ${isActive ? "active-page" : ""}`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="Poject"
              onClick={closeMenu}
              className={({ isActive }) =>
                `link ${isActive ? "active-page" : ""}`
              }
            >
              PROJECT
            </NavLink>
            <NavLink
              to="services"
              onClick={closeMenu}
              className={({ isActive }) =>
                `link ${isActive ? "active-page" : ""}`
              }
            >
              SERVICES
            </NavLink>
            <NavLink
              to="About"
              onClick={closeMenu}
              className={({ isActive }) =>
                `link ${isActive ? "active-page" : ""}`
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `link ${isActive ? "active-page" : ""}`
              }
            >
              CONTACT US
            </NavLink>
          </div>
        )}

        <span className="contact-number-container">
          <img src={phone} width="15.45px" height="15.42px" alt="phone-icon" />
          <span className="contact-number">
            +234 901 097 8618 | 080-264-02025
          </span>
        </span>
      </div>
    </nav>
  );
}

export default Nav;

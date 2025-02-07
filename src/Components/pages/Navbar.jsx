/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveLink } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/M.T.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const activeLink = useSelector((state) => state.activeLink);
  const location = useLocation(); // Hämta aktuell URL

  // useEffect för att synkronisera den aktiva länken baserat på URL
  useEffect(() => {
    const path = location.pathname.split("/")[1] || "home"; // Hämta den aktuella delen av URL
    dispatch(setActiveLink(path)); // Uppdatera den aktiva länken i Redux
  }, [location, dispatch]); // Den här effekten körs när location ändras

  const handleLinkClick = (link) => {
    dispatch(setActiveLink(link)); // Uppdaterar aktiv länk i Redux när länk klickas
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            onClick={() => handleLinkClick("home")}
            className={activeLink === "home" ? "active" : ""}
          >
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => handleLinkClick("about")}
            className={activeLink === "about" ? "active" : ""}
          >
            Om Mig
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => handleLinkClick("projects")}
            className={activeLink === "projects" ? "active" : ""}
          >
            Projekt
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => handleLinkClick("contact")}
            className={activeLink === "contact" ? "active" : ""}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
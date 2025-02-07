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

  // Innehållet i navbaren
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" /> {/* Min logotyp */}
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            onClick={() => handleLinkClick("home")} // 🔹 När länken klickas uppdateras Redux state så att "home" blir den aktiva länken.
            className={activeLink === "home" ? "active" : ""} // När man är på hem sidan är namnet i navbaren aktiv och är orange
          >
            Hem
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => handleLinkClick("about")} // När länken klickas uppdateras Redux state så att "about" blir den aktiva länken.
            className={activeLink === "about" ? "active" : ""} // När man är på om mig sidan är namnet i navbaren aktiv och är orange
          >
            Om Mig
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => handleLinkClick("projects")} // När länken klickas uppdateras Redux state så att "projects" blir den aktiva länken.
            className={activeLink === "projects" ? "active" : ""} // När man är på projekt sidan är namnet i navbaren aktiv och är orange
          >
            Projekt
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => handleLinkClick("contact")} // 🔹 När länken klickas uppdateras Redux state så att "contact" blir den aktiva länken.
            className={activeLink === "contact" ? "active" : ""} // När man är på kontakt sidan är namnet i navbaren aktiv och är orange
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

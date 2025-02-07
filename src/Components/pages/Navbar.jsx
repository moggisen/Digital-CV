/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActiveLink } from "../../redux/actions";
import Logo from "../../assets/M.T.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch(); // Skapar en dispatch funktion för att skicka actions till Redux store
  const activeLink = useSelector((state) => state.activeLink); // Hämtar den aktuella aktiva länken från Redux store

  // useEffekct-hook som körs en gång när komponenten renderas
  useEffect(() => {
    dispatch(setActiveLink("home")); // Sätter "home" som aktiv länk när sidan först laddas
  }, [dispatch]);

  // Uppdaterar aktiv länk i Redux när en länk i navbaren klickas
  const handleLinkClick = (link) => {
    dispatch(setActiveLink(link)); // Uppdaterar aktiv länk till den som klickades
  };
  //  Innehållet i navbaren
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick("home")} // När länken klickas uppdateras Redux state så att "home" blir den aktiva länken.
            className={activeLink === "home" ? "active" : ""} // Är man är på Home sidan är namnet i navbaren aktiv och är orange
          >
            Hem
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => handleLinkClick("about")} // När länken klickas uppdateras Redux state så att "about" blir den aktiva länken.
            className={activeLink === "about" ? "active" : ""} // Är man är på Om mig sidan är namnet i navbaren aktiv och är orange
          >
            Om Mig
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={() => handleLinkClick("projects")} // När länken klickas uppdateras Redux state så att "project" blir den aktiva länken.
            className={activeLink === "projects" ? "active" : ""} // Är man är på projekt sidan är namnet i navbaren aktiv och är orange
          >
            Projekt
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => handleLinkClick("contact")} // När länken klickas uppdateras Redux state så att "contact" blir den aktiva länken.
            className={activeLink === "contact" ? "active" : ""} // Är man är på Kontakt sidan är namnet i navbaren aktiv och är orange
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

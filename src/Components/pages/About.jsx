/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/About.css";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaNodeJs,
  FaCss3Alt,
} from "react-icons/fa"; // Importera ikoner
import Me from "../../assets/jag.jpeg"; // Bild på mig

const About = () => {
  // Använder useState för att hantera visibiliteten av popupen, vilket gör det enkelt att toggla mellan att visa och dölja färdigheter
  const [showPopup, setShowPopup] = useState(false); // Konrollerar om popupen om mina färdigheter är synlig

  // Visar eller döljer popupen med mina färdigheter (tooglePopup både visar och döljer popupen)
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="about page">
        <div className="about">
          {/* Sektion för textinformation */}
          <div className="about-content">
            <h2>Om Mig</h2>
            <p>
              Jag heter Mathilda och jag studerar just nu på KYH yrkesutbildning
              till Front-end utvecklare, och genom detta digitala cv söker jag
              LIA-plats, där jag kan visa upp mina färdigheter i en verklig
              arbersmiljö. Jag har erfarenhet av HTML, CSS, JacaScript samt
              React just nu, det jag har gillat mest så här långt i utbildningen
              är CSS och React. Jag ser fram emot att få utvecklas i en dynamisk
              miljö där jag kan bidra och samtidigt lära mig mer om branschen.
              Lek er runt på min sida och tveka inte och höra av er om jag är
              intresant för ert företag 🥳
            </p>

            {/* Knapp för att visa färdigheter */}
            <button className="show-skills-btn" onClick={togglePopup}>
              Mina Färdigheter
            </button>
          </div>

          {/* Sektion för bild */}
          <div className="about-image">
            <img src={Me} alt="Your name" />
          </div>

          {/* Popup Overlay */}
          {showPopup && (
            <div className="popup-overlay" onClick={togglePopup}></div>
          )}

          {/* Popup-fönster för färdigheter */}
          {showPopup && (
            <div className="popup active">
              <h3>Mina Färdigheter</h3>
              <div className="skills-icons">
                <div className="skill-item">
                  <FaReact size={50} color="#61DBFB" />
                  <p>React</p>
                </div>
                <div className="skill-item">
                  <FaJsSquare size={50} color="#F7DF1E" />
                  <p>JavaScript</p>
                </div>
                <div className="skill-item">
                  <FaHtml5 size={50} color="#E34F26" />
                  <p>HTML</p>
                </div>
                <div className="skill-item">
                  <FaNodeJs size={50} color="#68A063" />
                  <p>Node.js</p>
                </div>
                <div className="skill-item">
                  <FaCss3Alt size={50} color="#68A063" />
                  <p>CSS</p>
                </div>
              </div>
              <button onClick={togglePopup}>Stäng</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;

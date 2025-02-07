/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "../styles/Contact.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  // State för att hålla reda på formulärdata (name, email, message)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
// State för att hantera om formuläret har skickats eller inte
  const [submitted, setSubmitted] = useState(false);
  // State för att hantera synligheten av modal-fönstret (formuläret)
  const [modalVisible, setModalVisible] = useState(false);
  // Skapar en referens för namninputen för att sätta fokus på den när modalen öppnas
  const nameInputRef = useRef(null); 

  // Funktion för att uppdatera formulärdata när användaren skriver
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// Funktion som körs när formuläret skickas
  const handleSubmit = (e) => {
    e.preventDefault(); // Förhindrar att sidan laddas om
    // Om något fält är tomt, visa en varning
    if (!formData.name || !formData.email || !formData.message) {
      alert("Vänligen fyll i alla fält.");
      return;
    }
    console.log("Formulärdata:", formData); // Logga formulärdata i konsolen
    setSubmitted(true); // Sätt submited till true för att visa meddelandet
    setFormData({ name: "", email: "", message: "" }); // Töm formuläret 
    setTimeout(() => setSubmitted(false), 5000); // Återställ "submitted" efter 5 sekunder
  };

  return (
    <div className="contact-page">
      <div className="contact">
        <h2>Kontakta Mig</h2>
        <p>Du kan nå mig på följande sätt:</p>
        <div className="contact-info">
          <div className="email">
            <p>
              <strong>Email:</strong> mathilda.tidbeck@gmail.com
            </p>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/mathildatidbeck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/moggisen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/mathildatidbeck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
{/* Knapp för att visa kontaktformuläret */}
      <button
        className="show-form-button"
        onClick={() => {
          setModalVisible(true); // Gör modalen synlig 
          setTimeout(() => nameInputRef.current?.focus(), 100); // Sätt fokus på namninputen efter att modalen öppnats
        }}
      >
        Skicka ett meddelande
      </button>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-button"
              onClick={() => setModalVisible(false)} // Stänger modalen när användaren klickar på "x"
            >
              &times;
            </span>
            <h3>Skicka ett meddelande</h3>
            {submitted && (
              <p className="success-message">Ditt meddelande har skickats!</p>
            )}
            {/* Formulär för att skicka meddelande */}
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Namn</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Skriv ditt namn"
                  required
                  ref={nameInputRef} // Ref för fokus
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">E-post</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Skriv din e-post"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Meddelande</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Skriv ditt meddelande här..."
                  required
                ></textarea>
              </div>
              <button type="submit">Skicka</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

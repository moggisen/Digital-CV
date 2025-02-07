/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

// Project ett objekt med information om ett specifikt project
// toggleDetails en funktion som visar eller döljer detaljer
// activeProjekt håller reda på vilket projekt som är aktivt (visning av detaljer)
const ProjectCard = ({ project, toggleDetails, activeProject }) => {
  return (
    <div className="project-content">
      <div className="project-card">
        <img
          src={project.image} // Hämtar från arrayen i Project.jsx
          alt={project.title} // Hämtar från arrayen i Project.jsx
          className="project-image"
        />
        <h3>{project.title}</h3> {/* Hämtar från arrayen i Project.jsx */}
        <p>{project.description}</p> {/* Hämtar från arrayen i Project.jsx */}
        <button onClick={() => toggleDetails(project.id)}>
          {activeProject === project.id ? "Dölj detaljer" : "Läs mer"}{" "}
          {/* Om kortet är aktivt alltså mer detaljer ändras texten till dölj detaljer */}
        </button>
        {activeProject === project.id && (
          <div className="project-details">
            <p>{project.details}</p> {/* Hämtar från arrayen i Project.jsx */}
            <div className="links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                {" "}
                {/* Hämtar från arrayen i Project.jsx // _blank öppnar länken i en ny flik // rel="noopener noreferrer" förbättrar säkerheten vid nya flikar  */}
                GitHub Repo
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                {" "}
                {/* Hämtar från arrayen i Project.jsx // _blank öppnar länken i en ny flik // rel="noopener noreferrer" förbättrar säkerheten vid nya flikar  */}
                Live Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import Solaris from "../../assets/project.pic/14.png";
import Cosmic from "../../assets/project.pic/13.png";
import TimerWatch from "../../assets/project.pic/Timer.png";
import Dragon from "../../assets/project.pic/Dragon.png";

// Array med projekten
const projects = [
  {
    id: 1,
    title: "Dragon",
    description: "En sida jag gjorde baserat på en av mina favoritfilmer",
    details: "",
    image: Dragon,
    repo: "https://github.com/moggisen/Dragon.git",
    demo: "https://moggisen.github.io/Dragon/",
  },
  {
    id: 2,
    title: "Solaris",
    description: "Mitt examinationsprojekt för Javascript 1.",
    details:
      "Detta var min examinationsprojekt i JavaScript 1, där vi skulle göra en sida om solsystemet och hämta information om alla planeter med hjälp av API.",
    image: Solaris,
    repo: "https://github.com/moggisen/solaris",
    demo: "https://moggisen.github.io/solaris",
  },
  {
    id: 3,
    title: "Cosmic Café",
    description: "Övning från bootcamp, om ett rymdiskt café",
    details:
      "En sida som jag gjorde i vår första kurs HTML & CSS, detta var en bootcamp-övning från kursen.",
    image: Cosmic,
    repo: "https://github.com/moggisen/cosmic-cafe",
    demo: "https://moggisen.github.io/Cosmic-Cafe",
  },
  {
    id: 4,
    title: "Timer Watch",
    description: "Kort beskrivning av projekt 2.",
    details: "Detta är den detaljerade beskrivningen för projekt 2.",
    image: TimerWatch,
    repo: "https://github.com/moggisen/TimerWatch.git",
    demo: "https://moggisen.github.io/TimerWatch/",
  },
];

const Projects = () => {
  // Håller reda på vilket projekt är öppet för detaljer om något är öppet
  const [activeProject, setActiveProject] = useState(null);
  // Håller reda på hur många projekt som visas samtidigt
  const [visibleCount, setVisibleCount] = useState(3);

  // Funktion för att visa/dölja detlajer för ett specifikt projekt
  const toggleDetails = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  // Funktion för att ladda fler projekt (Ökar antalet med max 3 när du klickar på ladda fler)
  const loadMoreProjects = () => {
    setVisibleCount(visibleCount + 3);
  };
  // Funktion för att minska till färre projekt om man klickar på visa mindre (tar bort max 3 stycken)
  const showLessProjects = () => {
    setVisibleCount(visibleCount - 3);
  };

  return (
    <div className="projects-page">
      {" "}
      {/* Bakgrund här */}
      <div className="projects">
        <div className="project-cards">
          {projects.slice(0, visibleCount).map((project) => (
            <ProjectCard
              key={project.id} // Unik nyckel för varje projektkort
              project={project} // SKickar ner projektets data som prop
              toggleDetails={toggleDetails} // Skickar ner funktionen för att toggla detlajer
              activeProject={activeProject} // Skickar ner vilket projekt som är aktivit
            />
          ))}
        </div>
        {/* Knapp för att ladda fler projekt */}
        {visibleCount < projects.length && (
          <button className="load-more" onClick={loadMoreProjects}>
            Ladda mer
          </button>
        )}
        {/* Knapp för att visa färre projekt */}
        {visibleCount > 3 && (
          <button className="show-less" onClick={showLessProjects}>
            Visa mindre
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;

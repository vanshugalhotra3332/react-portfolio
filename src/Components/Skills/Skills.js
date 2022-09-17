import React from "react";
import Languages from "./Languages";
import FrontendBackend from "./Frontend_Backend";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>

      <div className="skills__container container grid">
        <FrontendBackend />
        <Languages />
      </div>
    </section>
  );
};

export default Skills;

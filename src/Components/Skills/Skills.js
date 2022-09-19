import React from "react";
import SkillCard from "./SkillCard";

import "./skills.css";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend & Backend",
      skills: [
        {
          name: "HTML",
          level: "Basic",
          icon: "bx bxl-html5",
        },
        {
          name: "CSS",
          level: "Intermediate",
          icon: "bx bxl-css3",
        },
        {
          name: "JavaScript",
          level: "Intermediate",
          icon: "bx bxl-javascript",
        },
        {
          name: "React",
          level: "Intermediate",
          icon: "bx bxl-react",
        },
        {
          name: "ExpressJs",
          level: "Intermediate",
        },
        {
          name: "NodeJs",
          level: "Intermediate",
          icon: "bx bxl-nodejs",
        },
        {
          name: "MongoDb",
          level: "Intermediate",
          icon: "bx bxl-mongodb",
        },
      ],
    },
    {
      title: "Languages & Tools",
      skills: [
        {
          name: "Python",
          level: "Intermediate",
          icon: "bx bxl-python",
        },
        {
          name: "C",
          level: "Intermediate",
        },
        {
          name: "C++",
          level: "Intermediate",
          icon: "bx bxl-c-plus-plus",
        },
        {
          name: "JavaScript",
          level: "Intermediate",
          icon: "bx bxl-javascript",
        },
        {
          name: "MySQL",
          level: "Intermediate",
        },
        {
          name: "Git",
          level: "Basic",
          icon: "bx bxl-git",
        },
        {
          name: "Github",
          level: "Basic",
          icon: "bx bxl-github",
        },
        {
          name: "VsCode",
          level: "Advance",
          icon: "bx bxl-visual-studio",
        },
      ],
    },
  ];

  const SkillCardElements = skillsData.map((eachCardData) => {
    return (
      <SkillCard
        key={eachCardData.title}
        title={eachCardData.title}
        skills={eachCardData.skills}
      />
    );
  });

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>

      <div className="skills__container container grid">
        {SkillCardElements}
      </div>
    </section>
  );
};

export default Skills;

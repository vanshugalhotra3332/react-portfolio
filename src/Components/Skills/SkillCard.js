import React from "react";
import Skill from "./Skill";

const Backend = (props) => {
  const skillElements = props.skills.map((skillData) => {
    return <Skill key={skillData.name} {...skillData} />;
  });

  return (
    <div className="skills__content">
      <h3 className="skills__title">{props.title}</h3>

      <div className="skills__box">
        <div className="skills__group">{skillElements}</div>
      </div>
    </div>
  );
};

export default Backend;

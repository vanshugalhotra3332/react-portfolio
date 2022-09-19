import React from "react";
import PropTypes from "prop-types";

const Skill = (props) => {
  const { name, level, icon } = props;
  return (
    <div className="skills__data">
      <i className={icon}></i>
      <div>
        <h3 className="skills__name">{name}</h3>
        <span className="skills__level">{level}</span>
      </div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Skill.defaultProps = {
  name: "Skill",
  level: "Level",
  icon: "bx bx-badge-check",
};

export default Skill;

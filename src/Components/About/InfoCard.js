import React from "react";
import PropTypes from "prop-types";

const InfoCard = (props) => {
  return (
    <div className="about__box">
      <i className={`${props.icon} about__icon`}></i>
      <h3 className="about__title">{props.title}</h3>
      <span className="about__subtitle">{props.subtitle}</span>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

InfoCard.defaultProps = {
  title: "",
  subtitle: "",
  icon: "bx bx-expand-horizontal",
};

export default InfoCard;

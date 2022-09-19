import React from "react";

const SocialElement = (props) => {
  return (
    <a
      href={props.url}
      className="home__social-icon"
      target="_blank"
      rel="noreferrer"
    >
      <i className={props.iconClass}></i>
    </a>
  );
};

export default SocialElement;

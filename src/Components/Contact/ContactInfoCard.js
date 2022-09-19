import React from "react";

const ContactInfoCard = (props) => {
  const { title, value, url, icon } = props;
  return (
    <div className="contact__card">
      <i className={`${icon} contact__card-icon`}></i>
      <h3 className="contact__card-title">{title}</h3>
      <span className="contact__card-data">{value}</span>
      <a href={url} className="contact__button">
        Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
      </a>
    </div>
  );
};

ContactInfoCard.defaultProps = {
  icon: "bx bx-comment-add",
  url: "#",
};

export default ContactInfoCard;

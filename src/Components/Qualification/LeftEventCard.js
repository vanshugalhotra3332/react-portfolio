import React from "react";

const LeftEventCard = (props) => {
  const { title, institution, timeline } = props;
  return (
    <div className="qualification__data">
      <div></div>
      <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
      </div>
      <div>
        <h3 className="qualification__title">{title}</h3>
        <span className="qualification__subtitle">{institution}</span>
        <div className="qualification__calender">
          <i className="uil uil-calendar-alt"></i> {timeline}
        </div>
      </div>
    </div>
  );
};

export default LeftEventCard;

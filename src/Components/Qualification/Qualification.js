import React, { useState } from "react";
import LeftEventCard from "./LeftEventCard";
import "./qualification.css";
import RightEventCard from "./RightEventCard";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState(1);
  const showTab = (tabNo) => {
    setActiveTab(tabNo);
  };

  const educationData = [
    {
      title: "BCA",
      institution: "Panjab University",
      timeline: "2021 - Present",
    },
    {
      title: "12th",
      institution: "Central Board of Secondary Education",
      timeline: "2019 - 2021",
    },
    {
      title: "10th",
      institution: "Central Board of Secondary Education",
      timeline: "2019",
    },
  ];
  const experienceData = [
    {
      title: "GUI Developer",
      institution: "Canada Projects",
      timeline: "2022 - Present",
    },
  ];

  const educationCardElements = educationData.map((eachData, index) => {
    return index % 2 !== 0 ? (
      <LeftEventCard key={eachData.title} {...eachData} />
    ) : (
      <RightEventCard key={eachData.title} {...eachData} />
    );
  });

  const experienceCardElements = experienceData.map((eachData, index) => {
    return index % 2 !== 0 ? (
      <LeftEventCard key={eachData.title} {...eachData} />
    ) : (
      <RightEventCard key={eachData.title} {...eachData} />
    );
  });

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              activeTab === 1
                ? "qualification__button qualification-active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              showTab(1);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              activeTab === 2
                ? "qualification__button qualification-active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              showTab(2);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              activeTab === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {educationCardElements}
          </div>

          <div
            className={
              activeTab === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {experienceCardElements}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import "./services.css";

const Services = () => {
  const [activeModal, setActiveModal] = useState(0);

  const showTab = (tabNo) => {
    setActiveModal(tabNo);
  };

  const servicesData = [
    {
      title: "Frontend Developer",
      description:
        "Developing responsive web pages HTML, CSS, JavaScript, React",
      serviceInfos: [
        "I develop the user interface.",
        "Responsive Web Pages",
        "Attractive",
        "Interactive",
      ],
      icon: "uil uil-web-grid",
    },
    {
      title: "Full Stack Developer",
      description:
        "Full Stack Development Creating APIs and using them in Frontend along with Database Connection",
      serviceInfos: [
        "I develop the user interface.",
        "Create REST APIs",
        "Handle Database Connection",
        "Authentication",
        "Secure Web Apps",
      ],
    },
    {
      title: "GUI Developer",
      description: "Develop Graphical User Interfaces using tkinter (Python)",
      serviceInfos: [
        "I develop the user interface.",
        "Interactive",
        "Database Connection",
        "With Variety of Themes",
      ],
      icon: "uil uil-edit",
    },
  ];

  const servicesCardElements = servicesData.map((eachServiceData, index) => {
    return (
      <ServiceCard
        key={index}
        activeModal={activeModal}
        showTab={showTab}
        {...eachServiceData}
        tabNo={index + 1}
      />
    );
  });

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i Offer</span>

      <div className="services__container container grid">
        {servicesCardElements}
      </div>
    </section>
  );
};

export default Services;

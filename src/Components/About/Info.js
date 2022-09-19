import React from "react";
import InfoCard from "./InfoCard";

const Info = () => {
  const InfoData = [
    {
      title: "Experience",
      subtitle: "2 Years Working",
      icon: "bx bx-award",
    },
    {
      title: "Completed",
      subtitle: "10+ Projects",
      icon: "bx bx-briefcase-alt",
    },
    {
      title: "Support",
      subtitle: "Online 24/7",
      icon: "bx bx-support",
    },
  ];

  const InfoElements = InfoData.map((eachCardData) => {
    return <InfoCard key={eachCardData.title} {...eachCardData} />;
  });

  return <div className="about__info grid">{InfoElements}</div>;
};

export default Info;

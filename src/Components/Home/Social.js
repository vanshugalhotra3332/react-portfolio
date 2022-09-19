import React from "react";
import SocialElement from "./SocialElement";

const Social = () => {
  const socialData = [
    {
      url: "https://www.instagram.com/vanshu_galhotra/",
      iconClass: "uil uil-instagram",
    },
    {
      url: "https://www.linkedin.com/in/vanshugalhotra3332/",
      iconClass: "uil uil-linkedin-alt",
    },
    {
      url: "https://github.com/vanshugalhotra3332",
      iconClass: "uil uil-github-alt",
    },
  ];

  const socialElements = socialData.map((eachIconData) => {
    return (
      <SocialElement
        key={eachIconData.url}
        url={eachIconData.url}
        iconClass={eachIconData.iconClass}
      />
    );
  });

  return <div className="home__social">{socialElements}</div>;
};

export default Social;

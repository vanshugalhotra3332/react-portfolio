import React from "react";
import Data from "./Data";
import "./home.css";
import Social from "./Social";
import ScrollDown from "./ScrollDown";

const Home = () => {
  const data = {
    name: "Vanshu",
    title: "MERN Stack Developer",
    description:
      "I'm a passionate, originally self-taught developer studying at D.A.V. College, Chandigarh (Panjab University).",
  };

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data {...data} />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

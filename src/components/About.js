import React from 'react';

import { useSelector } from "react-redux";

import AboutContainer from "../styles/components/About/AboutContainer";

import Plan from "./Plan";

const About = () => {
  const aboutInfo = useSelector((state) => state.data.info[0].about);

  return (
    <AboutContainer id="Get Started">
      <h2 className="about_title" tabIndex="0">
        {aboutInfo.title}
      </h2>
      <p className="about_paragraph" tabIndex="0">
        {aboutInfo.description.paragraph1}
      </p>
      <p className="about_paragraph" tabIndex="0">
        {aboutInfo.description.paragraph2}
      </p>
      <Plan />
    </AboutContainer>
  );
};

export default About;

import { useSelector } from "react-redux";

import AboutContainer from "../styles/components/About/AboutContainer";

import Plan from "./Plan";

const About = () => {
  const aboutInfo = useSelector((state) => state.data.info[0].about);

  return (
    <AboutContainer>
      <h2 className="about_title">{aboutInfo.title}</h2>
      <p className="about_paragraph">{aboutInfo.description.paragraph1}</p>
      <p className="about_paragraph">{aboutInfo.description.paragraph2}</p>
      <Plan />
    </AboutContainer>
  );
};

export default About;

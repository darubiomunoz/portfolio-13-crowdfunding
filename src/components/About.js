import AboutContainer from '../styles/components/About/AboutContainer';

import Plan from './Plan';

const About = () => {
  return (
    <AboutContainer>
      <h2 className="about_title">About this project</h2>
      <p className="about_paragraph">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="about_paragraph">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB stikcs
        to be stored under the stand.
      </p>
      <Plan />
    </AboutContainer>
  );
}

export default About;

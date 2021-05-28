import ProjectDescriptionContainer from "../styles/components/ProjectDescription/ProjectDescriptionContainer";

import mastercraftLogo from '../assets/logos/logo-mastercraft.svg';

const ProjectDescription = () => {
  return (
    <ProjectDescriptionContainer>
      <figure>
        <img src={mastercraftLogo} alt="Mastercraft logotype" />
      </figure>
      <article>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautiful handcrafted monitor stand to reduce neck and eye strain.</p>
      </article>
      <div>
        <button type="button">Back this project</button>
        <button type="button">
          <img src="" alt="" />
        </button>
      </div>
    </ProjectDescriptionContainer>
  );
};

export default ProjectDescription;

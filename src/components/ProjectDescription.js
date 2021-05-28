import ProjectDescriptionContainer from "../styles/components/ProjectDescription/ProjectDescriptionContainer";

import mastercraftLogo from '../assets/logos/logo-mastercraft.svg';
import bookmarkIcon from '../assets/icons/icon-bookmark.svg';

const ProjectDescription = () => {
  return (
    <ProjectDescriptionContainer id="About">
      <figure>
        <img src={mastercraftLogo} alt="Mastercraft logotype" />
      </figure>
      <article>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautiful handcrafted monitor stand to reduce neck and eye strain.</p>
      </article>
      <div>
        <button className="backthisproject" type="button">Back this project</button>
        <button className="bookmark" type="button">
          <img src={bookmarkIcon} alt="Bookmark icon. Press enter to bookmark the Mastercraft project" />
        </button>
      </div>
    </ProjectDescriptionContainer>
  );
};

export default ProjectDescription;

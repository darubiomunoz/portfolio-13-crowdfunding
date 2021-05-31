import { useSelector } from 'react-redux';

import ProjectDescriptionContainer from "../styles/components/ProjectDescription/ProjectDescriptionContainer";

import mastercraftLogo from '../assets/logos/logo-mastercraft.svg';
import bookmarkIcon from '../assets/icons/icon-bookmark.svg';

const ProjectDescription = () => {
  const projectDescriptionInfo = useSelector(state => state.data.info[0].projectDescription);

  return (
    <ProjectDescriptionContainer id="">
      <figure>
        <img src={mastercraftLogo} alt="Mastercraft logotype" />
      </figure>
      <article>
        <h1>{projectDescriptionInfo.name}</h1>
        <p>{projectDescriptionInfo.purpose}</p>
      </article>
      <div>
        <button className="backthisproject" type="button">{projectDescriptionInfo.buttons.funding}</button>
        <button className="bookmark" type="button">
          <img src={bookmarkIcon} alt="Bookmark icon. Press enter to bookmark the Mastercraft project" />
        </button>
      </div>
    </ProjectDescriptionContainer>
  );
};

export default ProjectDescription;

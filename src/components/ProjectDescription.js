import { useDispatch, useSelector } from 'react-redux';

import { openDefault } from '../features/modals/modalSlice';

import ProjectDescriptionContainer from "../styles/components/ProjectDescription/ProjectDescriptionContainer";

import mastercraftLogo from '../assets/logos/logo-mastercraft.svg';
import bookmarkIcon from '../assets/icons/icon-bookmark.svg';

const ProjectDescription = () => {
  const dispatch = useDispatch();
  const projectDescriptionInfo = useSelector(state => state.data.info[0].projectDescription);
  const defaultModal = useSelector(state => state.modals.default);

  const handleClick = () => {
    if (defaultModal === false) dispatch(openDefault());
  }; 

  return (
    <ProjectDescriptionContainer id="">
      <figure className="description_image-container">
        <img className="description_image" src={mastercraftLogo} alt="Mastercraft logotype" />
      </figure>
      <article className="description_info-container">
        <h1 className="description_title">{projectDescriptionInfo.name}</h1>
        <p className="description_text">{projectDescriptionInfo.purpose}</p>
      </article>
      <div className="description_button-container">
        <button className="button_backthisproject" type="button" onClick={handleClick}>{projectDescriptionInfo.buttons.funding}</button>
        <button className="button_bookmark" type="button">
          <img className="button_bookmark-icon" src={bookmarkIcon} alt="Bookmark icon. Press enter to bookmark the Mastercraft project" />
        </button>
      </div>
    </ProjectDescriptionContainer>
  );
};

export default ProjectDescription;

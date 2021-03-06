import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { openDefault } from '../features/modals/modalSlice';

import { ProjectDescriptionContainer, Text, BookmarkButton } from "../styles/components/ProjectDescription/ProjectDescriptionContainer";

import mastercraftLogo from '../assets/logos/logo-mastercraft.svg';
import bookmarkIcon from '../assets/icons/icon-bookmark.svg';
import bookmarkedIcon from '../assets/icons/icon-bookmarked.svg';

const ProjectDescription = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const dispatch = useDispatch();
  const projectDescriptionInfo = useSelector(state => state.data.info[0].projectDescription);
  const defaultModal = useSelector(state => state.modals.default);

  const handleClick = () => {
    if (defaultModal === false) dispatch(openDefault());
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  }

  const bookmark = isBookmarked ? bookmarkedIcon : bookmarkIcon;

  return (
    <ProjectDescriptionContainer id="About">
      <figure className="description_image-container">
        <img className="description_image" src={mastercraftLogo} tabIndex="0" alt="Mastercraft logotype" />
      </figure>
      <article className="description_info-container">
        <h1 className="description_title" tabIndex="0">{projectDescriptionInfo.name}</h1>
        <p className="description_text" tabIndex="0">{projectDescriptionInfo.purpose}</p>
      </article> 
      <div className="description_button-container">
        <button className="button_backthisproject" type="button" onClick={handleClick}>{projectDescriptionInfo.buttons.funding}</button>
        <BookmarkButton type="button" hover={isBookmarked} onClick={handleBookmarkClick} hover={isBookmarked}>
          <div className="button_bookmark-container">
            <img className="button_bookmark-icon" src={bookmark} alt="Bookmark icon. Press enter to bookmark the Mastercraft project" />
            <Text hover={isBookmarked}>Bookmarked</Text>
          </div>
        </BookmarkButton>
      </div>
    </ProjectDescriptionContainer>
  );
};

export default ProjectDescription;

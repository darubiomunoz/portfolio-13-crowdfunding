import React, { useState, useRef, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import ModalDefaultContainer from "../styles/components/ModalDefault/ModalDefaultContainer";

import closeIcon from "../assets/icons/icon-close-modal.svg";
import closeIconBlack from "../assets/icons/icon-close-modal-black.svg";

import { closeDefault } from "../features/modals/modalSlice";

import Pledge from "./Pledge";

const ModalDefault = () => {
  const [ hover, setHover ] = useState(false);
  const [ focus, setFocus] = useState(false);

  const modalStart = useRef(null);

  const dispatch = useDispatch();
  const defaultInfo = useSelector((state) => state.data.info[0].modals.default);
  const defaultStatus = useSelector((state) => state.modals.default);

  useEffect(() => {
    if (defaultStatus) modalStart.current.focus();
  }, [defaultStatus]);

  const handleClosingClick = () => {
    if (defaultStatus) dispatch(closeDefault());
  };

  const handleHoverIn = () => {
    setHover(true);
  }

  const handleHoverOut = () => {
    setHover(false);
  }

  const handleOnFocus = () => {
    setFocus(true);
  };

  const handleOnBlur = () => {
    setFocus(false);
  };

  const handleKeyPress = (event) => {
    if (event.charCode === 13) dispatch(closeDefault());
  }

  return (
    <ModalDefaultContainer>
      <main className="modaldefault">
        <div className="modaldefault_header">
          <h3 className="default_title" tabIndex="0" ref={modalStart}>
            {defaultInfo.title}
          </h3>
          <figure className="modaldefault_container-image">
            <img
              className="modaldefault_image"
              src={focus || hover ? closeIconBlack : closeIcon}
              alt="Press enter to close the modal"
              onClick={handleClosingClick}
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoverOut}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              onKeyPress={handleKeyPress}
              tabIndex="0"
            />
          </figure>
        </div>
        <p className="default_subtitle" tabIndex="0">
          {defaultInfo.subtitle}
        </p>
        <Pledge />
      </main>
    </ModalDefaultContainer>
  ); 
};

export default ModalDefault;

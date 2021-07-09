import React from "react";

import { useSelector, useDispatch } from "react-redux";

import ModalDefaultContainer from "../styles/components/ModalDefault/ModalDefaultContainer";

import closeIcon from "../assets/icons/icon-close-modal.svg";

import { closeDefault } from "../features/modals/modalSlice";

import Pledge from "./Pledge";

const ModalDefault = () => {
  const dispatch = useDispatch();
  const defaultInfo = useSelector((state) => state.data.info[0].modals.default);
  const defaultStatus = useSelector((state) => state.modals.default);

  const handleClosingClick = () => {
    if (defaultStatus) dispatch(closeDefault());
  };

  return (
    <ModalDefaultContainer>
      <main className="modaldefault">
        <div className="modaldefault_header">
          <h3 className="default_title">{defaultInfo.title}</h3>
          <figure className="modaldefault_container-image">
            <img
              className="modaldefault_image"
              src={closeIcon}
              alt="Press enter to close the modal"
              onClick={handleClosingClick}
            />
          </figure>
        </div>
        <p className="default_subtitle">{defaultInfo.subtitle}</p>
        <Pledge />
      </main>
    </ModalDefaultContainer>
  );
};

export default ModalDefault;

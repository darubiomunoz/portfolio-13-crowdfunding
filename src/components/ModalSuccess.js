import React from "react";

import { useSelector, useDispatch } from "react-redux";

import ModalSuccessContainer from "../styles/components/ModalSuccess/ModalSuccessContainer";

import successLogo from "../assets/icons/icon-check.svg";

import { closeSuccess } from "../features/modals/modalSlice";

const ModalSuccess = () => {
  const modalSuccessInfo = useSelector(
    (state) => state.data.info[0].modals.successful
  );
  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(closeSuccess());
  };

  return (
    <ModalSuccessContainer>
      <div className="modalsuccess_body">
        <figure className="modalsuccess_image-container">
          <img
            className="modalsuccess_image"
            src={successLogo}
            alt="Checked Icon. Successfull donation made."
            tabIndex="0"
          />
        </figure> 
        <h3 className="modalsuccess_title" tabIndex="0">{modalSuccessInfo.title}</h3>
        <p className="modalsuccess_description" tabIndex="0">
          {modalSuccessInfo.description}
        </p>
        <button
          className="modalsuccess_button"
          type="button"
          onClick={handleClickClose}
        >
          {modalSuccessInfo.button}
        </button>
      </div>
    </ModalSuccessContainer>
  );
};

export default ModalSuccess;

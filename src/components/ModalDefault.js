import { useSelector, useDispatch } from 'react-redux';

import ModalDefaultContainer from '../styles/components/ModalDefault/ModalDefaultContainer';

import closeIcon from '../assets/icons/icon-close-modal.svg';

import { closeDefault } from '../features/modals/modalSlice';

const ModalDefault = () => {
  const dispatch = useDispatch();
  const defaultInfo = useSelector(state => state.data.info[0].modals.default);
  const defaultStatus = useSelector(state => state.modals.default);

  const handleClosingClick = () => {
    if (defaultStatus === true) dispatch(closeDefault());
  }

  return (
    <ModalDefaultContainer>
      <main>
        <div>
          <h1 className="default_title">{defaultInfo.title}</h1>
          <figure>
            <img src={closeIcon} alt="Press enter to close the modal" onClick={handleClosingClick} />
          </figure>
        </div>
        <p className="default_subtitle">{defaultInfo.subtitle}</p>
      </main>
    </ModalDefaultContainer>
  );
};

export default ModalDefault;
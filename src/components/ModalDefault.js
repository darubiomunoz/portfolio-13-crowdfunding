import { useSelector } from 'react-redux';

import ModalDefaultContainer from '../styles/components/ModalDefault/ModalDefaultContainer';

import closeIcon from '../assets/icons/icon-close-modal.svg';

const ModalDefault = () => {
  const defaultInfo = useSelector(state => state.data.info[0].modals.default);

  return (
    <ModalDefaultContainer>
      <main>
        <div>
          <h1>{defaultInfo.title}</h1>
          <figure>
            <img src={closeIcon} alt="Press enter to close the modal" />
          </figure>
        </div>
        <p>{defaultInfo.subtitle}</p>
      </main>
    </ModalDefaultContainer>
  );
};

export default ModalDefault;
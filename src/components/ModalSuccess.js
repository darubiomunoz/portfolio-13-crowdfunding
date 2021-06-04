import { useSelector } from 'react-redux';

import ModalSuccessContainer from '../styles/components/ModalSuccess/ModalSuccessContainer';

import successLogo from '../assets/icons/icon-check.svg';

const ModalSuccess = () => {
  const modalSuccessInfo = useSelector(state => state.data.info[0].modals.successful);
  console.log(modalSuccessInfo);

  return (
    <ModalSuccessContainer>
      <div className="modalsuccess_body">
        <figure className="modalsuccess_image-container">
          <img className="modalsuccess_image" src={successLogo} alt="Checked Icon" />
        </figure>
        <h3 className="modalsuccess_title">{modalSuccessInfo.title}</h3>
        <p className="modalsuccess_description">{modalSuccessInfo.description}</p>
        <button className="modalsuccess_button" type="button">{modalSuccessInfo.button}</button>
      </div>
    </ModalSuccessContainer>
  );
}

export default ModalSuccess;
import ModalSuccessContainer from '../styles/components/ModalSuccess/ModalSuccessContainer';

const ModalSuccess = () => {
  return (
    <ModalSuccessContainer>
      <div className="modalsuccess_body">
        <figure className="modalsuccess_image-container">
          <img className="modalsuccess_image" src="" alt="" />
        </figure>
        <h3 className="modalsuccess_title"></h3>
        <p className="modalsuccess_description"></p>
        <button className="modalsuccess_button" type="button"></button>
      </div>
    </ModalSuccessContainer>
  );
}

export default ModalSuccess;
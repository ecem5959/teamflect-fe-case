import ReactDOM from 'react-dom';
import Close from '../Icons/Close';
import Back from '../Icons/Back';
import Button from '../Button/Button';
import useModalAnimation from '../../hooks/useModalAnimation';
import './modal.scss';

const Modal = ({ isOpen, closeModal, modalContent, buttonAction }) => {
  const isVisible = useModalAnimation(isOpen);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className={`modalOverlay ${isOpen ? 'show' : ''}`}>
      <div className="modalContainer">
        <div className="modalHeader">
          <div className="modalHeaderLeft">
            <button className="modalBack" onClick={closeModal}>
              <Back />
            </button>
            <div className="modalTitle">{modalContent?.title}</div>
          </div>
          <button className="modalClose" onClick={closeModal}>
            <Close />
          </button>
        </div>
        <div className="modalContent">{modalContent?.children}</div>
        <div className="modalFooter">
          <Button
            text={modalContent?.buttonText}
            onClick={() => buttonAction()}
          />
        </div>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default Modal;

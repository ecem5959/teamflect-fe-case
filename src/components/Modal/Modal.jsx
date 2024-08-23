import ReactDOM from 'react-dom';
import Close from '../Icons/Close';
import Back from '../Icons/Back';
import Button from '../Button/Button';
import useModalAnimation from '../../hooks/useModalAnimation';
import './modal.scss';

const Modal = ({ isOpen, onClose, children, title, buttonText }) => {
  const isVisible = useModalAnimation(isOpen);

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className={`modalOverlay ${isOpen ? 'show' : ''}`}>
      <div className="modalContainer">
        <div className="modalHeader">
          <div className="modalHeaderLeft">
            <button className="modalBack" onClick={onClose}>
              <Back />
            </button>
            <div className="modalTitle">{title}</div>
          </div>
          <button className="modalClose" onClick={onClose}>
            <Close />
          </button>
        </div>
        <div className="modalContent">{children}</div>
        <div className="modalFooter">
          <Button text={buttonText} />
        </div>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default Modal;

import { useState, useEffect } from 'react';

const useModalAnimation = (isOpen) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      setIsVisible(true);
      timeoutId = setTimeout(() => {
        const modalElement = document.querySelector('.modalContainer');
        if (modalElement) {
          modalElement.classList.add('open');
        }
      }, 10);
    } else {
      const modalElement = document.querySelector('.modalContainer');
      if (modalElement) {
        modalElement.classList.remove('open');
      }
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  return isVisible;
};

export default useModalAnimation;

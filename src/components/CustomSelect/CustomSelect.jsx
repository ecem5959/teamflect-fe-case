import { useRef, useState } from 'react';
import Arrow from '../Icons/Arrow';
import './customSelect.scss';
import useOutsideClick from '../../hooks/useOutsideClick';

const CustomSelect = ({
  label,
  options,
  showImage = false,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const optionListRef = useRef(null);

  useOutsideClick(optionListRef, () => setIsOpen(false));
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onChange(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="customSelectWrapper">
      <label className="customSelectLabel">{label}</label>
      <div className="select" onClick={toggleDropdown}>
        <div className="customSelectHeader">
          {selectedOption ? (
            <div className="selected">
              {showImage && selectedOption.img && (
                <img
                  src={selectedOption.img}
                  alt={selectedOption.displayName}
                  className="selectedImg"
                  width={24}
                  height={24}
                />
              )}
              <span>{selectedOption.displayName || selectedOption.title}</span>
            </div>
          ) : (
            <span className="selectPlaceholder">Select</span>
          )}
          <Arrow />
        </div>
        {isOpen && options.length === 0 && (
          <div className="optionList">
            <span className="noOptionText">No data</span>
          </div>
        )}
        {isOpen && (
          <ul className="optionList" ref={optionListRef}>
            {options.map((option) => (
              <li key={option.id}>
                <button
                  className="optionListItem"
                  onClick={() => handleSelect(option)}
                >
                  {showImage && option.img && (
                    <img
                      src={option.img}
                      alt={option.displayName}
                      className="optionImg"
                      width={24}
                      height={24}
                    />
                  )}
                  <span>{option.displayName || option.title}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;

import { useState } from 'react';
import Arrow from '../Icons/Arrow';
import './customSelect.scss';

const CustomSelect = ({ label, options, showImage = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (user) => {
    setSelectedOption(user);
    setIsOpen(false);
  };

  return (
    <div className="customSelectWrapper">
      <label className="customSelectLabel">{label}</label>
      <div
        className={`select ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        <div className="customSelectHeader">
          {selectedOption ? (
            <div className="selected">
              {showImage && selectedOption.avatar && (
                <img
                  src={selectedOption.avatar}
                  alt={selectedOption.name}
                  className="selectedImg"
                  width={24}
                  height={24}
                />
              )}
              <span>{selectedOption.name}</span>
            </div>
          ) : (
            <span className="selectPlaceholder">Select</span>
          )}
          <Arrow />
        </div>
        {isOpen && (
          <ul className="optionList">
            {options.map((option) => (
              <li
                key={option.id}
                className="optionListItem"
                onClick={() => handleSelect(option)}
              >
                {showImage && option.avatar && (
                  <img
                    src={option.avatar}
                    alt={option.name}
                    className="optionImg"
                    width={24}
                    height={24}
                  />
                )}
                <span>{option.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;

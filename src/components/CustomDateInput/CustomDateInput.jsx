import DatePicker from 'react-datepicker';
import Calendar from '../Icons/Calendar';
import 'react-datepicker/dist/react-datepicker.css';
import './customDateInput.scss';
import { useEffect, useState } from 'react';

const CustomDateInput = ({ label, onChange, value }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const formatDate = (date) => {
    if (!date) return '';
    return date
      .toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .replace(/ /g, ' ');
  };
  const formatDateV2 = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
      .replace(/,/g, '');
  };

  return (
    <div className="dateInputWrapper">
      <div className="dateInputContainer">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            const formattedDate = new Date(date).toISOString().slice(0, 10);
            setSelectedDate(date);
            onChange(formattedDate);
          }}
          dateFormat="d MMM yyyy"
          placeholderText={label}
          className="datePicker"
          value={value ? formatDateV2(value) : formatDate(selectedDate)}
        />
        <Calendar />
      </div>
    </div>
  );
};

export default CustomDateInput;

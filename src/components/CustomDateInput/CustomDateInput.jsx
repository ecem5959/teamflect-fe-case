import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Calendar from '../Icons/Calendar';
import 'react-datepicker/dist/react-datepicker.css';
import './customDateInput.scss';

const CustomDateInput = ({ label, onChange, value }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const formatDate = (date, options) => {
    if (!date) return '';
    return new Date(date)
      .toLocaleDateString('en-GB', options)
      .replace(/,/g, '')
      .replace(/ /g, ' ');
  };

  const handleDateChange = (date) => {
    const formattedDate = new Date(date).toISOString().slice(0, 10);
    setSelectedDate(date);
    onChange(formattedDate);
  };

  const displayDate = value
    ? formatDate(value, { day: '2-digit', month: 'short', year: 'numeric' })
    : formatDate(selectedDate, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });

  return (
    <div className="dateInputWrapper">
      <div className="dateInputContainer">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="d MMM yyyy"
          placeholderText={label}
          className="datePicker"
          value={displayDate}
        />
        <Calendar />
      </div>
    </div>
  );
};

export default CustomDateInput;

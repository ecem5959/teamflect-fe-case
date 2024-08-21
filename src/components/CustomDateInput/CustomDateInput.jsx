import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from "../Icons/Calendar";
import './customDateInput.scss';

const CustomDateInput = ({ label }) => {
    const [startDate, setStartDate] = useState(null);

    return (
        <div className="date-input-wrapper">
            <label htmlFor="start-date" className="date-label">{label}</label>
            <div className="date-input-container">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd.MM.yyyy"
                    placeholderText="Start date"
                    className="date-input"
                    value={startDate ? startDate.toLocaleDateString('en-GB') : ''}
                />
                <Calendar />
            </div>
        </div>
    );
};

export default CustomDateInput;
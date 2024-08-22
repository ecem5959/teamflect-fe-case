import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from "../Icons/Calendar";
import './customDateInput.scss';

const CustomDateInput = ({ label }) => {
    const [startDate, setStartDate] = useState(null);

    const formatDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }).replace(/ /g, ' ');
    };

    return (
        <div className="dateInputWrapper">
            <div className="dateInputContainer">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="d MMM yyyy"
                    placeholderText={label}
                    className="datePicker"
                    value={formatDate(startDate)}
                />
                <Calendar />
            </div>
        </div>
    );
};

export default CustomDateInput;
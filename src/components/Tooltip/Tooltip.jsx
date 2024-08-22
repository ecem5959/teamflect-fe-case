import { useState } from 'react';
import './tooltip.scss';

const Tooltip = ({ icon, onEdit, onDelete }) => {
    return (
        <div className="tooltipContainer">
            <button className="tooltipTrigger">{icon}</button>
            <div className="tooltipContent">
                <button className="tooltipOption" onClick={onEdit}>Edit</button>
                <button className="tooltipOption" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Tooltip;
import './goalListItem.scss';
import Organization from "../Icons/Organization";
import Line from "../Icons/Line";
import MoreAction from "../Icons/MoreAction";
import Tooltip from "../Tooltip/Tooltip";

const GoalListItem = () => {
    const handleEdit = () => {
        console.log('edit')
    };

    const handleDelete = () => {
        console.log('delete')
    };

    return <div className="listItem">
        <div className="listItemLeft">
            <Line />
            <Organization />
            <div className="listItemLeftContent">
                <img src="/mock-image.png" alt="image" width={24} height={24}/>
                <span>Improve Efficiency</span>
            </div>
        </div>
        <div className="listItemRight">
            <div className="date">Mar 20, 2023</div>
            <div className="progress">
                <span>0%</span>
                <div className="progressBar">
                    <div className="progressPercent" style={{width: '20%'}}></div>
                </div>
            </div>
            <div className="track">On track</div>
            <Tooltip icon={<MoreAction />} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    </div>
}

export default GoalListItem;
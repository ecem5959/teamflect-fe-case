import './goalListItem.scss';
import Organization from "../Icons/Organization";
import Line from "../Icons/Line";
import MoreAction from "../Icons/MoreAction";

const GoalListItem = () => {
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
            <MoreAction />
        </div>
    </div>
}

export default GoalListItem;
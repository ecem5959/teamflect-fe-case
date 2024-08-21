import Button from "../Button/Button";
import './goalList.scss';
import Tabs from "../Tabs/Tabs";
import GoalTreeItem from "../GoalTreeItem/GoalTreeItem";
import GoalListItem from "../GoalListItem/GoalListItem";

const GoalList = () => {
    return <div className="goalList">
        <div className="goalHeader">
            <h1>Goals</h1>
            <Button text="New Goal" />
        </div>
        <div className="goalContent">
            <Tabs />
            <GoalTreeItem />
            <GoalListItem />
        </div>
    </div>
};

export default GoalList;
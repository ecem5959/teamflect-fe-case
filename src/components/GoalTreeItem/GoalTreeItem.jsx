import Organization from '../Icons/Organization';
import MoreAction from '../Icons/MoreAction';
import './goalTreeItem.scss';

const GoalTreeItem = ({ data }) => {
  console.log('data', data);
  return (
    <>
      <div className="treeItemHeader">
        <div className="treeItemHeaderLeft">
          <Organization />
          <div className="title">GOAL</div>
        </div>
        <div className="treeItemHeaderRight">
          <div className="progress">0%</div>
          <MoreAction />
        </div>
      </div>
      <div className="treeItemContent">Improve Efficiency</div>
      <div className="treeItemBottom">
        <div className="date">Ends on Mar 20, 2023</div>
        <img src="/mock-image.png" alt="image" width={24} height={24} />
      </div>
    </>
  );
};

export default GoalTreeItem;

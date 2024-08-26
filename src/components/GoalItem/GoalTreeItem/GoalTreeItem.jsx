import Organization from '../../Icons/Organization';
import './goalTreeItem.scss';
import { useUserContext } from '../../../contexts/UserContext';
import { formatDate } from '../../../helpers/helper';

const GoalTreeItem = ({ data }) => {
  const { users } = useUserContext();

  const selectedUser = users.find((user) => user.id === data.ownerId);

  return (
    <>
      <div className="treeItemHeader">
        <div className="treeItemHeaderLeft">
          <Organization />
          <div className="title">GOAL</div>
        </div>
        <div className="treeItemHeaderRight">
          <div className="progress">{data?.progress || 0}%</div>
        </div>
      </div>
      <div className="treeItemContent">{data.title}</div>
      <div className="treeItemBottom">
        <div className="date">
          {data.endDate ? `Ends on ${formatDate(data.endDate)}` : ''}
        </div>
        <img
          src={selectedUser?.img}
          alt={selectedUser?.displayName}
          width={24}
          height={24}
        />
      </div>
    </>
  );
};

export default GoalTreeItem;

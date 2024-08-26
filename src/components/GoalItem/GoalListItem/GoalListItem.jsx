import './goalListItem.scss';
import Organization from '../../Icons/Organization';
import Line from '../../Icons/Line';
import { formatDate } from '../../../helpers/helper';
import { useUserContext } from '../../../contexts/UserContext';

const GoalListItem = ({ data }) => {
  const { users } = useUserContext();
  const selectedUser = users.find((user) => user.id === data.ownerId);

  return (
    <div className="listItem">
      <div className={`listItemLeft ${!data.childList ? 'hasChildren' : ''}`}>
        {data.childList && <Line />}
        <Organization />
        <div className="listItemLeftContent">
          <img
            src={selectedUser?.img}
            alt={selectedUser?.displayName}
            width={24}
            height={24}
          />
          <span>{data.title}</span>
        </div>
      </div>
      <div className="listItemRight">
        <div className="date">
          {data.endDate ? `${formatDate(data.endDate)}` : ''}
        </div>
        <div className="progress">
          <span>{data?.progress || 0}%</span>
          <div className="progressBar">
            <div
              className="progressPercent"
              style={{ width: `${data?.progress || 0}%` }}
            />
          </div>
        </div>
        <div className="track">On track</div>
      </div>
    </div>
  );
};

export default GoalListItem;

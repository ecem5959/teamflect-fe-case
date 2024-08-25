import './goalListItem.scss';
import Organization from '../../Icons/Organization';
import Line from '../../Icons/Line';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

const GoalListItem = ({ data }) => {
  const { users } = useContext(UserContext);
  const selectedUser = users.find((user) => user.id === data.ownerId);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  };

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
        <div className="date">{formatDate(data.endDate)}</div>
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

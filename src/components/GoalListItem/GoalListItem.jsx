import './goalListItem.scss';
import Organization from '../Icons/Organization';
import Line from '../Icons/Line';
import MoreAction from '../Icons/MoreAction';
import Tooltip from '../Tooltip/Tooltip';

const GoalListItem = ({ data }) => {
  const { title, endDate } = data;
  console.log(data);
  const handleEdit = () => {
    console.log('edit');
  };

  const handleDelete = () => {
    console.log('delete');
  };

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
          <img src="/mock-image.png" alt="image" width={24} height={24} />
          <span>{title}</span>
        </div>
      </div>
      <div className="listItemRight">
        <div className="date">{formatDate(endDate)}</div>
        <div className="progress">
          <span>0%</span>
          <div className="progressBar">
            <div className="progressPercent" style={{ width: '20%' }} />
          </div>
        </div>
        <div className="track">On track</div>
        <Tooltip
          icon={<MoreAction />}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default GoalListItem;

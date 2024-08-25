import './goalListItem.scss';
import Organization from '../Icons/Organization';
import Line from '../Icons/Line';
import MoreAction from '../Icons/MoreAction';
import Tooltip from '../Tooltip/Tooltip';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Modal from '../Modal/Modal';
import GoalForm from '../GoalForm/GoalForm';
import { deleteData, getData, putData } from '../../services/fetch';
import { useFormContext } from '../../contexts/FormContext';
import { GoalContext } from '../../contexts/GoalContext';

const GoalListItem = ({ data }) => {
  const { title, endDate } = data;
  const { users } = useContext(UserContext);
  const { setGoals } = useContext(GoalContext);
  const selectedUser = users.find((user) => user.id === data.ownerId);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { formData } = useFormContext();

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  };

  const updateFormData = () => {
    putData(`goals/${data.id}`, formData).then(() => {
      getData('goals')
        .then((resp) => {
          setGoals(resp);
          handleCloseModal();
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    });
  };

  return (
    <>
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
            <span>{title}</span>
          </div>
        </div>
        <div className="listItemRight">
          <div className="date">{formatDate(endDate)}</div>
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
          <Tooltip
            icon={<MoreAction />}
            id={data.id}
            editAction={() => setIsOpenModal(true)}
          />
        </div>
      </div>
      <Modal
        isOpen={isOpenModal}
        closeModal={handleCloseModal}
        modalContent={{
          title: 'Update goal',
          buttonText: 'Publish',
          children: <GoalForm />,
        }}
        buttonAction={updateFormData}
      />
    </>
  );
};

export default GoalListItem;

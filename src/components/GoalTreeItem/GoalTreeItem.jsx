import Organization from '../Icons/Organization';
import MoreAction from '../Icons/MoreAction';
import './goalTreeItem.scss';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Tooltip from '../Tooltip/Tooltip';
import GoalForm from '../GoalForm/GoalForm';
import Modal from '../Modal/Modal';
import { getData, putData } from '../../services/fetch';
import { useFormContext } from '../../contexts/FormContext';
import { GoalContext } from '../../contexts/GoalContext';

const GoalTreeItem = ({ data }) => {
  const { users } = useContext(UserContext);
  const { formData } = useFormContext();
  const { setGoals } = useContext(GoalContext);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const selectedUser = users.find((user) => user.id === data.ownerId);
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
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
      <div className="treeItemHeader">
        <div className="treeItemHeaderLeft">
          <Organization />
          <div className="title">GOAL</div>
        </div>
        <div className="treeItemHeaderRight">
          <div className="progress">{data?.progress || 0}%</div>
          <Tooltip
            icon={<MoreAction />}
            id={data.id}
            editAction={() => setIsOpenModal(true)}
          />
        </div>
      </div>
      <div className="treeItemContent">{data.title}</div>
      <div className="treeItemBottom">
        <div className="date">Ends on {formatDate(data.endDate)}</div>
        <img
          src={selectedUser?.img}
          alt={selectedUser?.displayName}
          width={24}
          height={24}
        />
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

export default GoalTreeItem;

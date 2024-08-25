import MoreAction from '../Icons/MoreAction';
import { useContext, useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import GoalForm from '../GoalForm/GoalForm';
import Modal from '../Modal/Modal';
import { getData, putData } from '../../services/fetch';
import { useFormContext } from '../../contexts/FormContext';
import { GoalContext } from '../../contexts/GoalContext';
import GoalListItem from './GoalListItem/GoalListItem';
import GoalTreeItem from './GoalTreeItem/GoalTreeItem';
import './goalItem.scss';

const GoalItem = ({ data, type }) => {
  const { formData } = useFormContext();
  const { setGoals } = useContext(GoalContext);

  const [isOpenModal, setIsOpenModal] = useState(false);

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

  const renderTooltip = () => {
    return (
      <Tooltip
        icon={<MoreAction />}
        id={data.id}
        editAction={() => setIsOpenModal(true)}
      />
    );
  };

  return (
    <>
      {type === 'list' ? (
        <div className="listItemContainer">
          <GoalListItem data={data} />
          {renderTooltip()}
        </div>
      ) : (
        <GoalTreeItem data={data} />
      )}
      {type === 'tree' && renderTooltip()}
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

export default GoalItem;

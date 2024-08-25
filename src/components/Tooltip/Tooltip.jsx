import './tooltip.scss';
import { deleteData, getData } from '../../services/fetch';
import { useContext } from 'react';
import { GoalContext } from '../../contexts/GoalContext';
import { useFormContext } from '../../contexts/FormContext';

const Tooltip = ({ icon, id, editAction }) => {
  const { goals, setGoals } = useContext(GoalContext);
  const { formData, setFormData } = useFormContext();

  const handleEdit = () => {
    const selectedGoal = goals.find((goal) => goal.id === id);
    setFormData({
      formData,
      ...selectedGoal,
    });
    editAction();
  };

  const handleDelete = () => {
    deleteData(`goals/${id}`).then(() => {
      getData('goals')
        .then((resp) => {
          setGoals(resp);
          console.log('silindi.');
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    });
  };

  return (
    <div className="tooltipContainer">
      <button className="tooltipTrigger">{icon}</button>
      <div className="tooltipContent">
        <button className="tooltipOption" onClick={handleEdit}>
          Edit
        </button>
        <button className="tooltipOption" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Tooltip;

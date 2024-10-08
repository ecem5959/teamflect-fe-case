import './formSelectionFields.scss';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomDateInput from '../CustomDateInput/CustomDateInput';
import { useUserContext } from '../../contexts/UserContext';
import { useGoalContext } from '../../contexts/GoalContext';
import { useFormContext } from '../../contexts/FormContext';

const FormSelectionFields = () => {
  const { formData, handleInputChange } = useFormContext();
  const { users } = useUserContext();
  const { goals } = useGoalContext();

  const parentGoals = goals.filter(
    (goal) => !goal.parentId && goal.id !== formData.id,
  );
  const selectedUser = users.find((user) => user.id === formData.ownerId);
  const selectedParent = parentGoals.find(
    (parentGoal) => parentGoal.id === formData.parentId,
  );

  return (
    <div className="selectionFields">
      <CustomSelect
        label="Goal owner"
        options={users}
        showImage
        onChange={(value) => handleInputChange('ownerId', value.id)}
        value={selectedUser}
      />
      <div className="dateField">
        <span>Timeline</span>
        <div className="container">
          <CustomDateInput
            label="Start date"
            onChange={(value) => handleInputChange('startDate', value)}
            value={formData.startDate}
          />
          <CustomDateInput
            label="End date"
            onChange={(value) => handleInputChange('endDate', value)}
            value={formData.endDate}
          />
        </div>
      </div>
      <CustomSelect
        label="Parent goal"
        options={parentGoals}
        onChange={(value) => handleInputChange('parentId', value.id)}
        value={selectedParent}
      />
    </div>
  );
};

export default FormSelectionFields;

import './formSelectionFields.scss';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomDateInput from '../CustomDateInput/CustomDateInput';
import { UserContext } from '../../contexts/UserContext';
import { useContext } from 'react';
import { GoalContext } from '../../contexts/GoalContext';
import { useFormContext } from '../../contexts/FormContext';

const progress = [
  { id: 11, displayName: '%30' },
  { id: 21, displayName: '%50' },
  { id: 31, displayName: '%70' },
];

const FormSelectionFields = () => {
  const { formData, handleInputChange } = useFormContext();
  const { users } = useContext(UserContext);
  const { goals } = useContext(GoalContext);

  const parentGoals = goals.filter((goal) => !goal.parentId);

  return (
    <div className="selectionFields">
      <CustomSelect
        label="Goal owner"
        options={users}
        showImage
        onChange={(value) => handleInputChange('ownerId', value.id)}
        value={formData.ownerId || ''}
      />
      <div className="dateField">
        <span>Timeline</span>
        <div className="container">
          <CustomDateInput
            label="Start date"
            onChange={(value) => handleInputChange('startDate', value)}
            value={formData.startDate || ''}
          />
          <CustomDateInput
            label="End date"
            onChange={(value) => handleInputChange('endDate', value)}
            value={formData.endDate || ''}
          />
        </div>
      </div>
      <CustomSelect
        label="Parent goal"
        options={parentGoals}
        onChange={(value) => handleInputChange('parentId', value.id)}
        value={formData.parentId || ''}
      />
      <CustomSelect label="Progress" options={progress} />
    </div>
  );
};

export default FormSelectionFields;

import './formInputFields.scss';
import Organization from '../Icons/Organization';
import CustomInput from '../CustomInput/CustomInput';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import { useFormContext } from '../../contexts/FormContext';

const FormInputFields = () => {
  const { formData, handleInputChange, errors } = useFormContext();

  return (
    <div className="inputFields">
      <div className="inputFieldsHeader">
        <Organization />
        <div className="inputFieldsTitle">ORGANIZATIONAL GOAL TITLE</div>
      </div>
      <div className="inputFieldsContainer">
        <CustomInput
          value={formData.title || ''}
          onChange={(value) => handleInputChange('title', value)}
          errors={errors}
        />
        <CustomTextArea
          value={formData.description || ''}
          onChange={(value) => handleInputChange('description', value)}
        />
      </div>
    </div>
  );
};

export default FormInputFields;

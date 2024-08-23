import './formInputFields.scss';
import Organization from '../Icons/Organization';
import CustomInput from '../CustomInput/CustomInput';
import CustomTextArea from '../CustomTextArea/CustomTextArea';

const FormInputFields = () => {
  return (
    <div className="inputFields">
      <div className="inputFieldsHeader">
        <Organization />
        <div className="inputFieldsTitle">ORGANIZATIONAL GOAL TITLE</div>
      </div>
      <div className="inputFieldsContainer">
        <CustomInput />
        <CustomTextArea />
      </div>
    </div>
  );
};

export default FormInputFields;

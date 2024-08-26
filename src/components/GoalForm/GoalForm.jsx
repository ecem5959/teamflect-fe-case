import FormInputFields from '../FormInputFields/FormInputFields';
import FormSelectionFields from '../FormSelectionFields/FormSelectionFields';
import './goalForm.scss';

const GoalForm = () => {
  return (
    <>
      <img
        src="/assets/modal-background.png"
        alt="background"
        className="formBackground"
      />
      <form>
        <FormInputFields />
        <FormSelectionFields />
      </form>
    </>
  );
};

export default GoalForm;

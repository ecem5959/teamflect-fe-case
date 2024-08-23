import './customInput.scss';

const CustomInput = () => {
  return (
    <div className="customInput">
      <input type="text" id="goal-title" placeholder="Add goal title" />
      <div className="underline"></div>
    </div>
  );
};

export default CustomInput;

import './customInput.scss';

const CustomInput = ({ onChange, value, errors }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <div className="customInput">
        <input
          type="text"
          id="goal-title"
          placeholder="Add goal title"
          value={value}
          onChange={handleChange}
        />
        <div className="underline" />
      </div>
      {errors.title && <span className="errorText">{errors.title}</span>}
    </>
  );
};

export default CustomInput;
